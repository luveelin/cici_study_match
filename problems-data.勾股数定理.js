// problems-data.勾股数定理.js
// 由拆分脚本自动生成，请勿手改；如需修改请编辑本文件后运行 node build.js。
// 本文件仅导出「勾股数定理」分类的题目数组（module.exports = [...]）。

module.exports = [
{
    id: "p20",
    file: "p20.html",
    title: "p20 表格规律与勾股数",
    type: "选择填空",
    topics: ["表格规律", "函数关系", "勾股数", "完全平方"],
    difficulty: 3,
    category: "勾股数定理",
    image: "images/p20.png",
    content: `
<div class="prob-statement">
  <p>如表所示，当 $a=90$ 时，$c$ 的值为（　　）</p>
  <table class="kb-table">
    <thead><tr><th>$a$</th><th>$6$</th><th>$8$</th><th>$10$</th><th>$12$</th><th>$14$</th><th>$\\cdots$</th></tr></thead>
    <tbody>
      <tr><td>$b$</td><td>$8$</td><td>$15$</td><td>$24$</td><td>$35$</td><td>$48$</td><td>$\\cdots$</td></tr>
      <tr><td>$c$</td><td>$10$</td><td>$17$</td><td>$26$</td><td>$37$</td><td>$50$</td><td>$\\cdots$</td></tr>
    </tbody>
  </table>
  <p>A. $2023$　B. $2024$　C. $2025$　D. $2026$</p>
</div>

<details class="kb-details">
  <summary>📌 知识点总结（点击展开／收起）</summary>

<h3>📌 知识点总结</h3>
<table class="kb-table">
  <thead><tr><th>知识点</th><th>说明</th></tr></thead>
  <tbody>
    <tr><td>表格规律</td><td>观察 $a,b,c$ 三行的对应关系，寻找统一公式</td></tr>
    <tr><td>勾股数</td><td>满足 $a^2+b^2=c^2$ 的正整数组称为勾股数</td></tr>
    <tr><td>完全平方</td><td>$\\left(\\dfrac{a}{2}\\right)^2$ 是连接 $a$ 与 $b,c$ 的关键</td></tr>
    <tr><td>代入求值</td><td>得到 $c$ 关于 $a$ 的表达式后，把 $a=90$ 代入</td></tr>
  </tbody>
</table>
</details>

<h3>✍️ 解题过程</h3>

<h4>第一步：发现 $(a,b,c)$ 满足勾股定理</h4>
<p>逐行验证：</p>
<div class="formula-block">$6^2+8^2=36+64=100=10^2$</div>
<div class="formula-block">$8^2+15^2=64+225=289=17^2$</div>
<div class="formula-block">$10^2+24^2=100+576=676=26^2$</div>
<p>每一行都满足 $a^2+b^2=c^2$，所以 $(a,b,c)$ 是一组勾股数。</p>

<h4>第二步：发现 $b$ 与 $c$ 的常数关系</h4>
<p>观察 $b$ 与 $c$ 的对应值：</p>
<div class="formula-block">$c-b=10-8=2,\\quad 17-15=2,\\quad 26-24=2,\\quad 37-35=2,\\quad 50-48=2$</div>
<p>$c-b$ 恒等于 $2$，即：</p>
<div class="formula-block">$b = c-2$</div>

<h4>第三步：代入消 $b$，求 $c$ 关于 $a$ 的表达式</h4>
<p>将 $b=c-2$ 代入 $a^2+b^2=c^2$：</p>
<div class="formula-block">$a^2+(c-2)^2=c^2$</div>
<div class="formula-block">$a^2+(c^2-4c+4)=c^2$</div>
<div class="formula-block">$a^2-4c+4=0$</div>
<div class="formula-block">$4c = a^2+4$</div>
<div class="formula-block">$c = \\dfrac{a^2}{4}+1$</div>

<h4>第四步：代入 $a=90$ 求 $c$</h4>
<div class="formula-block">$c = \\dfrac{90^2}{4}+1 = \\dfrac{8100}{4}+1 = 2025+1 = 2026$</div>
<div class="answer-box">
  <span class="answer-label">✅ 答案：</span><span class="answer-value">D. $2026$</span>
</div>

<h3>📚 南昌/江西中考类似题（同类拓展）</h3>
<div class="practice-box">
  <p><strong>题1（表格二次规律·江西中考常见）：</strong>观察下表，当 $x=20$ 时，$y$ 的值为 ______。<a href="p20a1.html" style="color:var(--accent);font-weight:600;text-decoration:none;">📄 查看详细解答 →</a></p>
  <p class="hint">💡 表格：$x: 1,2,3,4,5$；$y: 3,8,15,24,35$。</p>
  <p><strong>题2（勾股数规律）：</strong>一组勾股数中，偶数直角边 $a$ 依次取 $6,8,10,12,14$，斜边 $c$ 依次为 $10,17,26,37,50$。若 $a=50$，则 $c=$ ______。<a href="p20a2.html" style="color:var(--accent);font-weight:600;text-decoration:none;">📄 查看详细解答 →</a></p>
  <p class="hint">💡 提示：$c = \\dfrac{a^2}{4}+1$。</p>
  <p><strong>题3（表格二次规律）：</strong>根据表格求 $n=15$ 时 $y$ 的值。<a href="p20a3.html" style="color:var(--accent);font-weight:600;text-decoration:none;">📄 查看详细解答 →</a></p>
  <p class="hint">💡 表格：$n: 1,2,3,4,5$；$y: 2,7,14,23,34$。</p>
</div>
`
  },

{
    id: "p21",
    file: "p21.html",
    title: "p21 完美勾股数",
    type: "选择填空",
    topics: ["勾股定理", "完全平方", "数论", "奇偶性"],
    difficulty: 3,
    category: "勾股数定理",
    image: "images/p21.png",
    content: `
<div class="prob-statement">
  <p>若正整数 $a,n$ 满足 $a^2+n^2=(n+1)^2$，这样的三个整数 $a,n,n+1$（如：$3,4,5$ 或 $5,12,13$）我们称为一组"完美勾股数"。当 $n<115$ 时，共有 ______ 组这样的"完美勾股数"。</p>
</div>

<details class="kb-details">
  <summary>📌 知识点总结（点击展开／收起）</summary>

<h3>📌 知识点总结</h3>
<table class="kb-table">
  <thead><tr><th>知识点</th><th>说明</th></tr></thead>
  <tbody>
    <tr><td>勾股定理</td><td>对直角三角形 $a^2+n^2=(n+1)^2$ 等价于 $a^2=2n+1$</tr>
    <tr><td>偶数边连续勾股数</td><td>$3,4,5$ 与 $5,12,13$ 都属于「偶数边差 $1$」这一族</td></tr>
    <tr><td>奇偶性</td><td>$a^2=2n+1$ 是奇数，故 $a$ 必为奇数</td></tr>
    <tr><td>枚举 + 上界</td><td>由 $n<115$ 限定 $a$ 的取值范围后逐个验证</td></tr>
  </tbody>
</table>
</details>

<h3>✍️ 解题过程</h3>

<h4>第一步：化简条件 $a^2+n^2=(n+1)^2$</h4>
<p>展开右边：</p>
<div class="formula-block">$(n+1)^2 = n^2+2n+1$</div>
<p>代入原式：</p>
<div class="formula-block">$a^2+n^2 = n^2+2n+1$</div>
<p>两边消去 $n^2$，得到核心等式：</p>
<div class="formula-block">$a^2 = 2n+1$</div>

<h4>第二步：分析 $a$ 的奇偶性</h4>
<p>$2n+1$ 是奇数，所以 $a^2$ 必须是奇数 $\\Rightarrow$ $a$ 也必须是奇数。</p>
<p>题目给的两个例子：</p>
<div class="formula-block">$a=3,n=4 \\Rightarrow a^2=9=2\\times 4+1$ ✓</div>
<div class="formula-block">$a=5,n=12 \\Rightarrow a^2=25=2\\times 12+1$ ✓</div>

<h4>第三步：由 $n<115$ 估算 $a$ 的范围</h4>
<p>由 $a^2=2n+1<2\\times 115+1=231$，得 $a^2<231$。又因 $a$ 是正奇数，故 $a^2$ 必为<strong>奇完全平方数</strong>。</p>
<div class="formula-block">$a\\in\{1,3,5,7,9,11,13,15,\\dots\}$，其中 $a^2<231$</div>
<p>奇完全平方数序列：$1^2,\,3^2,\,5^2,\,\\dots,\,15^2=225,\,17^2=289$。因 $15^2=225<231$ 满足，而 $17^2=289>231$ 已越界，故 $a\\le 15$。</p>

<h4>第四步：逐个枚举</h4>
<table class="kb-table">
  <thead><tr><th>$a$</th><th>$a^2$</th><th>$n=\\dfrac{a^2-1}{2}$</th><th>是否满足 $n<115$</th></tr></thead>
  <tbody>
    <tr><td>$1$</td><td>$1$</td><td>$0$</td><td>✗（$n$ 须为正整数）</td></tr>
    <tr><td>$3$</td><td>$9$</td><td>$4$</td><td>✓ $(3,4,5)$</td></tr>
    <tr><td>$5$</td><td>$25$</td><td>$12$</td><td>✓ $(5,12,13)$</td></tr>
    <tr><td>$7$</td><td>$49$</td><td>$24$</td><td>✓ $(7,24,25)$</td></tr>
    <tr><td>$9$</td><td>$81$</td><td>$40$</td><td>✓ $(9,40,41)$</td></tr>
    <tr><td>$11$</td><td>$121$</td><td>$60$</td><td>✓ $(11,60,61)$</td></tr>
    <tr><td>$13$</td><td>$169$</td><td>$84$</td><td>✓ $(13,84,85)$</td></tr>
    <tr><td>$15$</td><td>$225$</td><td>$112$</td><td>✓ $(15,112,113)$</td></tr>
    <tr><td>$17$</td><td>$289$</td><td>$144$</td><td>✗（$n\\ge 115$）</td></tr>
  </tbody>
</table>

<div class="answer-box">
  <span class="answer-label">✅ 答案：</span><span class="answer-value">$7$</span>
</div>

<h3>📚 南昌/江西中考类似题（同类拓展）</h3>
<div class="practice-box">
  <p><strong>题1（公式 + 范围）：</strong>正整数 $a,n$ 满足 $a^2+n^2=(n+1)^2$，当 $a=21$ 时，$n=$ ______；该组数为 (21,____,____)。<a href="p21a1.html" style="color:var(--accent);font-weight:600;text-decoration:none;">📄 查看详细解答 →</a></p>
  <p class="hint">💡 由 $a^2=2n+1$ 解出 $n$。</p>
  <p><strong>题2（差值规律）：</strong>在 $a^2=2n+1$ 中，若 $a$ 是奇数，则 $n$ 一定是什么数？若 $a$ 是偶数，会有解吗？<a href="p21a2.html" style="color:var(--accent);font-weight:600;text-decoration:none;">📄 查看详细解答 →</a></p>
  <p class="hint">💡 奇偶性分析。</p>
  <p><strong>题3（换族数论）：</strong>正整数 $a,m$ 满足 $a^2+m^2=(m+2)^2$，当 $m<100$ 时，共有多少组？<a href="p21a3.html" style="color:var(--accent);font-weight:600;text-decoration:none;">📄 查看详细解答 →</a></p>
  <p class="hint">💡 类比 $a^2=4m+4$ 的奇偶性。</p>
</div>
`
  },

{
    id: "p22",
    file: "p22.html",
    title: "p22 平板支架与角平分线",
    type: "选择填空",
    topics: ["勾股定理", "角平分线性质", "点到直线距离", "面积法"],
    difficulty: 3,
    category: "勾股数定理",
    image: "images/p22.png",
    content: `
<div class="prob-statement">
  <p>图①是一个可调节平板支架，其结构示意图如图②所示。已知平板宽度 $AB=16$ cm，支架 $BC=12$ cm。当 $\\angle ABC=90^{\\circ}$ 且 $CB$ 平分 $\\angle ACD$ 时，点 $B$ 到 $CD$ 的距离是（ ）</p>
  <p>A. $9$ cm　　B. $8$ cm　　C. $9.6$ cm　　D. $8.6$ cm</p>
  <p><img src="images/p22-fig.png" alt="结构示意图" style="max-width: 320px; border: 1px solid #e2e8f0; border-radius: 6px; margin-top: 8px;"></p>
</div>

<details class="kb-details">
  <summary>📌 知识点总结</summary>
  <div class="kb-content">
    <ul>
      <li><strong>勾股定理</strong>：在直角三角形中，$a^2+b^2=c^2$。</li>
      <li><strong>面积法求斜边上的高</strong>：直角三角形面积 $=\\dfrac{1}{2}ab=\\dfrac{1}{2}ch$，故斜边上的高 $h=\\dfrac{ab}{c}$。</li>
      <li><strong>角平分线性质</strong>：角平分线上的任意一点到角两边的距离相等。</li>
    </ul>
  </div>
</details>

<h3>✍️ 解题过程</h3>

<h4>第一步：在 $\\text{Rt}\\triangle ABC$ 中求斜边 $AC$</h4>
<p>因为 $\\angle ABC=90^{\\circ}$，$AB=16$，$BC=12$，由勾股定理：</p>
<div class="formula-block">$AC=\\sqrt{AB^2+BC^2}=\\sqrt{16^2+12^2}=\\sqrt{256+144}=\\sqrt{400}=20$（cm）</div>

<h4>第二步：用面积法求点 $B$ 到 $AC$ 的距离</h4>
<p>设 $B$ 到 $AC$ 的距离为 $h$，则：</p>
<div class="formula-block">$S_{\\triangle ABC}=\\dfrac{1}{2}AB\\cdot BC=\\dfrac{1}{2}AC\\cdot h$</div>
<p>代入数值：</p>
<div class="formula-block">$\\dfrac{1}{2}\\times16\\times12=\\dfrac{1}{2}\\times20\\times h$</div>
<div class="formula-block">$h=\\dfrac{16\\times12}{20}=\\dfrac{192}{20}=9.6$（cm）</div>

<h4>第三步：由角平分线性质得结论</h4>
<p>因为 $CB$ 平分 $\\angle ACD$，点 $B$ 在角平分线 $CB$ 上，所以点 $B$ 到 $AC$ 的距离等于点 $B$ 到 $CD$ 的距离。</p>
<div class="formula-block">$\\text{点 }B\\text{ 到 }CD\\text{ 的距离}=9.6$（cm）</div>
<div class="answer-box">
  <span class="answer-label">✅ 答案：</span><span class="answer-value">C. $9.6$ cm</span>
</div>

<h3>📚 南昌/江西中考类似题（同类拓展）</h3>
<ol>
  <li><strong>斜边上的高</strong>：在 $\\text{Rt}\\triangle ABC$ 中，$\\angle ABC=90^{\\circ}$，$AB=6$，$BC=8$，$AC=10$，求斜边 $AC$ 上的高。 <a href="p22a1.html">📄 查看详细解答 →</a></li>
  <li><strong>等腰直角三角形中的角平分线</strong>：在等腰直角三角形 $ABC$ 中，$\\angle ACB=90^{\\circ}$，$AC=BC=6$，$CD$ 平分 $\\angle ACB$ 交 $AB$ 于 $D$，求点 $D$ 到 $AC$ 的距离。 <a href="p22a2.html">📄 查看详细解答 →</a></li>
  <li><strong>角平分线上的点到两边距离</strong>：点 $P$ 在 $\\angle AOB$ 的平分线上，$\\angle AOB=90^{\\circ}$，$P$ 到 $OA$ 的距离为 $4$，求 $OP$ 的长。 <a href="p22a3.html">📄 查看详细解答 →</a></li>
</ol>
`
  },

{
    id: "p22a1",
    parent: "p22",
    file: "p22a1.html",
    title: "p22a1 斜边上的高",
    type: "选择填空",
    topics: ["勾股定理", "面积法", "斜边上的高"],
    difficulty: 2,
    category: "勾股数定理",
    content: `
<div class="prob-statement">
  <p>在 $\\text{Rt}\\triangle ABC$ 中，$\\angle ABC=90^{\\circ}$，$AB=6$，$BC=8$，$AC=10$，求斜边 $AC$ 上的高。</p>
</div>

<h3>✍️ 解答</h3>
<p>直角三角形面积有两种算法：</p>
<div class="formula-block">$S_{\\triangle ABC}=\\dfrac{1}{2}AB\\cdot BC=\\dfrac{1}{2}\\times6\\times8=24$</div>
<div class="formula-block">$S_{\\triangle ABC}=\\dfrac{1}{2}AC\\cdot h=\\dfrac{1}{2}\\times10\\cdot h=5h$</div>
<p>令两式相等：</p>
<div class="formula-block">$5h=24 \\Rightarrow h=4.8$</div>
<div class="answer-box">
  <span class="answer-label">✅ 答案：</span><span class="answer-value">斜边 $AC$ 上的高为 $4.8$</span>
</div>
`
  },

{
    id: "p22a2",
    parent: "p22",
    file: "p22a2.html",
    title: "p22a2 等腰直角三角形中的角平分线",
    type: "选择填空",
    topics: ["等腰直角三角形", "角平分线性质", "点到直线距离"],
    difficulty: 3,
    category: "勾股数定理",
    content: `
<div class="prob-statement">
  <p>在等腰直角三角形 $ABC$ 中，$\\angle ACB=90^{\\circ}$，$AC=BC=6$，$CD$ 平分 $\\angle ACB$ 交 $AB$ 于 $D$，求点 $D$ 到 $AC$ 的距离。</p>
</div>

<h3>✍️ 解答</h3>
<p>因为 $CD$ 平分 $\\angle ACB$，且 $\\angle ACB=90^{\\circ}$，所以 $\\angle ACD=\\angle BCD=45^{\\circ}$。</p>
<p>点 $D$ 在角平分线上，根据角平分线性质，点 $D$ 到 $AC$ 的距离等于点 $D$ 到 $BC$ 的距离。</p>
<p>设 $D$ 到 $AC$ 的距离为 $x$。由于 $\\angle ACB=90^{\\circ}$，$D$ 向 $AC$、$BC$ 作垂线后，垂足与 $D$ 构成边长为 $x$ 的正方形，因此 $D$ 到 $BC$ 的距离也是 $x$。</p>
<p>用面积法：$S_{\\triangle ACD}+S_{\\triangle BCD}=S_{\\triangle ABC}$</p>
<div class="formula-block">$\\dfrac{1}{2}\\times AC\\times x + \\dfrac{1}{2}\\times BC\\times x = \\dfrac{1}{2}\\times AC\\times BC$</div>
<div class="formula-block">$\\dfrac{1}{2}\\times6x + \\dfrac{1}{2}\\times6x = \\dfrac{1}{2}\\times6\\times6$</div>
<div class="formula-block">$6x=18 \\Rightarrow x=3$</div>
<div class="answer-box">
  <span class="answer-label">✅ 答案：</span><span class="answer-value">点 $D$ 到 $AC$ 的距离为 $3$</span>
</div>
`
  },

{
    id: "p22a3",
    parent: "p22",
    file: "p22a3.html",
    title: "p22a3 角平分线上的点到两边距离",
    type: "选择填空",
    topics: ["角平分线性质", "等腰直角三角形", "距离"],
    difficulty: 2,
    category: "勾股数定理",
    content: `
<div class="prob-statement">
  <p>点 $P$ 在 $\\angle AOB$ 的平分线上，$\\angle AOB=90^{\\circ}$，$P$ 到 $OA$ 的距离为 $4$，求 $OP$ 的长。</p>
</div>

<h3>✍️ 解答</h3>
<p>因为 $OP$ 平分 $\\angle AOB$，点 $P$ 到 $OA$ 的距离等于点 $P$ 到 $OB$ 的距离，所以 $P$ 到 $OB$ 的距离也为 $4$。</p>
<p>设 $P$ 到 $OA$ 的垂足为 $E$，到 $OB$ 的垂足为 $F$，则 $PE=PF=4$。</p>
<p>因为 $\\angle AOB=90^{\\circ}$，$PE\\perp OA$，$PF\\perp OB$，所以四边形 $OEPF$ 是矩形；又因为 $PE=PF=4$，所以四边形 $OEPF$ 是正方形。</p>
<p>因此 $OE=PE=4$，$OF=PF=4$。</p>
<p>在 $\\text{Rt}\\triangle OPF$ 中：</p>
<div class="formula-block">$OP=\\sqrt{OF^2+PF^2}=\\sqrt{4^2+4^2}=\\sqrt{32}=4\\sqrt{2}$</div>
<div class="answer-box">
  <span class="answer-label">✅ 答案：</span><span class="answer-value">$OP=4\\sqrt{2}$</span>
</div>
`
  }
];
