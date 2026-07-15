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



<h3>📚 南昌/江西中考类似题（同类拓展）</h3>
<div class="practice-box">
  <p><strong>题1（江西·中考·选择）：</strong>下列二次根式中，是最简二次根式的是（　）A. $\\sqrt{8}$　B. $\\sqrt{0.5}$　C. $\\sqrt{5}$　D. $\\sqrt{12}$</p>
  <p class="hint">💡 答：C。最简二次根式要求被开方数不含分母、不含能开得尽方的因数。<a href="p9a1.html" style="color:var(--accent);font-weight:600;text-decoration:none;">📄 查看详细解答 →</a></p>
  <p><strong>题2（江西·中考·选择）：</strong>下列二次根式中，与 $\\sqrt{3}$ 是同类二次根式的是（　）A. $\\sqrt{8}$　B. $\\sqrt{12}$　C. $\\sqrt{18}$　D. $\\sqrt{24}$</p>
  <p class="hint">💡 答：B。先化为最简，$\\sqrt{12}=2\\sqrt{3}$ 与 $\\sqrt{3}$ 被开方数相同。<a href="p9a2.html" style="color:var(--accent);font-weight:600;text-decoration:none;">📄 查看详细解答 →</a></p>
  <p><strong>题3（江西·中考·填空）：</strong>若最简二次根式 $\\sqrt{3a-8}$ 与 $\\sqrt{17-2a}$ 是同类二次根式，则 $a =$ ______。</p>
  <p class="hint">💡 答：$5$。同类二次根式被开方数相同，令 $3a-8=17-2a$ 解出 $a$。<a href="p9a3.html" style="color:var(--accent);font-weight:600;text-decoration:none;">📄 查看详细解答 →</a></p>
  <p class="src">📌 来源：江西中考"最简二次根式与同类二次根式"同类改编题</p>
</div>
`
  },

{
    id: "p9a1",
    file: "p9a1.html",
    title: "p9a1 最简二次根式的判定",
    type: "选择填空",
    topics: ["二次根式", "最简二次根式"],
    difficulty: 2,
    category: "二次根式",
    image: null,
    parent: "p9",
    content: `
<div class="prob-statement">
  <p><strong>（江西·中考·选择）</strong>下列二次根式中，是最简二次根式的是（　）</p>
  <p>A. $\\sqrt{8}$　B. $\\sqrt{0.5}$　C. $\\sqrt{5}$　D. $\\sqrt{12}$</p>
</div>

<details class="kb-details">
  <summary>📌 知识点总结（点击展开／收起）</summary>

<h3>📌 知识点总结</h3>
<table class="kb-table">
  <thead><tr><th>知识点</th><th>说明</th></tr></thead>
  <tbody>
    <tr><td>最简二次根式</td><td>两个条件：①被开方数不含分母；②被开方数不含能开得尽方的因数或式</td></tr>
    <tr><td>化简判定法</td><td>逐个化简，能被进一步化简的都不是最简二次根式</td></tr>
  </tbody>
</table>
</details>

<h3>✍️ 解题过程</h3>
<p>逐一判断每个选项能否继续化简：</p>
<p>A. $\\sqrt{8} = \\sqrt{4 \\times 2} = 2\\sqrt{2}$，含能开得尽方的因数 $4$，✗ 不是最简。</p>
<p>B. $\\sqrt{0.5} = \\sqrt{\\dfrac{1}{2}} = \\dfrac{\\sqrt{2}}{2}$，被开方数含分母，✗ 不是最简。</p>
<p>C. $\\sqrt{5}$，被开方数 $5$ 无分母、无能开尽方的因数，✓ 是最简。</p>
<p>D. $\\sqrt{12} = \\sqrt{4 \\times 3} = 2\\sqrt{3}$，含能开得尽方的因数 $4$，✗ 不是最简。</p>

<div class="answer-box">
  <span class="answer-label">✅ 答案：</span><span class="answer-value">C</span>
</div>
`
  },

{
    id: "p9a2",
    file: "p9a2.html",
    title: "p9a2 同类二次根式的判定",
    type: "选择填空",
    topics: ["二次根式", "同类二次根式"],
    difficulty: 2,
    category: "二次根式",
    image: null,
    parent: "p9",
    content: `
<div class="prob-statement">
  <p><strong>（江西·中考·选择）</strong>下列二次根式中，与 $\\sqrt{3}$ 是同类二次根式的是（　）</p>
  <p>A. $\\sqrt{8}$　B. $\\sqrt{12}$　C. $\\sqrt{18}$　D. $\\sqrt{24}$</p>
</div>

<details class="kb-details">
  <summary>📌 知识点总结（点击展开／收起）</summary>

<h3>📌 知识点总结</h3>
<table class="kb-table">
  <thead><tr><th>知识点</th><th>说明</th></tr></thead>
  <tbody>
    <tr><td>同类二次根式</td><td>化为最简后，被开方数相同的二次根式（根指数均为 2）</td></tr>
    <tr><td>判定步骤</td><td>先把每个根式化为最简，再比较被开方数是否相同</td></tr>
  </tbody>
</table>
</details>

<h3>✍️ 解题过程</h3>
<p>把各选项化为最简二次根式，再看被开方数是否为 $3$：</p>
<p>A. $\\sqrt{8} = 2\\sqrt{2}$，被开方数 $2$，✗</p>
<p>B. $\\sqrt{12} = 2\\sqrt{3}$，被开方数 $3$，与 $\\sqrt{3}$ 同类 ✓</p>
<p>C. $\\sqrt{18} = 3\\sqrt{2}$，被开方数 $2$，✗</p>
<p>D. $\\sqrt{24} = 2\\sqrt{6}$，被开方数 $6$，✗</p>

