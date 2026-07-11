#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
geometry2svg.py — 几何图片 -> SVG 转换器 (命令行入口)

封装 geomlib.image_to_svg，读取几何题图片，自动识别方格纸网格、图形对角连线
(斜边)、圆弧(角度标记)与顶点，输出矢量 SVG。纯 Pillow + numpy，无需 OpenCV。

用法示例：
  python geometry2svg.py in.png out.svg
  python geometry2svg.py in.png out.svg --debug
  python geometry2svg.py in.png out.svg --vertices --snap
  python geometry2svg.py in.png out.svg --annot a.json     # 叠加点/弧标注
  python geometry2svg.py in.png out.svg --invert           # 浅色墨迹/反色
  python geometry2svg.py in.png out.svg --no-grid          # 非方格纸自由图形
"""

import argparse
import json
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import geomlib as G


def main():
    ap = argparse.ArgumentParser(description="几何图片 -> SVG 转换器")
    ap.add_argument("input")
    ap.add_argument("output")
    ap.add_argument("--invert", action="store_true")
    ap.add_argument("--title", default="")
    ap.add_argument("--margin", type=int, default=0)
    ap.add_argument("--flip-y", action="store_true")
    ap.add_argument("--annot", default=None)
    ap.add_argument("--debug", action="store_true")
    ap.add_argument("--no-grid", action="store_true")
    ap.add_argument("--dilate", type=int, default=1)
    ap.add_argument("--min-len", type=float, default=14.0)
    ap.add_argument("--snap", action="store_true")
    ap.add_argument("--vertices", action="store_true")
    ap.add_argument("--arc-min", type=int, default=25)
    ap.add_argument("--arc-max", type=int, default=600)
    ap.add_argument("--min-cov", type=float, default=0.35)
    args = ap.parse_args()

    ann = None
    if args.annot and os.path.exists(args.annot):
        with open(args.annot, "r", encoding="utf-8") as fh:
            ann = json.load(fh)

    svg = G.image_to_svg(
        args.input, title=args.title, flip_y=args.flip_y, annot=ann,
        vertices=args.vertices, snap=args.snap, dilate_k=args.dilate,
        arc_min=args.arc_min, arc_max=args.arc_max, min_cov=args.min_cov,
        min_len=args.min_len, margin=args.margin, invert=args.invert,
        no_grid=args.no_grid,
        debug_path=args.output if args.debug else None,
    )
    with open(args.output, "w", encoding="utf-8") as fh:
        fh.write(svg)
    print(f"[ok] written: {args.output}")
    if args.debug:
        print(f"[ok] debug: {args.output[:-4]}_debug.svg")


if __name__ == "__main__":
    main()
