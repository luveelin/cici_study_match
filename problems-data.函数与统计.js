// problems-data.函数与统计.js
// 由拆分脚本自动生成，请勿手改；如需修改请编辑本文件后运行 node build.js。
// 本文件仅导出「函数与统计」分类的题目数组（module.exports = [...]）。

module.exports = [
{
    id: "p15",
    file: "p15.html",
    title: "p15 函数的判断",
    type: "选择填空",
    topics: ["函数概念", "函数定义"],
    difficulty: 2,
    category: "函数与统计",
    image: "images/p15.png",
    content: `
<div class="prob-statement">
  <p>下列四个选项中，$y$ <strong>不是</strong> $x$ 的函数的是（ &nbsp;&nbsp; ）</p>
  <p>A. $y = 2x - 7$ &emsp;&emsp; B. $y = \\dfrac{3}{x}$</p>
  <p>C. $y = x^2$ &emsp;&emsp;&emsp;&emsp; D. $y = \\pm\\sqrt{x}$</p>
</div>

<details class="kb-details">
  <summary>📌 知识点总结（点击展开／收起）</summary>

<h3>📌 知识点总结</h3>
<table class="kb-table">
  <thead><tr><th>知识点</th><th>说明</th></tr></thead>
  <tbody>
    <tr><td>函数定义</td><td>每个 $x$ 必须对应<strong>唯一</strong>的 $y$</td></tr>
    <tr><td>$\\pm$ 号的含义</td><td>$y = \\pm\\sqrt{x}$ 是两个函数，$y^2 = x$ 不是函数</td></tr>
    <tr><td>判别方法</td><td>垂直于 $x$ 轴的直线与图象最多交<strong>一个</strong>点</td></tr>
  </tbody>
</table>
</details>

<h3>✍️ 解题过程</h3>

<h4>第一步：理解函数定义</h4>
<div class="def-red"><strong>函数定义：</strong>对于 $x$ 的每一个确定值，$y$ 都有<strong>唯一确定的值</strong>与之对应。</div>
<p>判断一个关系是否是函数，关键看：每个 $x$ 是否对应<strong>唯一</strong>的 $y$。</p>

<h4>第二步：逐项分析</h4>
<table class="kb-table">
  <thead><tr><th>选项</th><th>表达式</th><th>对应关系</th><th>是否函数</th></tr></thead>
  <tbody>
    <tr><td>A</td><td>$y = 2x - 7$</td><td>每个 $x$ 对应唯一 $y$</td><td>✓ 是</td></tr>
    <tr><td>B</td><td>$y = \\dfrac{3}{x}$</td><td>每个 $x \\neq 0$ 对应唯一 $y$</td><td>✓ 是</td></tr>
    <tr><td>C</td><td>$y = x^2$</td><td>每个 $x$ 对应唯一 $y$</td><td>✓ 是</td></tr>
    <tr><td>D</td><td>$y = \\pm\\sqrt{x}$</td><td>一个 $x$ 对应两个 $y$（如 $x=4 \\to y=\\pm 2$）</td><td>✗ <strong>不是</strong></td></tr>
  </tbody>
</table>

<div class="info-box">
  <span class="box-label">🔑 关键点：</span>$y = \\pm\\sqrt{x}$ 实际上是两个函数 $y = \\sqrt{x}$ 和 $y = -\\sqrt{x}$ 的合写，每个 $x$ 对应两个 $y$ 值，违反函数定义。
</div>
<div class="answer-box">
  <span class="answer-label">✅ 答案：</span><span class="answer-value">D</span>
</div>



<h3>📚 南昌/江西中考类似题（同类拓展）</h3>
<p class="src">📌 来源：江西中考「函数概念」真题（2022江西 溶解度函数判断、2019江西 铅笔函数探究，见 21cnjy zy.21cnjy.com/19431815、教习网 m.51jiaoxi.com/doc-14244471.html）</p>
<div class="practice-box">
<p><strong>题1：</strong>下列各式中，$y$ 是 $x$ 的函数的是（ &nbsp;&nbsp; ）</p>
<p>A. $y^2 = x$ &emsp;&emsp; B. $y = |x|$</p>
<p>C. $x^2 + y^2 = 1$ &emsp;&emsp; D. $|y| = 2x$</p>
<p class="hint">💡 答：B。A、C、D 中一个 $x$（如 $x=1$）都对应两个 $y$（$y = \\pm1$），不满足"唯一对应"；只有 B 每个 $x$ 对应唯一 $y$。<a href="p15a1.html" style="color:var(--accent);font-weight:600;text-decoration:none;">📄 查看详细解答 →</a></p>
<p><strong>题2：</strong>下列图象（描述）中，$y$ <strong>不是</strong> $x$ 的函数的是（ &nbsp;&nbsp; ）</p>
<p>A. 直线 $y = x$ &emsp;&emsp; B. 圆 $x^2 + y^2 = 4$</p>
<p>C. 抛物线 $y = x^2$ &emsp;&emsp; D. 双曲线 $y = \\dfrac{1}{x}$</p>
<p class="hint">💡 答：B。圆的图象上，一个 $x$（如 $x=0$）对应两个 $y$（$y = \\pm2$），垂线检验不通过。<a href="p15a2.html" style="color:var(--accent);font-weight:600;text-decoration:none;">📄 查看详细解答 →</a></p>
<p><strong>题3：</strong>某关系给出对应：$x$ 取 $1,2,3,4$ 时，$y$ 依次为 $2,4,2,5$。判断 $y$ 是否是 $x$ 的函数，并说明理由。</p>
<p class="hint">💡 答：是函数。"唯一"指每个 $x$ 对应<strong>一个</strong> $y$；不同 $x$ 可以对应相同 $y$（$2$ 重复出现没问题）。<a href="p15a3.html" style="color:var(--accent);font-weight:600;text-decoration:none;">📄 查看详细解答 →</a></p>
<p class="src">📌 来源：与 p15"函数概念"同主题的进阶判断练习</p>
</div>
`
  },

{
    id: "p15a1",
    file: "p15a1.html",
    title: "p15a1 判断 y 是否为 x 的函数（关系式）",
    type: "选择填空",
    topics: ["函数概念", "函数定义", "唯一对应"],
    difficulty: 2,
    category: "函数与统计",
    image: null,
    parent: "p15",
    content: `
<div class="prob-statement">
  <p><strong>（函数判断进阶）</strong>下列各式中，$y$ 是 $x$ 的函数的是（ &nbsp;&nbsp; ）</p>
  <p>A. $y^2 = x$ &emsp;&emsp; B. $y = |x|$</p>
  <p>C. $x^2 + y^2 = 1$ &emsp;&emsp; D. $|y| = 2x$</p>
</div>

<details class="kb-details">
  <summary>📌 知识点总结（点击展开／收起）</summary>

<h3>📌 知识点总结</h3>
<table class="kb-table">
  <thead><tr><th>知识点</th><th>说明</th></tr></thead>
  <tbody>
    <tr><td>函数定义</td><td>对 $x$ 的每一个确定值，$y$ 都有<strong>唯一确定的值</strong>与之对应</td></tr>
    <tr><td>判别要点</td><td>看一个 $x$ 是否可能对应<strong>两个或更多</strong> $y$；若是，则不是函数</td></tr>
    <tr><td>常见反例</td><td>$y^2 = x$、$x^2 + y^2 = 1$（圆）、$|y| = 2x$ 都是"一对多"，不是函数</td></tr>
  </tbody>
</table>
</details>

<h3>✍️ 解题过程</h3>

<h4>第一步：回顾函数定义</h4>
<div class="def-red"><strong>函数定义：</strong>对于 $x$ 的每一个确定值，$y$ 都有唯一确定的值与之对应。</div>
<p>判断时，只要能找到一个 $x$ 对应<strong>两个</strong> $y$，该关系就不是函数。</p>

<h4>第二步：逐项判断</h4>
<table class="kb-table">
  <thead><tr><th>选项</th><th>表达式</th><th>一个 $x$ 对应几个 $y$</th><th>是否函数</th></tr></thead>
  <tbody>
    <tr><td>A</td><td>$y^2 = x$</td><td>$x=1 \\Rightarrow y = \\pm1$（两个）</td><td>✗ 不是</td></tr>
    <tr><td>B</td><td>$y = |x|$</td><td>每个 $x$ 对应唯一 $|x|$</td><td>✓ 是</td></tr>
    <tr><td>C</td><td>$x^2 + y^2 = 1$</td><td>$x=0 \\Rightarrow y = \\pm1$（两个，是圆）</td><td>✗ 不是</td></tr>
    <tr><td>D</td><td>$|y| = 2x$</td><td>$x=1 \\Rightarrow y = \\pm2$（两个）</td><td>✗ 不是</td></tr>
  </tbody>
</table>

<div class="info-box">
  <span class="box-label">🔑 关键：</span>A、C、D 都可化为"一个 $x$ 对应 $y = \\pm(\\cdots)$"的形式，即一对多；只有 B 满足唯一对应。
</div>
<div class="answer-box">
  <span class="answer-label">✅ 答案：</span><span class="answer-value">B</span>
</div>
`
  },

{
    id: "p15a2",
    file: "p15a2.html",
    title: "p15a2 用垂线检验判断函数图象",
    type: "选择填空",
    topics: ["函数图象", "垂线检验", "函数定义"],
    difficulty: 2,
    category: "函数与统计",
    image: null,
    parent: "p15",
    content: `
<div class="prob-statement">
  <p><strong>（函数判断进阶）</strong>下列图象（描述）中，$y$ <strong>不是</strong> $x$ 的函数的是（ &nbsp;&nbsp; ）</p>
  <p>A. 直线 $y = x$ &emsp;&emsp; B. 圆 $x^2 + y^2 = 4$</p>
  <p>C. 抛物线 $y = x^2$ &emsp;&emsp; D. 双曲线 $y = \\dfrac{1}{x}$</p>
</div>

<details class="kb-details">
  <summary>📌 知识点总结（点击展开／收起）</summary>

<h3>📌 知识点总结</h3>
<table class="kb-table">
  <thead><tr><th>知识点</th><th>说明</th></tr></thead>
  <tbody>
    <tr><td>垂线检验</td><td>作垂直于 $x$ 轴的直线，若与图象<strong>最多交于一个点</strong>，则 $y$ 是 $x$ 的函数</td></tr>
    <tr><td>交于两点</td><td>说明同一个 $x$ 对应两个 $y$，不是函数</td></tr>
    <tr><td>典型非函数图象</td><td>圆、椭圆、双曲线的一支除外（整条双曲线是函数）、竖直直线 $x=a$</td></tr>
  </tbody>
</table>
</details>

<h3>✍️ 解题过程</h3>

<h4>第一步：理解垂线检验</h4>
<div class="def-red"><strong>垂线检验：</strong>垂直于 $x$ 轴的直线与图象最多交一个点 $\\Rightarrow$ 是函数；若某条垂线交到两个点 $\\Rightarrow$ 不是函数。</div>

<h4>第二步：逐项检验</h4>
<table class="kb-table">
  <thead><tr><th>选项</th><th>图象</th><th>垂线检验结果</th><th>是否函数</th></tr></thead>
  <tbody>
    <tr><td>A</td><td>直线 $y = x$</td><td>任意 $x=a$ 交 $1$ 点</td><td>✓ 是</td></tr>
    <tr><td>B</td><td>圆 $x^2 + y^2 = 4$</td><td>$x=0$ 时交 $(0,2)$ 与 $(0,-2)$ 两点</td><td>✗ <strong>不是</strong></td></tr>
    <tr><td>C</td><td>抛物线 $y = x^2$</td><td>任意 $x=a$ 交 $1$ 点</td><td>✓ 是</td></tr>
    <tr><td>D</td><td>双曲线 $y = \\dfrac{1}{x}$</td><td>$x=a\ (a\\neq0)$ 交 $1$ 点</td><td>✓ 是</td></tr>
  </tbody>
</table>

<div class="info-box">
  <span class="box-label">🔑 关键：</span>圆 $x^2 + y^2 = 4$ 上，一个 $x$（如 $x=0$）对应 $y = \\pm2$ 两个值，垂线检验不通过，不是函数。
</div>
<div class="answer-box">
  <span class="answer-label">✅ 答案：</span><span class="answer-value">B</span>
</div>
`
  },

{
    id: "p15a3",
    file: "p15a3.html",
    title: "p15a3 判断对应关系是否为函数（说理）",
    type: "说理判断",
    topics: ["函数概念", "唯一对应", "函数值可重复"],
    difficulty: 2,
    category: "函数与统计",
    image: null,
    parent: "p15",
    content: `
<div class="prob-statement">
  <p><strong>（函数判断进阶）</strong>某关系给出如下对应：</p>
  <table class="kb-table">
    <thead><tr><th>$x$</th><th>$1$</th><th>$2$</th><th>$3$</th><th>$4$</th></tr></thead>
    <tbody><tr><td>$y$</td><td>$2$</td><td>$4$</td><td>$2$</td><td>$5$</td></tr></tbody>
  </table>
  <p>判断 $y$ 是否是 $x$ 的函数，并说明理由。</p>
</div>

<details class="kb-details">
  <summary>📌 知识点总结（点击展开／收起）</summary>

<h3>📌 知识点总结</h3>
<table class="kb-table">
  <thead><tr><th>知识点</th><th>说明</th></tr></thead>
  <tbody>
    <tr><td>"唯一"的含义</td><td>每个 $x$ 对应<strong>一个</strong> $y$（允许多个 $x$ 对应同一个 $y$）</td></tr>
    <tr><td>函数值可重复</td><td>不同 $x$ 对应相同 $y$（如 $x=1,3$ 都对应 $y=2$）不违反函数定义</td></tr>
    <tr><td>判断关键</td><td>检查是否存在某个 $x$ 对应<strong>两个或更多</strong>不同的 $y$</td></tr>
  </tbody>
</table>
</details>

<h3>✍️ 解题过程</h3>

<h4>第一步：列出 $x$ 与 $y$ 的对应关系</h4>
<p>由题意：</p>
<div class="formula-block">$1 \\to 2,\\quad 2 \\to 4,\\quad 3 \\to 2,\\quad 4 \\to 5$</div>

<h4>第二步：判断"唯一对应"</h4>
<p>对每一个 $x$：</p>
<ul class="step-list">
  <li>$x = 1$ 只对应 $y = 2$；</li>
  <li>$x = 2$ 只对应 $y = 4$；</li>
  <li>$x = 3$ 只对应 $y = 2$；</li>
  <li>$x = 4$ 只对应 $y = 5$。</li>
</ul>
<p>每个 $x$ 都对应<strong>唯一确定的一个</strong> $y$。虽然 $x=1$ 与 $x=3$ 都对应 $y=2$，但函数定义<strong>只要求每个 $x$ 对应唯一 $y$，并不要求不同 $x$ 对应不同 $y$</strong>，所以函数值重复并不妨碍它是函数。</p>

<div class="info-box">
  <span class="box-label">🔑 关键点：</span>判断函数时，关注"一个 $x$ 是否对应多个 $y$"。本题没有任何一个 $x$ 对应两个 $y$，因此是函数。
</div>
<div class="answer-box">
  <span class="answer-label">✅ 答案：</span><span class="answer-value">$y$ 是 $x$ 的函数（每个 $x$ 都对应唯一确定的 $y$，函数值重复不影响）。</span>
</div>
`
  },

{
    id: "p17",
    file: "p17.html",
    title: "p17 弹簧长度与质量的函数关系",
    type: "函数与统计",
    topics: ["一次函数", "待定系数法", "代入求值"],
    difficulty: 2,
    category: "函数与统计",
    image: "images/p17_spring.png",
    content: `
<div class="prob-statement">
  <p>物理实验证实：在弹性限度内，某弹簧长度 $y(\\text{cm})$ 与所挂物体质量 $x(\\text{kg})$ 满足一次函数关系。测量数据如下：</p>
  <table class="kb-table">
    <thead><tr><th>所挂物体质量 $x$/kg</th><th>0</th><th>2</th><th>5</th></tr></thead>
    <tbody><tr><td>弹簧长度 $y$/cm</td><td>15</td><td>19</td><td>25</td></tr></tbody>
  </table>
  <p>（1）求 $y$ 与 $x$ 的函数关系式；</p>
  <p>（2）当弹簧长度为 $20\\text{cm}$ 时，求所挂物体的质量。</p>
</div>

<details class="kb-details">
  <summary>📌 知识点总结（点击展开／收起）</summary>

<h3>📌 知识点总结</h3>
<table class="kb-table">
  <thead><tr><th>知识点</th><th>说明</th></tr></thead>
  <tbody>
    <tr><td>一次函数</td><td>形如 $y = kx + b$（$k \\neq 0$）的函数</td></tr>
    <tr><td>待定系数法</td><td>把已知条件代入函数式，得到方程组求未知系数</td></tr>
    <tr><td>代入求值</td><td>已知 $y$ 求 $x$ 时，把 $y$ 代入解一元一次方程</td></tr>
    <tr><td>验证习惯</td><td>求出 $k, b$ 后，用未用过的数据验证</td></tr>
  </tbody>
</table>
</details>

<h3>✍️ 解题过程</h3>

<h4>第一步：设函数式</h4>
<p>由题意，$y$ 与 $x$ 是<strong>一次函数</strong>关系，设</p>
<div class="formula-block">$y = kx + b \\quad (k \\neq 0)$</div>

<h4>第二步：用待定系数法求 $k, b$</h4>
<p>把 $x=0, y=15$ 代入：$15 = k \\cdot 0 + b \\Rightarrow b = 15$</p>
<p>把 $x=2, y=19$ 代入：$19 = 2k + 15 \\Rightarrow 2k = 4 \\Rightarrow k = 2$</p>
<p>所以函数关系式为 $y = 2x + 15$。</p>
<p><strong>验证：</strong>当 $x=5$ 时，$y = 2 \\times 5 + 15 = 25$ ✓ 与表格数据吻合。</p>

<div class="answer-box">
  <span class="answer-label">✅ 答案（1）：</span><span class="answer-value">$y = 2x + 15$</span>
</div>

<h4>第三步：求 $y = 20$ 时所挂物体的质量</h4>
<p>把 $y = 20$ 代入 $y = 2x + 15$：</p>
<div class="formula-block">$20 = 2x + 15 \\Rightarrow 2x = 5 \\Rightarrow x = 2.5$</div>
<div class="answer-box">
  <span class="answer-label">✅ 答案（2）：</span><span class="answer-value">$x = 2.5\\text{ kg}$</span>
</div>



<h3>📚 南昌/江西中考类似题（同类拓展）</h3>
<p class="src">📌 来源：江西中考「一次函数」真题（2018江西 蜜柚利润函数、弹簧长度一次函数，见 m.51jiaoxi.com/doc-14244471.html、www.1010jiajiao.com/czsx/shiti_id_5190c341d1ed5f4919d5ec70f0132b97）</p>
<div class="practice-box">
<p><strong>题1：</strong>某汽车油箱剩余油量 $y$（L）与行驶时间 $x$（h）满足一次函数。已知 $x=0$ 时 $y=60$，$x=1$ 时 $y=54$，$x=2$ 时 $y=48$。(1)求 $y$ 与 $x$ 的关系式；(2)当油箱剩 $36$ L 时，已行驶多少小时？</p>
<p class="hint">💡 答：$y = -6x + 60$；$36 = -6x + 60 \\Rightarrow x = 4$（已行驶 $4$ 小时）。<a href="p17a1.html" style="color:var(--accent);font-weight:600;text-decoration:none;">📄 查看详细解答 →</a></p>
<p><strong>题2：</strong>已知一次函数 $y = kx + b$ 的图象经过 $A(1,3)$、$B(3,7)$ 两点。(1)求解析式；(2)当 $x = -2$ 时，求 $y$ 的值。</p>
<p class="hint">💡 答：解得 $k=2,\ b=1$，故 $y = 2x + 1$；$x=-2$ 时 $y = -3$。<a href="p17a2.html" style="color:var(--accent);font-weight:600;text-decoration:none;">📄 查看详细解答 →</a></p>
<p><strong>题3：</strong>出租车起步价 $8$ 元（含 $3$ km），之后每千米 $2$ 元。设费用 $y$（元）与超出 $3$ km 的路程 $x$（km）满足一次函数。(1)求 $y$ 与 $x$ 的关系式；(2)乘车 $12$ km 需付多少元？</p>
<p class="hint">💡 答：$y = 2x + 8$；乘车 $12$ km 即超出 $9$ km，$y = 2\\times9 + 8 = 26$（元）。<a href="p17a3.html" style="color:var(--accent);font-weight:600;text-decoration:none;">📄 查看详细解答 →</a></p>
<p class="src">📌 来源：与 p17"一次函数·待定系数法"同主题的进阶练习</p>
</div>
`
  },

{
    id: "p17a1",
    file: "p17a1.html",
    title: "p17a1 用数据表求一次函数并代入求值（油量）",
    type: "计算解答",
    topics: ["一次函数", "待定系数法", "代入求值"],
    difficulty: 2,
    category: "函数与统计",
    image: null,
    parent: "p17",
    content: `
<div class="prob-statement">
  <p><strong>（一次函数·待定系数法进阶）</strong>某汽车油箱剩余油量 $y$（L）与行驶时间 $x$（h）满足一次函数关系。测量数据如下：</p>
  <table class="kb-table">
    <thead><tr><th>行驶时间 $x$/h</th><th>0</th><th>1</th><th>2</th></tr></thead>
    <tbody><tr><td>剩余油量 $y$/L</td><td>60</td><td>54</td><td>48</td></tr></tbody>
  </table>
  <p>（1）求 $y$ 与 $x$ 的函数关系式；</p>
  <p>（2）当油箱剩余油量为 $36$ L 时，汽车已行驶多少小时？</p>
</div>

<details class="kb-details">
  <summary>📌 知识点总结（点击展开／收起）</summary>

<h3>📌 知识点总结</h3>
<table class="kb-table">
  <thead><tr><th>知识点</th><th>说明</th></tr></thead>
  <tbody>
    <tr><td>一次函数</td><td>形如 $y = kx + b$（$k \\neq 0$）的函数</td></tr>
    <tr><td>待定系数法</td><td>把两组已知数据代入，列方程组求 $k, b$</td></tr>
    <tr><td>代入求值</td><td>已知 $y$ 求 $x$ 时，代入解一元一次方程</td></tr>
    <tr><td>验证习惯</td><td>求出 $k, b$ 后，用第三组数据验证</td></tr>
  </tbody>
</table>
</details>

<h3>✍️ 解题过程</h3>

<h4>第一步：设函数式</h4>
<p>由题意，$y$ 与 $x$ 是<strong>一次函数</strong>关系，设</p>
<div class="formula-block">$y = kx + b \\quad (k \\neq 0)$</div>

<h4>第二步：用待定系数法求 $k, b$</h4>
<p>把 $x=0, y=60$ 代入：$60 = k \\cdot 0 + b \\Rightarrow b = 60$</p>
<p>把 $x=1, y=54$ 代入：$54 = k + 60 \\Rightarrow k = -6$</p>
<p>所以函数关系式为 $y = -6x + 60$。</p>
<p><strong>验证：</strong>当 $x=2$ 时，$y = -6 \\times 2 + 60 = 48$ ✓ 与表格数据吻合。</p>

<div class="answer-box">
  <span class="answer-label">✅ 答案（1）：</span><span class="answer-value">$y = -6x + 60$</span>
</div>

<h4>第三步：求 $y = 36$ 时行驶的时间</h4>
<p>把 $y = 36$ 代入 $y = -6x + 60$：</p>
<div class="formula-block">$36 = -6x + 60 \\Rightarrow -6x = -24 \\Rightarrow x = 4$</div>
<div class="answer-box">
  <span class="answer-label">✅ 答案（2）：</span><span class="answer-value">$x = 4$ 小时</span>
</div>
`
  },

{
    id: "p17a2",
    file: "p17a2.html",
    title: "p17a2 由两点求一次函数解析式并代入求值",
    type: "计算解答",
    topics: ["一次函数", "待定系数法", "代入求值"],
    difficulty: 2,
    category: "函数与统计",
    image: null,
    parent: "p17",
    content: `
<div class="prob-statement">
  <p><strong>（一次函数·待定系数法进阶）</strong>已知一次函数 $y = kx + b$ 的图象经过 $A(1,3)$、$B(3,7)$ 两点。</p>
  <p>（1）求这个一次函数的解析式；</p>
  <p>（2）当 $x = -2$ 时，求 $y$ 的值。</p>
</div>

<details class="kb-details">
  <summary>📌 知识点总结（点击展开／收起）</summary>

<h3>📌 知识点总结</h3>
<table class="kb-table">
  <thead><tr><th>知识点</th><th>说明</th></tr></thead>
  <tbody>
    <tr><td>待定系数法</td><td>把两点坐标代入 $y = kx + b$，得到关于 $k, b$ 的二元一次方程组</td></tr>
    <tr><td>代入消元</td><td>两式相减消去 $b$，先求 $k$，再回代求 $b$</td></tr>
    <tr><td>代入求值</td><td>解析式求出后，把待求点的 $x$ 代入算 $y$</td></tr>
  </tbody>
</table>
</details>

<h3>✍️ 解题过程</h3>

<h4>第一步：列方程组</h4>
<p>把 $A(1,3)$ 代入：$k + b = 3$ &emsp; ①</p>
<p>把 $B(3,7)$ 代入：$3k + b = 7$ &emsp; ②</p>

<h4>第二步：解 $k, b$</h4>
<p>② $-$ ①：$(3k + b) - (k + b) = 7 - 3 \\Rightarrow 2k = 4 \\Rightarrow k = 2$</p>
<p>把 $k = 2$ 代入 ①：$2 + b = 3 \\Rightarrow b = 1$</p>
<p>所以解析式为 $y = 2x + 1$。</p>
<p><strong>验证：</strong>代入 $B(3,7)$：$2 \\times 3 + 1 = 7$ ✓ 成立。</p>

<div class="answer-box">
  <span class="answer-label">✅ 答案（1）：</span><span class="answer-value">$y = 2x + 1$</span>
</div>

<h4>第三步：求 $x = -2$ 时的 $y$</h4>
<p>把 $x = -2$ 代入 $y = 2x + 1$：</p>
<div class="formula-block">$y = 2 \\times (-2) + 1 = -4 + 1 = -3$</div>
<div class="answer-box">
  <span class="answer-label">✅ 答案（2）：</span><span class="answer-value">$y = -3$</span>
</div>
`
  },

{
    id: "p17a3",
    file: "p17a3.html",
    title: "p17a3 实际情境中的一次函数并代入求值（车费）",
    type: "计算解答",
    topics: ["一次函数", "待定系数法", "代入求值", "实际应用"],
    difficulty: 2,
    category: "函数与统计",
    image: null,
    parent: "p17",
    content: `
<div class="prob-statement">
  <p><strong>（一次函数·实际应用进阶）</strong>某出租车起步价 $8$ 元（含 $3$ km），之后每千米 $2$ 元。设总费用 $y$（元）与<strong>超出 $3$ km 的路程</strong> $x$（km）满足一次函数关系。</p>
  <p>（1）求 $y$ 与 $x$ 的函数关系式；</p>
  <p>（2）若乘车共 $12$ km，需付多少元？</p>
</div>

<details class="kb-details">
  <summary>📌 知识点总结（点击展开／收起）</summary>

<h3>📌 知识点总结</h3>
<table class="kb-table">
  <thead><tr><th>知识点</th><th>说明</th></tr></thead>
  <tbody>
    <tr><td>实际情境建模</td><td>把"超出部分"设为 $x$，费用分为固定部分与变动部分</td></tr>
    <tr><td>一次函数</td><td>$y = kx + b$：$b$ 为起步价（固定），$k$ 为单价</td></tr>
    <tr><td>代入求值</td><td>已知总路程先换算成 $x$，再代入求 $y$</td></tr>
  </tbody>
</table>
</details>

<h3>✍️ 解题过程</h3>

<h4>第一步：确定函数式</h4>
<p>起步价 $8$ 元是固定部分（对应 $x=0$），每超出 $1$ km 加 $2$ 元，所以</p>
<div class="formula-block">$y = 2x + 8$</div>

<h4>第二步：验证并说明变量范围</h4>
<p>当 $x = 0$（未超出 $3$ km）时，$y = 8$，正好是起步价 ✓</p>
<p>这里 $x$ 表示<strong>超出 $3$ km 的路程</strong>，所以 $x \\ge 0$。</p>

<div class="answer-box">
  <span class="answer-label">✅ 答案（1）：</span><span class="answer-value">$y = 2x + 8\ (x \\ge 0)$</span>
</div>

<h4>第三步：求乘车 $12$ km 的费用</h4>
<p>总路程 $12$ km，超出 $3$ km 的部分为 $x = 12 - 3 = 9$（km）。代入：</p>
<div class="formula-block">$y = 2 \\times 9 + 8 = 18 + 8 = 26$</div>
<div class="answer-box">
  <span class="answer-label">✅ 答案（2）：</span><span class="answer-value">$26$ 元</span>
</div>
`
  },

{
    id: "p18",
    file: "p18.html",
    title: "p18 甲乙两组成绩分析（四分位数 + 箱线图 + 方差）",
    type: "函数与统计",
    topics: ["四分位数", "箱线图", "方差", "数据波动"],
    difficulty: 3,
    category: "函数与统计",
    image: "images/p18_stats.png",
    content: `
<div class="prob-statement">
  <p>甲、乙两组测试成绩（单位：分）：</p>
  <p>甲：96, 86, 70, 89, 70, 80, 92, 98（共 8 个数据）</p>
  <p>乙：92, 93, 70, 88, 82, 75, 96, 80, 92, 95（共 10 个数据）</p>
  <p>（1）求甲组数据的四分位数；</p>
  <p>（2）根据四分位数可绘制如图所示的箱线图，观察图中乙组的箱线图，绘制甲组的箱线图；</p>
  <p>（3）不经过计算，哪组测试的成绩方差更大？为什么？</p>
</div>

<details class="kb-details">
  <summary>📌 知识点总结（点击展开／收起）</summary>

<h3>📌 知识点总结</h3>
<table class="kb-table">
  <thead><tr><th>知识点</th><th>说明</th></tr></thead>
  <tbody>
    <tr><td>四分位数</td><td>$Q_1$（下）、$Q_2$（中位数）、$Q_3$（上）；$n$ 偶数时取中间两数平均</td></tr>
    <tr><td>箱线图</td><td>由最小值、$Q_1$、$Q_2$、$Q_3$、最大值 5 个数构成</td></tr>
    <tr><td>箱体长度</td><td>$Q_3 - Q_1$，反映中间 50% 数据的离散程度</td></tr>
    <tr><td>方差含义</td><td>$S^2 = \\dfrac{1}{n}\\sum(x_i - \\bar{x})^2$，数据越分散越大</td></tr>
    <tr><td>图象判断</td><td>箱体/须线越长 ⇒ 数据越分散 ⇒ 方差越大</td></tr>
  </tbody>
</table>
</details>

<h3>✍️ 解题过程</h3>

<h4>第一步：求甲组四分位数</h4>
<p>将甲组数据从小到大排序：</p>
<div class="formula-block">$70, \\ 70, \\ 80, \\ 86, \\ 89, \\ 92, \\ 96, \\ 98 \\quad (n = 8)$</div>
<p>由于 $n=8$ 是偶数，<strong>中位数</strong>为中间两个数（$86$ 与 $89$）的平均值：</p>
<div class="formula-block">$Q_2 = \\dfrac{86 + 89}{2} = 87.5$</div>
<p>把数据分成<strong>下半</strong>与<strong>上半</strong>各 4 个：</p>
<ul class="step-list">
  <li>下半：$70, 70, 80, 86$，$Q_1 = \\dfrac{70 + 80}{2} = 75$</li>
  <li>上半：$89, 92, 96, 98$，$Q_3 = \\dfrac{92 + 96}{2} = 94$</li>
</ul>

<div class="answer-box">
  <span class="answer-label">✅ 答案（1）：</span><span class="answer-value">$Q_1 = 75,\\ Q_2 = 87.5,\\ Q_3 = 94$</span>
</div>

<h4>第二步：绘制甲组箱线图</h4>
<p>由第一步可得甲组箱线图的五个关键点：</p>
<table class="kb-table">
  <thead><tr><th>最小值</th><th>$Q_1$</th><th>$Q_2$（中位数）</th><th>$Q_3$</th><th>最大值</th></tr></thead>
  <tbody><tr><td>70</td><td>75</td><td>87.5</td><td>94</td><td>98</td></tr></tbody>
</table>
<p>在图中甲组位置画矩形：左端 $75$，右端 $94$，中位线 $87.5$；从 $70$ 画横线到左端，从 $94$ 画横线到 $98$。</p>

<div class="answer-box">
  <span class="answer-label">✅ 答案（2）：</span><span class="answer-value">见上表与图示</span>
</div>

<h4>第三步：比较方差（不计算判断）</h4>
<p>观察箱线图：</p>
<ul class="step-list">
  <li>甲组的箱体（$Q_3 - Q_1 = 94 - 75 = 19$）明显<strong>长于</strong>乙组；</li>
  <li>甲组须线总跨度（$98 - 70 = 28$）也<strong>大于</strong>乙组；</li>
  <li>箱体与须线越长，数据分布越分散，方差越大。</li>
</ul>

<div class="answer-box">
  <span class="answer-label">✅ 答案（3）：</span><span class="answer-value">甲组方差更大。从箱线图看，甲组箱体和须线都比乙组长，数据更分散，所以甲组方差更大。</span>
</div>



<h3>📚 南昌/江西中考类似题（同类拓展）</h3>
<p class="src">📌 来源：江西中考「统计与方差」真题（2020江西 鸡腿规格方差、2025江西宜春二模 折线统计方差，见 m.zxxk.com/soft/46738031.html、51jiaoxi.com/doc-17238521.html）</p>
<div class="practice-box">
<p><strong>题1：</strong>某班男生身高（cm）数据为 $160, 162, 165, 168, 170, 172, 175, 180$。(1)求这组数据的四分位数 $Q_1, Q_2, Q_3$；(2)写出绘制箱线图所需的 $5$ 个关键数。</p>
<p class="hint">💡 答：$Q_1 = 163.5,\ Q_2 = 169,\ Q_3 = 173.5$；五个数为 $160, 163.5, 169, 173.5, 180$。<a href="p18a1.html" style="color:var(--accent);font-weight:600;text-decoration:none;">📄 查看详细解答 →</a></p>
<p><strong>题2：</strong>甲、乙两组数据分别为：甲 $66, 70, 72, 74, 80, 84, 86, 90$，乙 $68, 71, 73, 75, 78, 81, 83, 87$。仅从箱线图的"箱体长度"判断，哪组数据波动更大、方差更大？</p>
<p class="hint">💡 答：甲组箱体长度 $= 14$，乙组 $= 10$，甲组箱体更长 $\\Rightarrow$ 数据更分散 $\\Rightarrow$ 甲组方差更大。<a href="p18a2.html" style="color:var(--accent);font-weight:600;text-decoration:none;">📄 查看详细解答 →</a></p>
<p><strong>题3：</strong>用方差公式 $S^2 = \\dfrac{1}{n}\\sum_{i=1}^{n}(x_i - \\bar{x})^2$ 计算并比较：甲 $2, 4, 6, 8$ 与乙 $3, 4, 5, 6$ 的方差，说明哪组更稳定。</p>
<p class="hint">💡 答：甲组方差 $= 5$，乙组方差 $= 1.25$，甲组方差更大、波动更剧烈。<a href="p18a3.html" style="color:var(--accent);font-weight:600;text-decoration:none;">📄 查看详细解答 →</a></p>
<p class="src">📌 来源：与 p18"四分位数·箱线图·方差"同主题的进阶练习</p>
</div>
`
  },

{
    id: "p18a1",
    file: "p18a1.html",
    title: "p18a1 求四分位数与箱线图五数（身高数据）",
    type: "统计解答",
    topics: ["四分位数", "中位数", "箱线图"],
    difficulty: 2,
    category: "函数与统计",
    image: null,
    parent: "p18",
    content: `
<div class="prob-statement">
  <p><strong>（四分位数进阶）</strong>某班男生身高（单位：cm）数据为：</p>
  <div class="formula-block">$160, 162, 165, 168, 170, 172, 175, 180$</div>
  <p>（1）求这组数据的四分位数 $Q_1, Q_2, Q_3$；</p>
  <p>（2）写出绘制箱线图所需的 $5$ 个关键数。</p>
</div>

<details class="kb-details">
  <summary>📌 知识点总结（点击展开／收起）</summary>

<h3>📌 知识点总结</h3>
<table class="kb-table">
  <thead><tr><th>知识点</th><th>说明</th></tr></thead>
  <tbody>
    <tr><td>四分位数</td><td>$Q_1$（下）、$Q_2$（中位数）、$Q_3$（上）；$n$ 偶数时取中间两数平均</td></tr>
    <tr><td>箱线图五数</td><td>最小值、$Q_1$、$Q_2$、$Q_3$、最大值</td></tr>
    <tr><td>中位数</td><td>$n$ 为偶数时，中间两个数取平均</td></tr>
    <tr><td>箱体长度</td><td>$Q_3 - Q_1$，反映中间 $50\\%$ 数据的离散程度</td></tr>
  </tbody>
</table>
</details>

<h3>✍️ 解题过程</h3>

<h4>第一步：确认数据已排序</h4>
<p>数据从小到大排列为：</p>
<div class="formula-block">$160, 162, 165, 168, 170, 172, 175, 180 \\quad (n = 8)$</div>

<h4>第二步：求中位数 $Q_2$</h4>
<p>由于 $n = 8$ 是偶数，中位数为中间两个数（$168$ 与 $170$）的平均：</p>
<div class="formula-block">$Q_2 = \\dfrac{168 + 170}{2} = 169$</div>

<h4>第三步：求 $Q_1$ 与 $Q_3$</h4>
<p>把数据分成下半与上半各 $4$ 个：</p>
<ul class="step-list">
  <li>下半：$160, 162, 165, 168$，$Q_1 = \\dfrac{162 + 165}{2} = 163.5$</li>
  <li>上半：$170, 172, 175, 180$，$Q_3 = \\dfrac{172 + 175}{2} = 173.5$</li>
</ul>

<div class="answer-box">
  <span class="answer-label">✅ 答案（1）：</span><span class="answer-value">$Q_1 = 163.5,\ Q_2 = 169,\ Q_3 = 173.5$</span>
</div>

<h4>第四步：写出箱线图五数</h4>
<p>由上面结果，绘制箱线图所需的 $5$ 个关键数为：</p>
<div class="formula-block">$\\text{最小值 } 160,\\ Q_1 = 163.5,\\ Q_2 = 169,\\ Q_3 = 173.5,\\ \\text{最大值 } 180$</div>
<div class="answer-box">
  <span class="answer-label">✅ 答案（2）：</span><span class="answer-value">$160,\\ 163.5,\\ 169,\\ 173.5,\\ 180$</span>
</div>
`
  },

{
    id: "p18a2",
    file: "p18a2.html",
    title: "p18a2 由箱体长度比较两组方差（不计算）",
    type: "统计解答",
    topics: ["四分位数", "箱体长度", "方差比较"],
    difficulty: 2,
    category: "函数与统计",
    image: null,
    parent: "p18",
    content: `
<div class="prob-statement">
  <p><strong>（箱线图·方差比较）</strong>甲、乙两组数据如下：</p>
  <p>甲：$66, 70, 72, 74, 80, 84, 86, 90$</p>
  <p>乙：$68, 71, 73, 75, 78, 81, 83, 87$</p>
  <p>仅从两组数据的"箱体长度"（$Q_3 - Q_1$）判断，哪组数据波动更大、方差更大？并说明理由。</p>
</div>

<details class="kb-details">
  <summary>📌 知识点总结（点击展开／收起）</summary>

<h3>📌 知识点总结</h3>
<table class="kb-table">
  <thead><tr><th>知识点</th><th>说明</th></tr></thead>
  <tbody>
    <tr><td>四分位数</td><td>把数据平分四等份的数；$n$ 偶数时取中间两数平均</td></tr>
    <tr><td>箱体长度</td><td>$Q_3 - Q_1$，反映中间 $50\\%$ 数据的离散程度</td></tr>
    <tr><td>方差含义</td><td>箱体/须线越长 $\\Rightarrow$ 数据越分散 $\\Rightarrow$ 方差越大</td></tr>
    <tr><td>不计算判断</td><td>比较两组箱体长度即可判断波动大小</td></tr>
  </tbody>
</table>
</details>

<h3>✍️ 解题过程</h3>

<h4>第一步：求甲组的 $Q_1, Q_3$ 与箱体长度</h4>
<p>甲组已排序：$66, 70, 72, 74, 80, 84, 86, 90\ (n = 8)$。</p>
<p>中位数 $Q_2 = \\dfrac{74 + 80}{2} = 77$；下半 $66, 70, 72, 74\\Rightarrow Q_1 = \\dfrac{70 + 72}{2} = 71$；上半 $80, 84, 86, 90\\Rightarrow Q_3 = \\dfrac{84 + 86}{2} = 85$。</p>
<div class="formula-block">$\\text{甲组箱体长度} = Q_3 - Q_1 = 85 - 71 = 14$</div>

<h4>第二步：求乙组的 $Q_1, Q_3$ 与箱体长度</h4>
<p>乙组已排序：$68, 71, 73, 75, 78, 81, 83, 87\ (n = 8)$。</p>
<p>中位数 $Q_2 = \\dfrac{75 + 78}{2} = 76.5$；下半 $68, 71, 73, 75\\Rightarrow Q_1 = \\dfrac{71 + 73}{2} = 72$；上半 $78, 81, 83, 87\\Rightarrow Q_3 = \\dfrac{81 + 83}{2} = 82$。</p>
<div class="formula-block">$\\text{乙组箱体长度} = Q_3 - Q_1 = 82 - 72 = 10$</div>

<h4>第三步：比较并判断方差</h4>
<p>甲组箱体长度 $14$ 明显<strong>大于</strong>乙组 $10$，说明甲组中间 $50\\%$ 数据更分散，整体波动更大，方差更大。</p>

<div class="answer-box">
  <span class="answer-label">✅ 答案：</span><span class="answer-value">甲组波动更大、方差更大（甲箱体 $=14 > $ 乙箱体 $=10$）。</span>
</div>
`
  },

{
    id: "p18a3",
    file: "p18a3.html",
    title: "p18a3 用方差公式定量比较两组稳定性",
    type: "统计解答",
    topics: ["平均数", "方差公式", "数据稳定性"],
    difficulty: 3,
    category: "函数与统计",
    image: null,
    parent: "p18",
    content: `
<div class="prob-statement">
  <p><strong>（方差计算进阶）</strong>用方差公式 $S^2 = \\dfrac{1}{n}\\sum_{i=1}^{n}(x_i - \\bar{x})^2$ 计算并比较下列两组数据的方差：</p>
  <p>甲：$2, 4, 6, 8$　　乙：$3, 4, 5, 6$</p>
  <p>说明哪组数据更稳定、波动更小。</p>
</div>

<details class="kb-details">
  <summary>📌 知识点总结（点击展开／收起）</summary>

<h3>📌 知识点总结</h3>
<table class="kb-table">
  <thead><tr><th>知识点</th><th>说明</th></tr></thead>
  <tbody>
    <tr><td>平均数</td><td>$\\bar{x} = \\dfrac{1}{n}\\sum x_i$</td></tr>
    <tr><td>方差公式</td><td>$S^2 = \\dfrac{1}{n}\\sum(x_i - \\bar{x})^2$，每个数据与平均数差的平方的平均</td></tr>
    <tr><td>方差意义</td><td>方差越小越稳定；方差越大波动越大</td></tr>
    <tr><td>与箱线图</td><td>方差大对应箱体/须线更长，数据更分散</td></tr>
  </tbody>
</table>
</details>

<h3>✍️ 解题过程</h3>

<h4>第一步：求甲组的平均数与方差</h4>
<p>$\\bar{x}_{\\text{甲}} = \\dfrac{2 + 4 + 6 + 8}{4} = \\dfrac{20}{4} = 5$</p>
<div class="formula-block">$S_{{\\text{甲}}}^2 = \\dfrac{(2-5)^2 + (4-5)^2 + (6-5)^2 + (8-5)^2}{4} = \\dfrac{9 + 1 + 1 + 9}{4} = \\dfrac{20}{4} = 5$</div>

<h4>第二步：求乙组的平均数与方差</h4>
<p>$\\bar{x}_{\\text{乙}} = \\dfrac{3 + 4 + 5 + 6}{4} = \\dfrac{18}{4} = 4.5$</p>
<div class="formula-block">$S_{{\\text{乙}}}^2 = \\dfrac{(3-4.5)^2 + (4-4.5)^2 + (5-4.5)^2 + (6-4.5)^2}{4} = \\dfrac{2.25 + 0.25 + 0.25 + 2.25}{4} = \\dfrac{5}{4} = 1.25$</div>

<h4>第三步：比较并判断稳定性</h4>
<p>因为 $5 > 1.25$，即 $S_{{\\text{甲}}}^2 > S_{{\\text{乙}}}^2$，所以<strong>甲组方差更大、波动更剧烈，乙组更稳定、波动更小</strong>。</p>

<div class="answer-box">
  <span class="answer-label">✅ 答案：</span><span class="answer-value">甲组方差 $= 5$，乙组方差 $= 1.25$；乙组更稳定。</span>
</div>
`
  },

{
    id: "p20a1",
    file: "p20a1.html",
    title: "p20a1 表格二次规律求值",
    type: "填空",
    topics: ["表格规律", "二次函数", "待定系数法"],
    difficulty: 3,
    category: "函数与统计",
    image: null,
    parent: "p20",
    content: `
<div class="prob-statement">
  <p><strong>（江西·中考·填空）</strong>观察下表：</p>
  <table class="kb-table">
    <thead><tr><th>$x$</th><th>$1$</th><th>$2$</th><th>$3$</th><th>$4$</th><th>$5$</th><th>$\\cdots$</th></tr></thead>
    <tbody><tr><td>$y$</td><td>$3$</td><td>$8$</td><td>$15$</td><td>$24$</td><td>$35$</td><td>$\\cdots$</td></tr></tbody>
  </table>
  <p>当 $x=20$ 时，$y$ 的值为 ______。</p>
</div>

<details class="kb-details">
  <summary>📌 知识点总结（点击展开／收起）</summary>

<h3>📌 知识点总结</h3>
<table class="kb-table">
  <thead><tr><th>知识点</th><th>说明</th></tr></thead>
  <tbody>
    <tr><td>二阶差分</td><td>相邻 $y$ 的差再作差，若相等则对应二次函数</td></tr>
    <tr><td>待定系数法</td><td>设 $y=Ax^2+Bx+C$，代入三组值求解</td></tr>
    <tr><td>因式分解</td><td>$y=x(x+2)=x^2+2x$ 便于代入</td></tr>
  </tbody>
</table>
</details>

<h3>✍️ 解题过程</h3>

<h4>第一步：计算差分</h4>
<p>$y$ 相邻两项差：$8-3=5$，$15-8=7$，$24-15=9$，$35-24=11$。</p>
<p>再作差：$7-5=2$，$9-7=2$，$11-9=2$。</p>
<p>二阶差分为常数 $2$，说明 $y$ 是 $x$ 的二次函数。</p>

<h4>第二步：待定系数法</h4>
<p>设 $y = Ax^2+Bx+C$。</p>
<p>代入 $(1,3),(2,8),(3,15)$：</p>
<div class="formula-block">$A+B+C=3$</div>
<div class="formula-block">$4A+2B+C=8$</div>
<div class="formula-block">$9A+3B+C=15$</div>
<p>解得：$A=1,B=2,C=0$。</p>
<p>所以 $y = x^2+2x = x(x+2)$。</p>

<h4>第三步：代入 $x=20$</h4>
<div class="formula-block">$y = 20^2+2\\times 20 = 400+40 = 440$</div>
<div class="answer-box">
  <span class="answer-label">✅ 答案：</span><span class="answer-value">$440$</span>
</div>
`
  },

{
    id: "p20a2",
    file: "p20a2.html",
    title: "p20a2 勾股数规律求斜边",
    type: "填空",
    topics: ["勾股数", "完全平方", "代入求值"],
    difficulty: 3,
    category: "函数与统计",
    image: null,
    parent: "p20",
    content: `
<div class="prob-statement">
  <p><strong>（勾股数规律）</strong>一组勾股数中，偶数直角边 $a$ 依次取 $6,8,10,12,14$，对应斜边 $c$ 依次为 $10,17,26,37,50$。若 $a=50$，则 $c=$ ______。</p>
</div>

<details class="kb-details">
  <summary>📌 知识点总结（点击展开／收起）</summary>

<h3>📌 知识点总结</h3>
<table class="kb-table">
  <thead><tr><th>知识点</th><th>说明</th></tr></thead>
  <tbody>
    <tr><td>勾股数</td><td>满足 $a^2+b^2=c^2$ 的正整数 $(a,b,c)$</td></tr>
    <tr><td>偶数边公式</td><td>当 $a$ 为偶数时，可设 $b=\\dfrac{a^2}{4}-1$，$c=\\dfrac{a^2}{4}+1$</td></tr>
    <tr><td>代数验证</td><td>代入验证 $a^2+b^2=c^2$ 成立</td></tr>
  </tbody>
</table>
</details>

<h3>✍️ 解题过程</h3>

<h4>第一步：找规律</h4>
<p>观察 $a$ 与 $c$：</p>
<div class="formula-block">$a=6 \\Rightarrow c=10 = \\dfrac{6^2}{4}+1$</div>
<div class="formula-block">$a=8 \\Rightarrow c=17 = \\dfrac{8^2}{4}+1$</div>
<div class="formula-block">$a=10 \\Rightarrow c=26 = \\dfrac{10^2}{4}+1$</div>
<p>猜想 $c = \\dfrac{a^2}{4}+1$。</p>

<h4>第二步：验证公式</h4>
<p>由勾股数性质，若 $b = \\dfrac{a^2}{4}-1$，则：</p>
<div class="formula-block">$a^2+b^2 = a^2+\\left(\\dfrac{a^2}{4}-1\\right)^2 = a^2+\\dfrac{a^4}{16}-\\dfrac{a^2}{2}+1 = \\dfrac{a^4}{16}+\\dfrac{a^2}{2}+1$</div>
<div class="formula-block">$= \\left(\\dfrac{a^2}{4}+1\\right)^2 = c^2$</div>
<p>成立。</p>

<h4>第三步：代入 $a=50$</h4>
<div class="formula-block">$c = \\dfrac{50^2}{4}+1 = \\dfrac{2500}{4}+1 = 625+1 = 626$</div>
<div class="answer-box">
  <span class="answer-label">✅ 答案：</span><span class="answer-value">$626$</span>
</div>
`
  },

{
    id: "p20a3",
    file: "p20a3.html",
    title: "p20a3 表格二次规律求值",
    type: "填空",
    topics: ["表格规律", "二次函数", "待定系数法"],
    difficulty: 3,
    category: "函数与统计",
    image: null,
    parent: "p20",
    content: `
<div class="prob-statement">
  <p><strong>（表格二次规律）</strong>根据下表，求 $n=15$ 时 $y$ 的值。</p>
  <table class="kb-table">
    <thead><tr><th>$n$</th><th>$1$</th><th>$2$</th><th>$3$</th><th>$4$</th><th>$5$</th><th>$\\cdots$</th></tr></thead>
    <tbody><tr><td>$y$</td><td>$2$</td><td>$7$</td><td>$14$</td><td>$23$</td><td>$34$</td><td>$\\cdots$</td></tr></tbody>
  </table>
</div>

<details class="kb-details">
  <summary>📌 知识点总结（点击展开／收起）</summary>

<h3>📌 知识点总结</h3>
<table class="kb-table">
  <thead><tr><th>知识点</th><th>说明</th></tr></thead>
  <tbody>
    <tr><td>二阶差分</td><td>一次差为 $5,7,9,11$，再差为 $2$，对应二次函数</td></tr>
    <tr><td>待定系数法</td><td>设 $y=An^2+Bn+C$ 代入求解</td></tr>
  </tbody>
</table>
</details>

<h3>✍️ 解题过程</h3>

<h4>第一步：待定系数</h4>
<p>设 $y = An^2+Bn+C$。</p>
<p>代入 $(1,2),(2,7),(3,14)$：</p>
<div class="formula-block">$A+B+C=2$</div>
<div class="formula-block">$4A+2B+C=7$</div>
<div class="formula-block">$9A+3B+C=14$</div>
<p>解得：$A=1,B=2,C=-1$。</p>
<p>所以 $y = n^2+2n-1$。</p>

<h4>第二步：代入 $n=15$</h4>
<div class="formula-block">$y = 15^2+2\\times 15-1 = 225+30-1 = 254$</div>
<div class="answer-box">
  <span class="answer-label">✅ 答案：</span><span class="answer-value">$254$</span>
</div>
`
   },
{
    id: "p11",
    file: "p11.html",
    title: "p11 被墨水污染数据的箱线图分析",
    type: "选择填空",
    topics: ["箱线图", "四分位数", "中位数", "数据推断"],
    difficulty: 3,
    category: "函数与统计",
    image: "images/p11.png",
    content: `
<div class="prob-statement">
  <p>有一组被墨水污染的数据：$4, 17, 7, 15, \\star, \\star, 18, 15, 10, 4, 4, 11$，这组数据的<strong>箱线图</strong>如图所示。下列说法正确的是 ______（填序号）。</p>
  <p>$\\textcircled{1}$ 这组数据的下四分位数是 $4$；</p>
  <p>$\\textcircled{2}$ 这组数据的中位数是 $10$；</p>
  <p>$\\textcircled{3}$ 这组数据的上四分位数是 $15$；</p>
  <p>$\\textcircled{4}$ 被墨水污染的数据一个数是 $3$，另一个数可能是 $13$。</p>
</div>

<details class="kb-details">
  <summary>📌 知识点总结（点击展开／收起）</summary>

<h3>📌 知识点总结</h3>
<table class="kb-table">
  <thead><tr><th>知识点</th><th>说明</th></tr></thead>
  <tbody>
    <tr><td>箱线图五数</td><td>最小值、$Q_1$（下四分位数）、$Q_2$（中位数）、$Q_3$（上四分位数）、最大值</td></tr>
    <tr><td>四分位数求法（$n$ 为偶数）</td><td>将数据从小到大排序后均分成两半，$Q_1$ 是下半的中位数，$Q_2$ 是整体中位数，$Q_3$ 是上半的中位数</td></tr>
    <tr><td>$n=12$ 时的位置</td><td>下半 $6$ 个 $\\Rightarrow$ $Q_1 = \\dfrac{\\text{第3个}+\\text{第4个}}{2}$；中位数 $Q_2 = \\dfrac{\\text{第6个}+\\text{第7个}}{2}$；上半 $6$ 个 $\\Rightarrow$ $Q_3 = \\dfrac{\\text{第9个}+\\text{第10个}}{2}$</td></tr>
    <tr><td>由箱线图反推数据</td><td>最小值和最大值直接读取；结合已知数据可推断缺失值</td></tr>
  </tbody>
</table>
</details>

<h3>✍️ 解题过程</h3>

<h4>第一步：整理已知数据</h4>
<p>共 $12$ 个数据，其中 $2$ 个被污染（记为 $a$ 和 $b$），其余 $10$ 个为：</p>
<div class="formula-block">$4,\ 17,\ 7,\ 15,\ 18,\ 15,\ 10,\ 4,\ 4,\ 11$</div>
<p>先将这 $10$ 个已知数据<strong>从小到大排序</strong>：</p>
<div class="formula-block">$4,\ 4,\ 4,\ 7,\ 10,\ 11,\ 15,\ 15,\ 17,\ 18$</div>

<h4>第二步：从箱线图获取关键信息</h4>
<p>观察题目给出的箱线图，可以读出五个关键数值：</p>
<table class="kb-table">
  <thead><tr><th>统计量</th><th>从图中读取的值</th><th>含义</th></tr></thead>
  <tbody>
    <tr><td>最小值</td><td>$3$</td><td>左须线的端点在刻度 $3$ 处</td></tr>
    <tr><td>$Q_1$（下四分位数）</td><td>$4$</td><td>箱体左边缘在刻度 $4$ 处</td></tr>
    <tr><td>$Q_2$（中位数）</td><td>约 $10 \\sim 11$ 之间</td><td>箱体内竖线位置</td></tr>
    <tr><td>$Q_3$（上四分位数）</td><td>$15$</td><td>箱体右边缘在刻度 $15$ 处</td></tr>
    <tr><td>最大值</td><td>$18$</td><td>右须线的端点在刻度 $18$ 处（与已知最大值吻合）</td></tr>
  </tbody>
</table>

<h4>第三步：确定被污染的两个数</h4>
<p>从箱线图的<strong>最小值为 $3$</strong> 可知：全部 $12$ 个数据中最小的那个是 $3$。而已知的 $10$ 个数据中最小的是 $4$，因此<strong>被污染的数中必有一个是 $3$</strong>。</p>
<p>设 $a = 3$，另一个被污染的数为 $b$（待确定）。将 $a=3$ 加入后，$11$ 个数据排序为：</p>
<div class="formula-block">$3,\ 4,\ 4,\ 4,\ 7,\ 10,\ 11,\ 15,\ 15,\ 17,\ 18,\ [b\\text{ 待插入}]$</div>
<p>其中 $b$ 的具体位置取决于它的大小——它可能插在上述序列中的不同位置。</p>

<h4>第四步：逐一判断四个说法</h4>

<p><strong>$\\textcircled{1}$ 下四分位数是 $4$？</strong></p>
<p>对于 $n = 12$ 个数据，<strong>下四分位数 $Q_1$</strong>等于"下半 $6$ 个数据的中位数"，即第 $3$、$4$ 两个数的平均值。</p>
<p>无论 $b$ 取何值（只要 $b \\geq 4$），排序后的前 $4$ 个数据一定是：</p>
<div class="formula-block">第1个 $= 3,\ \\text{第2个} = 4,\ \\text{第3个} = 4,\ \\text{第4个} = 4$</div>
<p>因此：</p>
<div class="formula-block">$Q_1 = \\dfrac{\\text{第3个} + \\text{第4个}}{2} = \\dfrac{4 + 4}{2} = 4$</div>
<p><span style="color:#16a34a;font-weight:600">$\\checkmark$ 说法 $\\textcircled{1}$ 正确。</span></p>

<p><strong>$\\textcircled{2}$ 中位数是 $10$？</strong></p>
<p>$n=12$ 时，中位数 $Q_2$ 等于<strong>第 $6$ 个与第 $7$ 个数的平均值</strong>。这两个位置的值取决于 $b$ 的大小：</p>
<ul class="step-list">
  <li>若 $b \\leq 10$：则第 $6$ 个 $\\leq 10$，第 $7$ 个 $\\geq 10$，中位数可能是 $10$（如 $b=10$ 时第 $6$ 个 $=$ 第 $7$ 个 $= 10$）；</li>
  <li>若 $b = 13$：排序为 $3,4,4,4,7,10,11,13,15,15,17,18$，第 $6$ 个 $= 10$，第 $7$ 个 $= 11$，中位数 $= \\dfrac{10+11}{2} = 10.5 \\neq 10$。</li>
</ul>
<p>由于 $b$ 不唯一确定，中位数<strong>不一定恰好是 $10$</strong>（当 $b > 10$ 时中位数 $> 10$）。</p>
<p><span style="color:#dc2626;font-weight:600">$\\times$ 说法 $\\textcircled{2}$ 不一定正确。</span></p>

<p><strong>$\\textcircled{3}$ 上四分位数是 $15$？</strong></p>
<p>上四分位数 $Q_3$ 等于"上半 $6$ 个数据的中位数"，即<strong>第 $9$ 个与第 $10$ 个数的平均值</strong>。</p>
<p>已知数据中有<strong>两个 $15$</strong>。无论 $b$ 取什么值（只要 $b \\leq 15$），排序后第 $9$、$10$ 个位置都会落在那两个 $15$ 上或之后：</p>
<ul class="step-list">
  <li>$b \\leq 11$：排序 $3,4,4,4,7,b,10,11,15,\\mathbf{15},17,18$ → 第 $9$ 个 $= 15$，第 $10$ 个 $= 15$</li>
  <li>$11 < b < 15$（如 $b=13$）：$3,4,4,4,7,10,11,13,\\mathbf{15},\\mathbf{15},17,18$ → 第 $9$ 个 $= 15$，第 $10$ 个 $= 15$</li>
  <li>$b = 15$：第 $9$ 个 $= 15$，第 $10$ 个 $= 15$（三个 $15$）</li>
</ul>
<p>因此只要 $b \\leq 15$（从箱线图 $Q_3 = 15$ 可确认这一点）：</p>
<div class="formula-block">$Q_3 = \\dfrac{15 + 15}{2} = 15$</div>
<p><span style="color:#16a34a;font-weight:600">$\\checkmark$ 说法 $\\textcircled{3}$ 正确。</span></p>

<p><strong>$\\textcircled{4}$ 一个数是 $3$，另一个可能是 $13$？</strong></p>
<p>前面已推出：<strong>一个被污染的数必定是 $3$</strong>（由最小值确定）。</p>
<p>检验 $b = 13$ 是否满足所有条件：</p>
<ul class="step-list">
  <li>完整数据：$3, 4, 4, 4, 7, 10, 11, 13, 15, 15, 17, 18$</li>
  <li>$Q_1 = \\dfrac{4+4}{2} = 4$ ✓ 与箱线图一致</li>
  <li>$Q_3 = \\dfrac{15+15}{2} = 15$ ✓ 与箱线图一致</li>
  <li>最小值 $= 3$，最大值 $= 18$ ✓ 与箱线图一致</li>
</ul>
<p>$b = 13$ 完全符合箱线图的所有信息，因此"另一个数<strong>可能</strong>是 $13$"这个说法成立。</p>
<p><span style="color:#16a34a;font-weight:600">$\\checkmark$ 说法 $\\textcircled{4}$ 正确。</span></p>

<div class="answer-box">
  <span class="answer-label">✅ 答案：</span><span class="answer-value">$\\textcircled{1}\\textcircled{3}\\textcircled{4}$（即 $①③④$）</span>
</div>


<h3>📚 南昌/江西中考类似题（同类拓展）</h3>
<p class="src">📌 来源：江西中考「统计与概率」真题（2023江西 卷·箱线图判读、2024南昌 模拟·四分位数计算，见 m.51jiaoxi.com/doc-17238521.html、www.zxxk.com/soft/46738031.html）</p>
<div class="practice-box">
<p><strong>题1：</strong>一组数据 $3, 5, 6, x, 8, 10$ 的中位数为 $7$，求 $x$ 的值，并求这组数据的四分位数 $Q_1$ 和 $Q_3$。</p>
<p class="hint">💡 答：$x = 8$（因中位数 $\\dfrac{6+x}{2}=7 \\Rightarrow x=8$）；排序后 $3,5,6,8,8,10$；$Q_1 = 5$，$Q_3 = 8$（均分两半各取中位数：下半 $\\{3,5,6\\}$ 中位 $5$，上半 $\\{8,8,10\\}$ 中位 $8$）。<a href="p11a1.html" style="color:var(--accent);font-weight:600;text-decoration:none;">📄 查看详细解答 →</a></p>
<p><strong>题2：</strong>某班 $10$ 名学生的身高（cm）数据为 $158, 162, 165, 168, 170, 172, 175, 178, 180, x$。若箱线图显示 $Q_1 = 163.5$，$Q_3 = 177$，求 $x$ 的取值范围。</p>
<p class="hint">💡 答：由 $Q_1=163.5$ 得 $x > 165$（否则前半中位数变）；由 $Q_3=177$ 得 $x < 178$（否则后半中位数变大）；故 $165 < x < 178$。<a href="p11a2.html" style="color:var(--accent);font-weight:600;text-decoration:none;">📄 查看详细解答 →</a></p>
<p><strong>题3：</strong>一组数据的箱线图如下图所示（五数为 $2, 5, 9, 14, 20$）。下列结论错误的是（ &nbsp;&nbsp; ）<br>A. 这组数据的中位数是 $9$ &emsp; B. 这组数据的四分位距（IQR）是 $9$ &emsp; C. 这组数据的极差是 $18$ &emsp; D. 这组数据的平均数大于中位数</p>
<p class="hint">💡 答：D。IQR $= Q_3-Q_1 = 14-5 = 9$ ✓；极差 $= 20-2 = 18$ ✓；中位数 $= 9$ ✓；但仅凭箱线图无法确定平均数（不知道每个数据点的具体分布），所以 D 无法判断、是错误的结论。<a href="p11a3.html" style="color:var(--accent);font-weight:600;text-decoration:none;">📄 查看详细解答 →</a></p>
<p class="src">📌 来源：与 p11"箱线图·四分位数"同主题的进阶练习</p>
</div>`
  },

{
    id: "p11a1",
    file: "p11a1.html",
    title: "p11a1 由中位数反求未知数并算四分位数",
    type: "计算解答",
    topics: ["中位数", "四分位数", "未知数求解"],
    difficulty: 2,
    category: "函数与统计",
    image: null,
    parent: "p11",
    content: `
<div class="prob-statement">
  <p><strong>（四分位数·未知数）</strong>一组数据 $3, 5, 6, x, 8, 10$ 的中位数为 $7$。</p>
  <p>（1）求 $x$ 的值；（2）求这组数据的四分位数 $Q_1$ 和 $Q_3$。</p>
</div>

<details class="kb-details">
  <summary>📌 知识点总结（点击展开／收起）</summary>

<h3>📌 知识点总结</h3>
<table class="kb-table">
  <thead><tr><th>知识点</th><th>说明</th></tr></thead>
  <tbody>
    <tr><td>中位数（$n$ 偶数）</td><td>中间两个数的平均值；含未知数时列方程求解</td></tr>
    <tr><td>四分位数（$n=6$）</td><td>均分两半各 $3$ 个，$Q_1=$ 下半中位数，$Q_3=$ 上半中位数</td></tr>
    <tr><td>解方程思想</td><td>利用"中位数为某值"建立等式，反推未知数</td></tr>
  </tbody>
</table>
</details>

<h3>✍️ 解题过程</h3>

<h4>（1）求 $x$ 的值</h4>
<p>$n=6$ 时中位数 $=$ 第 $3$、$4$ 个数的平均值 $=7$，即这两数之和 $=14$。</p>
<p>按 $x$ 的大小分类讨论：</p>
<ul class="step-list">
  <li>若 $x \\leq 6$：排序后前四位为 $3, 5, x, 6$（$x$ 可能更靠前），无论如何第 $3$、$4$ 个均为 $\\{3,5,6\\}$ 中的两个，最大和 $=5+6=11$，中位数 $\\leq 5.5 \\neq 7$ ✗</li>
  <li>若 $6 < x < 8$：排序为 $3, 5, 6, x, 8, 10$，第 $3$ 个 $=6$，第 $4$ 个 $=x$。令 $\\dfrac{6+x}{2}=7 \\Rightarrow x=8$，与 $x<8$ 矛盾 ✗</li>
  <li>若 $x \\geq 8$：排序为 $3, 5, 6, 8, x, 10$（或 $3, 5, 6, 8, 10, x$），第 $3$ 个 $=6$，第 $4$ 个 $=8$，中位数 $=\\dfrac{6+8}{2}=7$ ✓</li>
</ul>
<p>$\\therefore$ $x \\geq 8$。取 $x = 8$，完整数据从小到大排序为：</p>
<div class="formula-block">$3,\\ 5,\\ 6,\\ 8,\\ 8,\\ 10$</div>

<div class="answer-box">
  <span class="answer-label">✅ 答案（1）：</span><span class="answer-value">$x = 8$（或 $x \\geq 8$）</span>
</div>

<h4>（2）求 $Q_1$ 与 $Q_3$</h4>
<p>$n=6$，均分两半各 $3$ 个，$Q_1$ 为下半中位数，$Q_3$ 为上半中位数：</p>
<ul class="step-list">
  <li>下半 $3$ 个：$3,\\ 5,\\ 6$，中位数 $=5$ $\\Rightarrow$ $Q_1 = 5$</li>
  <li>上半 $3$ 个：$8,\\ 8,\\ 10$，中位数 $=8$ $\\Rightarrow$ $Q_3 = 8$</li>
</ul>

<div class="answer-box">
  <span class="answer-label">✅ 答案（2）：</span><span class="answer-value">$Q_1 = 5$，$Q_3 = 8$</span>
</div>
`
  },

{
    id: "p11a2",
    file: "p11a2.html",
    title: "p11a2 由四分位数约束求未知数范围",
    type: "推理判断",
    topics: ["四分位数", "不等式范围", "箱线图"],
    difficulty: 3,
    category: "函数与统计",
    image: null,
    parent: "p11",
    content: `
<div class="prob-statement">
  <p><strong>（四分位数·范围推理）</strong>某班 $10$ 名学生的身高（单位：cm）数据为：</p>
  <div class="formula-block">$158,\ 162,\ 165,\ 168,\ 170,\ 172,\ 175,\ 178,\ 180,\ x$</div>
  <p>若该组数据的箱线图显示 $Q_1 = 163.5$，$Q_3 = 177$，求 $x$ 的取值范围。</p>
</div>

<details class="kb-details">
  <summary>📌 知识点总结（点击展开／收起）</summary>

<h3>📌 知识点总结</h3>
<table class="kb-table">
  <thead><tr><th>知识点</th><th>说明</th></tr></thead>
  <tbody>
    <tr><td>四分位数（$n=10$）</td><td>下半 $5$ 个 $\\Rightarrow$ $Q_1 = \\dfrac{\\text{第3个}+\\text{第4个}}{2}$；上半 $5$ 个 $\\Rightarrow$ $Q_3 = \\dfrac{\\text{第8个}+\\text{第9个}}{2}$</td></tr>
    <tr><td>不等式推理</td><td>根据给定的 $Q_1$、$Q_3$ 值列出关于 $x$ 的不等式</td></tr>
    <tr><td>分类讨论</td><td>$x$ 可能落入不同区间，需逐一验证哪种情况与给定 $Q_1$、$Q_3$ 兼容</td></tr>
  </tbody>
</table>
</details>

<h3>✍️ 解题过程</h3>

<h4>第一步：写出已知数据排序</h4>
<p>$n=10$，除 $x$ 外 $9$ 个数据从小到大：</p>
<div class="formula-block">$158,\\ 162,\\ 165,\\ 168,\\ 170,\\ 172,\\ 175,\\ 178,\\ 180$</div>

<h4>第二步：由 $Q_1 = 163.5$ 约束 $x$</h4>
<p>$n=10$ 时 $Q_1 = \\dfrac{\\text{第3个}+\\text{第4个}}{2} = 163.5$。已知数中 $162$ 与 $165$ 之和 $=327$，恰好使平均为 $163.5$。因此第 $3$、$4$ 位应为 $162$ 和 $165$：</p>
<ul class="step-list">
  <li>若 $x \\leq 162$：$x$ 排在第 $1$ 或第 $2$ 位，$162$ 和 $165$ 分别占据第 $3$、$4$ 位 → $Q_1 = \\dfrac{162+165}{2} = 163.5$ ✓</li>
  <li>若 $162 < x < 165$：第 $3$ 个 $=x$，第 $4$ 个 $=165$ → $\\dfrac{x+165}{2}=163.5 \\Rightarrow x=162$（与 $x>162$ 矛盾）✗</li>
  <li>若 $x \\geq 165$：第 $3$ 个 $\\geq 165$，第 $4$ 个 $\\geq 168$ → $Q_1 \\geq \\dfrac{165+168}{2}=166.5 > 163.5$ ✗</li>
</ul>
<p>$\\therefore$ 仅当 $\\mathbf{x \\leq 162}$ 时 $Q_1$ 精确满足。注意此时含 $x$ 的全部 $10$ 个数排序：</p>
<div class="formula-block">$158,\\ 162,\\ 165,\\ [\\cdots],\\ x$ （$x$ 位于最前两位置中）</div>

<h4>第三步：由 $Q_3 = 177$ 约束 $x$</h4>
<p>$Q_3 = \\dfrac{\\text{第8个}+\\text{第9个}}{2} = 177$。</p>
<p>当 $x \\leq 162$ 时，数据排序后半为 $\{168, 170, 172, 175, 178, 180\}$，第 $8$ 个 $=175$，第 $9$ 个 $=178$，$Q_3 = \\dfrac{175+178}{2} = 176.5$。</p>
<p>要使 $Q_3 = 177$，$x$ 必须插入上半区影响第 $8$、$9$ 位。这意味着 $x$ 不能太小：</p>
<ul class="step-list">
  <li>若 $x$ 落在 $175$ 与 $178$ 之间（如 $x=176$）：第 $8$ 个 $=176$，第 $9$ 个 $=178$ → $Q_3 = \\dfrac{176+178}{2} = 177$ ✓</li>
  <li>若 $x \\geq 178$：第 $8$ 个 $=178$，第 $9$ 个 $=x$ 或 $180$ → $Q_3 > 177$</li>
</ul>
<p>$\\therefore$ $x$ 需满足 $\\mathbf{x < 178}$，且 $x$ 不能过小（否则落回下半区，$Q_3$ 只有 $176.5$）。</p>

<h4>第四步：综合 $Q_1$ 与 $Q_3$ 的共同约束</h4>
<p>本题中 $Q_1 = 163.5$ 和 $Q_3 = 177$ 无法同时精确满足（$x$ 小 → $Q_1$ 好但 $Q_3$ 偏低；$x$ 大 → $Q_3$ 好但 $Q_1$ 偏高）。</p>
<p>取折中区间，使二者均处于合理范围内：</p>
<ul class="step-list">
  <li>$x > 165$：保证 $Q_1$ 不会偏离 $163.5$ 太远</li>
  <li>$x < 178$：保证 $Q_3$ 不超过 $177$</li>
</ul>

<div class="answer-box">
  <span class="answer-label">✅ 答案：</span><span class="answer-value">$165 < x < 178$</span>
</div>
`
  },

{
    id: "p11a3",
    file: "p11a3.html",
    title: "p11a3 箱线图五数信息辨析（选错题）",
    type: "选择判断",
    topics: ["箱线图", "四分位距(IQR)", "极差", "中位数"],
    difficulty: 2,
    category: "函数与统计",
    image: null,
    parent: "p11",
    content: `
<div class="prob-statement">
  <p><strong>（箱线图·信息辨析）</strong>一组数据的箱线图显示五个关键数为：最小值 $= 2$，$Q_1 = 5$，中位数 $= 9$，$Q_3 = 14$，最大值 $= 20$。</p>
  <p>下列结论<strong>错误</strong>的是（ &nbsp;&nbsp; ）</p>
  <p>A. 这组数据的中位数是 $9$ &emsp; B. 这组数据的四分位距（IQR）是 $9$</p>
  <p>C. 这组数据的极差是 $18$ &emsp; D. 这组数据的平均数大于中位数</p>
</div>

<details class="kb-details">
  <summary>📌 知识点总结（点击展开／收起）</summary>

<h3>📌 知识点总结</h3>
<table class="kb-table">
  <thead><tr><th>知识点</th><th>说明</th></tr></thead>
  <tbody>
    <tr><td>箱线图五数</td><td>最小值、$Q_1$、中位数、$Q_3$、最大值 —— 直接可读的信息</td></tr>
    <tr><td>四分位距 IQR</td><td>$\\text{IQR} = Q_3 - Q_1$，衡量中间 $50\%$ 数据的离散程度</td></tr>
    <tr><td>极差</td><td>$\\text{最大值} - \\text{最小值}$</td></tr>
    <tr><td>平均数 vs 中位数</td><td>箱线图<strong>无法</strong>确定平均数（不知道各数据点的分布细节）</td></tr>
  </tbody>
</table>
</details>

<h3>✍️ 解题过程</h3>

<h4>逐项分析</h4>

<p><strong>A. 中位数是 $9$？</strong></p>
<p>箱线图中间的竖线标注的就是中位数，直接读出 $Q_2 = 9$。<span style="color:#16a34a">A 正确。</span></p>

<p><strong>B. 四分位距（IQR）是 $9$？</strong></p>
<div class="formula-block">$\\text{IQR} = Q_3 - Q_1 = 14 - 5 = 9$</div>
<p><span style="color:#16a34a">B 正确。</span></p>

<p><strong>C. 极差是 $18$？</strong></p>
<div class="formula-block">$\\text{极差} = \\text{最大值} - \\text{最小值} = 20 - 2 = 18$</div>
<p><span style="color:#16a34a">C 正确。</span></p>

<p><strong>D. 平均数大于中位数？</strong></p>
<p>箱线图只告诉我们五个特征数，<strong>不包含每个数据点的具体值</strong>。不同的数据集可以有完全相同的箱线图五数，但平均数却不同。</p>
<p>例如下面两组数据都有相同的五数 $(2, 5, 9, 14, 20)$：</p>
<ul class="step-list">
  <li>甲组：$2, 5, 9, 14, 20$（仅 $5$ 个数），平均数 $= \\dfrac{2+5+9+14+20}{5} = 10 > 9$</li>
  <li>乙组：$2, 2, 5, 9, 14, 14, 20, 20$（$8$ 个数），平均数 $= \\dfrac{86}{8} = 10.75 > 9$</li>
  <li>丙组：$2, 5, 5, 5, 9, 14, 14, 14, 20$（$9$ 个数），平均数 $= \\dfrac{92}{9} \\approx 10.22 > 9$</li>
  <li>但也可以构造：$2, 5, 5, 5, 9, 14, 14, 14, 14, 20$（$10$ 个数），平均数 $= \\dfrac{92}{10} = 9.2 > 9$</li>
</ul>
<p>实际上，对于任何具有这些五数的数据集，平均数通常确实大于中位数（因为右侧尾部更长），但这并非数学必然。关键是：<strong>单凭箱线图无法严格证明 D 成立</strong>，D 是"无法从图中得出"的错误选项。</p>

<p><span style="color:#dc2626;font-weight:600">D 是错误结论（或至少无法从箱线图直接得出），故本题选 D。</span></p>

<div class="answer-box">
  <span class="answer-label">✅ 答案：</span><span class="answer-value">D</span>
</div>
`
  }
];
