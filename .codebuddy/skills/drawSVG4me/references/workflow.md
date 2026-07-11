# drawSVG4me 工作流详解

## 阶段 A：图片 → 题图 SVG（`_ic.svg`）

### 基本命令

```bash
python feature/drawSVG/geometry2svg.py problems/images/<name>.png \
       problems/images/<name>_ic.svg --vertices --snap --debug
```

### 常用参数

| 参数 | 作用 |
|------|------|
| `--vertices` | 标注线段交点 / 三角顶点（圆点），便于后续读图 |
| `--snap` | 把端点对齐到网格格点（方格纸场景更稳定） |
| `--debug` | 额外输出 `<name>_ic_debug.svg`（叠加原始墨迹+检测线+弧），用于核对错漏 |
| `--annot a.json` | 叠加人工点名 / 角度标注（格式见下） |
| `--invert` | 浅色墨迹 / 反色背景图片时使用 |
| `--no-grid` | 非方格纸的自由图形（跳过网格检测，改用 PCA 线段） |
| `--dilate N` | 墨迹碎裂/断点时增大前处理膨胀（默认 1） |
| `--min-cov` | 对角连线判定的墨迹覆盖率阈值（默认 0.35，越低越灵敏） |

### 人工标注 `--annot` JSON 格式

当自动识别的角度 / 点名需要修正或补充时，写一份 JSON 再 `--annot` 传入：

```json
{
  "title": "第3题 几何图形",
  "points":      [ {"x": 128, "y": 150, "label": "O"} ],
  "grid_points": [ {"gx": 0, "gy": 0, "label": "O"} ],
  "arcs":        [ {"cx": 128, "cy": 150, "r": 30, "phi0": 0, "phi1": 18,
                    "label": "∠1", "color": "#2563eb"} ]
}
```

- `points`：图像像素坐标的点 + 标签。
- `grid_points`：网格坐标 `(gx, gy)`（格点索引）+ 标签，自动换算成像素坐标。
- `arcs`：圆弧 + 标签（`phi` 角度制，屏幕坐标 y 向下）。

### 检查与调参

生成后务必打开 `_ic.svg`（或 `_debug.svg`）核对：网格是否完整、两直角三角是否被填充、
顶点是否标对、角度弧位置是否合理。若错漏：
1. 先用 `--debug` 看检测线；
2. 文字/公式区域会被自动忽略（不参与网格交点的连线判定），无需处理；
3. 浅色网格或反色 → 加 `--invert`；
4. 墨迹断点 → 调大 `--dilate`；
5. 个别角度/点名 → 用 `--annot` 修正。

## 阶段 B：题图 → 解答 SVG（`_grid.svg`）

1. 读 `_ic.svg`，从网格 / 顶点 / 角度弧中提取几何关系：格点间距 `cell`、各顶点格点
   坐标 `(gx, gy)`、已知角度（弧）。
2. 用 `geomlib.py` 原语（或手写 SVG）构建答案图：画出点名（O/A/C…）、已知角、所求的
   辅助线（常用虚线）、直角符号，并在图上/标题中写明结论。
3. 风格与题图一致：网格浅灰 `#d8dee9`、外框 `#9aa5b1`、主线 `#1f2937`、填充用半透明
   色（蓝 `#dbeafe`、绿 `#dcfce7` 等）。
4. 输出 `problems/images/<name>_grid.svg`。

具体范例见 `example_p3.md`（第3题：4×4 网格，∠1/∠2 原图位置 + 平移到 O 的辅助构造，
结论 ∠1+∠2=45°）。

## 阶段 C：嵌入题页

在 `problems/pX.html` 的 `content` 中放入两张图，并复用项目内置 `openImgOverlay`
（点击放大）。结构见 `example_p3.md` 与 README "开发约定"。`id` 约定：`overlay-<id>`、
`overlayBox-<id>` 必须配套。
