# cici_study_math — 初中数学题库 Web 项目

## 项目概述

一个**纯静态 HTML** 的初中数学题库项目，收录 **14 道** 初中数学题（含完整解答），以树形导航分类展示。所有解题严格基于**初中数学知识**。

每道题页面包含：原题图片、✍️ 解题过程、📌 知识点总结（可折叠，默认收起）、🎯 举一反三、📚 南昌/江西中考类似题（同类拓展，附真题来源链接）。

> 全部解答、知识点总结、中考真题均基于初中范围（二次根式、最值问题、几何综合、函数与统计）。

## 项目结构

```
/workspace/
├── build.js                 # 核心构建脚本（模板 + KaTeX 渲染 + 生成 index/题目页），require 下方数据模块
├── problems-data.js          # 14 道题目数据（内容较长，从 build.js 抽出，require 引入）
├── index.html               # 首页（左侧树形导航 + 右侧 iframe 内容区）
├── problems/                # 题目页面
│   ├── images/             # 原题图片 + 生成的 SVG（p3_ic.svg 题图 / p3_grid.svg 解答图）
│   └── p1.html … p19.html   # 14 个独立题目页（p1/p2 由原 app1/app2 重命名）
├── fonts/                  # KaTeX 字体（60 个 .woff2/.woff/.ttf，渲染公式必须）
├── node_modules/katex/     # KaTeX 依赖（已安装，无需再 npm install）
├── rebuild_kb.py           # 恢复脚本：从生成的 HTML 还原中考真题 + 重建折叠式知识点总结
├── build_pristine_backup.js# 安全备份：重建前的纯净源码（无中考栏目，可作回滚点）
├── temp/                   # 临时/辅助脚本（rebuild_kb.py 等）
├── feature/
│   └── drawSVG/            # 几何图片 -> SVG 工具（纯 Python，详见下文"几何题图片 -> SVG"）
│       ├── geomlib.py      # 共享库：SVG 原语 + 图像几何检测
│       ├── geometry2svg.py # 通用命令行：图片 -> 题图 SVG（_ic.svg）
│       └── generate_grid.py # 第3题生成器（--manual 解答图 / 默认题图 SVG）
└── package.json            # 仅声明 katex 依赖
```

## 技术栈

- **构建脚本**：Node.js（`build.js`，CommonJS）
- **数学渲染**：KaTeX **服务端预渲染**（`katex.renderToString`），纯静态输出，无需 CDN
- **页面结构**：纯静态 HTML + CSS + JavaScript（首页用 iframe 加载题目页）
- **持久化**：`localStorage`（"已掌握"标记、上次浏览的题目）

## 构建与运行

```bash
# 1) 生成全部页面（index.html + 14 个 problems/*.html）
node build.js

# 2) 启动本地静态服务（从项目根目录启动，端口 8000）
python -m http.server 8000
#    浏览器访问：http://localhost:8000/
```

- KaTeX 已位于 `node_modules/`，**无需** `npm install`。
- `fonts/` 与 `katex.min.css` 一并被打包进页面，离线可用。
- 服务脚本强制 `no-cache`，改完 `build.js` 后重新 `node build.js` 再刷新即可看到最新结果。

## 几何题图片 -> SVG（读图转矢量，辅助解题）

几何题型经常因为只保留了位图(截图/照片)而**无法被正确读取与解析**。为此提供一组
纯 Python 工具（`feature/drawSVG/`，**仅需 Pillow + numpy，无需 OpenCV / tesseract**），
可读取几何图片并自动生成对应的矢量 **SVG**，之后每次解几何题时即可直接从 SVG
(而非位图)读取网格、顶点、角度等结构化信息。

> ⚠️ **未来解几何题，统一使用 skill `drawSVG4me`**（位于 `.codebuddy/skills/drawSVG4me/`）。
> 该 skill 封装了下文的完整工作流（图片 → 题图 SVG → 解答 SVG → 嵌入题页），并附带
> 第3题端到端范例。需要为某道几何题读取图形、生成 SVG 或构建答案图时，请调用此 skill。

