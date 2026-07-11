# 示例：第3题 网格中的角度求和（端到端）

> 目标范式：**几何题图片 → 题图 SVG（`_ic.svg`）→ 解答 SVG（`_grid.svg`）→ 嵌入题页**。
> 以后解任何几何题都照此流程。

## 题目

原题图 `problems/images/p3_pic.png`：4×4 方格纸，右下两个相邻直角三角（蓝 ∠1、绿 ∠2），
∠1 顶点 (1,0)、∠2 顶点 (1,1)。求 ∠1+∠2。

## 阶段 A：生成题图 SVG `p3_ic.svg`

```bash
python feature/drawSVG/generate_grid.py
# 等价于：读 problems/images/p3_pic.png -> problems/images/p3_ic.svg
```

`p3_ic.svg` 内容（自动识别）：5×5 网格线、两个按原图着色的实心直角三角（蓝/绿）、
斜边（暗线）、三角顶点圆点、角度弧。即 `p3_pic.png` 的矢量模式。

## 阶段 B：构建解答 SVG `p3_grid.svg`

```bash
python feature/drawSVG/generate_grid.py --manual
# 生成 problems/images/p3_grid.svg（手工忠实于题目角位置的答案图）
```

解答图要点（手绘坐标，4×4 网格，cell=90，margin=55）：

- 蓝直角三角 ∠1：顶点 P1(1,0)、R1(4,0)、T1(4,1)；在 P1 处画 ∠1 弧。
- 绿直角三角 ∠2：顶点 P2(1,1)、R2(1,3)、T2(2,3)；在 P2 处画 ∠2 弧。
- 设 O(0,0)、A(3,1)、C(1,2)。用虚线画出 OA（与水平夹角 = ∠1）、OC（与竖直夹角 = ∠2）。
- 在 O 处叠加三个弧：∠1、∠2、以及它们之间的 45° 弧，直观得到 **∠1+∠2=45°**。
- 标注点 O、A、C，并配文字说明"虚线为平移到 O 的辅助构造"。

核心结论：**∠1 + ∠2 = 45°**。

> 构建解答图时，复用 `geomlib` 原语（`svg_line` / `svg_polygon` / `svg_arc` /
> `svg_arc_label` / `svg_dot` / `right_angle_mark`）可保证与题图风格一致，见
> `geomlib_api.md`。

## 阶段 C：嵌入题页 `problems/p3.html`

题页 `content` 中放置解答图（原题图用 `p3.png`），并复用内置 `openImgOverlay` 实现
点击放大：

```html
<p>
  <img src="images/p3_grid.svg" alt="标注点 A、C 的 4×4 网格示意图"
       onclick="openImgOverlay('p3grid')"
       style="max-width:340px; border:1px solid #e2e8f0; border-radius:6px; cursor:zoom-in;">
</p>
<p class="original-image-caption" onclick="openImgOverlay('p3grid')">🔍 点击查看原图</p>

<div class="img-overlay" id="overlay-p3grid">
  <div class="img-overlay-box" id="overlayBox-p3grid" onmousedown="startDrag(event,'p3grid')">
    <span class="img-overlay-close" onclick="closeImgOverlay('p3grid')">✕</span>
    <img src="images/p3_grid.svg" alt="放大图">
    <span class="img-resize-handle" onmousedown="startResize(event,'p3grid')"></span>
  </div>
</div>
```

## 将来解几何题时如何套用

1. 拿到几何题图片 `X.png` → 跑 `geometry2svg.py` 生成 `X_ic.svg`。
2. 核对 `_ic.svg` 后，基于它理解几何关系，写脚本（复用 `geomlib`）生成 `X_grid.svg`
   作为解答图。
3. 在对应 `problems/pX.html` 的 `content` 中嵌入两张图（题图可放原 `.png` 或 `_ic.svg`，
   解答图用 `_grid.svg`），并用 `openImgOverlay` 做放大。
