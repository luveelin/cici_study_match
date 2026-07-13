let currentFile = null;
let sidebarOpen = true;

// ====== Sidebar toggle ======
function toggleSidebar() {
  sidebarOpen = !sidebarOpen;
  const sidebar = document.querySelector('.sidebar');
  const toggleBtn = document.querySelector('.sidebar-toggle');
  const reopenBtn = document.querySelector('.sidebar-reopen');
  if (sidebarOpen) {
    sidebar.classList.remove('collapsed');
    toggleBtn.textContent = '◀';
    toggleBtn.title = '收起侧边栏';
    if (reopenBtn) reopenBtn.style.display = '';
  } else {
    sidebar.classList.add('collapsed');
    toggleBtn.textContent = '▶';
    toggleBtn.title = '展开侧边栏';
  }
}

// ====== Mastered toggle (双击标记掌握) ======
function toggleMastered(id) {
  const checkEl = document.getElementById('check-' + id);
  if (!checkEl) return;
  // 兼容：checkmark 可能在 .tree-file 内，也可能在二级父题 header 内
  const itemEl = checkEl.closest('.tree-file') || checkEl.closest('.tree-folder-header');
  if (!itemEl) return;
  const isMastered = checkEl.classList.toggle('mastered');
  itemEl.classList.toggle('mastered', isMastered);
  checkEl.textContent = isMastered ? '✓' : '';
  // localStorage 为主：用 mastered / unmastered 两个集合记录个人状态，
  // 既支持在预置基础上额外标绿，也支持取消预置的标绿（刷新后仍生效）
  const mastered = JSON.parse(localStorage.getItem('mastered') || '[]');
  const unmastered = JSON.parse(localStorage.getItem('unmastered') || '[]');
  const mIdx = mastered.indexOf(id), uIdx = unmastered.indexOf(id);
  if (isMastered) {
    if (mIdx === -1) mastered.push(id);
    if (uIdx !== -1) unmastered.splice(uIdx, 1);
  } else {
    if (mIdx !== -1) mastered.splice(mIdx, 1);
    if (uIdx === -1) unmastered.push(id);
  }
  localStorage.setItem('mastered', JSON.stringify(mastered));
  localStorage.setItem('unmastered', JSON.stringify(unmastered));
  // 子题勾选变化后重算所有菜单的默认折叠态
  collapseMasteredFolders();
}

// 仅做视觉标绿，不写 localStorage（供预置/恢复共用）
function markMastered(id) {
  const checkEl = document.getElementById('check-' + id);
  if (!checkEl) return;
  // 兼容：可能在 .tree-file 内，也可能在二级父题 header 内
  const itemEl = checkEl.closest('.tree-file') || checkEl.closest('.tree-folder-header');
  if (itemEl) {
    checkEl.classList.add('mastered');
    checkEl.textContent = '✓';
    itemEl.classList.add('mastered');
  }
}

// 仅移除视觉标绿，不写 localStorage（供恢复时撤销预置项共用）
function unmarkMastered(id) {
  const checkEl = document.getElementById('check-' + id);
  if (!checkEl) return;
  const itemEl = checkEl.closest('.tree-file') || checkEl.closest('.tree-folder-header');
  checkEl.classList.remove('mastered');
  checkEl.textContent = '';
  if (itemEl) itemEl.classList.remove('mastered');
}

// ====== Tree folder toggle ======
function toggleFolder(header) {
  const children = header.nextElementSibling;
  const isCollapsed = children.classList.contains('hidden');
  if (isCollapsed) {
    children.classList.remove('hidden');
    header.classList.remove('collapsed');
  } else {
    children.classList.add('hidden');
    header.classList.add('collapsed');
  }
}

// 仅加载父题头对应的题目内容，不处理折叠/展开
function loadHeaderProblem(header, file, id) {
  document.querySelectorAll('.tree-file').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.tree-folder-header').forEach(el => el.classList.remove('active'));
  header.classList.add('active');
  document.getElementById('welcomeMsg').style.display = 'none';
  const frame = document.getElementById('contentFrame');
  frame.style.display = 'block';
  frame.src = file;
  document.getElementById('contentWrapper').style.display = 'none';
  document.getElementById('breadcrumb').textContent = '题目详情';
  document.getElementById('currentTitle').textContent =
    header.querySelector('.tree-file-name')?.textContent || '';
  currentFile = file;
  if (id) localStorage.setItem('lastProblemId', id);
}

