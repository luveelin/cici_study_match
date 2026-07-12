const fs = require('fs');
const katex = require('katex');

// Helper: render KaTeX formula
function katexRender(formula, displayMode) {
  try {
    return katex.renderToString(formula.trim(), { displayMode, throwOnError: false, strict: false, output: 'html' });
  } catch(e) {
    return `<code>${formula}</code>`;
  }
}

function renderMath(text) {
  text = text.replace(/\$\$([\s\S]*?)\$\$/g, (_, f) => katexRender(f, true));
  text = text.replace(/(?<!\$)\$(?!\$)([^$]+?)\$(?!\$)/g, (_, f) => katexRender(f, false));
  return text;
}

// Fix \neq KaTeX issue: replace the complex \neq HTML structure with a simple ≠
function fixNeq(html) {
  const neqBlockPattern = /<span class="mrel"><span class="mrel"><span class="mord vbox"><span class="thinbox"><span class="rlap"><span class="strut" style="height:[^"]*;"><\/span><span class="inner"><span class="mord"><span class="mrel">\ue020<\/span><\/span><\/span><span class="fix"><\/span><\/span><\/span><\/span><\/span><span class="mrel"><span class="mspace nobreak"><\/span><span class="mrel">=<\/span><\/span>/g;
  return html.replace(neqBlockPattern, '<span class="mrel">≠</span>');
}

// ============ 复制 KaTeX 样式到题目页 ============
// problems/katex.css 内部的 url(fonts/...) 会自然解析到 problems/fonts/，无需改写
fs.copyFileSync('./node_modules/katex/dist/katex.min.css', './problems/katex.css');
console.log('  ✓ problems/katex.css (from node_modules/katex)');

// ============ 题目数据 ============
const { problems } = require('./problems-data.js');

// ============ KaTeX 反斜杠校验（防单反斜杠导致渲染失败） ============
// content 是 JS 模板字符串，KaTeX 命令必须写「双反斜杠」（如 \\sqrt）。
// 若写成单反斜杠，JS 求值后变成 sqrt（字母），KaTeX(throwOnError:false) 会把它
// 当普通文本渲染，页面显示 "sqrt2" 而非 √2，且不报错，极难发现。故构建时强制拦截。
function validateKatexBackslashes() {
  const src = fs.readFileSync('./problems-data.js', 'utf-8');
  // 1) 找出所有「数学字段」模板字符串的起止位置（白名单：可能含公式的字段）
  const MATH_FIELDS = ['content', 'knowledge', 'extensions', 'solution', 'hint', 'answer', 'analysis'];
  const fieldRe = new RegExp('(' + MATH_FIELDS.join('|') + '):\\s*`', 'g');
  const regions = [];
  let fm;
  while ((fm = fieldRe.exec(src)) !== null) {
    const start = fm.index + fm[0].length;
    const end = src.indexOf('`', start);
    if (end === -1) continue;
    regions.push({ field: fm[1], start, end, fieldPos: fm.index });
  }
  // 2) 记录所有 id 位置，用于报错时定位到具体题目
  const idRe = /id:\s*"([^"]+)"/g;
  const ids = [];
  let im;
  while ((im = idRe.exec(src)) !== null) ids.push({ pos: im.index, id: im[1] });
  // 3) 在每个字段内扫描「孤立单反斜杠 + 字母」（已正确的双反斜杠不会被命中）
  const errors = [];
  for (const r of regions) {
    const seg = src.slice(r.start, r.end);
    const re = /(?<!\\)\\(?!\\)[A-Za-z]+/g;
    let m;
    while ((m = re.exec(seg)) !== null) {
      let curId = '(unknown)';
      for (let i = ids.length - 1; i >= 0; i--) {
        if (ids[i].pos < r.fieldPos) { curId = ids[i].id; break; }
      }
      errors.push('    题目 ' + curId + ' 的 ' + r.field + ' 字段存在单反斜杠 KaTeX 命令 "\\' + m[0] + '"，必须写成双反斜杠 "\\\\' + m[0] + '"');
    }
  }
  if (errors.length) {
    console.error('\n❌ 检测到 ' + errors.length + ' 处 KaTeX 反斜杠错误（content 必须用双反斜杠），已中止构建：\n' + errors.slice(0, 30).join('\n') + (errors.length > 30 ? '\n    …' : ''));
    process.exit(1);
  }
  console.log('  ✓ KaTeX 反斜杠校验通过（无单反斜杠命令）');
}

