# cici_study_math — 初中数学题库 Web 项目

## 项目概述
配合AI智能体使用，把数学题图片放入项目目录，让AI解答，生成对应网页，更新HTML内容，总结崽数学知识分类要点。

**纯静态 HTML** 的初中数学题库项目，收录 **15 大题** 初中数学题（含完整解答，附 38 道同类拓展子题），以树形导航分类展示。所有解题严格基于**初中数学知识**。

每道题页面包含：原题图片、✍️ 解题过程、📌 知识点总结（可折叠，默认收起）、📚 南昌/江西中考类似题（同类拓展，附真题来源链接）。

> 注：**父题页已移除「🎯 举一反三」栏目**（2026-07-12 起），仅保留「📚 同类拓展」。子题页本就不含该栏。

> 全部解答、知识点总结、中考真题均基于初中范围（二次根式、最值问题、几何综合、坐标轴几何、函数与统计）。

## 项目结构

```
/workspace/
├── build.js                 # 核心构建脚本（模板 + KaTeX 渲染 + 生成 index/题目页），require 下方数据模块
│                           #   构建时把 node_modules/katex/dist/katex.min.css 复制到 problems/katex.css
├── problems-data.js          # 53 道题目数据（内容较长，从 build.js 抽出，require 引入）
├── index.html               # 首页（左侧树形导航 + 右侧 iframe 内容区），外链 css/index.css + js/app.js
├── initData.js             # 预置"已掌握"默认标绿清单（共享给所有访客，随站点发布）
├── css/
│   ├── index.css           # 首页样式（sidebar / tree / main 布局），原内联在 build.js，已抽离
│   └── problem.css         # 题目页样式（正文 + 图片遮罩），原内联在 build.js，已抽离
├── js/
│   ├── app.js              # 首页逻辑（侧栏折叠 / 标绿 / 树展开 / iframe 加载 / 键盘），原内联在 build.js，已抽离
│   └── problem.js          # 题目页逻辑（图片遮罩拖拽 / 缩放 / 关闭），原每页内联，已抽离为公共脚本
├── problems/                # 题目页面
│   ├── katex.css           # KaTeX 样式（构建时从 node_modules 复制，内部 url(fonts/) 解析到 problems/fonts/）
│   ├── images/             # 原题图片 + 生成的 SVG（p3_ic.svg 题图 / p3_grid.svg 解答图；p3a1_*/p3a2_* 为 p3 子题 SVG）
│   ├── p1.html … p21.html   # 独立题目页（含同类拓展子题，当前共 53 页；仅正文 + 外链 css/js，无内联样式/脚本）
│   ├── p3a1.html / p3a2.html # p3「同类拓展」题1/题2 的详细解答页（位于 problems/，作为 p3 的子菜单）
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

> **样式/脚本已外链化**：原 `build.js` 内联的 CSS/JS 已抽离到 `css/`、`js/` 公共文件，题目页与首页只保留结构 +
> `<link>`/`<script src>` 引用。改样式/逻辑直接编辑对应源文件即可（无需改 `build.js`），且浏览器可缓存复用。
```

## 技术栈

- **构建脚本**：Node.js（`build.js`，CommonJS）
- **数学渲染**：KaTeX **服务端预渲染**（`katex.renderToString`），纯静态输出，无需 CDN
- **页面结构**：纯静态 HTML + CSS + JavaScript（首页用 iframe 加载题目页）
- **持久化**：`localStorage`（个人双击的"已掌握"标记、上次浏览的题目）+ `initData.js`（预置共享的"已掌握"默认标绿清单，所有访客一致）

## 构建与运行

```bash
# 1) 生成全部页面（index.html + 全部 problems/*.html，当前 53 页）
node build.js

# 2) 启动本地静态服务（从项目根目录启动，端口 8000）
python -m http.server 8000
#    浏览器访问：http://localhost:8000/
```

