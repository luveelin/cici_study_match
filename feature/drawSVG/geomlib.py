#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
geomlib — 几何图片 -> SVG 转换的共享工具库

提供两部分能力：
  1) SVG 绘制原语（与 generate_grid.py 中手写 SVG 风格一致，便于复用）
  2) 图像几何检测（仅需 Pillow + numpy，无需 OpenCV）：
       - 二值化 (Otsu)
       - 霍夫直线检测 + 线段端点提取 + 合并
       - 网格(方格纸)检测：自动推断格点间距与原点
       - 线段求交(顶点检测)
       - 圆弧检测(角度标记)

所有检测都在二值掩码 (True=墨迹) 上进行，坐标使用图像像素坐标
(原点左上，x 向右，y 向下)。
"""

import math
from collections import defaultdict

import numpy as np


# ---------------------------------------------------------------------------
# 1) SVG 绘制原语
# ---------------------------------------------------------------------------

def f(v, n=1):
    """把数值格式化为保留 n 位小数的字符串。"""
    return f"{float(v):.{n}f}"


def svg_header(w, h, title=None, font="Segoe UI, Microsoft YaHei, sans-serif"):
    parts = [
        f'<svg xmlns="http://www.w3.org/2000/svg" width="{int(w)}" height="{int(h)}" '
        f'viewBox="0 0 {int(w)} {int(h)}" font-family="{font}">',
        f'<rect x="0" y="0" width="{int(w)}" height="{int(h)}" fill="#ffffff"/>',
    ]
    if title:
        parts.append(
            f'<text x="{int(w/2)}" y="22" fill="#374151" font-size="15" '
            f'text-anchor="middle" font-weight="600">{title}</text>'
        )
    return parts


def svg_grid_lines(xs, ys, color="#d8dee9", width=1):
    """根据一组竖直线 x 坐标和水平线 y 坐标画网格。"""
    parts = []
    for x in xs:
        parts.append(f'<line x1="{f(x)}" y1="{f(min(ys))}" x2="{f(x)}" y2="{f(max(ys))}" '
                     f'stroke="{color}" stroke-width="{width}"/>')
    for y in ys:
        parts.append(f'<line x1="{f(min(xs))}" y1="{f(y)}" x2="{f(max(xs))}" y2="{f(y)}" '
                     f'stroke="{color}" stroke-width="{width}"/>')
    return parts


def svg_line(a, b, color="#1f2937", width=2, dash=None):
    d = f' stroke-dasharray="{dash}"' if dash else ""
    return (f'<line x1="{f(a[0])}" y1="{f(a[1])}" x2="{f(b[0])}" y2="{f(b[1])}" '
            f'stroke="{color}" stroke-width="{width}" stroke-linecap="round"{d}/>')


def svg_polyline(pts, color="#1f2937", width=2, fill=None, fill_op=0.0, dash=None):
    pts_str = " ".join(f"{f(p[0])},{f(p[1])}" for p in pts)
    fill_attr = 'none' if fill is None else fill
    fo = f' fill-opacity="{fill_op}"' if fill is not None else ""
    d = f' stroke-dasharray="{dash}"' if dash else ""
    return (f'<polyline points="{pts_str}" fill="{fill_attr}"{fo} '
            f'stroke="{color}" stroke-width="{width}" stroke-linejoin="round"{d}/>')


def svg_polygon(pts, color="#1f2937", width=2, fill=None, fill_op=0.5):
    pts_str = " ".join(f"{f(p[0])},{f(p[1])}" for p in pts)
    fill_attr = 'none' if fill is None else fill
    fo = f' fill-opacity="{fill_op}"' if fill is not None else ""
    return (f'<polygon points="{pts_str}" fill="{fill_attr}"{fo} '
            f'stroke="{color}" stroke-width="{width}" stroke-linejoin="round"/>')


def svg_dot(p, r=4, color="#1f2937", stroke="#1f2937"):
    return (f'<circle cx="{f(p[0])}" cy="{f(p[1])}" r="{r}" fill="{color}" '
            f'stroke="{stroke}" stroke-width="1"/>')


def svg_label(p, text, color="#111827", size=13, dx=6, dy=-6, anchor="start",
              italic=False):
    style = ' font-style="italic"' if italic else ""
    return (f'<text x="{f(p[0]+dx)}" y="{f(p[1]+dy)}" fill="{color}" font-size="{size}"'
            f'{style} text-anchor="{anchor}">{text}</text>')


def svg_arc(cx, cy, r, phi0, phi1, color="#1f2937", width=2, y_up=True):
    """画一段圆弧。phi 以水平向右为 0，逆时针为正。
    y_up=True 时按数学坐标(y 向上)绘制；False 时按屏幕坐标(y 向下)。"""
    if y_up:
        y0 = cy - r * math.sin(math.radians(phi0))
        y1 = cy - r * math.sin(math.radians(phi1))
    else:
        y0 = cy + r * math.sin(math.radians(phi0))
        y1 = cy + r * math.sin(math.radians(phi1))
    x0 = cx + r * math.cos(math.radians(phi0))
    x1 = cx + r * math.cos(math.radians(phi1))
    # 选择短弧(sweep=0)；large-arc=0
    return (f'<path d="M {f(x0)} {f(y0)} A {f(r)} {f(r)} 0 0 0 {f(x1)} {f(y1)}" '
            f'fill="none" stroke="{color}" stroke-width="{width}"/>')


def svg_arc_label(cx, cy, r, phi0, phi1, text, color="#1f2937", size=13, y_up=True):
    mid = (phi0 + phi1) / 2
    if y_up:
        lx = cx + (r + 14) * math.cos(math.radians(mid))
        ly = cy - (r + 14) * math.sin(math.radians(mid))
    else:
        lx = cx + (r + 14) * math.cos(math.radians(mid))
        ly = cy + (r + 14) * math.sin(math.radians(mid))
    return (f'<text x="{f(lx)}" y="{f(ly)}" fill="{color}" font-size="{size}" '
            f'font-style="italic" text-anchor="middle">{text}</text>')


def right_angle_mark(p, d1, d2, color="#64748b", s=10):
    """在顶点 p 处画直角标记。d1,d2 为两条直角边方向向量(屏幕像素)。"""
    x, y = p[0], p[1]
    x1, y1 = x + d1[0], y + d1[1]
    x2, y2 = x + d1[0] + d2[0], y + d1[1] + d2[1]
    x3, y3 = x + d2[0], y + d2[1]
    return (f'<path d="M {f(x1)} {f(y1)} L {f(x2)} {f(y2)} L {f(x3)} {f(y3)}" '
            f'fill="none" stroke="{color}" stroke-width="1.2"/>')


# ---------------------------------------------------------------------------
# 2) 图像几何检测
# ---------------------------------------------------------------------------

def load_mask(path, invert=False, thr=None):
    """读取图片并返回二值掩码 (True=墨迹) 与灰度数组。"""
    from PIL import Image
    gray = np.asarray(Image.open(path).convert("L")).astype(np.float32)
    if thr is None:
        thr = otsu(gray)
    mask = gray < thr
    if invert:
        mask = ~mask
    return mask, gray


def erode(mask, k=1):
    """二值腐蚀(3x3 结构元，迭代 k 次)，用于细化粗线条、锐化霍夫峰值。"""
    m = mask.astype(np.uint8)
    for _ in range(k):
        # 邻域最小值(腐蚀)
        padded = np.pad(m, 1, mode="constant", constant_values=0)
        H, W = m.shape
        win = np.minimum(np.minimum(padded[0:H, 0:W], padded[0:H, 1:W+1]),
                         np.minimum(padded[1:H+1, 0:W], padded[1:H+1, 1:W+1]))
        m = (win == 1).astype(np.uint8)
    return m.astype(bool)


def dilate(mask, k=1):
    """二值膨胀(3x3 结构元，迭代 k 次)，用于弥合抗锯齿造成的断点。"""
    m = mask.astype(np.uint8)
    for _ in range(k):
        padded = np.pad(m, 1, mode="constant", constant_values=0)
        H, W = m.shape
        win = np.maximum(np.maximum(padded[0:H, 0:W], padded[0:H, 1:W+1]),
                         np.maximum(padded[1:H+1, 0:W], padded[1:H+1, 1:W+1]))
        m = (win >= 1).astype(np.uint8)
    return m.astype(bool)


def otsu(gray):
    """Otsu 自动阈值。"""
    hist = np.bincount(gray.astype(np.int32).ravel(), minlength=256).astype(np.float64)
    total = hist.sum()
    if total == 0:
        return 128.0
    sum_total = (np.arange(256) * hist).sum()
    sum_b = 0.0
    w_b = 0.0
    max_var = -1.0
    best = 128
    for t in range(1, 256):
        w_b += hist[t - 1]
        if w_b == 0:
            continue
        w_f = total - w_b
        if w_f == 0:
            break
        sum_b += (t - 1) * hist[t - 1]
        m_b = sum_b / w_b
        m_f = (sum_total - sum_b) / w_f
        var = w_b * w_f * (m_b - m_f) ** 2
        if var > max_var:
            max_var = var
            best = t
    return float(best)


def hough_line_peaks(mask, theta_step=0.5, rho_step=1.0, min_votes=None,
                     angle_tol=4.0, rho_tol=4.0, subsample=1):
    """霍夫直线检测，返回峰值列表 [(theta_rad, rho, votes), ...]。
    theta∈[0,2π) 的规范表示：每条直线唯一地表示为 (theta, rho>=0)。
    即若 rho<0 则 theta+=π、rho=-rho，避免同一直线在 θ 与 θ+π 重复出现。
    近垂直直线可能在 θ≈0 与 θ≈360 两侧各有一点投票，NMS 用"方向角
    (对 180° 取模)距离"判定是否同一直线。
    """
    ys, xs = np.where(mask)
    if subsample > 1:
        idx = np.arange(0, len(xs), subsample)
        xs, ys = xs[idx], ys[idx]
    pts = np.column_stack([xs.astype(np.float64), ys.astype(np.float64)])
    if len(pts) == 0:
        return []
    thetas_deg = np.arange(0, 360, theta_step)
    thetas = np.deg2rad(thetas_deg)
    half = int(round(180.0 / theta_step))  # θ 与 θ+π 之间索引差
    ct = np.cos(thetas)
    st = np.sin(thetas)

    acc = defaultdict(int)
    rho_mat = (pts[:, 0:1] * ct + pts[:, 1:2] * st) / rho_step
    rho_int = np.round(rho_mat).astype(np.int64)
    ntheta = len(thetas_deg)
    for ti in range(ntheta):
        col = rho_int[:, ti]
        for r in col:
            ri = int(r)
            if ri < 0:
                ti2 = (ti + half) % ntheta
                acc[(ti2, -ri)] += 1
            else:
                acc[(ti, ri)] += 1

    if min_votes is None:
        min_votes = max(10, int(len(pts) * 0.008))

    items = sorted(acc.items(), key=lambda kv: -kv[1])
    peaks = []
    suppressed = set()
    for (ti, r), votes in items:
        if votes < min_votes:
            break
        if (ti, r) in suppressed:
            continue
        theta = thetas[ti]
        rho = r * rho_step
        # NMS：抑制方向相近且 rho 接近的其它峰
        ori = thetas_deg[ti] % 180.0
        for (ti2, r2) in acc:
            if (ti2, r2) in suppressed:
                continue
            o2 = thetas_deg[ti2] % 180.0
            d = abs(ori - o2)
            d = min(d, 180 - d)
            if d <= angle_tol and abs(r2 * rho_step - rho) <= rho_tol:
                suppressed.add((ti2, r2))
        peaks.append((theta, rho, votes))
    return peaks


def line_endpoints(mask, theta, rho, tol=1.5):
    """返回直线上的墨迹支撑像素，并据此求线段端点 (A, B) 与投影范围。"""
    ct = math.cos(theta)
    st = math.sin(theta)
    # 方向向量(沿直线) t = (-sin, cos)
    n = np.array([ct, st])
    # 计算所有墨迹像素到该直线的带符号距离
    ys, xs = np.where(mask)
    pts = np.column_stack([xs.astype(np.float64), ys.astype(np.float64)])
    dist = pts[:, 0] * ct + pts[:, 1] * st - rho
    inl = np.abs(dist) <= tol
    if inl.sum() < 2:
        return None
    pin = pts[inl]
    # 投影到方向 t
    t = np.array([-st, ct])
    s = pin @ t
    s_min, s_max = s.min(), s.max()
    A = rho * n + s_min * t
    B = rho * n + s_max * t
    return A, B, s_min, s_max


def _line_position(theta, rho):
    """返回直线在世界坐标中的"位置"：竖直线返回 x，水平线返回 y。
    并标记 orientation: 'v' / 'h' / None(倾斜)。
    """
    deg = math.degrees(theta) % 180
    if deg <= 8 or deg >= 172:
        # 竖直线 x = rho (theta≈0) 或 x = -rho (theta≈180)
        x = rho if deg <= 8 else -rho
        return 'v', x
    if 82 <= deg <= 98:
        # 水平线 y = rho (theta≈90) ; theta≈90 -> rho=y
        return 'h', rho
    return None, None


def _cluster_positions(lines, pos_tol=4.0):
    """把相差 <= pos_tol 的位置求平均，返回去重后的有序坐标列表。"""
    lines = sorted(lines)
    out = []
    cur = [lines[0]]
    for x in lines[1:]:
        if x - cur[-1] <= pos_tol:
            cur.append(x)
        else:
            out.append(sum(cur) / len(cur))
            cur = [x]
    out.append(sum(cur) / len(cur))
    return out


def detect_grid(peaks, angle_tol=8.0, gap_tol=0.30, pos_tol=4.0):
    """从霍夫峰值中推断方格纸网格。返回 (xs, ys, cell, origin) 或 None。
    xs: 竖直线 x 坐标; ys: 水平线 y 坐标; origin=(x0,y0) 左上格点。
    """
    vlines, hlines = [], []
    for theta, rho, _ in peaks:
        ori, pos = _line_position(theta, rho)
        if ori == 'v':
            vlines.append(pos)
        elif ori == 'h':
            hlines.append(pos)
    vlines = _cluster_positions(vlines, pos_tol)
    hlines = _cluster_positions(hlines, pos_tol)
    if len(vlines) < 3 or len(hlines) < 3:
        return None

    def spacing(lines):
        gaps = np.diff(lines)
        med = np.median(gaps)
        if med <= 0:
            return None
        keep = [lines[0]]
        for x in lines[1:]:
            if abs(x - keep[-1] - med) <= gap_tol * med:
                keep.append(x)
        # 用保留下来的线重新算间距，补齐缺失的网格线
        if len(keep) >= 2:
            med2 = np.median(np.diff(keep))
            lo, hi = keep[0], keep[-1]
            full = list(np.arange(lo, hi + med2 * 0.5, med2))
            return med2, full
        return None

    vres = spacing(vlines)
    hres = spacing(hlines)
    if vres is None or hres is None:
        return None
    vcell, vfull = vres
    hcell, hfull = hres
    cell = (vcell + hcell) / 2.0
    origin = (vfull[0], hfull[0])
    return vfull, hfull, cell, origin


def intersect_segments(segs, tol=1.5):
    """求所有线段两两交点(线段内部)，去重。segs: [(A,B),...]。"""
    pts = []
    n = len(segs)
    for i in range(n):
        A1, B1 = segs[i]
        for j in range(i + 1, n):
            A2, B2 = segs[j]
            p = _seg_intersection(A1, B1, A2, B2)
            if p is not None:
                pts.append(p)
    # 去重(网格对齐)
    return _cluster_points(pts, tol)


def _seg_intersection(A, B, C, D):
    """返回两条线段 AB 与 CD 的交点(若在线段内)，否则 None。"""
    def cross(o, a, b):
        return (a[0]-o[0])*(b[1]-o[1]) - (a[1]-o[1])*(b[0]-o[0])
    d1 = cross(C, D, A)
    d2 = cross(C, D, B)
    d3 = cross(A, B, C)
    d4 = cross(A, B, D)
    if ((d1 > 0 and d2 < 0) or (d1 < 0 and d2 > 0)) and \
       ((d3 > 0 and d4 < 0) or (d3 < 0 and d4 > 0)):
        t = d1 / (d1 - d2)
        return (A[0] + t * (B[0] - A[0]), A[1] + t * (B[1] - A[1]))
    return None


def _cluster_points(pts, tol):
    """把距离 < tol 的点聚合成一个质心。"""
    if not pts:
        return []
    pts = np.array(pts)
    used = np.zeros(len(pts), dtype=bool)
    out = []
    for i in range(len(pts)):
        if used[i]:
            continue
        d = np.linalg.norm(pts - pts[i], axis=1)
        grp = np.where(d < tol)[0]
        used[grp] = True
        out.append(tuple(pts[grp].mean(axis=0)))
    return out


def snap_to_grid(p, origin, cell):
    """把点对齐到最近的格点(返回格点坐标 gx,gy 与像素坐标)。"""
    gx = round((p[0] - origin[0]) / cell)
    gy = round((p[1] - origin[1]) / cell)
    px = origin[0] + gx * cell
    py = origin[1] + gy * cell
    return gx, gy, (px, py)


def _label(mask):
    """纯 numpy 连通分量标记，返回 (labeled, num)。4-邻域。"""
    H, W = mask.shape
    labeled = np.zeros((H, W), dtype=np.int32)
    cur = 0
    flat = mask.reshape(-1)
    lab = labeled.reshape(-1)
    # 用栈做 BFS
    stack = []
    for start in range(flat.size):
        if not flat[start] or lab[start]:
            continue
        cur += 1
        stack.append(start)
        lab[start] = cur
        while stack:
            idx = stack.pop()
            r, c = divmod(idx, W)
            for dr, dc in ((-1, 0), (1, 0), (0, -1), (0, 1)):
                nr, nc = r + dr, c + dc
                if 0 <= nr < H and 0 <= nc < W:
                    nidx = nr * W + nc
                    if flat[nidx] and not lab[nidx]:
                        lab[nidx] = cur
                        stack.append(nidx)
    return labeled, cur


def detect_grid_runs(mask, vfrac=0.45, hfrac=0.45, pos_tol=4.0):
    """用"墨迹投影"检测方格纸网格：竖向网格线所在列有大量纵向墨迹，
    横向网格线所在行有大量横向墨迹（对角线只穿过单列几像素，不会触发）。
    返回 (xs, ys, cell, origin) 或 None。
    """
    H, W = mask.shape
    col_cnt = mask.sum(axis=0)          # 每列墨迹数
    row_cnt = mask.sum(axis=1)          # 每行墨迹数
    vlines = [int(x) for x in np.where(col_cnt >= vfrac * H)[0]]
    hlines = [int(y) for y in np.where(row_cnt >= hfrac * W)[0]]
    vlines = _cluster_positions(vlines, pos_tol)
    hlines = _cluster_positions(hlines, pos_tol)
    if len(vlines) < 3 or len(hlines) < 3:
        return None

    def spacing(lines):
        gaps = np.diff(lines)
        med = np.median(gaps)
        if med <= 0:
            return None
        keep = [lines[0]]
        for x in lines[1:]:
            if abs(x - keep[-1] - med) <= 0.30 * med:
                keep.append(x)
        if len(keep) >= 2:
            med2 = np.median(np.diff(keep))
            lo, hi = keep[0], keep[-1]
            full = list(np.arange(lo, hi + med2 * 0.5, med2))
            return med2, full
        return None

    vres = spacing(vlines)
    hres = spacing(hlines)
    if vres is None or hres is None:
        return None
    vcell, vfull = vres
    hcell, hfull = hres
    cell = (vcell + hcell) / 2.0
    origin = (vfull[0], hfull[0])
    return vfull, hfull, cell, origin


def residual_mask(mask, xs, ys, tol):
    """返回 mask 中离所有网格线都较远(>tol)的像素，即对角线/圆弧等图形笔画。"""
    H, W = mask.shape
    ys_idx, xs_idx = np.where(mask)
    if len(xs_idx) == 0:
        return np.zeros_like(mask)
    d_x = np.min(np.abs(xs_idx[:, None] - np.array(xs)[None, :]), axis=1)
    d_y = np.min(np.abs(ys_idx[:, None] - np.array(ys)[None, :]), axis=1)
    keep = (np.minimum(d_x, d_y) > tol)
    res = np.zeros_like(mask)
    res[ys_idx[keep], xs_idx[keep]] = True
    return res


def detect_diagonal_edges(mask, grid, max_cells=4, min_cov=0.35, tol=None):
    """在检测到网格后，检测网格交点之间的"对角连线"(图形斜边)。
    对每对不在同一行/列的交点，沿理想直线采样，统计"图形墨迹"(已去除网格线
    的残差)的覆盖率；覆盖率高则说明该对角线被画出。返回已对齐到网格交点的线段。
    """
    xs, ys, cell, origin = grid
    if tol is None:
        tol = max(2.0, cell * 0.18)
    res = residual_mask(mask, xs, ys, tol=max(2.0, cell * 0.18))
    dm = dilate(res, k=1) if tol > 0 else res
    H, W = mask.shape
    pts = [(float(x), float(y)) for x in xs for y in ys]
    segs = []
    n = len(pts)
    for i in range(n):
        for j in range(i + 1, n):
            A = pts[i]; B = pts[j]
            if abs(A[0] - B[0]) < 1e-6 or abs(A[1] - B[1]) < 1e-6:
                continue  # 同行/同列 -> 网格线，跳过
            dx = B[0] - A[0]; dy = B[1] - A[1]
            L = math.hypot(dx, dy)
            if L < cell * 0.5:
                continue
            if L > cell * max_cells * 1.5:
                continue
            steps = int(round(L)) + 1
            cnt = 0
            for s in range(steps + 1):
                x = A[0] + dx * s / steps
                y = A[1] + dy * s / steps
                xi = int(round(x)); yi = int(round(y))
                if 0 <= xi < W and 0 <= yi < H and dm[yi, xi]:
                    cnt += 1
            if cnt / (steps + 1) >= min_cov:
                segs.append((A, B))
    return segs


def _point_in_triangle(p, a, b, c):
    """判断点 p 是否在三角形 abc 内(符号法)。"""
    def sign(p1, p2, p3):
        return (p1[0]-p3[0])*(p2[1]-p3[1]) - (p2[0]-p3[0])*(p1[1]-p3[1])
    d1 = sign(p, a, b); d2 = sign(p, b, c); d3 = sign(p, c, a)
    has_neg = (d1 < 0) or (d2 < 0) or (d3 < 0)
    has_pos = (d1 > 0) or (d2 > 0) or (d3 > 0)
    return not (has_neg and has_pos)


def right_triangle_from_diagonal(mask, P, Q):
    """由一条对角连线(网格交点 P,Q)还原其所在的直角三角。
    直角顶点只能是 (P.x,Q.y) 或 (Q.x,P.y)。用三角形内部墨迹覆盖率判断是哪个，
    并返回 (A,B,C, coverage)，其中 C 为直角顶点；若覆盖率过低说明不是实心三角，
    返回 coverage=0。
    """
    H, W = mask.shape
    cands = [(P[0], Q[1]), (Q[0], P[1])]
    best = None
    for R in cands:
        x0 = int(min(P[0], Q[0], R[0])); x1 = int(max(P[0], Q[0], R[0]))
        y0 = int(min(P[1], Q[1], R[1])); y1 = int(max(P[1], Q[1], R[1]))
        area = 0; ink = 0
        for yy in range(y0, y1 + 1):
            for xx in range(x0, x1 + 1):
                if 0 <= xx < W and 0 <= yy < H and _point_in_triangle((xx, yy), P, Q, R):
                    area += 1
                    if mask[yy, xx]:
                        ink += 1
        cov = ink / area if area else 0
        if best is None or cov > best[1]:
            best = (R, cov)
    R, cov = best
    return (P, Q, R, cov)


def pca_segments(mask, min_px=8, min_len=12.0, max_len=None, linearity=2.5):
    """对每个连通分量用 PCA 拟合成一条线段。返回 [(A,B), ...]。
    linearity = 最大/最小特征值之比；越大越像直线(排除圆弧)。
    """
    labeled, num = _label(mask)
    segs = []
    for k in range(1, num + 1):
        ys, xs = np.where(labeled == k)
        n = len(xs)
        if n < min_px:
            continue
        pts = np.column_stack([xs, ys]).astype(np.float64)
        c = pts.mean(axis=0)
        cov = np.cov(pts - c, rowvar=False)
        w, vec = np.linalg.eigh(cov)
        if w[1] <= 1e-6:
            continue
        ratio = w[1] / (w[0] + 1e-9)
        if ratio < linearity:        # 不够"线状" -> 当作弧，跳过
            continue
        direction = vec[:, 1]         # 主成分方向
        proj = (pts - c) @ direction
        p0, p1 = proj.min(), proj.max()
        if (p1 - p0) < min_len:
            continue
        if max_len is not None and (p1 - p0) > max_len:
            continue
        A = c + p0 * direction
        B = c + p1 * direction
        segs.append((tuple(A), tuple(B)))
    return segs

def detect_arcs(mask, min_px=25, max_px=600, linearity=0.85, r_min=8.0, r_max=55.0):
    """检测圆弧(角度标记)。返回 [(cx,cy,r,phi0,phi1), ...] (phi 以度计, 数学坐标 y 向上)。
    策略：连通分量中"不近似为直线"且大小适中的，用最小二乘圆拟合求圆心半径，
    再取分量点的角度范围作为弧。
    """
    labeled, num = _label(mask)
    arcs = []
    for k in range(1, num + 1):
        ys, xs = np.where(labeled == k)
        if len(xs) < min_px or len(xs) > max_px:
            continue
        pts = np.column_stack([xs, ys]).astype(np.float64)
        # 线性度判定：PCA 最大特征值占比过高 -> 近似直线，跳过
        c = pts.mean(axis=0)
        cov = np.cov(pts - c, rowvar=False)
        w, _ = np.linalg.eigh(cov)
        if w.max() / (w.sum() + 1e-9) > linearity:
            continue
        # 圆拟合(Kasa)
        circ = _fit_circle(pts)
        if circ is None:
            continue
        cx, cy, r = circ
        if r < r_min or r > r_max:
            continue
        angs = np.arctan2(pts[:, 1] - cy, pts[:, 0] - cx)  # 屏幕坐标(y 向下)
        angs = np.degrees(angs) % 360
        span = _angular_span(angs)
        # 过滤过短的弧(噪声斑点)
        s0, s1 = span
        diff = (s1 - s0) % 360
        if diff < 8.0:
            continue
        arcs.append((cx, cy, r, s0, s1))
    return arcs


def _fit_circle(pts):
    """Kasa 圆拟合，返回 (cx,cy,r) 或 None。"""
    x = pts[:, 0]; y = pts[:, 1]
    n = len(x)
    if n < 3:
        return None
    A = np.column_stack([x, y, np.ones(n)])
    b = x**2 + y**2
    try:
        sol, *_ = np.linalg.lstsq(A, b, rcond=None)
    except Exception:
        return None
    cx, cy = sol[0] / 2, sol[1] / 2
    r = math.sqrt(sol[2] + cx**2 + cy**2)
    return cx, cy, r


def _angular_span(angs):
    """给定 [0,360) 角度集合，返回 (phi0, phi1) 使弧覆盖这些点(短弧)。"""
    a = np.sort(angs)
    # 找最大间隙
    gaps = np.diff(a)
    if len(gaps) == 0:
        return (a[0], a[0])
    maxgap = gaps.argmax()
    # 弧为 跨越 maxgap 的补集
    start = a[maxgap + 1]
    end = a[maxgap]
    return (float(start), float(end))


# ---------------------------------------------------------------------------
# 4) 完整转换管线 (图片 -> SVG)
# ---------------------------------------------------------------------------

def build_svg(mask, grid, segs, arcs, verts, title="", flip_y=False, ann=None, margin=0):
    """根据检测结果拼装 SVG 字符串。坐标使用图像像素坐标(原点左上, y 向下)。"""
    H, W = mask.shape
    parts = svg_header(W + 2 * margin, H + 2 * margin, title=title)
    parts.append(f'<g transform="translate({margin},{margin})">')

    if grid is not None:
        xs, ys, cell, origin = grid
        parts += svg_grid_lines(xs, ys, color="#dde3ea", width=1)
        x0, x1 = min(xs), max(xs)
        y0, y1 = min(ys), max(ys)
        for (a, b) in [((x0, y0), (x1, y0)), ((x0, y0), (x0, y1)),
                       ((x1, y0), (x1, y1)), ((x0, y1), (x1, y1))]:
            parts.append(svg_line(a, b, color="#9aa5b1", width=1.5))

    if ann and ann.get("segments"):
        segs = [(tuple(s["a"]), tuple(s["b"])) for s in ann["segments"]]
        for s in ann["segments"]:
            parts.append(svg_line(s["a"], s["b"], color=s.get("color", "#1f2937"), width=2.4))

    tri_colors = ["#dbeafe", "#dcfce7", "#fae8ff", "#fef3c7"]
    vset = set()
    for si, (A, B) in enumerate(segs):
        if grid is not None:
            P, Q, R, cov = right_triangle_from_diagonal(mask, A, B)
            if cov >= 0.10:
                fill = tri_colors[si % len(tri_colors)]
                parts.append(svg_polygon([P, Q, R], color=fill, width=2.0,
                                         fill=fill, fill_op=0.6))
                for vtx in (P, Q, R):
                    vset.add((round(vtx[0], 1), round(vtx[1], 1)))
        parts.append(svg_line(A, B, color="#1f2937", width=2.4))

    if verts:
        for v in verts:
            parts.append(svg_dot(v, r=3.4, color="#111827"))
    for v in vset:
        parts.append(svg_dot(v, r=3.6, color="#111827"))

    for cx, cy, r, p0, p1 in arcs:
        parts.append(svg_arc(cx, cy, r, p0, p1, color="#dc2626", width=1.8, y_up=False))

    if ann:
        for p in ann.get("points", []):
            parts.append(svg_dot((p["x"], p["y"]), r=4, color="#1f2937"))
            parts.append(svg_label((p["x"], p["y"]), p.get("label", ""),
                                   color=p.get("color", "#111827"),
                                   size=p.get("size", 14),
                                   dx=p.get("dx", 7), dy=p.get("dy", -7)))
        if grid is not None and ann.get("grid_points"):
            xs, ys, cell, origin = grid
            for p in ann["grid_points"]:
                px = (origin[0] + p["gx"] * cell, origin[1] + p["gy"] * cell)
                parts.append(svg_dot(px, r=4, color="#1f2937"))
                parts.append(svg_label(px, p.get("label", ""),
                                       color=p.get("color", "#111827"),
                                       size=p.get("size", 14),
                                       dx=p.get("dx", 7), dy=p.get("dy", -7)))
        for a in ann.get("arcs", []):
            parts.append(svg_arc(a["cx"], a["cy"], a["r"], a["phi0"], a["phi1"],
                                 color=a.get("color", "#dc2626"), width=2, y_up=False))
            if a.get("label"):
                parts.append(svg_arc_label(a["cx"], a["cy"], a["r"], a["phi0"], a["phi1"],
                                           a["label"], color=a.get("color", "#dc2626"),
                                           y_up=False))

    parts.append('</g>')
    parts.append('</svg>')
    return "\n".join(parts)


def debug_svg(mask, grid, segs, arcs, out_path):
    H, W = mask.shape
    parts = svg_header(W, H, title="DEBUG")
    ys, xs = np.where(mask)
    for x, y in zip(xs, ys):
        parts.append(f'<rect x="{x}" y="{y}" width="1" height="1" fill="#cbd5e1" fill-opacity="0.45"/>')
    if grid is not None:
        xs, ys, cell, origin = grid
        parts += svg_grid_lines(xs, ys, color="#16a34a", width=1)
    for A, B in segs:
        parts.append(svg_line(A, B, color="#dc2626", width=1.5))
    for cx, cy, r, p0, p1 in arcs:
        parts.append(svg_arc(cx, cy, r, p0, p1, color="#7c3aed", width=1.5, y_up=False))
    parts.append('</svg>')
    dbg = out_path[:-4] + "_debug.svg" if out_path.endswith(".svg") else out_path + ".debug.svg"
    with open(dbg, "w", encoding="utf-8") as fh:
        fh.write("\n".join(parts))
    return dbg


def image_to_svg(path, title="", flip_y=False, annot=None, vertices=False,
                 snap=False, dilate_k=1, arc_min=25, arc_max=600,
                 min_cov=0.35, min_len=14.0, margin=0, invert=False,
                 no_grid=False, debug_path=None):
    """端到端：读取几何图片，返回 SVG 字符串(同时可写出 debug 图)。
    算法：二值化 -> 网格检测(墨迹投影) -> 残差对角连线 -> 圆弧检测 -> (可选)对齐网格。
    """
    mask, gray = load_mask(path, invert=invert)
    grid = None
    if not no_grid:
        dmask = dilate(mask, dilate_k) if dilate_k > 0 else mask
        grid = detect_grid_runs(dmask)
    if grid is not None:
        segs = detect_diagonal_edges(mask, grid, min_cov=min_cov)
        arcs = detect_arcs(mask, min_px=arc_min, max_px=arc_max)
    else:
        segs = pca_segments(mask, min_len=min_len)
        arcs = detect_arcs(mask, min_px=arc_min, max_px=arc_max)
    if grid is not None and snap:
        xs, ys, cell, origin = grid
        segs = [(snap_to_grid(A, origin, cell)[2], snap_to_grid(B, origin, cell)[2])
                for A, B in segs]
    verts = None
    if vertices and segs:
        tol = max(2.5, grid[2] * 0.30) if grid else 3.0
        verts = intersect_segments(segs, tol=tol)
    svg = build_svg(mask, grid, segs, arcs, verts, title=title,
                    flip_y=flip_y, ann=annot, margin=margin)
    if debug_path:
        debug_svg(mask, grid, segs, arcs, debug_path)
    return svg


# ---------------------------------------------------------------------------
# 3) 线段合并 / 去重
# ---------------------------------------------------------------------------

def merge_segments(segs, angle_tol=3.0, rho_tol=3.0, gap_tol=6.0):
    """合并共线且大致重叠的线段。segs: [(A,B), ...]。"""
    # 用 (theta, rho) 表示
    reps = []
    for A, B in segs:
        theta, rho, s0, s1 = _seg_rep(A, B)
        reps.append((theta, rho, s0, s1, (A, B)))
    groups = []
    for rep in reps:
        placed = False
        for g in groups:
            gt, gr, _, _, _ = g[0]
            dth = abs(math.degrees(rep[0]) - math.degrees(gt))
            dth = min(dth, 180 - dth)
            if dth <= angle_tol and abs(rep[1] - gr) <= rho_tol:
                g.append(rep)
                placed = True
                break
        if not placed:
            groups.append([rep])
    out = []
    for g in groups:
        # 合并投影范围
        s_all = []
        for _, _, s0, s1, _ in g:
            s_all.extend([s0, s1])
        s_min, s_max = min(s_all), max(s_all)
        theta, rho = g[0][0], g[0][1]
        n = np.array([math.cos(theta), math.sin(theta)])
        t = np.array([-math.sin(theta), math.cos(theta)])
        A = rho * n + s_min * t
        B = rho * n + s_max * t
        out.append((tuple(A), tuple(B)))
    return out


def _seg_rep(A, B):
    A = np.array(A, dtype=float); B = np.array(B, dtype=float)
    d = B - A
    theta = math.atan2(d[1], d[0]) % math.pi
    n = np.array([math.cos(theta), math.sin(theta)])
    rho = (A @ n)
    t = np.array([-math.sin(theta), math.cos(theta)])
    s0 = A @ t
    s1 = B @ t
    if s1 < s0:
        s0, s1 = s1, s0
    return theta, rho, s0, s1
