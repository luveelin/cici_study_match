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

<p class="src">📌 来源：江西中考「函数概念」真题（2022江西 溶解度函数判断、2019江西 铅笔函数探究，见 21cnjy zy.21cnjy.com/19431815、教习网 m.51jiaoxi.com/doc-14244471.html）</p>

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

<p class="src">📌 来源：江西中考「一次函数」真题（2018江西 蜜柚利润函数、弹簧长度一次函数，见 m.51jiaoxi.com/doc-14244471.html、www.1010jiajiao.com/czsx/shiti_id_5190c341d1ed5f4919d5ec70f0132b97）</p>

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

<p class="src">📌 来源：江西中考「统计与方差」真题（2020江西 鸡腿规格方差、2025江西宜春二模 折线统计方差，见 m.zxxk.com/soft/46738031.html、51jiaoxi.com/doc-17238521.html）</p>

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

<p class="src">📌 来源：江西中考「统计与概率」真题（2023江西 卷·箱线图判读、2024南昌 模拟·四分位数计算，见 m.51jiaoxi.com/doc-17238521.html、www.zxxk.com/soft/46738031.html）</p>
`
  },

  {
    id: "p23",
    file: "p23.html",
    title: "p23 抛物线 a(x-2)^2+c 上的点与对应方程的解",
    type: "函数与统计",
    topics: ["二次函数", "抛物线", "代入法", "一元二次方程"],
    difficulty: 2,
    category: "函数与统计",
    image: "images/p23.png",
    content: `
<div class="prob-statement">
  <p>[2026 遵义期末] 点 $A(3, 2)$ 在抛物线 $y = a(x - 2)^2 + c$（$a \\neq 0$）上，则关于 $x$ 的一元二次方程 $a(x - 3)^2 + c + 3 = 5$ 的解是（　　）</p>
  <p>A. $x_1 = 0,\ x_2 = 2$　　B. $x_1 = x_2 = 3$　　C. $x_1 = 2,\ x_2 = 4$　　D. $x_1 = 1,\ x_2 = 5$</p>
</div>

<details class="kb-details">
  <summary>📌 知识点总结（点击展开／收起）</summary>

<h3>📌 知识点总结</h3>
<table class="kb-table">
  <thead><tr><th>知识点</th><th>说明</th></tr></thead>
  <tbody>
    <tr><td>点在抛物线上</td><td>点 $(x_0, y_0)$ 在 $y = f(x)$ 上 ⇔ $y_0 = f(x_0)$</td></tr>
    <tr><td>代入求 $a + c$</td><td>$2 = a(3-2)^2 + c = a + c$</td></tr>
    <tr><td>方程化简</td><td>$a(x-3)^2 + c = 2$</td></tr>
    <tr><td>等量替换</td><td>把右边的 $2$ 换成 $a + c$，便于消去 $c$</td></tr>
    <tr><td>约去 $a$</td><td>$a(x-3)^2 = a \\Rightarrow (x-3)^2 = 1$（$a \\neq 0$）</td></tr>
    <tr><td>开平方</td><td>$x - 3 = \\pm 1 \\Rightarrow x = 2$ 或 $x = 4$</td></tr>
  </tbody>
</table>
</details>

<h3>✍️ 解题过程</h3>

<h4>第一步：由 $A(3, 2)$ 在抛物线上，求 $a + c$</h4>
<p>把 $x = 3$、$y = 2$ 代入 $y = a(x - 2)^2 + c$：</p>
<div class="formula-block">$2 = a(3 - 2)^2 + c = a \\cdot 1^2 + c = a + c$</div>
<p>因此 $a + c = 2$。</p>

<h4>第二步：化简待解方程</h4>
<p>原方程：</p>
<div class="formula-block">$a(x - 3)^2 + c + 3 = 5$</div>
<p>两边同时减 $3$，得</p>
<div class="formula-block">$a(x - 3)^2 + c = 2$</div>

<h4>第三步：等量代换，消去 $c$</h4>
<p>把右边的 $2$ 替换成 $a + c$：</p>
<div class="formula-block">$a(x - 3)^2 + c = a + c$</div>
<p>两边同时减 $c$：</p>
<div class="formula-block">$a(x - 3)^2 = a$</div>

<h4>第四步：约去 $a$，解一元二次方程</h4>
<p>因为 $a \\neq 0$，两边除以 $a$：</p>
<div class="formula-block">$(x - 3)^2 = 1$</div>
<p>开平方（注意正负两根）：</p>
<div class="formula-block">$x - 3 = \\pm 1$</div>
<p>因此</p>
<div class="formula-block">$x = 3 + 1 = 4 \\quad \\text{或} \\quad x = 3 - 1 = 2$</div>

<div class="answer-box">
  <span class="answer-label">✅ 答案：</span><span class="answer-value">$x_1 = 2,\ x_2 = 4$，故选 C</span>
</div>
`
   },

  {
    id: "p24",
    file: "p24.html",
    title: "p24 函数图象与坐标轴恰有两个公共点",
    type: "函数与统计",
    topics: ["二次函数", "分类讨论", "判别式", "抛物线与坐标轴"],
    difficulty: 3,
    category: "函数与统计",
    image: "images/p24.png",
    content: `
<div class="prob-statement">
  <p>[2026 中考题] 已知函数 $y = mx^2 + 3mx + m - 1$ 的图象与坐标轴恰有两个公共点，则实数 $m$ 的值为 ______。</p>
</div>

<details class="kb-details">
  <summary>📌 知识点总结（点击展开／收起）</summary>

