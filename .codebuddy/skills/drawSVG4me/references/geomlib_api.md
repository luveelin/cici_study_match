# geomlib.py 速查（构建解答 SVG 用）

> 路径：`feature/drawSVG/geomlib.py`。复用时：
> ```python
> import sys, os
> sys.path.insert(0, "feature/drawSVG")
> import geomlib as G
> ```
> 坐标默认：图像像素坐标，原点左上，x 向右，y 向下。`svg_arc`/`svg_arc_label` 的
> `y_up` 参数：题图检测用 `y_up=False`（屏幕坐标），手绘解答图可用 `y_up=True`（数学坐标，y 向上）。

## SVG 绘制原语（返回字符串，逐行拼进 `<svg>…</svg>`）

- `svg_header(w, h, title=None, font=...)` —— 文件头（含白底 `<rect>`）。
- `svg_grid_lines(xs, ys, color="#d8dee9", width=1)` —— 画一组竖线/横线（网格）。
- `svg_line(a, b, color="#1f2937", width=2, dash=None)` —— 线段，`a/b` 为 `(x,y)`。
- `svg_polyline(pts, color, width, fill, fill_op, dash)` —— 折线。
- `svg_polygon(pts, color, width, fill=None, fill_op=0.5)` —— 多边形（用于实心三角填充）。
- `svg_dot(p, r=4, color, stroke)` —— 顶点圆点。
- `svg_label(p, text, color, size=13, dx=6, dy=-6, anchor="start")` —— 文本标签（点名）。
- `svg_arc(cx, cy, r, phi0, phi1, color, width=2, y_up=True)` —— 圆弧（角度标记）。
- `svg_arc_label(cx, cy, r, phi0, phi1, text, color, size=13, y_up=True)` —— 带文字的弧。
- `right_angle_mark(p, d1, d2, color="#64748b", s=10)` —— 直角符号（`d1`/`d2` 为从顶点出发的两方向向量）。

## 图像几何检测（阶段 A 内部调用，`image_to_svg` 已封装）

- `load_mask(path, invert=False, thr=None)` → `(mask, gray)`。
- `dilate(mask, k=1)` / `erode(mask, k=1)` —— 二值膨胀/腐蚀（前处理）。
- `detect_grid_runs(mask, vfrac=0.45, hfrac=0.45, pos_tol=4.0)` → `(xs, ys, cell, origin)` 或 `None`（方格纸检测）。
- `residual_mask(mask, xs, ys, tol)` —— 去掉网格线后的残差（图形笔画）。
- `detect_diagonal_edges(mask, grid, max_cells=4, min_cov=0.35, tol=None)` → `[(A,B), …]`（网格交点间的对角连线）。
- `detect_arcs(mask, min_px=25, max_px=600, linearity=0.85, r_min=8.0, r_max=55.0)` → `[(cx,cy,r,phi0,phi1), …]`。
- `right_triangle_from_diagonal(mask, P, Q)` → `(P, Q, R, cov)`（由对角线还原直角三角，`cov` 为内部墨迹覆盖率）。
- `pca_segments(mask, min_px=8, min_len=12.0, max_len=None, linearity=2.5)` → 自由图形的线段（无网格时）。
- `intersect_segments(segs, tol=1.5)` → 线段交点列表（顶点）。
- `snap_to_grid(p, origin, cell)` → `(gx, gy, snapped_point)`（对齐格点）。

## 端到端封装

- `image_to_svg(path, title="", flip_y=False, annot=None, vertices=False, snap=False,
  dilate_k=1, arc_min=25, arc_max=600, min_cov=0.35, min_len=14.0, margin=0,
  invert=False, no_grid=False, debug_path=None)` → SVG 字符串。
  等价于 `geometry2svg.py` 的默认行为；`annot` 为人工标注 dict（见 `workflow.md`）。
- `build_svg(mask, grid, segs, arcs, verts, title="", flip_y=False, ann=None, margin=0)` —— 用检测结果手工拼装。
- `debug_svg(mask, grid, segs, arcs, out_path)` —— 叠加墨迹+检测线的调试图。