<div class="answer-box">
  <span class="answer-label">✅ 答案：</span><span class="answer-value">B</span>
</div>
`
  },

{
    id: "p9a3",
    file: "p9a3.html",
    title: "p9a3 由同类二次根式求参数",
    type: "计算填空",
    topics: ["二次根式", "同类二次根式", "最简二次根式"],
    difficulty: 3,
    category: "二次根式",
    image: null,
    parent: "p9",
    content: `
<div class="prob-statement">
  <p><strong>（江西·中考·填空）</strong>若最简二次根式 $\\sqrt{3a-8}$ 与 $\\sqrt{17-2a}$ 是同类二次根式，则 $a =$ ______。</p>
</div>

<details class="kb-details">
  <summary>📌 知识点总结（点击展开／收起）</summary>

<h3>📌 知识点总结</h3>
<table class="kb-table">
  <thead><tr><th>知识点</th><th>说明</th></tr></thead>
  <tbody>
    <tr><td>同类二次根式</td><td>根指数相同且被开方数相同；此处两根指数均为 2，只需被开方数相等</td></tr>
    <tr><td>列方程求参数</td><td>令两被开方数相等，解一元一次方程</td></tr>
    <tr><td>回代验证</td><td>求出参数后需验证被开方数非负、且确为最简二次根式</td></tr>
  </tbody>
</table>
</details>

<h3>✍️ 解题过程</h3>
<h4>第一步：由同类二次根式列方程</h4>
<p>两个二次根式是同类二次根式，被开方数必须相同：</p>
<div class="formula-block">$3a - 8 = 17 - 2a$</div>
<h4>第二步：解方程</h4>
<p>$3a + 2a = 17 + 8 \\quad \\Rightarrow \\quad 5a = 25 \\quad \\Rightarrow \\quad a = 5$</p>
<h4>第三步：回代验证</h4>
<p>当 $a = 5$ 时，$3a - 8 = 7$，$17 - 2a = 7$，被开方数均为 $7$（正数，且不含能开尽方的因数，为最简）✓</p>

<div class="answer-box">
  <span class="answer-label">✅ 答案：</span><span class="answer-value">$a = 5$</span>
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



<h3>📚 南昌/江西中考类似题（同类拓展）</h3>
<div class="practice-box">
<p><strong>题1（2023·江西·选择）：</strong>若 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.04em;vertical-align:-0.1744em;"></span><span class="mord sqrt"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8656em;"><span class="svg-align" style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord" style="padding-left:0.833em;"><span class="mord mathnormal">a</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord">4</span></span></span><span style="top:-2.8256em;"><span class="pstrut" style="height:3em;"></span><span class="hide-tail" style="min-width:0.853em;height:1.08em;"><svg xmlns="http://www.w3.org/2000/svg" width="400em" height="1.08em" viewBox="0 0 400000 1080" preserveAspectRatio="xMinYMin slice"><path d="M95,702
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l0 -0
c5.3,-9.3,12,-14,20,-14
H400000v40H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M834 80h400000v40h-400000z"/></svg></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.1744em;"><span></span></span></span></span></span></span></span></span> 有意义，则 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">a</span></span></span></span> 的值可以是（　）A. <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">−</span><span class="mord">1</span></span></span></span>　B. <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">0</span></span></span></span>　C. <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">2</span></span></span></span>　D. <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">6</span></span></span></span></p>
  <p class="hint">💡 答：D。由 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal">a</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.7804em;vertical-align:-0.136em;"></span><span class="mord">4</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">≥</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">0</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">⇒</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.7719em;vertical-align:-0.136em;"></span><span class="mord mathnormal">a</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">≥</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">4</span></span></span></span>。</p>
  <a href="p4a1.html" style="color:var(--accent);font-weight:600;text-decoration:none;">📄 查看详细解答 →</a>
  <p><strong>题2（2023·江西·选择）：</strong>计算 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.24em;vertical-align:-0.305em;"></span><span class="mord sqrt"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.935em;"><span class="svg-align" style="top:-3.2em;"><span class="pstrut" style="height:3.2em;"></span><span class="mord" style="padding-left:1em;"><span class="mopen">(</span><span class="mord">−</span><span class="mord">2</span><span class="mclose"><span class="mclose">)</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.7401em;"><span style="top:-2.989em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span></span></span><span style="top:-2.895em;"><span class="pstrut" style="height:3.2em;"></span><span class="hide-tail" style="min-width:1.02em;height:1.28em;"><svg xmlns="http://www.w3.org/2000/svg" width="400em" height="1.28em" viewBox="0 0 400000 1296" preserveAspectRatio="xMinYMin slice"><path d="M263,681c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l0 -0
