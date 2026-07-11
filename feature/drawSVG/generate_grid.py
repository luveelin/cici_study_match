#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
generate_grid.py — 第3题 网格示意图生成器 (已升级)

两种工作模式：
  1) 手动模式 (--manual)：沿用原先的手绘坐标，生成 p3_grid.svg
     （4x4 网格 + ∠1、∠2 原图位置与平移到 O 的辅助构造，忠实于题目）。
     p3_grid.svg 即"基于题图 svg(p3_ic.svg)的解答 svg"。
  2) 图片模式 (默认)：读取几何图片(如 p3_pic.png)，调用 geomlib 自动识别
     网格 / 图形对角连线 / 圆弧 / 顶点，生成对应的矢量 SVG (p3_ic.svg)。

纯 Pillow + numpy，无需 OpenCV / tesseract。

用法：
  python generate_grid.py                      # 读 p3_pic.png -> p3_ic.svg（题图svg）
  python generate_grid.py --input a.png --output a_ic.svg
  python generate_grid.py --manual             # 生成手绘版 p3_grid.svg（解答svg）
  python generate_grid.py --vertices --snap     # 标注顶点并对齐网格
"""

import argparse
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import geomlib as G
import math

HERE = os.path.dirname(os.path.abspath(__file__))
IMG_DEFAULT = os.path.join(HERE, "..", "..", "problems", "images", "p3_pic.png")
OUT_DEFAULT = os.path.join(HERE, "..", "..", "problems", "images", "p3_ic.svg")


# ---------------------------------------------------------------------------
# 1) 手动模式：原题手绘示意图 (忠实于用户确认的角位置)
# ---------------------------------------------------------------------------

def manual_p3_grid(out_path):
    cell = 90
    margin = 55
    N = 4
    W = H = margin * 2 + N * cell

    P1 = (1.0, 0.0); R1 = (4.0, 0.0); T1 = (4.0, 1.0)   # ∠1 水平直角三角
    P2 = (1.0, 1.0); R2 = (1.0, 3.0); T2 = (2.0, 3.0)   # ∠2 竖直直角三角
    O = (0.0, 0.0); A = (3.0, 1.0); C = (1.0, 2.0)

    def px(x): return margin + x * cell
    def py(y): return margin + (N - y) * cell
    def f(v): return f"{v:.1f}"

    th1 = math.degrees(math.atan(1 / 3))
    thc = math.degrees(math.atan(2 / 1))

    parts = []
    parts.append(f'<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{H}" '
                 f'viewBox="0 0 {W} {H}" font-family="Segoe UI, Microsoft YaHei, sans-serif">')
    parts.append(f'<rect x="0" y="0" width="{W}" height="{H}" fill="#ffffff"/>')

    for i in range(N + 1):
        x = px(i); y = py(i)
        parts.append(G.svg_line((x, py(0)), (x, py(N)), color="#d8dee9", width=1))
        parts.append(G.svg_line((px(0), y), (px(N), y), color="#d8dee9", width=1))

    parts.append(G.svg_line((px(0), py(0)), (px(N), py(0)), color="#9aa5b1", width=1.5, dash="6 4"))
    parts.append(G.svg_line((px(0), py(0)), (px(0), py(N)), color="#9aa5b1", width=1.5, dash="6 4"))

    parts.append(G.svg_polygon([P1, R1, T1], color="#2563eb", width=2, fill="#dbeafe", fill_op=0.65))
    parts.append(G.svg_polygon([P2, R2, T2], color="#16a34a", width=2, fill="#dcfce7", fill_op=0.65))

    def right_mark(P, d1, d2, color, s=11):
        x, y = px(P[0]), py(P[1])
        x1, y1 = x + d1[0], y + d1[1]
        x2, y2 = x + d1[0] + d2[0], y + d1[1] + d2[1]
        x3, y3 = x + d2[0], y + d2[1]
        parts.append(f'<path d="M {f(x1)} {f(y1)} L {f(x2)} {f(y2)} L {f(x3)} {f(y3)}" '
                     f'fill="none" stroke="{color}" stroke-width="1.2"/>')
    s = 11
    right_mark(R1, (-s, 0), (0, -s), "#64748b")
    right_mark(R2, (0, s), (s, 0), "#64748b")

    def seg(P, Q, color):
        parts.append(G.svg_line((px(P[0]), py(P[1])), (px(Q[0]), py(Q[1])),
                                color=color, width=2, dash="5 4"))
    seg(O, A, "#2563eb"); seg(O, C, "#ea580c"); seg(A, C, "#dc2626")

    def arc_path(cx, cy, r, phi0, phi1):
        x0 = cx + r * math.cos(math.radians(phi0)); y0 = cy - r * math.sin(math.radians(phi0))
        x1 = cx + r * math.cos(math.radians(phi1)); y1 = cy - r * math.sin(math.radians(phi1))
        return f'M {f(x0)} {f(y0)} A {f(r)} {f(r)} 0 0 0 {f(x1)} {f(y1)}'

    def arc_label(cx, cy, r, phi0, phi1, text, color, dy=0):
        mid = (phi0 + phi1) / 2
        lx = cx + (r + 16) * math.cos(math.radians(mid))
        ly = cy - (r + 16) * math.sin(math.radians(mid)) + dy
        parts.append(f'<text x="{f(lx)}" y="{f(ly)}" fill="{color}" font-size="15" '
                     f'font-style="italic" text-anchor="middle">{text}</text>')

    c1x, c1y = px(P1[0]), py(P1[1])
    parts.append(f'<path d="{arc_path(c1x, c1y, 30, 0, th1)}" fill="none" stroke="#2563eb" stroke-width="2"/>')
    arc_label(c1x, c1y, 30, 0, th1, "∠1", "#2563eb", dy=4)
    c2x, c2y = px(P2[0]), py(P2[1])
    parts.append(f'<path d="{arc_path(c2x, c2y, 30, thc, 90)}" fill="none" stroke="#16a34a" stroke-width="2"/>')
    arc_label(c2x, c2y, 30, thc, 90, "∠2", "#16a34a", dy=-6)

    cox, coy = px(O[0]), py(O[1])
    parts.append(f'<path d="{arc_path(cox, coy, 42, 0, th1)}" fill="none" stroke="#2563eb" stroke-width="2"/>')
    arc_label(cox, coy, 42, 0, th1, "∠1", "#2563eb", dy=4)
    parts.append(f'<path d="{arc_path(cox, coy, 64, thc, 90)}" fill="none" stroke="#16a34a" stroke-width="2"/>')
    arc_label(cox, coy, 64, thc, 90, "∠2", "#16a34a", dy=-4)
    parts.append(f'<path d="{arc_path(cox, coy, 90, th1, thc)}" fill="none" stroke="#dc2626" stroke-width="2"/>')
    arc_label(cox, coy, 90, th1, thc, "45°", "#dc2626", dy=-2)

    def dot(P, color):
        x, y = px(P[0]), py(P[1])
        parts.append(f'<circle cx="{f(x)}" cy="{f(y)}" r="5" fill="{color}" stroke="#1f2937" stroke-width="1"/>')
    def coord(P, text, color, dx=8, dy=20):
        x, y = px(P[0]), py(P[1])
        parts.append(f'<text x="{f(x + dx)}" y="{f(y + dy)}" fill="{color}" font-size="12">{text}</text>')

    dot(P1, "#2563eb"); coord(P1, "(1,0)", "#2563eb", dx=8, dy=20)
    dot(P2, "#16a34a"); coord(P2, "(1,1)", "#16a34a", dx=8, dy=-12)
    dot(O, "#1f2937"); parts.append(f'<text x="{f(px(0)-4)}" y="{f(py(0)+22)}" fill="#111827" font-size="15" font-weight="700">O</text>')
    dot(A, "#2563eb"); parts.append(f'<text x="{f(px(3)+10)}" y="{f(py(1)+6)}" fill="#2563eb" font-size="15" font-weight="700">A</text>')
    dot(C, "#ea580c"); parts.append(f'<text x="{f(px(1)-18)}" y="{f(py(2)-6)}" fill="#ea580c" font-size="15" font-weight="700">C</text>')

    parts.append(f'<text x="{f(W/2)}" y="24" fill="#374151" font-size="15" '
                 f'text-anchor="middle" font-weight="600">4×4 网格 · ∠1、∠2 原图位置与平移构造</text>')
    parts.append(f'<text x="{f(W/2)}" y="{f(H-12)}" fill="#6b7280" font-size="12.5" '
                 f'text-anchor="middle">原题：∠1顶点(1,0)、∠2顶点(1,1)；虚线为平移到O的辅助构造，OA与水平夹角=∠1，OC与竖直夹角=∠2，故∠1+∠2=45°。</text>')

    parts.append('</svg>')
    svg = "\n".join(parts)
    with open(out_path, "w", encoding="utf-8") as fh:
        fh.write(svg)
    print(f"[ok] manual grid written: {out_path}")


# ---------------------------------------------------------------------------
# 2) 图片模式：自动识别 -> SVG  (见 main())
# ---------------------------------------------------------------------------

def main():
    ap = argparse.ArgumentParser(description="第3题 网格示意图生成器 (手动 / 图片自动)")
    ap.add_argument("--manual", action="store_true", help="生成手绘版 p3_grid.svg")
    ap.add_argument("--input", default=IMG_DEFAULT)
    ap.add_argument("--output", default=OUT_DEFAULT)
    ap.add_argument("--title", default="")
    ap.add_argument("--vertices", action="store_true")
    ap.add_argument("--snap", action="store_true")
    ap.add_argument("--debug", action="store_true")
    args = ap.parse_args()

    if args.manual:
        out = os.path.join(HERE, "..", "..", "problems", "images", "p3_grid.svg")
        manual_p3_grid(out)
        return

    debug_out = args.output if args.debug else None
    svg = G.image_to_svg(args.input, title=args.title or "第3题 几何图形",
                         vertices=args.vertices, snap=args.snap,
                         debug_path=debug_out)
    with open(args.output, "w", encoding="utf-8") as fh:
        fh.write(svg)
    print(f"[ok] image->svg written: {args.output}")
    if args.debug:
        print(f"[ok] debug: {args.output[:-4]}_debug.svg")


if __name__ == "__main__":
    main()
