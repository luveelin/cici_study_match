# HANDOFF.md — cici_study_math 题库项目交接文档

> 本文件与 `README.md` 同目录，供**新会话 / 接手人**快速了解项目、已完成工作、标准操作流程（SOP）与**必须避开的坑**。
> 最后更新：2026-07-12

---

## 1. 项目是什么

纯静态 HTML 初中数学题库（无后端、无 CDN）。核心玩法：

- `problems-data.js` 存所有题目数据（JS 数组，每题一个对象，`content` 是**模板字符串**）。
- `build.js`（`require` 引入数据）用 **KaTeX 服务端预渲染**生成 `index.html` + `problems/*.html`。
- 首页左侧是**树形导航**（按 `category` 分组 → 父题 → 同类拓展子题三级），右侧 iframe 显示题页。

**当前规模**：45 个题目对象 / 45 个 HTML 页面。

---

## 2. 我们做了什么（已完成）

| 工作 | 说明 |
|---|---|
| **同类拓展子题体系（核心交付）** | 为 11 大题（p2/p3/p4/p5/p6/p9/p15/p16/p17/p18/p19）建立「同类拓展」三级子菜单：每题重置偏离主题、含预渲染 SVG 的旧拓展块 → 改为 3 道同主题题 + 3 个「📄 查看详细解答」链接 → 插入 3 个带 `parent` 的子题对象 → 生成独立子页。 |
| **p16 去三角函数重写** | 用户要求 p16（菱形动点）不用 sin/cos/tan。改为纯几何（30° 直角三角形性质 + 底×高÷2），并同步清理知识点表与举一反三里的三角表述。 |
| **p1+p2 合并** | p1、p2 是同一题两问，合并为单一菜单「p2 篱笆围栏最小值」+ 单一 `p2.html`；旧 `p1.html` 已删除。 |
| **KaTeX 反斜杠防御体系（最重要）** | 固化「单反斜杠检测 + 构建校验 + 一键修复 + 真实渲染验证」闭环，并落成项目级 skill `katex-backslash-guard`。`build.js` 内置 `validateKatexBackslashes()` 在每次构建前兜底拦截。 |
| **菜单命名规范** | 写入 `README.md`：二级菜单 `p{N} 题目主题`、三级菜单 `p{N}a{N} 题目主题`。 |
| **踩坑记录** | 多类致命坑已写入 `README.md`（「⚠️ 常见致命错误：KaTeX 单反斜杠」一节）与本项目记忆。 |

**已建同类拓展的父题**：p2、p3、p4、p5、p6、p9、p15、p16、p17、p18、p19（各 3 子题，共 33 个子页）。

**尚未建立同类拓展的题**：p12、p14（对象已存在，无子题）。编号 p7/p8/p10/p11/p13 为**空缺**（数据里无对应对象，若未来要加题需新建）。

---

## 3. 标准操作流程（SOP）：给某父题加同类拓展

1. **读题**：读 `problems-data.js` 中该父题对象，确认其主题/核心知识点。
2. **重置旧块**：把父题 `content` 里偏离主题、含预渲染 KaTeX SVG 的「📚 南昌/江西中考类似题（同类拓展）」块，整块替换为 3 道**同主题**题（用 raw `$...$`，见下方铁律）。
3. **加链接**：在父题拓展块对应小题后，加相对路径超链接 `<a href="pXXa1.html">📄 查看详细解答 →</a>`（三个子题各一个）。
4. **插子题对象**：在该父题对象**之后**、下一个父题对象**之前**，插入 3 个独立题目对象，每个必须带：
   - `id: "pXXa1"` / `file: "pXXa1.html"`
   - `title: "pXXa1 题目主题"`（**遵循菜单命名规范**）
   - `parent: "pXX"`（**三级子菜单的关键，漏写就不嵌套**）
   - `category` 同父题
   - `content`：只含知识点总结 + 解题过程 + 答案，**不含**「🎯 举一反三」与「📚 同类拓展」
5. **改脚本写反斜杠**：生成脚本里 KaTeX 一律**双反斜杠**（见坑 #1）。
6. **校验 + 构建**：
   ```bash
   python .codebuddy/skills/katex-backslash-guard/scripts/fix_bs.py problems-data.js --dry-run  # 应 0
   node build.js                                                                                 # 自带 validateKatexBackslashes 兜底
   ```
7. **验证渲染**：打开生成的 `problems/pXX.html` 与 `pXXa1.html`，确认公式正常（非字母 "sqrt"）、链接就位、子页无举一反三/同类拓展。

---

## 4. ⚠️ 必须避开的坑（血泪教训，不要再踩）

### 坑 #1（头号杀手）：KaTeX 单反斜杠 → 页面显示成 "sqrt"
- **现象**：构建不报错、`katex-error==0`，但公式区域是字母串 `sqrt2`、`dfrac12`、`times`。这就是用户说的"页面仍然是 sqrt"。
- **根因**：`content` 是 JS 模板字符串。`\sqrt`（单反斜杠）经 JS 求值变成字母 `sqrt`；KaTeX(`throwOnError:false`) 不报错，直接当文本渲染。**`katex-error==0` 是假阴性，不能作为"正常"判据。**
- **铁律（写任何 content 都守这条）**：
  - 普通字符串写 `'\\sqrt'`（Python `\\` = 1 反斜杠，写入文件即 `\\sqrt` 两字符）。
  - **raw 字符串必须 `r'\\sqrt'`**，**绝不可 `r'\sqrt'`**（后者只是单反斜杠，必错）。