c4.7,-7.3,11,-11,19,-11
H40000v40H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M1001 80h400000v40h-400000z"/></svg></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.305em;"><span></span></span></span></span></span></span></span></span> 的结果为（　）A. <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">−</span><span class="mord">2</span></span></span></span>　B. <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">2</span></span></span></span>　C. <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">−</span><span class="mord">4</span></span></span></span>　D. <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">4</span></span></span></span></p>
  <p class="hint">💡 答：B。<span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.24em;vertical-align:-0.305em;"></span><span class="mord sqrt"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.935em;"><span class="svg-align" style="top:-3.2em;"><span class="pstrut" style="height:3.2em;"></span><span class="mord" style="padding-left:1em;"><span class="mopen">(</span><span class="mord">−</span><span class="mord">2</span><span class="mclose"><span class="mclose">)</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.7401em;"><span style="top:-2.989em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span></span></span><span style="top:-2.895em;"><span class="pstrut" style="height:3.2em;"></span><span class="hide-tail" style="min-width:1.02em;height:1.28em;"><svg xmlns="http://www.w3.org/2000/svg" width="400em" height="1.28em" viewBox="0 0 400000 1296" preserveAspectRatio="xMinYMin slice"><path d="M263,681c0.7,0,18,39.7,52,119
  <a href="p4a2.html" style="color:var(--accent);font-weight:600;text-decoration:none;">📄 查看详细解答 →</a>
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l0 -0
c4.7,-7.3,11,-11,19,-11
H40000v40H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M1001 80h400000v40h-400000z"/></svg></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.305em;"><span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">2</span></span></span></span>（<span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.04em;vertical-align:-0.0849em;"></span><span class="mord sqrt"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.9551em;"><span class="svg-align" style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord" style="padding-left:0.833em;"><span class="mord"><span class="mord mathnormal">a</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.7401em;"><span style="top:-2.989em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span></span></span><span style="top:-2.9151em;"><span class="pstrut" style="height:3em;"></span><span class="hide-tail" style="min-width:0.853em;height:1.08em;"><svg xmlns="http://www.w3.org/2000/svg" width="400em" height="1.08em" viewBox="0 0 400000 1080" preserveAspectRatio="xMinYMin slice"><path d="M95,702
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l0 -0
c5.3,-9.3,12,-14,20,-14
H400000v40H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M834 80h400000v40h-400000z"/></svg></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.0849em;"><span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">∣</span><span class="mord mathnormal">a</span><span class="mord">∣</span></span></span></span>）。</p>
  <p><strong>题3（2024·江西·填空）：</strong>计算 $\\sqrt{12} \\div \\sqrt{3} - 1 = $ ______。</p>
  <p class="hint">💡 答：<span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span>。</p>
  <a href="p4a3.html" style="color:var(--accent);font-weight:600;text-decoration:none;">📄 查看详细解答 →</a>
  <p class="src">📌 来源：<a href="https://www.xbjy.com/xhtml/202501/5421.html" target="_blank">江西省2023年中考数学真题</a>、<a href="https://zy.21cnjy.com/20635729" target="_blank">江西省2024年中考数学真题</a></p>
</div>
`
  },

{
    id: "p4a1",
    file: "p4a1.html",
    title: "p4a1 二次根式有意义的条件",
    type: "选择填空",
    topics: ["二次根式", "有意义条件"],
    difficulty: 2,
    category: "二次根式",
    image: null,
    parent: "p4",
    content: `
<div class="prob-statement">
  <p><strong>（2023·江西·选择）</strong>若 $\\sqrt{a-4}$ 有意义，则 $a$ 的值可以是（　）</p>
  <p>A. $-1$　B. $0$　C. $2$　D. $6$</p>
</div>

<details class="kb-details">
  <summary>📌 知识点总结（点击展开／收起）</summary>

<h3>📌 知识点总结</h3>
<table class="kb-table">
  <thead><tr><th>知识点</th><th>说明</th></tr></thead>
  <tbody>
    <tr><td>二次根式有意义的条件</td><td>$\\sqrt{x}$ 有意义 ⟺ 被开方数 $x \\geq 0$</td></tr>
    <tr><td>常见易错</td><td>只看根号，忽略内部整体必须非负；结果要回到选项逐一核对</td></tr>
  </tbody>
</table>
</details>

<h3>✍️ 解题过程</h3>
<p>二次根式 $\\sqrt{a-4}$ 有意义，要求被开方数非负：</p>
<div class="formula-block">$a - 4 \\geq 0 \\quad \\Rightarrow \\quad a \\geq 4$</div>
<p>逐一核对选项：</p>
<p>A. $-1 < 4$ ✗　B. $0 < 4$ ✗　C. $2 < 4$ ✗　D. $6 \\geq 4$ ✓</p>

<div class="answer-box">
  <span class="answer-label">✅ 答案：</span><span class="answer-value">D</span>
</div>
`
  },

{
    id: "p4a2",
    file: "p4a2.html",
    title: "p4a2 算术平方根的性质",
    type: "选择填空",
    topics: ["二次根式", "算术平方根"],
    difficulty: 2,
    category: "二次根式",
    image: null,
    parent: "p4",
    content: `
<div class="prob-statement">
  <p><strong>（2023·江西·选择）</strong>计算 $\\sqrt{(-2)^2}$ 的结果为（　）</p>
  <p>A. $-2$　B. $2$　C. $-4$　D. $4$</p>
</div>

<details class="kb-details">
  <summary>📌 知识点总结（点击展开／收起）</summary>

<h3>📌 知识点总结</h3>
<table class="kb-table">
  <thead><tr><th>知识点</th><th>说明</th></tr></thead>
  <tbody>
    <tr><td>算术平方根性质</td><td>$\\sqrt{a^2} = |a|$，结果恒为非负数</td></tr>
    <tr><td>易错点</td><td>$\\sqrt{(-2)^2} \\neq -2$；先平方再开方已无负号，$\\sqrt{4}=2$</td></tr>
  </tbody>
</table>
</details>

<h3>✍️ 解题过程</h3>
<p><strong>方法一（先平方再开方）：</strong></p>
<div class="formula-block">$\\sqrt{(-2)^2} = \\sqrt{4} = 2$</div>
<p><strong>方法二（用性质）：</strong></p>
<div class="formula-block">$\\sqrt{(-2)^2} = |-2| = 2$</div>
<div class="answer-box">
  <span class="answer-label">✅ 答案：</span><span class="answer-value">B</span>
</div>
`
  },

{
    id: "p4a3",
    file: "p4a3.html",
    title: "p4a3 二次根式混合运算",
    type: "选择填空",
    topics: ["二次根式", "混合运算"],
    difficulty: 2,
    category: "二次根式",
    image: null,
    parent: "p4",
    content: `