### 命名约定

- `<name>_ic.svg`：**题图 svg** —— 由几何图片自动转换得到（`p3_ic.svg` 即 `p3_pic.png` 的矢量模式）。
- `<name>_grid.svg`：**解答 svg** —— 在题图基础上构建的答案图（`p3_grid.svg` 即第3题的 ∠1+∠2=45° 解答图）。

### 工作原理

1. **二值化**：Otsu 自动阈值得到墨迹掩码。
2. **网格检测**：统计每列/行墨迹投影，定位方格纸（自动推断格点间距 `cell` 与原点）。
3. **图形对角连线**：在网格交点之间采样，用"残差墨迹覆盖率"判断哪些连线被画出
   （即三角形的斜边），并自动对齐到格点。
4. **实心三角还原**：由对角线 + 网格边还原直角三角，按内部墨迹覆盖率填充。
5. **圆弧检测**：连通分量中"非线状"的用最小二乘圆拟合为角度标记弧。
6. **顶点**：线段交点 / 三角顶点标注为圆点。

### 文件

```
feature/drawSVG/
├── geomlib.py          # 共享库：SVG 绘制原语 + 图像几何检测(二值化/网格/对角/圆弧/顶点)
├── geometry2svg.py     # 命令行入口：图片 -> 题图 SVG（通用，输出 _ic.svg）
└── generate_grid.py    # 第3题生成器：--manual 解答图(p3_grid.svg) / 默认题图 SVG(p3_ic.svg)
problems/images/
├── p3_pic.png          # 原题几何图片
├── p3_ic.svg           # 自动生成的题图矢量图(网格 + 两直角三角 + 顶点 + 角度弧)
└── p3_grid.svg         # 解答矢量图(标注 O/A/C 与 ∠1+∠2=45° 的辅助构造)
```

### 用法

```bash
# 1) 通用：任意几何图片 -> 题图 SVG (_ic.svg)
python feature/drawSVG/geometry2svg.py problems/images/p3_pic.png problems/images/p3_ic.svg --vertices --snap --debug
python feature/drawSVG/geometry2svg.py in.png out_ic.svg --annot a.json   # 叠加点名/角度标注
python feature/drawSVG/geometry2svg.py in.png out_ic.svg --no-grid        # 非方格纸自由图形
python feature/drawSVG/geometry2svg.py in.png out_ic.svg --invert         # 浅色墨迹/反色图片

# 2) 第3题专用
python feature/drawSVG/generate_grid.py            # 读 p3_pic.png -> p3_ic.svg（题图）
python feature/drawSVG/generate_grid.py --manual   # 生成手绘版 p3_grid.svg（解答图）
python feature/drawSVG/generate_grid.py --input a.png --output a_ic.svg --vertices --snap
```

### 标注文件（可选）

当自动识别的角度/点名需要修正时，可用 `--annot a.json` 叠加人工标注：

```json
{
  "title": "第3题 几何图形",
  "points":      [ {"x": 128, "y": 150, "label": "O"} ],
  "grid_points": [ {"gx": 0, "gy": 0, "label": "O"} ],
  "arcs":        [ {"cx": 128, "cy": 150, "r": 30, "phi0": 0, "phi1": 18,
                    "label": "∠1", "color": "#2563eb"} ]
}
```

> 说明：自动检测对"方格纸上、由直线段与圆弧构成的几何图"效果最好；文字/公式区域
> 会被自动忽略（不参与网格交点的连线判定）。若图片含有浅色网格或反色背景，使用
> `--invert` 或调整 `--dilate` 即可。详细工作流见 skill `drawSVG4me`
>（`.codebuddy/skills/drawSVG4me/`，含 `references/example_p3.md` 端到端范例）。

## 数据格式

`problems-data.js`（`build.js` 通过 `require` 引入）中每个题目的数据结构：

