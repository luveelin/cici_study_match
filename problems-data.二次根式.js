// problems-data.二次根式.js
// 由拆分脚本自动生成，请勿手改；如需修改请编辑本文件后运行 node build.js。
// 本文件仅导出「二次根式」分类的题目数组（module.exports = [...]）。

module.exports = [
{
    id: "p9",
    file: "p9.html",
    title: "p9 最简二次根式与同类二次根式",
    type: "计算填空",
    topics: ["二次根式", "最简二次根式", "同类二次根式"],
    difficulty: 3,
    category: "二次根式",
    image: "images/p9.png",
    content: `
<div class="prob-statement">
  <p>已知 $A = 5\\sqrt{2x+1}$，$B = 3\\sqrt{x+3}$，$C = \\sqrt{10x+3y}$，其中 $A$、$B$ 为最简二次根式，且 $A + B = C$，求 $\\sqrt{2y-x^2}$ 的值。</p>
</div>

<details class="kb-details">
  <summary>📌 知识点总结（点击展开／收起）</summary>

<h3>📌 知识点总结</h3>
<table class="kb-table">
  <thead><tr><th>知识点</th><th>说明</th></tr></thead>
  <tbody>
    <tr><td>最简二次根式</td><td>被开方数不含分母，不含能开得尽方的因数或式</td></tr>
    <tr><td>同类二次根式</td><td>根指数相同且被开方数相同的二次根式才能合并</td></tr>
    <tr><td>二次根式加减</td><td>先化为同类二次根式，再合并系数</td></tr>
    <tr><td>等式两边平方</td><td>二次根式等式可通过两边平方化为整式方程</td></tr>
  </tbody>
</table>
</details>

<h3>✍️ 解题过程</h3>

<h4>第一步：分析"最简二次根式"条件</h4>
<blockquote>最简二次根式：被开方数不含分母，且不含能开得尽方的因数。</blockquote>
<p>$A = 5\\sqrt{2x+1}$，$B = 3\\sqrt{x+3}$ 要为最简二次根式，根号内不能再开方。要让 $A$ 和 $B$ 能相加等于 $C$（也是一个二次根式），$A$ 和 $B$ 必须是<strong>同类二次根式</strong>（根号内相同）。</p>

<h4>第二步：令 $A$、$B$ 化为同类二次根式（详细推导）</h4>
<p>题目关键条件：$A + B = C$，即 $5\\sqrt{2x+1} + 3\\sqrt{x+3} = \\sqrt{10x+3y}$。</p>

<div class="info-box">
  <span class="box-label">🔍 核心推理：</span>左边的两个二次根式相加后，右边只得到一个二次根式。
</div>

<div class="info-box">
  <span class="box-label">📌 二次根式加减的铁律：</span>只有<strong>同类二次根式</strong>才能合并！就像 5 个苹果 + 3 个苹果 = 8 个苹果，但 5 个苹果 + 3 个橘子不能合并成一个东西。
</div>

<div class="info-box">
  <span class="box-label">🧠 反证理解：</span>如果 $2x+1 \\neq x+3$，那么 $\\sqrt{2x+1}$ 和 $\\sqrt{x+3}$ 是<strong>不同类</strong>的二次根式，它们相加后仍是两个根式的和，无法合并成一个单独的根式。但题目说 $A+B=C$，而 $C = \\sqrt{10x+3y}$ 只有一个根号！所以左边的两个根式<strong>必须能合并成一个</strong>。
</div>

<p>因此，$A$ 和 $B$ 必须是同类二次根式，即根号内的式子必须相同：</p>
<div class="formula-block">$2x + 1 = x + 3 \\quad\\rightarrow\\quad x = 2$</div>

<div class="green-box">
  <span class="box-label">✅ 代入验证：</span>当 $x=2$ 时，$A = 5\\sqrt{5}$，$B = 3\\sqrt{5}$ → $A+B = 8\\sqrt{5} = \\sqrt{320}$，确实合并成了一个根式 ✓
</div>
<p>同时验证"最简"条件：$2x+1=5$，$x+3=5$，都不是完全平方数，满足最简二次根式要求 ✓</p>

<h4>第三步：求 $y$</h4>
<p>$5\\sqrt{5} + 3\\sqrt{5} = \\sqrt{10x + 3y}$</p>
<p>$8\\sqrt{5} = \\sqrt{10 \\times 2 + 3y} = \\sqrt{20 + 3y}$</p>
<p>两边平方：$64 \\times 5 = 20 + 3y \\rightarrow 320 = 20 + 3y \\rightarrow 3y = 300 \\rightarrow y = 100$</p>

<h4>第四步：求最终结果</h4>
<p>$\\sqrt{2y - x^2} = \\sqrt{2 \\times 100 - 2^2} = \\sqrt{200 - 4} = \\sqrt{196} = 14$</p>

<div class="answer-box">
  <span class="answer-label">✅ 答案：</span><span class="answer-value">$\\sqrt{2y-x^2} = 14$</span>
</div>

`
  },

{
    id: "p4",
    file: "p4.html",
    title: "p4 同类二次根式的判定",
    type: "选择填空",
    topics: ["二次根式", "同类二次根式", "平方根"],
    difficulty: 2,
    category: "二次根式",
    image: "images/p4.png",
    content: `
<div class="prob-statement">
  <p>若最简根式 $\\sqrt[a+2b]{2a+b+3}$ 与 $\\sqrt{a-2b}$ 是同类二次根式，则 $a+b$ 的平方根是 ______。</p>
</div>

<details class="kb-details">
  <summary>📌 知识点总结（点击展开／收起）</summary>

<h3>📌 知识点总结</h3>
<table class="kb-table">
  <thead><tr><th>知识点</th><th>说明</th></tr></thead>
  <tbody>
    <tr><td>同类二次根式</td><td>两个条件：根指数相同、被开方数相同，缺一不可</td></tr>
    <tr><td>根指数识别</td><td>二次根号默认根指数为2，高次根式需看根号左上角</td></tr>
    <tr><td>平方根 vs 算术平方根</td><td>平方根有两个值 $\\pm\\sqrt{a}$，算术平方根只有一个正值</td></tr>
    <tr><td>方程组解法</td><td>代入消元法解二元一次方程组</td></tr>
  </tbody>
</table>
</details>

<h3>✍️ 解题过程</h3>
<p><strong>同类二次根式</strong>需满足两个条件：<span class="tag">根指数相同</span> <span class="tag">被开方数相同</span></p>
<p>根式 $\\sqrt[a+2b]{2a+b+3}$ 的根指数是 $a+2b$，被开方数是 $2a+b+3$。</p>
<p>第二个根式 $\\sqrt{a-2b}$ 根指数 $= 2$（默认平方根），被开方数 $= a-2b$。</p>

<p><strong>列方程组：</strong></p>
<p> ① $a + 2b = 2$（根指数相等）</p>
<p> ② $2a + b + 3 = a - 2b$（被开方数相等）</p>
<p>由②得：$a + 3b + 3 = 0 \\rightarrow a = -3b - 3$</p>
<p>代入①：$-3b - 3 + 2b = 2 \\rightarrow -b = 5 \\rightarrow b = -5$</p>
<p>则 $a = -3 \\times (-5) - 3 = 12$</p>
<p>验证 $a - 2b = 12 - (-10) = 22$（正数，被开方数合法 ✓）</p>
<p>$a + b = 12 + (-5) = 7$</p>

<div class="warn-box">
  <span class="box-label">⚠️ 注意：</span>$7$ 的平方根为 <strong>$\\pm\\sqrt{7}$</strong>。平方根有两个值，算术平方根才是 $\\sqrt{7}$！
</div>
<div class="answer-box">
  <span class="answer-label">✅ 答案：</span><span class="answer-value">$a+b$ 的平方根 $= \\pm\\sqrt{7}$</span>
</div>

`
  },

{
    id: "p6",
    file: "p6.html",
    title: "p6 整体代入法",
    type: "阅读理解+计算",
    topics: ["二次根式", "分母有理化", "整体代入法"],
    difficulty: 3,
    category: "二次根式",
    image: "images/p6.png",
    content: `
<div class="prob-statement">
  <h4>📖 阅读理解部分</h4>
  <p><strong>【原题示范】</strong>已知 $x = \\sqrt{5} + 2$，求 $x^2 - 4x - 7$ 的值。</p>
  <p><strong>解法：</strong>由 $x = \\sqrt{5} + 2$，得 $x - 2 = \\sqrt{5}$，则 $(x-2)^2 = 5$，即 $x^2 - 4x + 4 = 5$，</p>
  <p>$\\therefore\\ x^2 - 4x = 1$，整体代入得：$x^2 - 4x - 7 = 1 - 7 = -6$。</p>

  <h4>📝 应用题目</h4>
  <p>已知 $x = \\dfrac{1}{\\sqrt{10} - 3}$，求代数式 $-2x^2 + 12x - 8$ 的值。</p>
</div>

<details class="kb-details">
  <summary>📌 知识点总结（点击展开／收起）</summary>

<h3>📌 知识点总结</h3>
<table class="kb-table">
  <thead><tr><th>知识点</th><th>说明</th></tr></thead>
  <tbody>
    <tr><td>分母有理化</td><td>分子分母同乘分母的共轭因式，利用 $(a-b)(a+b) = a^2-b^2$</td></tr>
    <tr><td>整体代入法</td><td>不直接求值，而是将已知条件转化为"整体"后再代入</td></tr>
    <tr><td>配方法变形</td><td>通过移项、平方、配方构造目标式中的整体</td></tr>
    <tr><td>平方差公式</td><td>$(a+b)(a-b) = a^2-b^2$，分母有理化的核心工具</td></tr>
  </tbody>
</table>
</details>

<h3>✍️ 解题过程</h3>

<h4>第一步：分母有理化</h4>
<div class="formula-block">$x = \\dfrac{1}{\\sqrt{10} - 3} = \\dfrac{\\sqrt{10}+3}{(\\sqrt{10}-3)(\\sqrt{10}+3)} = \\dfrac{\\sqrt{10}+3}{10-9} = \\sqrt{10} + 3$</div>

<h4>第二步：构造"整体"</h4>
<p>$x = \\sqrt{10} + 3 \\rightarrow x - 3 = \\sqrt{10} \\rightarrow (x-3)^2 = 10$</p>
<p>$\\rightarrow x^2 - 6x + 9 = 10 \\rightarrow x^2 - 6x = 1$</p>

<h4>第三步：将目标式化为含 $x^2-6x$ 的形式</h4>
<div class="formula-block">$-2x^2 + 12x - 8 = -2(x^2 - 6x) - 8 = -2 \\times 1 - 8 = -2 - 8 = -10$</div>
<div class="answer-box">
  <span class="answer-label">✅ 答案：</span><span class="answer-value">$-2x^2 + 12x - 8 = -10$</span>
</div>

`
  },

{
    id: "p5",
    file: "p5.html",
    title: "p5 整体代换与链式平方",
    type: "计算填空",
    topics: ["二次根式", "完全平方公式", "整体代换"],
    difficulty: 2,
    category: "二次根式",
    image: "images/p5.png",
    content: `
<div class="prob-statement">
  <p>若 $\\sqrt{x} - \\dfrac{1}{\\sqrt{x}} = 2$，则 $\\sqrt{x^2 + \\dfrac{1}{x^2} + 14}$ 的值为 ______。</p>
</div>

<details class="kb-details">
  <summary>📌 知识点总结（点击展开／收起）</summary>

<h3>📌 知识点总结</h3>
<table class="kb-table">
  <thead><tr><th>知识点</th><th>说明</th></tr></thead>
  <tbody>
    <tr><td>链式平方技巧</td><td>从 $\\sqrt{x}-\\frac{1}{\\sqrt{x}} \\to x+\\frac{1}{x} \\to x^2+\\frac{1}{x^2}$，逐级递推</td></tr>
    <tr><td>完全平方公式</td><td>$(a-b)^2 = a^2-2ab+b^2$，$a,b$ 为根式时乘积为常数</td></tr>
    <tr><td>整体代换思想</td><td>不求单个 $x$ 的值，而是求 $x+\\frac{1}{x}$ 这类"组合"的值</td></tr>
    <tr><td>二次根式化简</td><td>$\\sqrt{48} = \\sqrt{16 \\times 3} = 4\\sqrt{3}$，提取完全平方因子</td></tr>
  </tbody>
</table>
</details>

<h3>✍️ 解题过程</h3>

<h4>第一步：分析条件</h4>
<p>由 $\\sqrt{x} - \\dfrac{1}{\\sqrt{x}} = 2$，需要 $x > 0$（使 $\\sqrt{x}$ 有意义且分母不为零）。</p>

<h4>第二步：两边平方</h4>
<p>$\\left(\\sqrt{x} - \\dfrac{1}{\\sqrt{x}}\\right)^2 = 4$</p>
<p>$x - 2 + \\dfrac{1}{x} = 4$</p>
<div class="formula-block">$x + \\dfrac{1}{x} = 6$</div>

<h4>第三步：再平方求 $x^2 + \\dfrac{1}{x^2}$</h4>
<p>$\\left(x + \\dfrac{1}{x}\\right)^2 = 36$</p>
<p>$x^2 + 2 + \\dfrac{1}{x^2} = 36$</p>
<div class="formula-block">$x^2 + \\dfrac{1}{x^2} = 34$</div>

<h4>第四步：求最终结果</h4>
<p>$\\sqrt{x^2 + \\dfrac{1}{x^2} + 14} = \\sqrt{34 + 14} = \\sqrt{48} = 4\\sqrt{3}$</p>

<div class="answer-box">
  <span class="answer-label">✅ 答案：</span><span class="answer-value">$\\sqrt{x^2 + \\frac{1}{x^2} + 14} = 4\\sqrt{3}$</span>
</div>

`
  },

{
    id: "p19",
    file: "p19.html",
    title: "p19 二次根式配凑",
    type: "二次根式",
    topics: ["二次根式", "配方法", "平方差公式", "分母有理化"],
    difficulty: 3,
    category: "二次根式",
    image: "images/p19_simplify.png",
    content: `
<div class="prob-statement">
  <p>化简：</p>
  <div class="formula-block">$\\sqrt{2023 + \\dfrac{1}{2025}} \\times \\sqrt{4050}$</div>
</div>

<details class="kb-details">
  <summary>📌 知识点总结（点击展开／收起）</summary>

<h3>📌 知识点总结</h3>
<table class="kb-table">
  <thead><tr><th>知识点</th><th>说明</th></tr></thead>
  <tbody>
    <tr><td>通分</td><td>把根号内的整数与分数统一为分式</td></tr>
    <tr><td>平方差公式</td><td>$(n-1)(n+1) = n^2 - 1$；本题用于"凑完全平方"</td></tr>
    <tr><td>配凑完全平方</td><td>$n^2 - 1 + 1 = n^2$ 巧妙化简分子</td></tr>
    <tr><td>提取完全平方</td><td>$\\sqrt{ab^2} = b\\sqrt{a}$（$b>0$）</td></tr>
    <tr><td>整体约分</td><td>分子分母同时含 $\\sqrt{2025}=45$，约分简化运算</td></tr>
  </tbody>
</table>
</details>

<h3>✍️ 解题过程</h3>

<h4>第一步：通分合并根号内</h4>
<div class="formula-block">$\\sqrt{2023 + \\dfrac{1}{2025}} = \\sqrt{\\dfrac{2023 \\times 2025 + 1}{2025}}$</div>

<h4>第二步：利用平方差公式化简分子</h4>
<p>看到 $2023 \\times 2025$，可以配成 <strong>平方差</strong>：</p>
<div class="formula-block">$2023 \\times 2025 = (2024 - 1)(2024 + 1) = 2024^2 - 1$</div>
<p>所以分子变为：</p>
<div class="formula-block">$2024^2 - 1 + 1 = 2024^2$</div>
<p>因此</p>
<div class="formula-block">$\\sqrt{2023 + \\dfrac{1}{2025}} = \\sqrt{\\dfrac{2024^2}{2025}} = \\dfrac{2024}{\\sqrt{2025}}$</div>

<h4>第三步：化简 $\\sqrt{4050}$</h4>
<p>把 $4050$ 分解质因数，提取完全平方因子：</p>
<div class="formula-block">$4050 = 81 \\times 50 = 9^2 \\times 50$</div>
<p>所以</p>
<div class="formula-block">$\\sqrt{4050} = \\sqrt{9^2 \\times 50} = 9\\sqrt{50} = 9 \\times 5\\sqrt{2} = 45\\sqrt{2}$</div>
<p>另一方面，分母 $\\sqrt{2025} = 45$，于是：</p>
<div class="formula-block">$\\dfrac{2024}{\\sqrt{2025}} \\times \\sqrt{4050} = \\dfrac{2024}{45} \\times 45\\sqrt{2} = 2024\\sqrt{2}$</div>
<div class="answer-box">
  <span class="answer-label">✅ 最终答案：</span><span class="answer-value">$2024\\sqrt{2}$</span>
</div>

`
  }
];