<div class="prob-statement">
  <p><strong>（2024·江西·填空）</strong>计算 $\\sqrt{12} \\div \\sqrt{3} - 1 = $ ______。</p>
</div>

<details class="kb-details">
  <summary>📌 知识点总结（点击展开／收起）</summary>

<h3>📌 知识点总结</h3>
<table class="kb-table">
  <thead><tr><th>知识点</th><th>说明</th></tr></thead>
  <tbody>
    <tr><td>二次根式除法</td><td>$\\sqrt{a} \\div \\sqrt{b} = \\sqrt{a \\div b}\\ (a\\geq0,b>0)$</td></tr>
    <tr><td>运算顺序</td><td>先乘除后加减，化简后再相减</td></tr>
  </tbody>
</table>
</details>

<h3>✍️ 解题过程</h3>
<div class="formula-block">$\\sqrt{12} \\div \\sqrt{3} - 1 = \\sqrt{\\frac{12}{3}} - 1 = \\sqrt{4} - 1 = 2 - 1 = 1$</div>
<div class="answer-box">
  <span class="answer-label">✅ 答案：</span><span class="answer-value">$1$</span>
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



<h3>📚 南昌/江西中考类似题（同类拓展）</h3>
<div class="practice-box">
  <p><strong>题1（江西·中考·解答）：</strong>已知 $x = \\dfrac{1}{\\sqrt{5}-2}$，求 $x^2 - 4x - 1$ 的值。</p>
  <p class="hint">💡 答：$0$。分母有理化得 $x = \\sqrt{5}+2$，由 $(x-2)^2=5$ 得 $x^2-4x=1$，整体代入得 $0$。<a href="p6a1.html" style="color:var(--accent);font-weight:600;text-decoration:none;">📄 查看详细解答 →</a></p>
  <p><strong>题2（江西·中考·解答）：</strong>已知 $x = \\sqrt{6}-2$，求 $x^2 + 4x + 1$ 的值。</p>
  <p class="hint">💡 答：$3$。由 $x+2=\\sqrt{6}$ 平方得 $x^2+4x=2$，整体代入得 $3$。<a href="p6a2.html" style="color:var(--accent);font-weight:600;text-decoration:none;">📄 查看详细解答 →</a></p>
  <p><strong>题3（江西·中考·解答）：</strong>已知 $x = \\dfrac{1}{\\sqrt{3}-1}$，求 $x^2 - x - \\dfrac{1}{2}$ 的值。</p>
  <p class="hint">💡 答：$0$。分母有理化得 $x=\\dfrac{\\sqrt{3}+1}{2}$，由 $(2x-1)^2=3$ 得 $x^2-x=\\dfrac{1}{2}$，整体代入得 $0$。<a href="p6a3.html" style="color:var(--accent);font-weight:600;text-decoration:none;">📄 查看详细解答 →</a></p>
  <p class="src">📌 来源：江西中考"整体代入法与分母有理化"同类改编题</p>
</div>
`
  },

{
    id: "p6a1",
    file: "p6a1.html",
    title: "p6a1 分母有理化后整体代入求值",
    type: "计算解答",
    topics: ["二次根式", "分母有理化", "整体代入法"],
    difficulty: 3,
    category: "二次根式",
    image: null,
    parent: "p6",
    content: `
<div class="prob-statement">
  <p><strong>（江西·中考·解答）</strong>已知 $x = \\dfrac{1}{\\sqrt{5}-2}$，求 $x^2 - 4x - 1$ 的值。</p>
</div>

<details class="kb-details">
  <summary>📌 知识点总结（点击展开／收起）</summary>

<h3>📌 知识点总结</h3>
<table class="kb-table">
  <thead><tr><th>知识点</th><th>说明</th></tr></thead>
  <tbody>
    <tr><td>分母有理化</td><td>分子分母同乘分母的共轭因式 $\\sqrt{5}+2$，利用 $(a-b)(a+b)=a^2-b^2$ 消去根号</td></tr>
    <tr><td>整体代入法</td><td>不单独求 $x$，而是构造 $x-2=\\sqrt{5}$ 再平方，得到 $x^2-4x$ 这个"整体"</td></tr>
    <tr><td>完全平方公式</td><td>$(x-2)^2 = x^2 - 4x + 4$，把含根式的 $x$ 转化为整数关系</td></tr>
  </tbody>
</table>
</details>

<h3>✍️ 解题过程</h3>
<h4>第一步：分母有理化</h4>
<div class="formula-block">$x = \\dfrac{1}{\\sqrt{5}-2} = \\dfrac{\\sqrt{5}+2}{(\\sqrt{5}-2)(\\sqrt{5}+2)} = \\dfrac{\\sqrt{5}+2}{5-4} = \\sqrt{5}+2$</div>
<h4>第二步：构造"整体"</h4>
<p>由 $x = \\sqrt{5}+2$，移项得 $x - 2 = \\sqrt{5}$，两边平方：</p>
<p>$(x-2)^2 = 5 \\quad \\Rightarrow \\quad x^2 - 4x + 4 = 5 \\quad \\Rightarrow \\quad x^2 - 4x = 1$</p>
<h4>第三步：整体代入求值</h4>
<div class="formula-block">$x^2 - 4x - 1 = 1 - 1 = 0$</div>
<div class="answer-box">
  <span class="answer-label">✅ 答案：</span><span class="answer-value">$x^2 - 4x - 1 = 0$</span>
</div>
`
  },

{
    id: "p6a2",
    file: "p6a2.html",
    title: "p6a2 构造整体平方后代入求值",
    type: "计算解答",
    topics: ["二次根式", "整体代入法", "完全平方公式"],
    difficulty: 3,
    category: "二次根式",
    image: null,
    parent: "p6",
    content: `
