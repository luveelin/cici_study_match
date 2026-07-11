---
name: drawSVG4me
description: This skill should be used when a geometry problem includes or references a raster image (PNG/JPG) of a geometric figure and needs to be read, parsed, or solved. It converts the figure image into a structured SVG (grid, vertices, angles, arcs) and then builds a solution (解答) SVG, following the p3 example convention (problems/images/p3_ic.svg + p3_grid.svg). Use it whenever solving geometry problems that require extracting structure from a figure image, generating an SVG of a geometry problem, or producing an answer diagram.
---

# drawSVG4me —— 几何题图片 → SVG → 解答 SVG

## 目的

几何题经常只保留了位图（截图/照片），无法直接读取其中的网格、顶点、角度等结构化
信息。本 skill 提供一套可复用的流程：**先把几何图片转换成矢量 SVG（题图），再基于题图
构建解答 SVG（答案图）**，从而让解题可直接在结构化几何信息上进行。

代码与脚本统一位于 `feature/drawSVG/`（纯 Python，仅需 Pillow + numpy，无需 OpenCV /
tesseract）。本 skill 是这些脚本的"使用说明书 + 工作流"，不重复存放脚本。

## 何时使用

- 用户给出几何题图片（PNG/JPG），要求读取/解析图形以解题。
- 需要把几何图形画成 SVG（题图或答案图）。
- 需要像"第3题"那样：先有 `_ic.svg`（题图），再有 `_grid.svg`（解答图），并嵌入题页。

## 命名约定（务必遵守）

| 文件 | 含义 |
|------|------|
| `<name>_ic.svg` | **题图 svg**：由几何图片自动转换得到（problem figure）。例如 `p3_ic.svg` 是 `p3_pic.png` 的矢量模式。 |
| `<name>_grid.svg` | **解答 svg**：在题图基础上手工/脚本构建的答案图（solution diagram）。例如 `p3_grid.svg` 标注了 O/A/C 与 ∠1+∠2=45°。 |

> 即：**先生成 `_ic.svg`（从图片读取几何），再构建 `_grid.svg`（基于题图写出解答）**。

## 工作流（两阶段）

### 阶段 A：图片 → 题图 SVG (`_ic.svg`)

读取几何图片，自动识别方格纸网格、对角连线（斜边）、圆弧（角度标记）、顶点，输出矢量 SVG。

```bash
# 通用：任意几何图片 -> 题图 svg
python feature/drawSVG/geometry2svg.py problems/images/<name>.png \
       problems/images/<name>_ic.svg --vertices --snap --debug

# 推荐参数说明
#   --vertices  标注线段交点/三角顶点（圆点）
#   --snap      把线段端点对齐到网格格点（方格纸场景更稳定）
#   --debug     同时输出 <name>_ic_debug.svg（叠加原始墨迹+检测线，便于检查）
#   --annot a.json   叠加人工点名/角度标注（见 references/workflow.md）
#   --invert    浅色墨迹/反色图片时使用
#   --no-grid   非方格纸的自由图形（跳过网格检测）
#   --dilate N  墨迹较碎时调大腐蚀前处理（默认 1）
```

第3题专用生成器（手绘版解答图 + 图片模式默认指向 `_ic.svg`）：

```bash
python feature/drawSVG/generate_grid.py                 # 读 p3_pic.png -> p3_ic.svg
python feature/drawSVG/generate_grid.py --manual        # 生成手绘版 p3_grid.svg（解答图）
```

生成后**先检查 `_ic.svg`（或 `_debug.svg`）** 是否准确还原了网格、顶点、角度弧；
必要时用 `--annot` 修正或用 `--invert/--dilate` 调参。

### 阶段 B：题图 → 解答 SVG (`_grid.svg`)

读取阶段 A 得到的 `_ic.svg`，理解其中几何关系（格点坐标、顶点、已知角），用
`feature/drawSVG/geomlib.py` 的 SVG 原语（或手写 SVG）构建**答案图**，标注所求点/角/
辅助线，并给出结论。具体做法与 p3 示例完全一致，见 `references/example_p3.md`。

```python
# 在答案图脚本中复用 geomlib 的绘制原语（与题图风格一致）
import sys, os
sys.path.insert(0, "feature/drawSVG")
import geomlib as G
# G.svg_header / svg_line / svg_polygon / svg_dot / svg_arc / svg_label / svg_arc_label / right_angle_mark ...
```

### 阶段 C：嵌入题页

把 `_ic.svg`（原题图）与 `_grid.svg`（解答图）按 p3 题页方式嵌入 `problems/pX.html`
的 `content`，并用项目内置的 `openImgOverlay` 实现点击放大（参考 `references/example_p3.md`
与 README 的"开发约定"）。

## 参考文件

- `references/workflow.md` —— 完整两阶段步骤、`--annot` JSON 格式、调参技巧。
- `references/example_p3.md` —— 第3题端到端范例（p3_pic.png → p3_ic.svg → p3_grid.svg，结论 ∠1+∠2=45°）。
- `references/geomlib_api.md` —— `geomlib.py` 的 SVG 绘制原语与检测函数速查（用于构建解答图）。