- KaTeX 已位于 `node_modules/`，**无需** `npm install`。
- `fonts/` 与 `problems/katex.css`（由 `node_modules/katex` 复制）一并随页面发布，离线可用。
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
  sub: true,                             // 可选：标记为"同类拓展子题"——生成独立页面到 problemSub/ 且不进导航树
  content: `...`                          // 解答内容（支持 $$...$$ 与 $...$ 的 KaTeX 公式）
}
```

`content` 内 section 顺序（已按需求调整）：
1. **题干**（原题图片由 `image` 字段在页面**顶部统一渲染一次**，content 内不再重复内嵌原图，避免重复显示）
2. **📌 知识点总结**（`<details class="kb-details">` 包裹，**默认收起**，点击展开/收起）
3. ✍️ 解题过程
4. 📚 南昌/江西中考类似题（同类拓展）—— 真实中考真题，附 `江西省20xx` 来源链接

> 注：**父题页已移除「🎯 举一反三」栏目**（2026-07-12 起），仅保留「📚 南昌/江西中考类似题（同类拓展）」。子题页本就不含该栏（见下方「子题机制」）。

> ⚠️ **`problems-data.js` 中 `content` 为 JS 模板字符串，KaTeX 命令必须用双反斜杠**（`\\frac`、`\\sqrt`、`\\times`…）。
> 写成单反斜杠 `\sqrt` 会被 JS 当作转义、求值后变成字母 `sqrt`，KaTeX（`throwOnError:false`）会把它当普通文本渲染，
> 结果是**页面不报错、但公式显示成字母 "sqrt2"、"dfrac12" 而非 √2、½**，极难发现。详见下方「⚠️ 常见致命错误」。

### 子题（同类拓展详细解答页）机制

若某主题（如 p3）的「📚 南昌/江西中考类似题（同类拓展）」内含多道小题，可为每道小题生成**独立详细解答页**，作为父题的**子菜单**嵌在左侧导航树中；子题页内容只含解题过程与知识点总结，**不含**「🎯 举一反三」与「📚 同类拓展」栏目。

- 在 `problems-data.js` 中将子题作为独立题目对象加入数组，并设 `parent: "<父题id>"`（如 p3a1/p3a2 设 `parent: "p3"`）。
- `build.js` 会把带 `parent` 的子题**嵌套到父题菜单项下**作为可折叠子菜单（父题分组头即父题本身，点击打开父题，展开后可见各子题）；不再使用 `sub` / `problemSub/` 目录。
- 父子题均输出到 `./problems/`，图片路径直接用 `images/xxx.svg`（相对 `problems/` 目录）。
- 父题页面对应小题处，用相对路径超链接指向子题页：`p3a1.html` / `p3a2.html`。
- 子题若需题图/解答图（如网格几何），用 skill **`drawSVG4me`** 从零绘制 SVG（`_ic.svg` 题图 / `_grid.svg` 解答图），存放于 `problems/images/`，嵌入子题 `content` 并复用 `openImgOverlay` 放大查看。
- 当前实例：p3 页的题1、题2 分别链接到 `p3a1.html`、`p3a2.html`，在左侧导航树中作为 **p3「网格中的角度求和」的子菜单** 显示；二者均含 `drawSVG4me` 生成的网格题图与解答图（`p3a1_ic.svg`/`p3a1_grid.svg`、`p3a2_ic.svg`/`p3a2_grid.svg`）。

### 菜单（导航树）命名规则

左侧树形导航中每个题目的 `title` 字段按以下规则命名，**新增题目与子题时务必遵守**，保证菜单风格统一：

- **二级菜单（父题）**：`p{N} 题目主题`
  例：`p3 网格中的角度求和`、`p2 篱笆围栏最小值`、`p16 菱形中的动点`
- **三级菜单（子题）**：`p{N}a{N} 题目主题`
  例：`p2a1 一面靠墙求最大面积`、`p3a1 链式平方求 x+1/x`、`p16a1 等边三角形中动点与三角形面积函数`

> 说明：早期 p3/p4 的子题用过旧式命名 `p3同类拓展·题1`（中文「同类拓展·题N」），与新规范（`p{N}a{N}` 前缀）不一致。**新题目一律采用新规范**（`p{N}a{N} 主题`）。

## 题目清单（15 道）

> 📐 **坐标轴几何**：几何图形绘制在 XY 直角坐标系上、并用坐标点（如 $A(0,2)$）标注的几何题。

### 坐标轴几何
| id | 题型 | 难度 | 标题 |
|------|--------------|------|------|
| p12  | 几何综合 | ★★★★ | 矩形 OABC 角度三等分 |
| p14  | 几何综合 | ★★★★ | 直线围成三角形 + 正方形 + 平行四边形 |

### 几何综合
| id | 题型 | 难度 | 标题 |
|------|--------------|------|------|
| p3   | 几何综合 | ★★★☆ | 网格中的角度求和（含子菜单 p3a1/p3a2 同类拓展） |
| p3a1 | 填空 | ★★★☆ | p3a1 网格角度求和（嵌套在 p3 下） |
| p3a2 | 证明 | ★★★☆ | p3a2 网格中证明 ∠AOB=45°（嵌套在 p3 下） |
| p16  | 几何综合 | ★★★★ | 菱形中的动点 |
| p21  | 填空 | ★★★☆ | 完美勾股数（含子菜单 p21a1/p21a2/p21a3 同类拓展） |

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
| p20  | 选择填空 | ★★★☆ | 表格规律与勾股数 |
| p15  | 选择填空 | ★★☆☆ | 函数的判断 |
| p17  | 函数与统计 | ★★☆☆ | 弹簧长度与质量的函数关系 |
| p18  | 函数与统计 | ★★★☆ | 甲乙两组成绩分析（四分位数 + 箱线图 + 方差） |

**分类（树形导航 5 类，自上而下顺序）**：坐标轴几何、几何综合、二次根式、最值问题、函数与统计
**题型（8 类）**：计算填空、选择填空、阅读理解+计算、应用题、综合应用、几何综合、函数与统计、二次根式

## 功能特性

- [x] 左侧树形导航（按分类分组的文件夹，可折叠）
- [x] 侧边栏收缩 / 展开
- [x] KaTeX 数学公式（服务端预渲染，离线可用）
- [x] **预置默认标绿**（`initData.js`，所有访客共享同一份绿色 ✓，随站点发布）
- [x] **双击标记"已掌握"**（绿色 ✓ + 绿色文字，存 localStorage，仅自己可见）
- [x] 刷新保留上次浏览的题目
- [x] 每道题：原题图片、解题步骤、📌 知识点总结
- [x] 📚 **南昌/江西中考类似题（同类拓展）**：2022–2025 年江西省/南昌市中考数学真题（同类知识点），附来源链接
- [x] 📌 **知识点总结改为可折叠、默认收起**，且移至"解题过程"上方（按需求调整）
- [x] **几何图片 -> SVG 自动转换**（`feature/drawSVG/`，纯 Python）：读取几何题位图，自动生成
      题图 SVG `<name>_ic.svg`（方格纸网格 + 直角三角 + 顶点 + 角度弧），便于解题时从结构化几何信息读取
- [x] **解答 SVG 生成**：基于题图构建解答图 `<name>_grid.svg`（第3题示例：`p3_grid.svg` 标注 O/A/C 与 ∠1+∠2=45°）
- [x] **drawSVG4me skill**：未来解几何题统一调用该 skill（`.codebuddy/skills/drawSVG4me/`），
      封装"图片 → 题图 SVG → 解答 SVG → 嵌入题页"的完整工作流
- [x] **同类拓展子题独立解答页（嵌套子菜单）**：p3 页的「南昌/江西中考类似题」题1/题2 各生成独立详解页
      （`p3a1.html`/`p3a2.html`，含 `drawSVG4me` 绘制的网格题图与解答图），作为父题 **p3 的可折叠子菜单嵌在左侧导航树**中，
      通过父题头展开访问；子题页不含「🎯 举一反三」与「📚 同类拓展」栏目
- [x] **父菜单自动收起**：当某父题（如 p3）下所有子题均被标记为「已掌握」时，其左侧子菜单默认收起，减少视觉干扰

## 已掌握标记与菜单折叠规则

左侧导航的「已掌握」打勾状态与父菜单自动折叠，按以下**固定顺序**在页面加载时初始化，避免预置清单与本地缓存相互冲突：

1. **先加载预置清单 `initData.js`**（`window.__INIT_MASTERED__`，全站共享基线，随站点发布）。
2. **再应用本地缓存 `localStorage`**（个人，最终权威）：`mastered` 集合补打勾，`unmastered` 集合可取消预置项的勾选——即**本地缓存优先于预置**，用户在预置基础上取消勾选的题刷新后仍不标绿。
3. **最后判定菜单折叠/展开**：`collapseMasteredFolders()` 检查每个父题，若其下所有子题均「已掌握」则收起该子菜单，否则展开。

> 行为示例：预置 `p3a1`、`p3a2` → 页面打开时 p3 自动收起；若用户在预置基础上双击取消 `p3a1`，该取消记入 `unmastered`，刷新后 `p3a1` 不标绿、p3 因子题未全部掌握而展开。

> ⚠️ **新增子题自动标绿规则**：每次在 `problems-data.js` 中新建 `p{m}a{n}` 子题（生成对应 `problems/p{m}a{n}.html`），**必须同步把该 id 加入 `initData.js` 的 `window.__INIT_MASTERED__` 数组**，让所有访客默认标绿。漏加则该子题不会出现在预置清单中。当前已全部预置 38 个 `p{m}a{n}` 子题（详见 `initData.js`）。

## 中考真题来源

📚 栏目内的真题来自江西省中考近 10 年卷（江西省 2021 起全省统考，此前南昌独立命题多为图片/付费文档，难以核对，故主要取 2022–2025 可核查真题）：

| 年份 | 来源 |
|------|------|
| 2022 | [21cnjy 12494008](https://zy.21cnjy.com/12494008) |
| 2023 | [xbjy 5421](https://www.xbjy.com/xhtml/202501/5421.html) |
| 2024 | [21cnjy 20635729](https://zy.21cnjy.com/20635729) |
| 2025 | [21cnjy 23238550](https://zy.21cnjy.com/23238550) |

> 中考真题内容从已成功生成的 `problems/*.html` 中还原（原始 `build.js` 源码一度丢失该栏目）。如需从零重建，运行 `python3 rebuild_kb.py` 后再次 `node build.js`（脚本会从 HTML 重新提取中考区块并重建折叠式知识点总结）。

## ⚠️ 常见致命错误：KaTeX 单反斜杠（务必遵守）

这是本项目**最容易反复踩、且最隐蔽**的错误，已多次发生（p6 / p19 子页曾因此整段显示成 "sqrt"）。

### 现象
- 页面**不报错**，`katex-error` 计数为 0，看起来"正常"。
- 但公式区域显示的是字母串：`sqrt2`、`dfrac12`、`times` 等，而不是 √2、½、×。
- 用浏览器打开或预览时，肉眼看到的就是 "sqrt"——这正是用户反馈的"页面仍然是 sqrt"。

### 根因
`problems-data.js` 的 `content` 是 **JS 模板字符串**（反引号包裹）。JS 求值规则：
- `\\sqrt` → 运行时得到 `\sqrt`（一个反斜杠）→ KaTeX 正确渲染 √。
- `\sqrt`  → 运行时得到 `sqrt`（反斜杠被 JS 当转义吞掉）→ KaTeX 把 `sqrt{2}` 当字母渲染。
- 尤其 `\times` 中的 `\t` 会被 JS 当成**制表符**，破坏更严重。

### 修复（一次性全量）
仓库 `temp/fix_bs.py` 可一键修复：用正则 `(?<!\\)\\(?!\\)` 只匹配**孤立单反斜杠**并补全为双反斜杠，
**不会动已正确的双反斜杠**。已正确的内容（如 p3/p4/p5/p9 父题）不受影响。
```bash
python temp/fix_bs.py      # 把所有单反斜杠 KaTeX 命令补全为双反斜杠
node build.js             # 重新构建
```

### 防线（构建期自动拦截）
`build.js` 已内置 `validateKatexBackslashes()`：每次 `node build.js` 都会扫描所有 `content` 字段，
若发现孤立单反斜杠 KaTeX 命令，**立即报错并中止构建**，同时指出题目 id 与命令名，例如：
```
❌ 检测到 1 处 KaTeX 反斜杠错误（content 必须用双反斜杠），已中止构建：
    题目 p6a1 的 content 字段存在单反斜杠 KaTeX 命令 "\dfrac"，必须写成双反斜杠 "\\dfrac"
```
所以**一旦构建被这条错误中止，就说明某题 content 用了单反斜杠，改回双反斜杠即可**，不会生成错误页面。

### 写 patch / 生成脚本的防错铁律
用 Python 生成 `content` 时，反斜杠必须**双写**：
- 用普通字符串：`'\\sqrt'` —— Python 里 `'\\'` 表示一个反斜杠，写入文件即 `\\sqrt`（两字符，正确）。
- 用 raw 字符串 `r'...'`：**必须写成 `r'\\sqrt'`**（raw 里 `\\` = 两字符反斜杠）。**绝不可写 `r'\sqrt'`**（那只是单反斜杠，必错）。
- 验证小技巧：写完后用 `python temp/list_bs.py` 统计全文件孤立单反斜杠命令，若 >0 即存在隐患。

## 维护提示

- **改内容**：编辑 `problems-data.js`（题目数据已从 `build.js` 抽出，通过 `require` 引入）中对应题目的 `content`，然后 `node build.js` 重新生成。
- **回滚点**：`build_pristine_backup.js` 是重建前的纯净源码；`rebuild_kb.py` 是恢复脚本。
- **查看效果**：保持本地静态服务（`python -m http.server 8000`）运行，浏览器访问 `http://localhost:8000/` 刷新即可。
- **添加默认标绿**：编辑根目录 `initData.js`，在 `window.__INIT_MASTERED__` 数组中加入题目 id（对应 `problems/<id>.html`，如 `"p12"`），重新 `node build.js` 并部署，即可让所有访客看到该标题绿色 ✓。
- **新增同类拓展子题页（嵌套子菜单）**：在 `problems-data.js` 中追加子题对象并设 `parent: "<父题id>"`（如 `parent: "p3"`），`build.js` 会将其作为父题的可折叠子菜单嵌在左侧导航树；父子题均输出到 `problems/`，图片路径用 `images/xxx.svg`。父题 `content` 用相对超链接 `<id>.html` 跳转（如 `p3a1.html`）。
  - **并同步加入预置标绿**：该新子题的 id 必须同时加入 `initData.js` 的 `window.__INIT_MASTERED__` 数组（见上「⚠️ 新增子题自动标绿规则」），否则访客看不到默认绿色 ✓。

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

  > 要点：`openImgOverlay` / `closeImgOverlay` / `startDrag` / `startResize` 已在公共脚本 `js/problem.js` 中统一定义（题目页已通过外链 `<script src="../js/problem.js">` 引入），无需每页重复实现。调用时传的 `id` 仅作为标识，**overlay 容器 `id` 必须是
  > `overlay-` + 该 id**，box 的 `id` 必须是 `overlayBox-` + 该 id，否则脚本找不到元素。
  > 缩放靠拖拽 `img-resize-handle`（右下角手柄），没有独立的 ± 按钮。