<div class="prob-statement">
  <p><strong>（江西·中考·解答）</strong>已知 $x = \\sqrt{6}-2$，求 $x^2 + 4x + 1$ 的值。</p>
</div>

<details class="kb-details">
  <summary>📌 知识点总结（点击展开／收起）</summary>

<h3>📌 知识点总结</h3>
<table class="kb-table">
  <thead><tr><th>知识点</th><th>说明</th></tr></thead>
  <tbody>
    <tr><td>整体代入法</td><td>把 $x+2=\\sqrt{6}$ 当作整体，平方后得到 $x^2+4x$</td></tr>
    <tr><td>完全平方公式</td><td>$(x+2)^2 = x^2 + 4x + 4$</td></tr>
    <tr><td>二次根式</td><td>已知 $x$ 已带根式，无需再有理化，直接构造整体更高效</td></tr>
  </tbody>
</table>
</details>

<h3>✍️ 解题过程</h3>
<h4>第一步：移项构造整体</h4>
<p>由 $x = \\sqrt{6}-2$，移项得 $x + 2 = \\sqrt{6}$。</p>
<h4>第二步：两边平方</h4>
<p>$(x+2)^2 = 6 \\quad \\Rightarrow \\quad x^2 + 4x + 4 = 6 \\quad \\Rightarrow \\quad x^2 + 4x = 2$</p>
<h4>第三步：整体代入求值</h4>
<div class="formula-block">$x^2 + 4x + 1 = 2 + 1 = 3$</div>
<div class="answer-box">
  <span class="answer-label">✅ 答案：</span><span class="answer-value">$x^2 + 4x + 1 = 3$</span>
</div>
`
  },

{
    id: "p6a3",
    file: "p6a3.html",
    title: "p6a3 有理化后整体代入求二次式",
    type: "计算解答",
    topics: ["二次根式", "分母有理化", "整体代入法"],
    difficulty: 3,
    category: "二次根式",
    image: null,
    parent: "p6",
    content: `
<div class="prob-statement">
  <p><strong>（江西·中考·解答）</strong>已知 $x = \\dfrac{1}{\\sqrt{3}-1}$，求 $x^2 - x - \\dfrac{1}{2}$ 的值。</p>
</div>

<details class="kb-details">
  <summary>📌 知识点总结（点击展开／收起）</summary>

<h3>📌 知识点总结</h3>
<table class="kb-table">
  <thead><tr><th>知识点</th><th>说明</th></tr></thead>
  <tbody>
    <tr><td>分母有理化</td><td>分子分母同乘 $\\sqrt{3}+1$，得 $x = \\dfrac{\\sqrt{3}+1}{2}$</td></tr>
    <tr><td>整体代入法</td><td>构造 $2x-1=\\sqrt{3}$ 再平方，得到 $x^2-x$ 这一"整体"</td></tr>
    <tr><td>完全平方公式</td><td>$(2x-1)^2 = 4x^2 - 4x + 1$，展开后除以 $4$ 即为 $x^2-x$</td></tr>
  </tbody>
</table>
</details>

<h3>✍️ 解题过程</h3>
<h4>第一步：分母有理化</h4>
<div class="formula-block">$x = \\dfrac{1}{\\sqrt{3}-1} = \\dfrac{\\sqrt{3}+1}{(\\sqrt{3}-1)(\\sqrt{3}+1)} = \\dfrac{\\sqrt{3}+1}{3-1} = \\dfrac{\\sqrt{3}+1}{2}$</div>
<h4>第二步：构造"整体"</h4>
<p>由 $x = \\dfrac{\\sqrt{3}+1}{2}$，得 $2x - 1 = \\sqrt{3}$，两边平方：</p>
<p>$(2x-1)^2 = 3 \\quad \\Rightarrow \\quad 4x^2 - 4x + 1 = 3 \\quad \\Rightarrow \\quad 4x^2 - 4x = 2 \\quad \\Rightarrow \\quad x^2 - x = \\dfrac{1}{2}$</p>
<h4>第三步：整体代入求值</h4>
<div class="formula-block">$x^2 - x - \\dfrac{1}{2} = \\dfrac{1}{2} - \\dfrac{1}{2} = 0$</div>
<div class="answer-box">
  <span class="answer-label">✅ 答案：</span><span class="answer-value">$x^2 - x - \\dfrac{1}{2} = 0$</span>
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



<h3>📚 南昌/江西中考类似题（同类拓展）</h3>
<div class="practice-box">
  <p><strong>题1（江西·中考·填空）：</strong>已知 $\\sqrt{x} - \\dfrac{1}{\\sqrt{x}} = 3$，求 $x + \\dfrac{1}{x}$ 的值。</p>
  <p class="hint">💡 答：$11$。两边平方即得 $x+\\dfrac{1}{x}$，是链式平方的第一环。<a href="p5a1.html" style="color:var(--accent);font-weight:600;text-decoration:none;">📄 查看详细解答 →</a></p>
  <p><strong>题2（江西·中考·填空）：</strong>已知 $x + \\dfrac{1}{x} = 7$，求 $x^2 + \\dfrac{1}{x^2}$ 的值。</p>
  <p class="hint">💡 答：$47$。对 $x+\\dfrac{1}{x}$ 再平方一次，整体代换求出 $x^2+\\dfrac{1}{x^2}$。<a href="p5a2.html" style="color:var(--accent);font-weight:600;text-decoration:none;">📄 查看详细解答 →</a></p>
  <p><strong>题3（江西·中考·填空）：</strong>已知 $a = \\sqrt{7}+\\sqrt{5}$，$b = \\sqrt{7}-\\sqrt{5}$，求 $a^2 + b^2$ 的值。</p>
  <p class="hint">💡 答：$24$。利用 $a^2+b^2$ 与和差的整体关系，配合平方差消去根号。<a href="p5a3.html" style="color:var(--accent);font-weight:600;text-decoration:none;">📄 查看详细解答 →</a></p>
  <p class="src">📌 来源：江西中考"整体代换与链式平方"同类改编题</p>