validateKatexBackslashes();


// ============ 生成每道题的 HTML ============
// 说明：CSS/JS 已外链到公共文件（见 css/problem.css、js/problem.js、problems/katex.css），
// 不再内联，便于维护与浏览器缓存复用。
problems.forEach(p => {
  const bodyHtml = fixNeq(renderMath(p.content));
  const imageHtml = p.image
    ? `<img class="original-image" id="img-${p.id}" src="${p.image}" alt="原题图片 - ${p.title}">
<p class="original-image-caption" onclick="openImgOverlay('${p.id}')">📷 点击查看原图</p>
<div class="img-overlay" id="overlay-${p.id}">
  <div class="img-overlay-box" id="overlayBox-${p.id}" onmousedown="startDrag(event,'${p.id}')">
    <span class="img-overlay-close" onclick="closeImgOverlay('${p.id}')">✕</span>
    <img src="${p.image}" alt="原题图片 - ${p.title}">
    <span class="img-resize-handle" onmousedown="startResize(event,'${p.id}')"></span>
  </div>
</div>`
    : '';
  const html = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${p.title}  - cici_study_math</title>
<link rel="stylesheet" href="katex.css">
<link rel="stylesheet" href="../css/problem.css">
</head>
<body>
<h2>${p.title}</h2>
<div style="margin-bottom:12px;display:flex;gap:6px;flex-wrap:wrap;">
  <span class="tag">${p.type}</span>
  ${p.topics.map(t => `<span class="tag">${t}</span>`).join('')}
  <span style="color:#f0c040;">${'★'.repeat(p.difficulty)}${'☆'.repeat(4-p.difficulty)}</span>
</div>
${imageHtml}
${bodyHtml}
<script src="../js/problem.js"></script>
</body>
</html>`;
  const outDir = './problems';
  fs.writeFileSync(`${outDir}/${p.file}`, html);
  console.log(`  ✓ ${outDir}/${p.file}`);
});

// ============ 构建树形结构 ============
const tree = {};
problems.forEach(p => {
  // 所有题目（含带 parent 的子题）都进入导航树；子题通过 parent 嵌套到父题下作为子菜单
  if (!tree[p.category]) tree[p.category] = [];
  tree[p.category].push(p);
});

// 分类显示顺序（左侧菜单分组顺序，第一个为最上方分组）
const CATEGORY_ORDER = ["坐标轴几何", "几何综合", "二次根式", "最值问题", "函数与统计"];
const orderedCats = CATEGORY_ORDER.filter(c => tree[c])
  .concat(Object.keys(tree).filter(c => !CATEGORY_ORDER.includes(c)));

// 父子关系：把子题（parent 指向父题 id）嵌套到父题下作为子菜单
const childrenOf = {};
problems.forEach(p => {
  if (p.sub || !p.parent) return;
  (childrenOf[p.parent] = childrenOf[p.parent] || []).push(p);
});

// 生成单个题目的菜单项 <li>
function fileLinkHtml(p) {
  const stars = '★'.repeat(p.difficulty) + '☆'.repeat(4 - p.difficulty);
  return `
            <li>
              <a class="tree-file" href="problems/${p.file}" data-id="${p.id}" data-cat="${p.category}" onclick="loadProblem(this, 'problems/${p.file}');return false;" ondblclick="toggleMastered('${p.id}')" title="${p.title}">
                <span class="tree-checkmark" id="check-${p.id}"></span>
                <span class="tree-file-icon">📄</span>
                <span class="tree-file-name">${p.title}</span>
                <span class="tree-file-diff">${stars}</span>
              </a>
            </li>`;
}

// 生成二级父题（带子题的题目）菜单项：整行可点 = 折叠/展开 + 加载题目
function subFolderHtml(p, kids) {
  const stars = '★'.repeat(p.difficulty) + '☆'.repeat(4 - p.difficulty);
  return `
            <li class="tree-folder tree-subfolder">
              <div class="tree-folder-header" data-file="problems/${p.file}" onclick="toggleFolderAndLoad(this, 'problems/${p.file}', '${p.id}')" ondblclick="toggleMastered('${p.id}')" title="${p.title}" data-id="${p.id}" data-cat="${p.category}">
                <span class="tree-arrow">▶</span>
                <span class="tree-checkmark" id="check-${p.id}"></span>
                <span class="tree-file-icon">📄</span>
                <span class="tree-file-name">${p.title}</span>
                <span class="tree-file-diff">${stars}</span>
              </div>
              <ul class="tree-children">
                ${kids.map(k => fileLinkHtml(k)).join('')}
              </ul>
            </li>`;
}

// 生成树形菜单 HTML
function buildTreeHTML() {
  let html = '';
  for (const cat of orderedCats) {
    const probs = tree[cat];
    if (!probs || probs.length === 0) continue;
    // 顶层题目（没有 parent 的）直接挂在分类下；有 parent 的作为子菜单嵌套到父题
    const topLevel = probs.filter(p => !p.parent);
    if (topLevel.length === 0) continue;
    topLevel.sort((a, b) => a.difficulty - b.difficulty);
    html += `
        <li class="tree-folder">
          <div class="tree-folder-header" onclick="toggleFolder(this)" title="${cat}">
            <span class="tree-arrow">▶</span>
            <span class="tree-folder-icon">📁</span>
            <span class="tree-folder-name">${cat}</span>
            <span class="tree-count">${probs.length}</span>
          </div>
          <ul class="tree-children">`;
    topLevel.forEach(p => {
      const kids = childrenOf[p.id];
      if (kids && kids.length) {
        html += subFolderHtml(p, kids);
      } else {
        html += fileLinkHtml(p);
      }
    });
    html += `
          </ul>
        </li>`;
  }
  return html;
}

// ============ 生成 index.html ============
// 说明：首页 CSS/JS 已外链到 css/index.css、js/app.js（见这两个文件），不再内联。
const indexHtml = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>cici_study_math</title>
<link rel="stylesheet" href="css/index.css">
</head>
<body>

<!-- ====== SIDEBAR ====== -->
<aside class="sidebar">
  <div class="sidebar-header">
    <h1>📚 cici_study_math</h1>
    <div class="subtitle">二次根式 · 最值问题 · 几何综合 · 函数与统计</div>
    <button class="sidebar-toggle" onclick="toggleSidebar()" title="收起侧边栏">◀</button>
  </div>

  <!-- 树形导航 -->
  <nav class="tree-nav">
    <ul>
      ${buildTreeHTML()}
    </ul>
  </nav>
</aside>
<button class="sidebar-reopen" onclick="toggleSidebar()" title="展开侧边栏">▶</button>
<!-- ====== MAIN ====== -->
<main class="main">
  <div class="main-header">
    <span class="breadcrumb" id="breadcrumb">cici_study_math</span>
    <span class="current-title" id="currentTitle">欢迎使用</span>
  </div>
  <div id="contentWrapper" class="main-content" style="display:flex;align-items:center;justify-content:center;">
    <div class="welcome" id="welcomeMsg">
      <div class="icon">📖</div>
      <h2>请从左侧导航选择题目</h2>
      <p style="color:#bbb;font-size:0.85em;">点击题目查看详细解答、知识点总结和举一反三</p>
    </div>
  </div>
  <iframe id="contentFrame" class="main-content" style="display:none;" sandbox="allow-same-origin allow-scripts"></iframe>
</main>

<script src="initData.js"></script>
<script src="js/app.js"></script>

</body>
</html>`;

fs.writeFileSync('./index.html', indexHtml);
console.log('  ✓ index.html');
console.log(`\n✅ 项目生成完成！`);
console.log(`   index.html + ${problems.length} 个题目页面`);