```javascript
{
  id: "p9",                              // 唯一标识
  file: "p9.html",                       // 输出文件名
  title: "第9题 最简二次根式与同类二次根式",  // 显示标题
  type: "计算填空",                        // 题型
  topics: ["二次根式", "同类二次根式"],        // 知识点标签
  difficulty: 3,                          // 难度 1–4（对应 ★★★☆）
  category: "二次根式",                     // 分类（用于树形导航分组）
  image: "images/p9.png",                // 原题图片路径
  content: `...`                          // 解答内容（支持 $$...$$ 与 $...$ 的 KaTeX 公式）
}
```

`content` 内section顺序（已按需求调整）：
1. 原题图片 + 题干
2. **📌 知识点总结**（`<details class="kb-details">` 包裹，**默认收起**，点击展开/收起）
3. ✍️ 解题过程
4. 🎯 举一反三
5. 📚 南昌/江西中考类似题（同类拓展）—— 真实中考真题，附 `江西省20xx` 来源链接

> ⚠️ `build.js` 中 `content` 为 JS 模板字符串：KaTeX 命令需用**双反斜杠**（`\\frac`、`\\sqrt`），单反斜杠会被当作 JS 转义而破坏公式。

## 题目清单（14 道）

> 📐 **坐标轴几何**：几何图形绘制在 XY 直角坐标系上、并用坐标点（如 $A(0,2)$）标注的几何题。

### 坐标轴几何
| id | 题型 | 难度 | 标题 |
|------|--------------|------|------|
| p12  | 几何综合 | ★★★★ | 矩形 OABC 角度三等分 |
| p14  | 几何综合 | ★★★★ | 直线围成三角形 + 正方形 + 平行四边形 |

### 几何综合
| id | 题型 | 难度 | 标题 |
|------|--------------|------|------|
| p3   | 几何综合 | ★★★☆ | 网格中的角度求和 |
| p16  | 几何综合 | ★★★★ | 菱形中的动点 |

### 二次根式
| id | 题型 | 难度 | 标题 |
|------|--------------|------|------|
| p9   | 计算填空 | ★★★☆ | 最简二次根式与同类二次根式 |
| p4   | 选择填空 | ★★☆☆ | 同类二次根式的判定 |
| p6   | 阅读理解+计算 | ★★★☆ | 整体代入法 |
| p5   | 计算填空 | ★★☆☆ | 整体代换与链式平方 |
| p19  | 二次根式 | ★★★☆ | 二次根式配凑 |

### 最值问题
| id | 题型 | 难度 | 标题 |
|------|--------------|------|------|
| p1   | 应用题 | ★★★☆ | 篱笆围菜园 |
| p2   | 综合应用 | ★★★★ | 四边形面积最小值 |

### 函数与统计
| id | 题型 | 难度 | 标题 |
|------|--------------|------|------|
| p15  | 选择填空 | ★★☆☆ | 函数的判断 |
| p17  | 函数与统计 | ★★☆☆ | 弹簧长度与质量的函数关系 |
| p18  | 函数与统计 | ★★★☆ | 甲乙两组成绩分析（四分位数 + 箱线图 + 方差） |

**分类（树形导航 5 类，自上而下顺序）**：坐标轴几何、几何综合、二次根式、最值问题、函数与统计
**题型（8 类）**：计算填空、选择填空、阅读理解+计算、应用题、综合应用、几何综合、函数与统计、二次根式

## 功能特性

- [x] 左侧树形导航（按分类分组的文件夹，可折叠）
- [x] 侧边栏收缩 / 展开
- [x] KaTeX 数学公式（服务端预渲染，离线可用）
- [x] **双击标记"已掌握"**（绿色 ✓ + 绿色文字，存 localStorage）
- [x] 刷新保留上次浏览的题目
- [x] 每道题：原题图片、解题步骤、📌 知识点总结、🎯 举一反三
- [x] 📚 **南昌/江西中考类似题（同类拓展）**：2022–2025 年江西省/南昌市中考数学真题（同类知识点），附来源链接
- [x] 📌 **知识点总结改为可折叠、默认收起**，且移至"解题过程"上方（按需求调整）
- [x] **几何图片 -> SVG 自动转换**（`feature/drawSVG/`，纯 Python）：读取几何题位图，自动生成
      题图 SVG `<name>_ic.svg`（方格纸网格 + 直角三角 + 顶点 + 角度弧），便于解题时从结构化几何信息读取