</div>
`
  },

{
    id: "p5a1",
    file: "p5a1.html",
    title: "p5a1 链式平方求 x+1/x",
    type: "计算填空",
    topics: ["二次根式", "完全平方公式", "整体代换"],
    difficulty: 2,
    category: "二次根式",
    image: null,
    parent: "p5",
    content: `
<div class="prob-statement">
  <p><strong>（江西·中考·填空）</strong>已知 $\\sqrt{x} - \\dfrac{1}{\\sqrt{x}} = 3$，求 $x + \\dfrac{1}{x}$ 的值。</p>
</div>

<details class="kb-details">
  <summary>📌 知识点总结（点击展开／收起）</summary>

<h3>📌 知识点总结</h3>
<table class="kb-table">
  <thead><tr><th>知识点</th><th>说明</th></tr></thead>
  <tbody>
    <tr><td>完全平方公式</td><td>$(a-b)^2 = a^2 - 2ab + b^2$，两根式乘积 $\\sqrt{x}\\cdot\\dfrac{1}{\\sqrt{x}}=1$ 为常数</td></tr>
    <tr><td>整体代换</td><td>不单独求 $x$，而是把 $\\sqrt{x}-\\dfrac{1}{\\sqrt{x}}$ 当整体平方，转化出 $x+\\dfrac{1}{x}$</td></tr>
    <tr><td>定义域</td><td>$\\sqrt{x}$ 有意义且作分母，需 $x>0$</td></tr>
  </tbody>
</table>
</details>

<h3>✍️ 解题过程</h3>
<h4>第一步：确定范围</h4>
<p>由 $\\sqrt{x}$ 有意义且 $\\dfrac{1}{\\sqrt{x}}$ 的分母不为零，得 $x>0$。</p>
<h4>第二步：两边平方</h4>
<p>$\\left(\\sqrt{x} - \\dfrac{1}{\\sqrt{x}}\\right)^2 = 3^2$</p>
<p>$x - 2\\cdot\\sqrt{x}\\cdot\\dfrac{1}{\\sqrt{x}} + \\dfrac{1}{x} = 9$</p>
<p>$x - 2 + \\dfrac{1}{x} = 9$</p>
<h4>第三步：整理得结果</h4>
<div class="formula-block">$x + \\dfrac{1}{x} = 11$</div>
<div class="answer-box">
  <span class="answer-label">✅ 答案：</span><span class="answer-value">$x + \\dfrac{1}{x} = 11$</span>
</div>
`
  },

{
    id: "p5a2",
    file: "p5a2.html",
    title: "p5a2 再平方求 x^2+1/x^2",
    type: "计算填空",
    topics: ["完全平方公式", "整体代换"],
    difficulty: 2,
    category: "二次根式",
    image: null,
    parent: "p5",
    content: `
<div class="prob-statement">
  <p><strong>（江西·中考·填空）</strong>已知 $x + \\dfrac{1}{x} = 7$，求 $x^2 + \\dfrac{1}{x^2}$ 的值。</p>
</div>

<details class="kb-details">
  <summary>📌 知识点总结（点击展开／收起）</summary>

<h3>📌 知识点总结</h3>
<table class="kb-table">
  <thead><tr><th>知识点</th><th>说明</th></tr></thead>
  <tbody>
    <tr><td>完全平方公式</td><td>$(a+b)^2 = a^2 + 2ab + b^2$，其中 $x\\cdot\\dfrac{1}{x}=1$</td></tr>
    <tr><td>链式平方</td><td>由 $x+\\dfrac{1}{x}$ 再平方一次，即可递推得 $x^2+\\dfrac{1}{x^2}$</td></tr>
  </tbody>
</table>
</details>

<h3>✍️ 解题过程</h3>
<h4>第一步：对已知式两边平方</h4>
<p>$\\left(x + \\dfrac{1}{x}\\right)^2 = 7^2$</p>
<p>$x^2 + 2\\cdot x\\cdot\\dfrac{1}{x} + \\dfrac{1}{x^2} = 49$</p>
<p>$x^2 + 2 + \\dfrac{1}{x^2} = 49$</p>
<h4>第二步：整理得结果</h4>
<div class="formula-block">$x^2 + \\dfrac{1}{x^2} = 47$</div>
<div class="answer-box">
  <span class="answer-label">✅ 答案：</span><span class="answer-value">$x^2 + \\dfrac{1}{x^2} = 47$</span>
</div>
`
  },

{
    id: "p5a3",
    file: "p5a3.html",
    title: "p5a3 共轭根式求 a^2+b^2",
    type: "计算填空",
    topics: ["二次根式", "完全平方公式", "平方差公式"],
    difficulty: 2,
    category: "二次根式",
    image: null,
    parent: "p5",
    content: `
<div class="prob-statement">
  <p><strong>（江西·中考·填空）</strong>已知 $a = \\sqrt{7}+\\sqrt{5}$，$b = \\sqrt{7}-\\sqrt{5}$，求 $a^2 + b^2$ 的值。</p>
</div>

<details class="kb-details">
  <summary>📌 知识点总结（点击展开／收起）</summary>

