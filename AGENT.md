# AGENT.md — cici_study_math 解题智能体操作指南

> 本文件给**接手解题任务的 AI 智能体**看。项目背景、结构、踩坑细节见 `README.md` 与 `HANDOFF.md`，本文只列**必须遵守的硬规则**与最简工作流。

---

## 🚨 三条强制铁律（每道题都必须满足）

### 铁律 1：数学符号用 KaTeX 正确渲染，杜绝单反斜杠，`katex-error = 0`
- `problems-data.*.js` 的 `content` 是 **JS 模板字符串**（反引号包裹），所有 KaTeX 命令**必须双反斜杠**：`\\sqrt`、`\\dfrac`、`\\times`、`\\triangle`、`\\angle`、`\\cdot`、`\\text` 等。
- 写成单反斜杠 `\sqrt` 会被 JS 当转义吞掉 → 渲染成字母 "sqrt"、"dfrac"，页面不报错但公式全废。
- **验证标准：生成的答案页 `katex-error` 必须为 0**，且用浏览器/预览肉眼确认公式正常（不是字母串）。
- 写 patch 脚本时：
  - 普通字符串写 `'\\sqrt'`（Python `\\`=1 反斜杠，写入文件即 `\\sqrt` 两字符）。
  - raw 字符串 `r'...'` **必须写 `r'\\sqrt'`**，**绝不可 `r'\sqrt'`**。
  - 用 `re.sub` 替换时 repl 用 **lambda** 返回原始串，避免正则二次解析降级反斜杠；优先用 `str.replace`。
- `build.js` 内置 `validateKatexBackslashes()` 会在发现单反斜杠时**中止构建**。改完数据第一条命令就跑 `node build.js`。
- 详细机制与修复脚本见 `README.md`「⚠️ 常见致命错误：KaTeX 单反斜杠」与 `HANDOFF.md` 坑 #1。

### 铁律 2：解题只用初中几何，禁用 sin / cos / tan 等三角函数
- 所有题目的解答文字、步骤推导、配图说明**只能用初二/初三已学内容**：勾股定理、含 30°/60° 直角三角形性质（"30° 所对直角边=斜边一半"、三边比 1:√3:2）、轴对称/折叠、相似/全等（AA）、垂径定理、一次函数等。
- **绝不能用 sin/cos/tan 来解释**（如"斜率=tan60°"这种表述禁止）。但**可以用「斜率 = y/x」**（即纵坐标÷横坐标）来表述直线的倾斜程度——这是初二一次函数的已学内容，不属于三角函数。特殊角斜率类结论（如 y/x = √3）一律用 30-60-90 三角形 + 勾股定理推导，再写成「斜率 = y/x」的形式。
- 相似三角形可直接用 **(AA)** 判定，不必每次都铺开全等证明（考试填空题/选择题甚至可"看过去像全等就直接算"，见 p13 页面「考试技巧」提示）。
- 子题（同类拓展）同样遵守本规则。

### 铁律 3：需画辅助线的几何题，必须生成/绘制 SVG，并把辅助线正确画进图里
- 需要辅助线的几何题（作垂线、连半径、取中点、作对称线、相似三角形高亮等），**调用项目的 SVG 图片功能**绘制矢量解题图，把辅助线画进 SVG，嵌入题页 `content`。
- 统一使用 skill **`drawSVG4me`**（`.codebuddy/skills/drawSVG4me/`，封装"图片 → 题图 SVG → 解答 SVG → 嵌入题页"工作流），或手写 SVG 存到 `problems/images/`。
- SVG 约定：
  - 题图 `xxx_ic.svg`、解答图 `xxx_grid.svg`（或 `xxx_sol.svg`），放 `problems/images/`。
  - **辅助线用虚线 + 区别于实线主体**：本项目惯例——OC 蓝虚线、OM 绿虚线、普通半径/弦灰实线、题目所求弦（如 BC/AF）可黑实线，关键辅助半径（如 OF）可红虚线，角度标记用 `∠3`/`α` 等。
  - 每道题的辅助线必须与该题**实际解法对应**（做了哪条辅助线，图上就画哪条，并标注直角符号、等角、长度等关键标度）。
- 图片显示用 `<img class="original-image" src="images/xxx.svg">`；如需"点击查看原图"放大，**复用 `openImgOverlay(id)`**（`js/problem.js` 已定义，传 id 即可，overlay 容器 `id="overlay-<id>"`、box `id="overlayBox-<id>"`），不要另写弹窗。

---

## 📁 数据与构建（速查）

- **题目数据**：`problems-data.*.js`（按分类拆分 6 个文件：二次根式/几何综合/函数与统计/勾股数定理/坐标轴几何/最值问题），由 `build.js` 通过 `require` 引入。每题一个对象，`content` 为模板字符串。
- **构建**：`node build.js` → 生成 `index.html` + `problems/*.html`（当前约 74 页，KaTeX 服务端预渲染，离线可用）。
- **预览**：`python -m http.server 8000` 后访问 `http://localhost:8000/`。
- **标绿**：新父题 id 加入 `initData.js` 的 `window.__INIT_MASTERED__` 数组，所有访客默认标绿。
- **子题机制**：在 `problems-data.*.js` 追加题目对象并设 `parent: "<父题id>"`，`build.js` 自动嵌套为父题的三级子菜单；子题页不含「举一反三」「同类拓展」。命名规范：父题 `p{N} 主题`、子题 `p{N}a{N} 主题`。

## 🧩 新增/修改一道几何题的最简流程
1. 图片放 `problems/images/`，题数据追加进对应 `problems-data.*.js` 数组（末尾对象闭合 `}` 后**必须加逗号**再插新对象）。
2. `content` 按标准 section 顺序写：原题图片（`image` 字段顶部自动渲染）→ 📌 知识点总结（`<details class="kb-details">` 默认收起）→ ✍️ 解题过程 → 📚 同类拓展（父题有，子题无）。
3. 依**铁律 2** 用纯几何推导；需辅助线则依**铁律 3** 生成 SVG 并嵌入。
4. 所有 KaTeX 依**铁律 1** 双反斜杠。
5. `node build.js`（自带反斜杠校验兜底），确认无 `katex-error`、公式正常、SVG 辅助线到位。
6. 删除/合并题后手动 `rm problems/<旧>.html` 清残留页。

## 📚 其余细节（必读，不在本文重复）
- 项目背景 / 结构 / 数据格式 / 子题机制 / 菜单命名 → **`README.md`**
- 标准操作流程 SOP、八条血泪坑（单反斜杠、漏 parent、命名、正则二次解析、残留页、外链化后别回 build.js 等）→ **`HANDOFF.md`**
- KaTeX 反斜杠防御 skill → `.codebuddy/skills/katex-backslash-guard/`
- 几何图 → SVG 工具 → `feature/drawSVG/`，统一入口 skill → `drawSVG4me`