// 二级父题整行点击：折叠/展开子菜单 + 同时加载该题到右侧
// forceExpand=true 时只展开不折叠（用于初始化恢复，避免把刚展开的子菜单又折回去）
function toggleFolderAndLoad(header, file, id, forceExpand) {
  // 1) 折叠/展开：forceExpand 时强制展开，否则按当前状态 toggle
  if (forceExpand) {
    const children = header.nextElementSibling;
    if (children) {
      children.classList.remove('hidden');
      header.classList.remove('collapsed');
    }
  } else {
    toggleFolder(header);
  }
  // 2) 加载题目到右侧内容区
  loadHeaderProblem(header, file, id);
}

// 判断某个文件夹下“所有三级叶子题目”是否都已打勾。
function folderAllMastered(folder) {
  const leaves = folder.querySelectorAll('.tree-file');
  if (leaves.length === 0) return false;
  return [...leaves].every(el => el.classList.contains('mastered'));
}

// 判断一级菜单（顶层分组）的“直接子项”是否全打勾。
// 直接子项包括：
//   · .tree-subfolder > .tree-folder-header（带有三级子题的二级父题）
//   · > .tree-children > li > .tree-file（直接挂在该分组下的普通题目）
function topLevelAllMastered(folder) {
  const children = folder.querySelector(':scope > .tree-children');
  if (!children) return false;

  const items = [];
  // 1) 二级子菜单的 header（有三级子题的父题）
  children.querySelectorAll(':scope > li.tree-subfolder > .tree-folder-header').forEach(h => {
    items.push(h);
  });
  // 2) 直接挂在该分组下的普通题目（不在 .tree-subfolder 内）
  children.querySelectorAll(':scope > li > .tree-file').forEach(f => {
    items.push(f);
  });

  if (items.length === 0) return false;
  return items.every(el => el.classList.contains('mastered'));
}

// 初始化时根据“打勾”状态设置各层级菜单的默认展开/收起：
//  · 一级菜单：其下二级菜单（含直接子题）全打勾 → 收缩，否则 → 展开
//  · 二级菜单：其下所有三级菜单全打勾 → 收缩，否则 → 展开
function collapseMasteredFolders() {
  // 1) 二级菜单（带三级子题的父题）：三级全打勾则收缩，否则全展开
  document.querySelectorAll('.tree-subfolder').forEach(folder => {
    const header = folder.querySelector(':scope > .tree-folder-header');
    const children = folder.querySelector(':scope > .tree-children');
    if (!header || !children) return;
    if (folderAllMastered(folder)) {
      header.classList.add('collapsed');
      children.classList.add('hidden');
    } else {
      header.classList.remove('collapsed');
      children.classList.remove('hidden');
    }
  });

  // 2) 一级菜单（顶层分组）：其下二级项（含直接子题）全打勾则收缩，否则展开
  document.querySelectorAll('.tree-folder:not(.tree-subfolder)').forEach(folder => {
    const header = folder.querySelector(':scope > .tree-folder-header');
    const children = folder.querySelector(':scope > .tree-children');
    if (!header || !children) return;
    if (topLevelAllMastered(folder)) {
      header.classList.add('collapsed');
      children.classList.add('hidden');
    } else {
      header.classList.remove('collapsed');
      children.classList.remove('hidden');
    }
  });
}

// ====== Load problem into iframe ======
function loadProblem(linkEl, file) {
  // Update active state
  document.querySelectorAll('.tree-file').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.tree-folder-header').forEach(el => el.classList.remove('active'));
  linkEl.classList.add('active');
  currentFile = file;

  // Update header
  document.getElementById('breadcrumb').textContent = '题目详情';
  document.getElementById('currentTitle').textContent = linkEl.querySelector('.tree-file-name').textContent;

  // Show iframe, hide welcome
  document.getElementById('welcomeMsg').style.display = 'none';
  const frame = document.getElementById('contentFrame');
  frame.style.display = 'block';
  frame.src = file;

  // Also update contentWrapper to not use flex centering when showing iframe
  document.getElementById('contentWrapper').style.display = 'none';
  frame.style.display = 'block';

  // 保存当前题目到 localStorage（刷新后恢复）
  const id = linkEl.getAttribute('data-id');
  if (id) localStorage.setItem('lastProblemId', id);
}