<h3>📌 知识点总结</h3>
<table class="kb-table">
  <thead><tr><th>知识点</th><th>说明</th></tr></thead>
  <tbody>
    <tr><td>完全平方公式</td><td>$(\\sqrt{m}\\pm\\sqrt{n})^2 = m + n \\pm 2\\sqrt{mn}$</td></tr>
    <tr><td>整体代换</td><td>$a^2+b^2$ 展开后交叉项 $\\pm2\\sqrt{35}$ 相消，得整数</td></tr>
    <tr><td>平方差公式</td><td>$ab=(\\sqrt{7}+\\sqrt{5})(\\sqrt{7}-\\sqrt{5})=7-5=2$，可验证</td></tr>
  </tbody>
</table>
</details>

<h3>✍️ 解题过程</h3>
<h4>方法一：分别平方再相加</h4>
<p>$a^2 = (\\sqrt{7}+\\sqrt{5})^2 = 7 + 2\\sqrt{35} + 5 = 12 + 2\\sqrt{35}$</p>
<p>$b^2 = (\\sqrt{7}-\\sqrt{5})^2 = 7 - 2\\sqrt{35} + 5 = 12 - 2\\sqrt{35}$</p>
<div class="formula-block">$a^2 + b^2 = (12 + 2\\sqrt{35}) + (12 - 2\\sqrt{35}) = 24$</div>

<h4>方法二：整体代换</h4>
<p>$a+b = 2\\sqrt{7}$，$a-b = 2\\sqrt{5}$，由 $a^2+b^2 = \\dfrac{(a+b)^2+(a-b)^2}{2}$：</p>
<div class="formula-block">$a^2+b^2 = \\dfrac{(2\\sqrt{7})^2 + (2\\sqrt{5})^2}{2} = \\dfrac{28 + 20}{2} = 24$</div>
<div class="answer-box">
  <span class="answer-label">✅ 答案：</span><span class="answer-value">$a^2 + b^2 = 24$</span>
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



<h3>📚 南昌/江西中考类似题（同类拓展）</h3>
<div class="practice-box">
  <p><strong>题1（江西·中考·解答）：</strong>化简 $\\sqrt{3 + \\dfrac{1}{5}} \\times \\sqrt{20}$。</p>
  <p class="hint">💡 答：$8$。通分后用平方差 $3\\times 5 = 4^2-1$ 凑出完全平方分子 $\\dfrac{16}{5}$，开方得 $\\dfrac{4}{\\sqrt{5}}$；$\\sqrt{20}=2\\sqrt{5}$，与分母 $\\sqrt{5}$ 约分后得 $8$。<a href="p19a1.html" style="color:var(--accent);font-weight:600;text-decoration:none;">📄 查看详细解答 →</a></p>
  <p><strong>题2（江西·中考·解答）：</strong>化简 $\\sqrt{8 + \\dfrac{1}{10}} \\times \\sqrt{40}$。</p>
  <p class="hint">💡 答：$18$。$8\\times 10 = 9^2-1$，根号内化为 $\\dfrac{81}{10}$ 得 $\\dfrac{9}{\\sqrt{10}}$；$\\sqrt{40}=2\\sqrt{10}$，约分后得 $18$。<a href="p19a2.html" style="color:var(--accent);font-weight:600;text-decoration:none;">📄 查看详细解答 →</a></p>
  <p><strong>题3（江西·中考·解答）：</strong>化简 $\\sqrt{15 + \\dfrac{1}{17}} \\times \\sqrt{68}$。</p>
  <p class="hint">💡 答：$32$。$15\\times 17 = 16^2-1$，根号内化为 $\\dfrac{256}{17}$ 得 $\\dfrac{16}{\\sqrt{17}}$；$\\sqrt{68}=2\\sqrt{17}$，约分后得 $32$。<a href="p19a3.html" style="color:var(--accent);font-weight:600;text-decoration:none;">📄 查看详细解答 →</a></p>
  <p class="src">📌 来源：江西中考"二次根式配凑与约分"同类改编题</p>
</div>
`
  },

{
    id: "p19a1",
    file: "p19a1.html",
    title: "p19a1 配凑完全平方化简求值",
    type: "计算解答",
    topics: ["二次根式", "配方法", "平方差公式", "约分"],
    difficulty: 3,
    category: "二次根式",
    image: null,
    parent: "p19",
    content: `
<div class="prob-statement">
  <p><strong>（江西·中考·解答）</strong>化简：$\\sqrt{3 + \\dfrac{1}{5}} \\times \\sqrt{20}$。</p>
</div>

<details class="kb-details">
  <summary>📌 知识点总结（点击展开／收起）</summary>

<h3>📌 知识点总结</h3>
<table class="kb-table">
  <thead><tr><th>知识点</th><th>说明</th></tr></thead>
  <tbody>
    <tr><td>通分</td><td>把根号内整数与分数统一为分式：$\\dfrac{3\\times 5 + 1}{5}$</td></tr>
    <tr><td>平方差公式</td><td>$n(n+2)=(n+1)^2-1$；本题 $3\\times 5 = 4^2-1$ 用于凑完全平方</td></tr>
    <tr><td>提取完全平方</td><td>$\\sqrt{ab^2}=b\\sqrt{a}\ (b>0)$，$\\sqrt{20}=\\sqrt{4\\times 5}=2\\sqrt{5}$</td></tr>
    <tr><td>整体约分</td><td>分子 $\\sqrt{5}$ 与分母 $\\sqrt{5}$ 约去，化为整数</td></tr>
  </tbody>
</table>
</details>

<h3>✍️ 解题过程</h3>

<h4>第一步：通分合并根号内</h4>
<div class="formula-block">$\\sqrt{3 + \\dfrac{1}{5}} = \\sqrt{\\dfrac{3\\times 5 + 1}{5}} = \\sqrt{\\dfrac{16}{5}}$</div>