- **修复/兜底**：
  - 一键修复：`python .codebuddy/skills/katex-backslash-guard/scripts/fix_bs.py problems-data.js`（只补孤立单反斜杠，不动已正确的双反斜杠）。
  - 构建兜底：`build.js` 的 `validateKatexBackslashes()` 会在发现单反斜杠时**中止构建并报题目 id**（如 "题目 p6a1 的 content 字段存在单反斜杠 \dfrac"）。
  - 真实渲染验证：`python .codebuddy/skills/katex-backslash-guard/scripts/verify_render.py`（检查 `mord sqrt`/`mfrac` 真实结构 + 无裸 "sqrt" 字母，而非 `katex-error`）。
- **本项目已中招**：p6/p19（初期整段 sqrt）、p15/p17/p18/p2（写脚本时误用单反斜杠，均被构建校验拦截后 `fix_bs.py` 修复）。

### 坑 #2：子题漏写 `parent` → 不嵌套，变同级二级菜单
- `build.js` 靠 `parent` 字段把子题嵌到父题下；**没有 `parent` 会被当顶层题**，于是子题与父题并列成两个二级菜单。
- 插入子题对象时**必须同时写 `parent: "<父题id>"`**。p2a1/a2/a3 曾因此漏写，已用 `temp/fix_parent.py` 补回。

### 坑 #3：菜单命名不规范
- 二级菜单（父题）必须 `p{N} 题目主题`（如 `p2 篱笆围栏最小值`）；三级菜单（子题）必须 `p{N}a{N} 题目主题`（如 `p2a1 一面靠墙求最大面积`）。
- 早期 p3/p3a1 用过旧式 `p3同类拓展·题1`，与新规范不一致；**新题一律用新规范**。详见 `README.md`「菜单命名规则」。

### 坑 #4：用 Python 改 `problems-data.js` 时的反斜杠二次解析
- `re.sub(old, repl, t)` 的 `repl` 字符串会被正则引擎**二次解析反斜杠**，导致你写入的双反斜杠降级成单反斜杠（页面又变 sqrt）。
- **正确做法**：用 `str.replace`（字面量，不解析反斜杠）做替换；若必须用正则，repl 用 **lambda** 返回原始字符串（`lambda m: newtext`），re 不会二次解析。
- 另一例：`re.sub` 全局 `count=1` 匹配"南昌/江西中考类似题"旧块时，因该标题在文件中出现 10 处（p3 在最前），把新块错插进 p3、污染了前置题。修复：用 `git checkout -- problems-data.js` 回退，改为**只在目标父题对象范围内**替换。

### 坑 #5：`build.js` 不清旧文件 → 必须手动删残留页
- 构建只覆盖写对应文件、不删除旧文件。合并/重命名题后，旧页面会残留（如 p1+p2 合并后残留 `p1.html`）。
- **处理完删除类操作后，手动 `rm problems/<旧>.html`**，并确认 `index.html` 不再含旧链接。

### 坑 #6：测试脚本 off-by-one 吞掉花括号
- 曾为做"注入单反斜杠"负向测试，`seg[pos:pos+8]` 替换 `\\dfrac`（实长 7 字符）多吞了紧随的 `{`，使公式 `\dfrac1}{...}` 损坏。
- 做注入测试时**替换长度要精确**，或只改反斜杠数量、别动花括号。

### 坑 #7：shell 吞反斜杠 / 引号 → 用脚本文件代替内联命令
- 在 Bash 里内联跑含反斜杠/引号的正则命令，常被 shell 转义破坏（本会话多次踩中）。
- **一律把检查/处理逻辑写成 `temp/*.py` 脚本文件再用 `python` 跑**，不要在 Bash 内联写复杂正则。

---

## 5. 关键文件与工具速查

| 文件 / 工具 | 作用 |
|---|---|
| `problems-data.js` | 所有题目数据（核心编辑对象）。`content` 为模板字符串，KaTeX 必双反斜杠。 |
| `build.js` | 构建脚本，内置 `validateKatexBackslashes()` 反斜杠兜底校验。改完数据后 `node build.js`。 |
| `index.html` | 首页（导航树 + iframe）。构建生成，勿手改。 |
| `problems/*.html` | 各题页。构建生成。 |
| `.codebuddy/skills/katex-backslash-guard/` | **反斜杠防御 skill**。`scripts/fix_bs.py`（单→双）、`scripts/verify_render.py`（真实渲染验证）。新会话处理同类题应主动加载。 |
| `temp/*.py` | 历次 patch/修复脚本（p*_patch.py、fix_parent.py、fix_titles.py 等），可作后续同类操作的模板参考。 |
| `README.md` | 项目说明；含「⚠️ 常见致命错误：KaTeX 单反斜杠」与「菜单命名规则」两节，必读。 |
| `.workbuddy/memory/2026-07-12.md` | 当日完整工作日志（每个题的处理细节与踩坑）。 |
| `.workbuddy/memory/MEMORY.md` | 项目长期约定（临时文件目录、skill 位置、子题机制、写 patch 铁律等）。 |

---

## 6. 给接手人的建议

1. **开干前先加载 skill `katex-backslash-guard`**，写 patch 脚本时死守「raw 字符串写 `r'\\sqrt'`」铁律 —— 这是本项目最高频、最隐蔽的致命错误。
2. 任何改动后**第一条命令就跑 `node build.js`**，让内置校验兜底；别等用户说"又是 sqrt"才发现。
3. 改 `problems-data.js` 用 `str.replace` / lambda repl，别让正则二次解析反斜杠；复杂检查写成 `temp/*.py` 跑，别在 Bash 内联。
4. 插子题**必写 `parent`**，命名**遵循 `p{N}` / `p{N}a{N}` 规范**。
5. 删除/合并题后**手动清理 `problems/` 下残留旧 html**。
6. 验证渲染别只看 `katex-error==0`，用 `verify_render.py` 看真实结构。