// ====== Menu Search ======
document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('menuSearch');
  const searchClear = document.getElementById('searchClear');
  if (!searchInput) return;

  // 判断某个节点是否名称匹配
  function nameMatches(el, query) {
    const nameEl = el.querySelector('.tree-folder-name, .tree-file-name');
    return nameEl && nameEl.textContent.toLowerCase().includes(query);
  }

  searchInput.addEventListener('input', function() {
    const query = this.value.trim().toLowerCase();
    const sidebar = document.querySelector('.sidebar');

    // 显示/隐藏清除按钮
    searchClear.style.display = query ? 'block' : 'none';

    if (!query) {
      // 清除搜索：恢复原始状态
      sidebar.classList.remove('searching');
      document.querySelectorAll('.search-hidden').forEach(el => el.classList.remove('search-hidden'));
      collapseMasteredFolders();
      return;
    }

    sidebar.classList.add('searching');

    // 第一步：隐藏所有菜单项
    const folderLis = document.querySelectorAll('.tree-nav li.tree-folder');
    const fileLis = document.querySelectorAll('.tree-nav li:not(.tree-folder)');
    folderLis.forEach(el => el.classList.add('search-hidden'));
    fileLis.forEach(el => el.classList.add('search-hidden'));

    // 第二步：显示匹配的叶子文件及它们的祖先
    fileLis.forEach(li => {
      if (nameMatches(li, query)) {
        li.classList.remove('search-hidden');
        // 逐级向上显示父文件夹
        let parent = li.parentElement?.closest('li.tree-folder');
        while (parent) {
          parent.classList.remove('search-hidden');
          const children = parent.querySelector(':scope > .tree-children');
          if (children) children.classList.remove('search-hidden');
          parent = parent.parentElement?.closest('li.tree-folder');
        }
      }
    });

    // 第三步：显示名称匹配的文件夹（及其所有后代）
    folderLis.forEach(folder => {
      if (nameMatches(folder, query)) {
        folder.classList.remove('search-hidden');
        folder.querySelectorAll('.search-hidden').forEach(el => el.classList.remove('search-hidden'));
        // 显示祖先文件夹
        let parent = folder.parentElement?.closest('li.tree-folder');
        while (parent) {
          parent.classList.remove('search-hidden');
          parent.querySelectorAll('.search-hidden').forEach(el => el.classList.remove('search-hidden'));
          parent = parent.parentElement?.closest('li.tree-folder');
        }
      }
    });
  });

  // 清除按钮
  searchClear.addEventListener('click', function() {
    searchInput.value = '';
    searchInput.dispatchEvent(new Event('input'));
    searchInput.focus();
  });

  // ESC 键清除搜索
  searchInput.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      this.value = '';
      this.dispatchEvent(new Event('input'));
      this.blur();
    }
  });
});

// ====== Keyboard ======
document.addEventListener('keydown', function(e) {
  const visibleFiles = [...document.querySelectorAll('.tree-file')];
  if (visibleFiles.length === 0) return;
  const currentIdx = visibleFiles.findIndex(el => el.classList.contains('active'));
  if (e.key === 'ArrowDown') {
    e.preventDefault();
    const next = (currentIdx + 1) % visibleFiles.length;
    visibleFiles[next].click();
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    const prev = (currentIdx - 1 + visibleFiles.length) % visibleFiles.length;
    visibleFiles[prev].click();
  }
});

// Auto-load first problem
document.addEventListener('DOMContentLoaded', function() {
  // 1) 预置默认掌握（initData.js，随站点共享给所有访客）
  (window.__INIT_MASTERED__ || []).forEach(id => markMastered(id));
  // 2) 个人本地状态（localStorage 为主）：
  //    · mastered    —— 个人额外标绿的题，叠加在预置之上
  //    · unmastered  —— 在预置基础上取消标绿的题，最终以 localStorage 为准（覆盖预置）
  try {
    JSON.parse(localStorage.getItem('mastered') || '[]').forEach(id => markMastered(id));
    JSON.parse(localStorage.getItem('unmastered') || '[]').forEach(id => unmarkMastered(id));
  } catch (e) {}

  // 3) 全部子项已掌握的文件夹默认收起
  collapseMasteredFolders();

  // 恢复上次打开的题目（可能是叶子题目，也可能是二级父题头）
  const lastId = localStorage.getItem('lastProblemId');
  let targetFile = null;
  if (lastId) {
    targetFile = document.querySelector('.tree-file[data-id="' + lastId + '"]')
      || document.querySelector('.tree-folder-header[data-id="' + lastId + '"]');
  }
  if (!targetFile) {
    targetFile = document.querySelector('.tree-file');
  }
  if (targetFile) {
    setTimeout(() => {
      // 二级父题头：强制展开子菜单并加载，不要 toggle（否则会折回 collapseMasteredFolders 已展开的状态）
      if (targetFile.classList.contains('tree-folder-header')) {
        const file = targetFile.getAttribute('data-file') || '';
        // 若该父题头已被 collapseMasteredFolders 判定为应收缩（子题全掌握），
        // 则只加载题目，不再强制展开，避免覆盖初始化折叠规则。
        if (targetFile.classList.contains('collapsed')) {
          loadHeaderProblem(targetFile, file, lastId);
        } else {
          toggleFolderAndLoad(targetFile, file, lastId, true);
        }
      } else {
        targetFile.click();
      }
    }, 200);
  }
});
