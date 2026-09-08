/* ============================================================
   Yarbo Troubleshooting Site — App logic (vanilla JS, hash router)
   ============================================================ */

(function () {
  "use strict";

  /* ---------- state ---------- */
  const state = {
    lang: localStorage.getItem("yarbo_lang") || "zh",
    mmOpen: {}, // { [categoryId]: Set(openBranchNodeIds) }
    mmLeafOpen: {}, // { [categoryId]: Set(openLeafResultNodeIds) }
    videoOpen: new Set(), // Set(openVideoModuleIds)
  };

  function t(key) { return UI[state.lang][key]; }
  function tx(zh, en) { return state.lang === "zh" ? zh : en; }

  /* ---------- synonym-aware fuzzy search ---------- */

  const SYNONYMS = {
    "蓝牙": ["bluetooth", "蓝牙"],
    "bluetooth": ["bluetooth", "蓝牙"],
    "wifi": ["wifi", "wi-fi", "无线网", "wi fi"],
    "wi-fi": ["wifi", "wi-fi", "无线网"],
    "无线网": ["wifi", "wi-fi", "无线网"],
    "出界": ["out of boundary", "boundary", "出界", "gps"],
    "boundary": ["out of boundary", "boundary", "出界"],
    "gps": ["gps", "出界", "rtk"],
    "rtk": ["rtk", "gps", "出界", "漂移"],
    "摄像头": ["camera", "摄像头", "黑屏"],
    "camera": ["camera", "摄像头", "黑屏"],
    "黑屏": ["camera", "黑屏", "black screen"],
    "black screen": ["camera", "黑屏", "black screen"],
    "充电": ["charging", "充电", "battery", "电池", "对桩", "docking"],
    "charging": ["charging", "充电", "docking", "对桩"],
    "对桩": ["docking", "对桩", "charging", "充电"],
    "docking": ["docking", "对桩", "charging", "充电"],
    "电池": ["battery", "电池", "charging", "充电"],
    "battery": ["battery", "电池"],
    "开机": ["power on", "boot", "开机", "power"],
    "power": ["power", "开机", "boot"],
    "boot": ["power", "开机", "boot"],
    "碰撞": ["collision", "碰撞"],
    "collision": ["collision", "碰撞"],
    "堵转": ["motor blocked", "堵转", "motor", "电机"],
    "motor": ["motor", "堵转", "电机"],
    "电机": ["motor", "电机", "堵转"],
    "data center": ["data center", "dc", "基站"],
    "dc": ["data center", "dc", "基站"],
    "基站": ["data center", "dc", "基站"],
    "漂移": ["drift", "漂移", "map drift", "rtk"],
    "drift": ["drift", "漂移", "rtk"],
    "编码器": ["encoder", "编码器"],
    "encoder": ["encoder", "编码器"],
    "速度": ["speed", "速度", "blades"],
    "speed": ["speed", "速度", "blades"]
  };

  function norm(s) {
    return (s || "").toString().toLowerCase().trim();
  }

  function expandTerms(query) {
    const q = norm(query);
    const terms = new Set([q]);
    Object.keys(SYNONYMS).forEach((key) => {
      if (q.includes(key)) SYNONYMS[key].forEach((s) => terms.add(s));
    });
    return Array.from(terms).filter(Boolean);
  }

  function looksLikeCode(query) {
    const q = query.trim();
    if (!q) return false;
    // short alphanumeric token containing at least one digit -> treat as a code lookup
    return /^[A-Za-z]{1,6}\d{1,5}$/.test(q.replace(/\s+/g, ""));
  }

  /* ---------- build a flat search index over the tree ---------- */

  let NODE_INDEX = [];

  function buildIndex() {
    NODE_INDEX = [];
    TREE.forEach((cat) => {
      walk(cat, cat.id, []);
    });
    function walk(node, categoryId, path) {
      const searchText = norm([node.zh, node.en, node.detailZh, node.detailEn].join(" "));
      NODE_INDEX.push({
        categoryId,
        path: path.slice(),
        node,
        searchText
      });
      (node.children || []).forEach((c) => walk(c, categoryId, path.concat(node.id === categoryId ? [] : [node.id])));
    }
  }

  function searchAll(query) {
    const q = norm(query);
    if (!q) return { codes: [], nodes: [] };
    const terms = expandTerms(q);

    const codeMatches = ERROR_CODES.filter((c) => {
      const hay = norm(c.code + " " + c.titleZh + " " + c.titleEn);
      return terms.some((term) => hay.includes(term)) || hay.includes(q);
    });

    const nodeMatches = NODE_INDEX.filter((entry) => {
      return terms.some((term) => entry.searchText.includes(term)) || entry.searchText.includes(q);
    }).slice(0, 8);

    return { codes: codeMatches.slice(0, 6), nodes: nodeMatches };
  }

  /* ---------- clipboard ---------- */

  function copyText(text, btn) {
    const done = () => {
      const original = btn.dataset.label;
      btn.classList.add("copied");
      btn.textContent = t("copied");
      setTimeout(() => {
        btn.classList.remove("copied");
        btn.textContent = original;
      }, 1600);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done).catch(() => fallbackCopy(text, done));
    } else {
      fallbackCopy(text, done);
    }
  }

  function fallbackCopy(text, cb) {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand("copy"); } catch (e) { /* noop */ }
    document.body.removeChild(ta);
    cb();
  }

  /* ---------- icons (inline SVG, currentColor) ---------- */

  const ICONS = {
    search: '<svg class="search-icon" viewBox="0 0 20 20" fill="none"><circle cx="9" cy="9" r="6" stroke="currentColor" stroke-width="1.6"/><path d="M17 17l-3.5-3.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',
    chevron: '<svg class="mm-caret" viewBox="0 0 20 20" fill="none"><path d="M7 4l6 6-6 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    arrow: '<svg class="qa-option-arrow" width="16" height="16" viewBox="0 0 20 20" fill="none"><path d="M7 4l6 6-6 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    empty: '<svg class="empty-state-icon" viewBox="0 0 40 40" fill="none"><rect x="6" y="10" width="28" height="22" rx="3" stroke="currentColor" stroke-width="2"/><path d="M6 16h28" stroke="currentColor" stroke-width="2"/><path d="M13 24h6M13 28h10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>'
  };

  /* ---------- header / nav ---------- */

  function renderHeader() {
    const el = document.getElementById("site-header");
    const routes = [
      ["intro", t("navIntro")],
      ["troubleshoot", t("navTrouble")],
      ["codes", t("navCodes")],
      ["videos", t("navVideos")],
      ["updates", t("navUpdates")]
    ];
    const currentTop = (location.hash.replace("#", "").split("/")[0]) || "intro";

    el.innerHTML = `
      <div class="header-inner">
        <a class="brand" href="#intro">
          <span class="brand-mark" aria-hidden="true"></span>
          <span>${t("siteName")}</span>
        </a>
        <nav class="main-nav" aria-label="Main">
          ${routes.map(([id, label]) => `<a href="#${id}" class="${id === currentTop ? "active" : ""}">${label}</a>`).join("")}
        </nav>
        <div class="lang-toggle" role="group" aria-label="Language">
          <button data-lang="zh" class="${state.lang === "zh" ? "active" : ""}">中文</button>
          <button data-lang="en" class="${state.lang === "en" ? "active" : ""}">EN</button>
        </div>
      </div>
      <div class="search-bar">
        <div class="search-box">
          ${ICONS.search}
          <input type="text" class="search-input" id="search-input" placeholder="${t("searchPlaceholder")}" autocomplete="off" />
          <div class="search-results" id="search-results"></div>
        </div>
        <p class="search-hint">${t("searchHint")}</p>
      </div>
    `;

    el.querySelectorAll(".lang-toggle button").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.lang = btn.dataset.lang;
        localStorage.setItem("yarbo_lang", state.lang);
        document.documentElement.lang = state.lang === "zh" ? "zh-CN" : "en";
        renderHeader();
        route();
      });
    });

    wireSearch();
  }

  function wireSearch() {
    const input = document.getElementById("search-input");
    const results = document.getElementById("search-results");

    input.addEventListener("input", () => {
      const q = input.value;
      if (!q.trim()) { results.classList.remove("open"); results.innerHTML = ""; return; }
      const { codes, nodes } = searchAll(q);
      const prioritizeCode = looksLikeCode(q);

      let html = "";
      const codeItems = codes.map((c) => `
        <button class="search-result-item" data-goto="codes/${encodeURIComponent(c.code)}">
          <div class="search-result-kind">${t("navCodes")}</div>
          <div class="search-result-title">${escapeHtml(c.code)}</div>
        </button>
      `).join("");
      const nodeItems = nodes.map((n) => {
        const cat = TREE.find((c) => c.id === n.categoryId);
        const fullPath = n.path.concat(n.node.id === n.categoryId ? [] : [n.node.id]);
        const gotoPath = fullPath.filter((id) => id !== n.categoryId);
        return `
        <button class="search-result-item" data-goto="troubleshoot/${n.categoryId}/mindmap/${gotoPath.join(".")}">
          <div class="search-result-kind">${t("navTrouble")}</div>
          <div class="search-result-title">${escapeHtml(tx(n.node.zh, n.node.en))}</div>
          <div class="search-result-path">${escapeHtml(tx(cat.zh, cat.en))}</div>
        </button>`;
      }).join("");

      html = prioritizeCode ? (codeItems + nodeItems) : (nodeItems + codeItems);

      if (!html) {
        html = `<div class="search-empty">${t("searchNoResult")}</div>`;
      }
      results.innerHTML = html;
      results.classList.add("open");

      results.querySelectorAll("[data-goto]").forEach((b) => {
        b.addEventListener("click", () => {
          location.hash = "#" + b.dataset.goto;
          results.classList.remove("open");
          input.value = "";
        });
      });
    });

    document.addEventListener("click", (e) => {
      if (!e.target.closest(".search-box")) results.classList.remove("open");
    });
  }

  function escapeHtml(s) {
    return (s || "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }

  /* ---------- page: Introduction ---------- */

  function renderIntro() {
    const c = INTRO_CONTENT[state.lang];

    const sep = state.lang === "zh" ? "：" : ": ";
    const problemItems = c.problemTypes.items.map((it) => `
      <li><strong>${escapeHtml(it.label)}${sep}</strong>${escapeHtml(it.text)}</li>
    `).join("");

    const linkItems = c.links.items.map((l) => `
      <a class="intro-link-card" href="${l.url}" target="_blank" rel="noopener noreferrer">
        <span class="intro-link-label">${escapeHtml(l.label)}</span>
        <span class="intro-link-desc">${escapeHtml(l.desc)}</span>
      </a>
    `).join("");

    const howItWorksBlocks = c.howItWorks.blocks.map((b) => `
      <div class="intro-subblock">
        <h3 class="intro-subheading">${escapeHtml(b.title)}</h3>
        <p class="intro-text">${escapeHtml(b.text)}</p>
        ${b.bullets ? `<ul class="intro-list">${b.bullets.map((x) => `<li>${escapeHtml(x)}</li>`).join("")}</ul>` : ""}
        ${b.ordered ? `<ol class="intro-list intro-list-ordered">${b.ordered.map((x) => `<li>${escapeHtml(x)}</li>`).join("")}</ol>` : ""}
      </div>
    `).join("");

    return `
      <div class="page">
        <div class="hero">
          <h1>${t("siteName")}</h1>
          <p>${escapeHtml(c.lead)}</p>
        </div>

        <div class="intro-section">
          <h2 class="intro-heading">${escapeHtml(c.problemTypes.heading)}</h2>
          <ul class="intro-list intro-list-labeled">${problemItems}</ul>
        </div>

        <div class="intro-section intro-callout">
          <h2 class="intro-heading">${escapeHtml(c.prerequisite.heading)}</h2>
          <p class="intro-text">${escapeHtml(c.prerequisite.text)}</p>
        </div>

        <div class="intro-section">
          <h2 class="intro-heading">${escapeHtml(c.links.heading)}</h2>
          <div class="intro-link-grid">${linkItems}</div>
        </div>

        <div class="intro-section">
          <h2 class="intro-heading">${escapeHtml(c.howItWorks.heading)}</h2>
          ${howItWorksBlocks}
        </div>
      </div>
    `;
  }

  /* ---------- page: Troubleshooting ---------- */

  function renderTroubleshoot(parts) {
    // parts: [] -> category grid; [catId] -> mindmap default; [catId, "mindmap", path]; [catId, "qa", path]
    const catId = parts[0];
    const mode = parts[1] || "mindmap";
    const pathStr = parts[2] || "";
    const path = pathStr ? pathStr.split(".").filter(Boolean) : [];

    let body;
    if (!catId) {
      body = renderCategoryGrid();
    } else {
      const cat = TREE.find((c) => c.id === catId);
      if (!cat) { body = renderCategoryGrid(); }
      else {
        const switchHtml = `
          <div class="tree-toolbar">
            <div class="mode-switch">
              <button data-mode="mindmap" class="${mode === "mindmap" ? "active" : ""}">${t("modeMindmap")}</button>
              <button data-mode="qa" class="${mode === "qa" ? "active" : ""}">${t("modeQA")}</button>
            </div>
            <button class="btn-plain" id="back-to-categories">${t("back")}</button>
          </div>
        `;
        const content = mode === "qa" ? renderQA(cat, path) : renderMindmap(cat, path);
        body = switchHtml + content;
      }
    }

    return `
      <div class="page">
        <div class="page-header">
          <h1 class="page-title">${t("navTrouble")}</h1>
          <p class="page-subtitle">${t("treeIntro")}</p>
        </div>
        ${body}
      </div>
    `;
  }

  function renderCategoryGrid() {
    return `
      <div class="category-grid">
        ${TREE.map((cat) => `
          <button class="category-card" data-cat="${cat.id}">
            <p class="category-card-title">${escapeHtml(tx(cat.zh, cat.en))}</p>
            <p class="category-card-meta">${(cat.children || []).length} ${tx("个分支", "branches")}</p>
          </button>
        `).join("")}
      </div>
    `;
  }

  /* ----- mind map renderer ----- */

  function renderMindmap(cat, focusPath) {
    if (!state.mmOpen[cat.id]) {
      state.mmOpen[cat.id] = new Set((cat.children || []).map((c) => c.id));
    }
    if (!state.mmLeafOpen[cat.id]) {
      state.mmLeafOpen[cat.id] = new Set();
    }
    if (focusPath.length) {
      focusPath.forEach((id) => state.mmOpen[cat.id].add(id));
      state.mmLeafOpen[cat.id].add(focusPath[focusPath.length - 1]);
    }
    const openSet = state.mmOpen[cat.id];
    const leafOpenSet = state.mmLeafOpen[cat.id];

    function renderLeafResult(node, ancestorTexts) {
      const tagClass = node.escalate ? "escalate" : (node.resolved ? "resolved" : "neutral");
      const tagLabel = node.escalate ? t("escalateTag") : (node.resolved ? t("resolvedTag") : t("infoTag"));
      const text = tx(node.zh, node.en);
      const copyPayload = ancestorTexts.concat([text]).join(" > ");
      return `
        <div class="qa-result ${tagClass} mm-leaf-result">
          <span class="qa-result-tag">${tagLabel}</span>
          <p class="qa-result-text">${escapeHtml(text)}</p>
          <div class="qa-actions">
            <button class="copy-btn" data-copy="${encodeURIComponent(copyPayload)}" data-label="${t("copy")}">${t("copy")}</button>
            <button class="btn-plain" data-toggle-leaf="${node.id}">${t("back")}</button>
            <button class="btn-primary" data-reset-cat="${cat.id}">${t("restart")}</button>
          </div>
        </div>
      `;
    }

    function renderNode(node, depth, ancestorTexts) {
      const hasChildren = node.children && node.children.length;
      const isOpen = depth <= 1 ? true : openSet.has(node.id);
      const isLeafOpen = !hasChildren && leafOpenSet.has(node.id);
      const tag = node.escalate
        ? `<span class="mm-tag escalate">${t("escalateTag")}</span>`
        : node.resolved
          ? `<span class="mm-tag resolved">${t("resolvedTag")}</span>`
          : "";
      const detail = tx(node.detailZh, node.detailEn);
      const toggleAttr = hasChildren ? `data-toggle="${node.id}"` : `data-toggle-leaf="${node.id}"`;
      const nodeText = tx(node.zh, node.en);
      return `
        <div class="mm-node" id="mm-node-${node.id}">
          <div class="mm-node-row">
            <button class="mm-node-box ${hasChildren ? "" : "is-leaf"} ${(isOpen && hasChildren) || isLeafOpen ? "is-open" : ""}" ${toggleAttr}>
              <span class="mm-node-label">${escapeHtml(nodeText)}${tag}${detail && !hasChildren ? `<span class="mm-node-detail">${escapeHtml(detail)}</span>` : ""}</span>
              ${hasChildren ? ICONS.chevron : ""}
            </button>
          </div>
          ${!hasChildren && isLeafOpen ? renderLeafResult(node, ancestorTexts) : ""}
          ${hasChildren && isOpen ? `
            <div class="mm-children">
              <div class="mm-level mm-level-${depth}">
                ${node.children.map((c) => renderNode(c, depth + 1, ancestorTexts.concat([nodeText]))).join("")}
              </div>
            </div>` : ""}
        </div>
      `;
    }

    const rootDetail = tx(cat.detailZh, cat.detailEn);
    const rootText = tx(cat.zh, cat.en);

    return `
      <div class="mindmap" id="mindmap-root">
        <div class="mm-root">${escapeHtml(rootText)}</div>
        ${rootDetail ? `<p class="qa-detail" style="margin-bottom:16px;">${escapeHtml(rootDetail)}</p>` : ""}
        <div class="mm-level mm-level-0">
          ${(cat.children || []).map((c) => renderNode(c, 1, [rootText])).join("")}
        </div>
      </div>
    `;
  }

  /* ----- Q&A renderer ----- */

  function findChain(cat, path) {
    const chain = [cat];
    let node = cat;
    for (const id of path) {
      const next = (node.children || []).find((c) => c.id === id);
      if (!next) break;
      chain.push(next);
      node = next;
    }
    return chain;
  }

  function renderQA(cat, path) {
    const chain = findChain(cat, path);
    const cur = chain[chain.length - 1];
    const breadcrumb = `<div class="qa-breadcrumb">${chain.map((n, i) => {
      const isCurrent = i === chain.length - 1;
      const crumbPath = path.slice(0, i).join(".");
      return `<button type="button" class="qa-breadcrumb-item ${isCurrent ? "current" : ""}" data-path="${crumbPath}">${escapeHtml(tx(n.zh, n.en))}</button>`;
    }).join("")}</div>`;

    const isLeaf = !cur.children || !cur.children.length;

    if (isLeaf) {
      const tagClass = cur.escalate ? "escalate" : (cur.resolved ? "resolved" : "neutral");
      const tagLabel = cur.escalate ? t("escalateTag") : (cur.resolved ? t("resolvedTag") : t("infoTag"));
      const detail = tx(cur.detailZh, cur.detailEn) || tx(cur.zh, cur.en);
      const copyPayload = [tx(cat.zh, cat.en)].concat(chain.slice(1).map((n) => tx(n.zh, n.en))).join(" > ") + "\n\n" + detail;
      return `
        <div class="qa-card">
          ${breadcrumb}
          <div class="qa-result ${tagClass}">
            <span class="qa-result-tag">${tagLabel}</span>
            <p class="qa-result-text">${escapeHtml(detail)}</p>
            <div class="qa-actions">
              <button class="copy-btn" id="qa-copy" data-label="${t("copy")}">${t("copy")}</button>
              ${chain.length > 1 ? `<button class="btn-plain" data-path="${path.slice(0, -1).join(".")}">${t("back")}</button>` : ""}
              <button class="btn-primary" id="qa-restart">${t("restart")}</button>
            </div>
          </div>
        </div>
        <script></script>
      `.replace("<script></script>", "") + `<div data-copy-payload="${encodeURIComponent(copyPayload)}" id="qa-copy-payload" style="display:none"></div>`;
    }

    const detail = tx(cur.detailZh, cur.detailEn);
    return `
      <div class="qa-card">
        ${breadcrumb}
        <p class="qa-step">${t("qaStepOf")} ${chain.length}</p>
        <h2 class="qa-question">${escapeHtml(tx(cur.zh, cur.en))}</h2>
        ${detail ? `<p class="qa-detail">${escapeHtml(detail)}</p>` : ""}
        <div class="qa-options">
          ${cur.children.length === 1
            ? `<button class="qa-single-next" data-path="${path.concat(cur.children[0].id).join(".")}">${escapeHtml(tx(cur.children[0].zh, cur.children[0].en))}${ICONS.arrow}</button>`
            : cur.children.map((c) => `
                <button class="qa-option" data-path="${path.concat(c.id).join(".")}">
                  <span>${escapeHtml(tx(c.zh, c.en))}</span>
                  ${ICONS.arrow}
                </button>
              `).join("")
          }
        </div>
        ${chain.length > 1 ? `<div class="qa-actions" style="margin-top:20px;"><button class="btn-plain" data-path="${path.slice(0, -1).join(".")}">${t("back")}</button></div>` : ""}
      </div>
    `;
  }

  /* ---------- page: Error codes ---------- */

  function renderCodes(highlight) {
    return `
      <div class="page">
        <div class="page-header">
          <h1 class="page-title">${t("navCodes")}</h1>
        </div>
        <div class="codes-preface">
          ${CODES_PREFACE[state.lang].map((p) => `<p>${escapeHtml(p)}</p>`).join("")}
        </div>
        <div class="code-grid">
          ${ERROR_CODES.map((c) => {
            const steps = state.lang === "zh" ? c.stepsZh : c.stepsEn;
            const copyPayload = `${c.code}\n` + steps.map((s, i) => `${i + 1}. ${s}`).join("\n");
            const isHighlight = highlight && norm(highlight) === norm(c.code);
            return `
              <div class="code-card ${isHighlight ? "highlight" : ""}" id="code-${slug(c.code)}">
                <div class="code-card-head">
                  <h3 class="code-title">${escapeHtml(c.code)}</h3>
                  ${c.highFreq ? `<span class="code-badge">${t("highFreq")}</span>` : ""}
                </div>
                <ol class="code-steps">
                  ${steps.map((s) => `<li>${escapeHtml(s)}</li>`).join("")}
                </ol>
                <button class="copy-btn" data-copy="${encodeURIComponent(copyPayload)}" data-label="${t("copy")}">${t("copy")}</button>
              </div>
            `;
          }).join("")}
        </div>
        <p class="codes-footer">${t("codesFooter")}</p>
      </div>
    `;
  }

  function slug(s) { return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").slice(0, 40); }

  /* ---------- page: Self-repair videos ---------- */

  const LINK_LABEL = { youtube: "YouTube", wiki: "Wiki", drive: "Google Drive" };

  function renderVideos() {
    if (!state.videoOpen) state.videoOpen = new Set();

    function renderLink(link) {
      const label = LINK_LABEL[link.type] || link.type;
      const note = link.note ? ` (${tx(link.note.zh, link.note.en)})` : "";
      if (!link.url) {
        return `<span class="video-link video-link-disabled">${label}${escapeHtml(note)}</span>`;
      }
      return `<a class="video-link" href="${link.url}" target="_blank" rel="noopener noreferrer">${label}${escapeHtml(note)}</a>`;
    }

    function copyPayloadFor(item) {
      const title = [item.titleEn, item.titleZh].filter(Boolean).join(" / ");
      if (!item.links.length) return `${title}\n(${t("linkPending")})`;
      const linkLines = item.links.map((l) => {
        const label = LINK_LABEL[l.type] || l.type;
        const note = l.note ? ` (${tx(l.note.zh, l.note.en)})` : "";
        return l.url ? `${label}: ${l.url}${note}` : `${label}: ${tx("链接见共享文件夹", "link in shared folder")}${note}`;
      });
      return [title].concat(linkLines).join("\n");
    }

    function renderItem(item) {
      const title = [item.titleEn, item.titleZh].filter(Boolean).join(" · ");
      const links = item.links.length
        ? item.links.map(renderLink).join("")
        : `<span class="video-link video-link-pending">${t("linkPending")}</span>`;
      return `
        <div class="video-row">
          <div class="video-row-main">
            <p class="video-row-title">${escapeHtml(title)}</p>
            <div class="video-row-links">${links}</div>
          </div>
          <button class="copy-btn" data-copy="${encodeURIComponent(copyPayloadFor(item))}" data-label="${t("copyLinks")}">${t("copyLinks")}</button>
        </div>
      `;
    }

    const modules = VIDEOS.map((mod) => {
      const isOpen = state.videoOpen.has(mod.id);
      return `
        <div class="video-module">
          <button class="video-module-header ${isOpen ? "is-open" : ""}" data-video-toggle="${mod.id}">
            <span class="video-module-title">${escapeHtml(tx(mod.zh, mod.en))}</span>
            <span class="video-module-count">${mod.items.length}</span>
            ${ICONS.chevron}
          </button>
          ${isOpen ? `<div class="video-module-body">${mod.items.map(renderItem).join("")}</div>` : ""}
        </div>
      `;
    }).join("");

    return `
      <div class="page">
        <div class="page-header">
          <h1 class="page-title">${t("navVideos")}</h1>
          <p class="page-subtitle">${t("videosIntro")}</p>
        </div>
        <div class="video-modules">${modules}</div>
      </div>
    `;
  }

  /* ---------- page: Update news ---------- */

  function renderUpdates() {
    if (!UPDATES.length) return renderEmptyPage("navUpdates", "emptyUpdates");

    const cards = UPDATES.map((u) => {
      const changes = tx(u.changesZh, u.changesEn);
      const copyPayload = [
        `${u.titleZh} / ${u.titleEn}`,
        `${t("firmwareVersion")}: ${u.firmwareVersion}`,
        `${t("appVersion")}: ${u.appVersion}`,
        t("rolloutPlan") + ":",
        ...u.rollout.map((r) => `  ${tx(r.labelZh, r.labelEn)} (${r.date}): ${tx(r.scopeZh, r.scopeEn)}`),
        t("changelog") + ":",
        ...changes.map((c, i) => `  ${i + 1}. ${c}`)
      ].join("\n");

      return `
        <div class="update-card">
          <div class="update-card-head">
            <div>
              <h3 class="update-title">${escapeHtml(tx(u.titleZh, u.titleEn))}</h3>
              <span class="update-tag">${escapeHtml(tx(u.tagZh, u.tagEn))}</span>
            </div>
            <button class="copy-btn" data-copy="${encodeURIComponent(copyPayload)}" data-label="${t("copyLinks")}">${t("copyLinks")}</button>
          </div>

          <div class="update-versions">
            <div class="update-version-item">
              <span class="update-version-label">${t("firmwareVersion")}</span>
              <span class="update-version-value">${escapeHtml(u.firmwareVersion)}</span>
            </div>
            <div class="update-version-item">
              <span class="update-version-label">${t("appVersion")}</span>
              <span class="update-version-value">${escapeHtml(u.appVersion)}</span>
            </div>
          </div>

          <div class="update-section">
            <h4 class="update-section-title">${t("rolloutPlan")}</h4>
            <div class="update-rollout">
              ${u.rollout.map((r) => `
                <div class="update-rollout-row">
                  <span class="update-rollout-label">${escapeHtml(tx(r.labelZh, r.labelEn))}</span>
                  <span class="update-rollout-date">${escapeHtml(r.date)}</span>
                  <span class="update-rollout-scope">${escapeHtml(tx(r.scopeZh, r.scopeEn))}</span>
                </div>
              `).join("")}
            </div>
          </div>

          <div class="update-section">
            <h4 class="update-section-title">${t("changelog")}</h4>
            <ol class="update-changelog">
              ${changes.map((c) => `<li>${escapeHtml(c)}</li>`).join("")}
            </ol>
          </div>
        </div>
      `;
    }).join("");

    return `
      <div class="page">
        <div class="page-header">
          <h1 class="page-title">${t("navUpdates")}</h1>
        </div>
        <div class="update-list">${cards}</div>
      </div>
    `;
  }

  /* ---------- page: empty (updates) ---------- */

  function renderEmptyPage(titleKey, emptyKey) {
    return `
      <div class="page">
        <div class="page-header">
          <h1 class="page-title">${t(titleKey)}</h1>
        </div>
        <div class="empty-state">
          ${ICONS.empty}
          <p>${t(emptyKey)}</p>
        </div>
      </div>
    `;
  }

  /* ---------- router ---------- */

  function route(preserveScroll) {
    const hash = location.hash.replace(/^#/, "");
    const [top, ...rest] = hash.split("/").filter((_, i) => true);
    const segs = hash.split("/");
    const page = segs[0] || "intro";
    const main = document.getElementById("app-main");

    let html;
    let highlightCode = null;

    switch (page) {
      case "troubleshoot":
        html = renderTroubleshoot(segs.slice(1));
        break;
      case "codes":
        highlightCode = segs[1] ? decodeURIComponent(segs[1]) : null;
        html = renderCodes(highlightCode);
        break;
      case "videos":
        html = renderVideos();
        break;
      case "updates":
        html = renderUpdates();
        break;
      case "intro":
      default:
        html = renderIntro();
        break;
    }

    main.innerHTML = html;
    renderHeader();
    wirePageEvents(page, segs);

    if (preserveScroll === true) {
      // in-place expand/collapse (mind map toggle, leaf result, video accordion) —
      // the person is mid-scroll reading this section, so leave the viewport where it is.
      return;
    }

    if (page === "codes" && highlightCode) {
      const el = document.getElementById("code-" + slug(highlightCode));
      if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
    } else if (page === "troubleshoot" && segs[1] && (segs[3] || "")) {
      const lastId = segs[3].split(".").filter(Boolean).pop();
      const el = lastId && document.getElementById("mm-node-" + lastId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        const box = el.querySelector(".mm-node-box");
        if (box) {
          box.classList.add("is-open");
          box.style.boxShadow = "0 0 0 3px var(--primary-soft)";
          setTimeout(() => { box.style.boxShadow = ""; }, 2200);
        }
      } else {
        window.scrollTo({ top: 0 });
      }
    } else {
      window.scrollTo({ top: 0 });
    }
  }

  function wirePageEvents(page, segs) {
    const main = document.getElementById("app-main");

    // category grid clicks
    main.querySelectorAll("[data-cat]").forEach((btn) => {
      btn.addEventListener("click", () => {
        location.hash = `#troubleshoot/${btn.dataset.cat}/mindmap`;
      });
    });

    const backBtn = document.getElementById("back-to-categories");
    if (backBtn) backBtn.addEventListener("click", () => { location.hash = "#troubleshoot"; });

    main.querySelectorAll("[data-mode]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const catId = segs[1];
        location.hash = `#troubleshoot/${catId}/${btn.dataset.mode}`;
      });
    });

    // mind map branch toggles
    main.querySelectorAll("[data-toggle]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const catId = segs[1];
        const id = btn.dataset.toggle;
        const set = state.mmOpen[catId];
        if (set.has(id)) set.delete(id); else set.add(id);
        route(true);
      });
    });

    // mind map leaf result toggles (box itself, or the "back"/collapse button inside the result panel)
    main.querySelectorAll("[data-toggle-leaf]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const catId = segs[1];
        const id = btn.dataset.toggleLeaf;
        if (!state.mmLeafOpen[catId]) state.mmLeafOpen[catId] = new Set();
        const set = state.mmLeafOpen[catId];
        if (set.has(id)) set.delete(id); else set.add(id);
        route(true);
      });
    });

    // mind map "start over" — collapse this category's tree back to the default two-level view
    main.querySelectorAll("[data-reset-cat]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const catId = btn.dataset.resetCat;
        const cat = TREE.find((c) => c.id === catId);
        state.mmOpen[catId] = new Set((cat.children || []).map((c) => c.id));
        state.mmLeafOpen[catId] = new Set();
        if (location.hash === `#troubleshoot/${catId}/mindmap`) { route(); }
        else { location.hash = `#troubleshoot/${catId}/mindmap`; }
        window.scrollTo({ top: 0 });
      });
    });

    // self-repair video module accordion toggles
    main.querySelectorAll("[data-video-toggle]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.dataset.videoToggle;
        if (state.videoOpen.has(id)) state.videoOpen.delete(id); else state.videoOpen.add(id);
        route(true);
      });
    });

    // QA breadcrumb — jump back to any earlier step
    main.querySelectorAll(".qa-breadcrumb-item[data-path]").forEach((btn) => {
      btn.addEventListener("click", () => {
        if (btn.classList.contains("current")) return;
        const catId = segs[1];
        location.hash = `#troubleshoot/${catId}/qa/${btn.dataset.path}`;
      });
    });

    // QA navigation
    main.querySelectorAll(".qa-option, .qa-single-next, .qa-actions [data-path]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const catId = segs[1];
        const p = btn.dataset.path;
        location.hash = `#troubleshoot/${catId}/qa/${p}`;
      });
    });

    const restartBtn = document.getElementById("qa-restart");
    if (restartBtn) restartBtn.addEventListener("click", () => {
      const catId = segs[1];
      location.hash = `#troubleshoot/${catId}/qa`;
    });

    // copy buttons (error codes)
    main.querySelectorAll(".copy-btn[data-copy]").forEach((btn) => {
      btn.addEventListener("click", () => copyText(decodeURIComponent(btn.dataset.copy), btn));
    });

    // copy button (QA result)
    const qaCopy = document.getElementById("qa-copy");
    if (qaCopy) {
      const payloadEl = document.getElementById("qa-copy-payload");
      const payload = payloadEl ? decodeURIComponent(payloadEl.dataset.copyPayload) : "";
      qaCopy.addEventListener("click", () => copyText(payload, qaCopy));
    }
  }

  /* ---------- init ---------- */

  document.addEventListener("DOMContentLoaded", () => {
    document.documentElement.lang = state.lang === "zh" ? "zh-CN" : "en";
    buildIndex();
    renderHeader();
    route();
  });

  window.addEventListener("hashchange", route);
})();