<h3>📌 知识点总结</h3>
<table class="kb-table">
  <thead><tr><th>知识点</th><th>说明</th></tr></thead>
  <tbody>
    <tr><td>一次函数退化</td><td>$m = 0$ 时 $y = -1$，与坐标轴只有 1 个公共点</td></tr>
    <tr><td>二次函数与坐标轴交点</td><td>由 $y$ 轴交点 $(0,\ m - 1)$ 与 $x$ 轴交点（$\\Delta$ 决定个数）共同决定</td></tr>
    <tr><td>判别式 $\\Delta$</td><td>$\\Delta = 0 \\Leftrightarrow$ 抛物线与 $x$ 轴恰 1 个交点（顶点在 $x$ 轴上）</td></tr>
    <tr><td>过原点</td><td>常数项 $= 0$（即 $m = 1$）$\\Leftrightarrow$ 抛物线过原点</td></tr>
    <tr><td>恰两个公共点的拆分</td><td>(1) 过原点 ＋ 与 $x$ 轴再交于另一点（原点被两轴共享）；<br>(2) $\\Delta = 0$（与 $x$ 轴 1 点）＋ $y$ 轴另 1 个非原点交点。</td></tr>
  </tbody>
</table>
</details>

<h3>✍️ 解题过程</h3>

<h4>第一步：分类讨论 $m = 0$ 情形</h4>
<p>若 $m = 0$，函数退化为一次函数 $y = -1$，是一条平行于 $x$ 轴的直线。</p>
<ul>
  <li>与 $y$ 轴交于 $(0,\\ -1)$；</li>
  <li>与 $x$ 轴没有交点。</li>
</ul>
<p>此时图象与坐标轴共有 <strong>$1$ 个</strong>公共点，<strong>不满足"恰有两个公共点"</strong>。</p>
<div class="def-red"><strong>结论：</strong>$m \\neq 0$，原式是二次函数（抛物线）。</div>

<h4>第二步：分析 $y$ 轴交点</h4>
<p>令 $x = 0$，得 $y = m - 1$，因此抛物线与 $y$ 轴交于</p>
<div class="formula-block">$(0,\\ m - 1)$</div>
<p>当 $m = 1$ 时，这个交点正好是原点 $(0,\\ 0)$（即抛物线过原点）。</p>

<h4>第三步：明确"恰有两个公共点"的两种情形</h4>
<p>对抛物线而言，与两轴的总交点 =（$y$ 轴交点数）+（$x$ 轴交点数）。要恰好等于 $2$，有两种可能：</p>

<table class="kb-table">
  <thead><tr><th>情形</th><th>条件</th><th>几何意义</th><th>公共点构成</th></tr></thead>
  <tbody>
    <tr><td>① 抛物线过原点</td><td>$m = 1$</td><td>$y$ 轴交点 = $(0,0)$，$x$ 轴再交于另一点</td><td>原点 + 另 1 点 → 共 $2$ 个</td></tr>
    <tr><td>② 抛物线顶点在 $x$ 轴上</td><td>判别式 $\\Delta = 0$（且 $m \\neq 1$）</td><td>$x$ 轴恰 $1$ 个交点；$y$ 轴 $1$ 个非原点交点</td><td>$1+1$ → 共 $2$ 个</td></tr>
  </tbody>
</table>

<div class="def-red"><strong>排除：</strong>$\\Delta > 0$ 且 $m \\neq 1$ 时，$x$ 轴 $2$ 点 ＋ $y$ 轴 $1$ 点 = $3$ 个；$\\Delta < 0$ 时，$x$ 轴 $0$ 点 ＋ $y$ 轴 $1$ 点 = $1$ 个，均不满足。</div>

<h4>第四步：求情形 ①（$m = 1$）</h4>
<p>当 $m = 1$ 时，函数化为</p>
<div class="formula-block">$y = x^2 + 3x = x(x + 3)$</div>
<p>令 $y = 0$：$x(x + 3) = 0$，解得</p>
<div class="formula-block">$x = 0 \\quad\\text{或}\\quad x = -3$</div>
<p>因此与 $x$ 轴交于 $(0,\\ 0)$ 和 $(-3,\\ 0)$，与 $y$ 轴也交于 $(0,\\ 0)$（同一点重合）。</p>
<p>故共有 <strong>$2$ 个</strong>公共点：$(0,\\ 0)$、$(-3,\\ 0)$。✓</p>

<h4>第五步：求情形 ②（$\\Delta = 0$）</h4>
<p>抛物线与 $x$ 轴交点由方程 $mx^2 + 3mx + m - 1 = 0$ 决定，其判别式为</p>
<div class="formula-block">$\\Delta = (3m)^2 - 4m(m - 1) = 9m^2 - 4m^2 + 4m = 5m^2 + 4m = m(5m + 4)$</div>
<p>令 $\\Delta = 0$。因 $m \\neq 0$，两边除以 $m$，得</p>
<div class="formula-block">$5m + 4 = 0 \\quad\\Longrightarrow\\quad m = -\\dfrac{4}{5}$</div>
<p>验证：此时 $m - 1 = -\\dfrac{4}{5} - 1 = -\\dfrac{9}{5} \\neq 0$，故 $y$ 轴交点 $(0,\\ -\\dfrac{9}{5})$ 不在 $x$ 轴上；抛物线顶点落在 $x$ 轴上，与 $x$ 轴恰有 <strong>$1$ 个</strong>交点。</p>
<p>故共有 <strong>$2$ 个</strong>公共点。✓</p>

<h4>第六步：汇总答案</h4>
<div class="answer-box">
  <span class="answer-label">✅ 答案：</span><span class="answer-value">$m = 1$ 或 $m = -\\dfrac{4}{5}$</span>
</div>
`
  }
];