<h4>第二步：用平方差凑完全平方</h4>
<p>$3\\times 5 = (4-1)(4+1) = 4^2-1 = 15$，所以分子为 $15+1=16=4^2$：</p>
<div class="formula-block">$\\sqrt{\\dfrac{16}{5}} = \\dfrac{4}{\\sqrt{5}}$</div>

<h4>第三步：提取完全平方并约分</h4>
<p>$\\sqrt{20} = \\sqrt{4\\times 5} = 2\\sqrt{5}$，于是：</p>
<div class="formula-block">$\\dfrac{4}{\\sqrt{5}} \\times 2\\sqrt{5} = 4\\times 2 = 8$</div>
<div class="answer-box">
  <span class="answer-label">✅ 答案：</span><span class="answer-value">$8$</span>
</div>
`
  },

{
    id: "p19a2",
    file: "p19a2.html",
    title: "p19a2 配凑完全平方化简求值",
    type: "计算解答",
    topics: ["二次根式", "配方法", "平方差公式", "约分"],
    difficulty: 3,
    category: "二次根式",
    image: null,
    parent: "p19",
    content: `
<div class="prob-statement">
  <p><strong>（江西·中考·解答）</strong>化简：$\\sqrt{8 + \\dfrac{1}{10}} \\times \\sqrt{40}$。</p>
</div>

<details class="kb-details">
  <summary>📌 知识点总结（点击展开／收起）</summary>

<h3>📌 知识点总结</h3>
<table class="kb-table">
  <thead><tr><th>知识点</th><th>说明</th></tr></thead>
  <tbody>
    <tr><td>通分</td><td>把根号内统一为分式：$\\dfrac{8\\times 10 + 1}{10}$</td></tr>
    <tr><td>平方差公式</td><td>$8\\times 10 = 9^2-1$，分子化为 $81=9^2$</td></tr>
    <tr><td>提取完全平方</td><td>$\\sqrt{40}=\\sqrt{4\\times 10}=2\\sqrt{10}$</td></tr>
    <tr><td>整体约分</td><td>分子 $\\sqrt{10}$ 与分母 $\\sqrt{10}$ 约去</td></tr>
  </tbody>
</table>
</details>

<h3>✍️ 解题过程</h3>

<h4>第一步：通分合并根号内</h4>
<div class="formula-block">$\\sqrt{8 + \\dfrac{1}{10}} = \\sqrt{\\dfrac{8\\times 10 + 1}{10}} = \\sqrt{\\dfrac{81}{10}}$</div>

<h4>第二步：用平方差凑完全平方</h4>
<p>$8\\times 10 = (9-1)(9+1) = 9^2-1 = 80$，所以分子为 $80+1=81=9^2$：</p>
<div class="formula-block">$\\sqrt{\\dfrac{81}{10}} = \\dfrac{9}{\\sqrt{10}}$</div>

<h4>第三步：提取完全平方并约分</h4>
<p>$\\sqrt{40} = \\sqrt{4\\times 10} = 2\\sqrt{10}$，于是：</p>
<div class="formula-block">$\\dfrac{9}{\\sqrt{10}} \\times 2\\sqrt{10} = 9\\times 2 = 18$</div>
<div class="answer-box">
  <span class="answer-label">✅ 答案：</span><span class="answer-value">$18$</span>
</div>
`
  },

{
    id: "p19a3",
    file: "p19a3.html",
    title: "p19a3 配凑完全平方化简求值",
    type: "计算解答",
    topics: ["二次根式", "配方法", "平方差公式", "约分"],
    difficulty: 3,
    category: "二次根式",
    image: null,
    parent: "p19",
    content: `
<div class="prob-statement">
  <p><strong>（江西·中考·解答）</strong>化简：$\\sqrt{15 + \\dfrac{1}{17}} \\times \\sqrt{68}$。</p>
</div>

<details class="kb-details">
  <summary>📌 知识点总结（点击展开／收起）</summary>

<h3>📌 知识点总结</h3>
<table class="kb-table">
  <thead><tr><th>知识点</th><th>说明</th></tr></thead>
  <tbody>
    <tr><td>通分</td><td>把根号内统一为分式：$\\dfrac{15\\times 17 + 1}{17}$</td></tr>
    <tr><td>平方差公式</td><td>$15\\times 17 = 16^2-1$，分子化为 $256=16^2$</td></tr>
    <tr><td>提取完全平方</td><td>$\\sqrt{68}=\\sqrt{4\\times 17}=2\\sqrt{17}$</td></tr>
    <tr><td>整体约分</td><td>分子 $\\sqrt{17}$ 与分母 $\\sqrt{17}$ 约去</td></tr>
  </tbody>
</table>
</details>

<h3>✍️ 解题过程</h3>

<h4>第一步：通分合并根号内</h4>
<div class="formula-block">$\\sqrt{15 + \\dfrac{1}{17}} = \\sqrt{\\dfrac{15\\times 17 + 1}{17}} = \\sqrt{\\dfrac{256}{17}}$</div>

<h4>第二步：用平方差凑完全平方</h4>
<p>$15\\times 17 = (16-1)(16+1) = 16^2-1 = 255$，所以分子为 $255+1=256=16^2$：</p>
<div class="formula-block">$\\sqrt{\\dfrac{256}{17}} = \\dfrac{16}{\\sqrt{17}}$</div>

<h4>第三步：提取完全平方并约分</h4>
<p>$\\sqrt{68} = \\sqrt{4\\times 17} = 2\\sqrt{17}$，于是：</p>
<div class="formula-block">$\\dfrac{16}{\\sqrt{17}} \\times 2\\sqrt{17} = 16\\times 2 = 32$</div>
<div class="answer-box">
  <span class="answer-label">✅ 答案：</span><span class="answer-value">$32$</span>
</div>
`
  }
];