- [x] **解答 SVG 生成**：基于题图构建解答图 `<name>_grid.svg`（第3题示例：`p3_grid.svg` 标注 O/A/C 与 ∠1+∠2=45°）
- [x] **drawSVG4me skill**：未来解几何题统一调用该 skill（`.codebuddy/skills/drawSVG4me/`），
      封装"图片 → 题图 SVG → 解答 SVG → 嵌入题页"的完整工作流

## 中考真题来源

📚 栏目内的真题来自江西省中考近 10 年卷（江西省 2021 起全省统考，此前南昌独立命题多为图片/付费文档，难以核对，故主要取 2022–2025 可核查真题）：

| 年份 | 来源 |
|------|------|
| 2022 | [21cnjy 12494008](https://zy.21cnjy.com/12494008) |
| 2023 | [xbjy 5421](https://www.xbjy.com/xhtml/202501/5421.html) |
| 2024 | [21cnjy 20635729](https://zy.21cnjy.com/20635729) |
| 2025 | [21cnjy 23238550](https://zy.21cnjy.com/23238550) |

> 中考真题内容从已成功生成的 `problems/*.html` 中还原（原始 `build.js` 源码一度丢失该栏目）。如需从零重建，运行 `python3 rebuild_kb.py` 后再次 `node build.js`（脚本会从 HTML 重新提取中考区块并重建折叠式知识点总结）。

## 维护提示

- **改内容**：编辑 `build.js` 中对应题目的 `content`，然后 `node build.js` 重新生成。
- **回滚点**：`build_pristine_backup.js` 是重建前的纯净源码；`rebuild_kb.py` 是恢复脚本。
- **查看效果**：保持本地静态服务（`python -m http.server 8000`）运行，浏览器访问 `http://localhost:8000/` 刷新即可。

## 开发约定

- **"点击查看原图"类功能必须复用 `openImgOverlay`**：项目模板已内置通用图片查看器
  `openImgOverlay(id)`（支持点击放大、拖拽移动、拖右下角手柄缩放、点 ✕ 关闭，题目原图 `p3.png`
  就在用）。**新增"点击查看原图"功能时，务必复用现有 `openImgOverlay`，不要另写弹窗逻辑。**

  用法（在题页 `content` 中），以第 3 题示意图 `p3_grid.svg` 为例：

  ```html
  <!-- 1) 示意图本体可点击（光标变放大镜），下方给文字链接 -->
  <p>
    <img src="images/p3_grid.svg" alt="网格示意图"
         onclick="openImgOverlay('p3grid')"
         style="max-width:340px; border:1px solid #e2e8f0; border-radius:6px; cursor:zoom-in;">
  </p>
  <p class="original-image-caption" onclick="openImgOverlay('p3grid')">🔍 点击查看原图</p>

  <!-- 2) 配套 overlay 结构（id 固定为 overlay-<id>，内部 box 用 startDrag / startResize） -->
  <div class="img-overlay" id="overlay-p3grid">
    <div class="img-overlay-box" id="overlayBox-p3grid" onmousedown="startDrag(event,'p3grid')">
      <span class="img-overlay-close" onclick="closeImgOverlay('p3grid')">✕</span>
      <img src="images/p3_grid.svg" alt="放大图">
      <span class="img-resize-handle" onmousedown="startResize(event,'p3grid')"></span>
    </div>
  </div>
  ```

  > 要点：`openImgOverlay` / `closeImgOverlay` / `startDrag` / `startResize` 已在每道题页脚的
  > `<script>` 中定义，无需重复实现。调用时传的 `id` 仅作为标识，**overlay 容器 `id` 必须是
  > `overlay-` + 该 id**，box 的 `id` 必须是 `overlayBox-` + 该 id，否则脚本找不到元素。
  > 缩放靠拖拽 `img-resize-handle`（右下角手柄），没有独立的 ± 按钮。

