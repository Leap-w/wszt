/* ============================================================
   国内优秀虚拟展厅案例调研 — 主脚本
   Virtual Exhibition Hall Research — Main Script

   功能：
   - 案例数据管理
   - 实时搜索过滤
   - 四大分类筛选
   - 深色模式切换
   - 滚动动画与导航高亮
   - 图片灯箱
   - 返回顶部
   - 页面统计
   - 对比表格生成
   ============================================================ */

'use strict';

// ========== 案例数据 ==========
// 按四大分类组织：平面网页叙事型 → 全景扫描型 → 3D建模交互型 → 数据库/档案检索型
// 同一分类内按推荐指数降序排列
const casesDataRaw = [
    // ==================== 平面网页叙事型 ====================
    {
        id: 'case-01',
        name: '陕西历史博物馆官方网站',
        org: '陕西历史博物馆',
        url: 'https://www.sxhm.com',
        category: '平面网页叙事型',
        categoryIcon: '🌐',
        format: '网页叙事型',
        formatIcon: '🌐',
        type: '博物馆',
        typeIcon: '🏛️',
        difficulty: 2,
        recommend: 90,
        summary: '陕西历史博物馆官网首页以"周秦汉唐"文化底蕴为核心，通过典雅大气的视觉设计与精巧的动画交互，打造了极具东方美学的线上门户体验。页面采用唐风配色与现代极简主义相结合的设计语言，全屏轮播展示何家村窖藏、镶金兽首玛瑙杯等镇馆之宝，滚动视差与渐显动画营造沉浸式浏览叙事。响应式布局在PC端与移动端均有出色表现，是国内博物馆官网设计的标杆之作。',
        features: [
            '唐风美学与现代极简融合的品牌视觉体系',
            '首页全屏轮播展示镇馆之宝，过渡动画流畅自然',
            '滚动视差与渐显动画营造沉浸式叙事节奏',
            '响应式布局适配多端，导航与搜索交互细节精致'
        ],
        worthLearning: [
            '文化机构官网的品牌视觉设计方法论',
            '首页动画节奏与用户阅读体验的平衡技巧',
            '传统文化元素的现代数字化转译思路',
            '大流量门户网站的性能与美学兼顾策略'
        ],
        scenes: ['博物馆官网设计', '文化品牌数字化', '交互动画设计'],
        screenshots: []
    },
    {
        id: 'case-02',
        name: '大运河石刻文化线上展厅',
        org: '中国大运河博物馆（扬州）',
        url: 'https://houseoss.4dkankan.com/project/daYunHeShiKe/index.html#/main/2300',
        category: '平面网页叙事型',
        categoryIcon: '🌐',
        format: '网页叙事型',
        formatIcon: '🌐',
        type: '博物馆',
        typeIcon: '🏛️',
        difficulty: 2,
        recommend: 88,
        summary: '中国大运河博物馆推出的"大运河石刻文化"线上专题展览，以网页叙事的形式深度挖掘运河沿线石刻文物的历史文化内涵。展览采用线性叙事结构，通过高清石刻拓片影像、地理位置标注与文字解说的有机结合，引导观众沿运河水系逐段探索石刻遗存。页面设计清雅简洁，充分运用留白与排版节奏营造沉浸式的文化阅读体验，是专题文物网页展览的优秀实践。',
        features: [
            '线性叙事引导观众沿运河逐段探索石刻遗存',
            '石刻拓片高清影像与地理信息标注相结合',
            '清雅极简的视觉设计，大量留白烘托文物质感',
            '渐进式加载策略，兼顾高清画质与浏览流畅度'
        ],
        worthLearning: [
            '专题文物展览的线性叙事结构设计',
            '石刻拓片等平面文物的高清数字化呈现方法',
            '网页叙事型展览的信息密度与留白节奏控制',
            '地理信息与文物展示的融合呈现思路'
        ],
        scenes: ['专题文物展览', '石刻文化遗产', '线性叙事设计'],
        screenshots: []
    },

    // ==================== 全景扫描型 ====================
    {
        id: 'case-03',
        name: '南京博物院VR展厅',
        org: '南京博物院',
        url: 'https://www.njmuseum.com/zh/exhibitionIndex',
        category: '全景扫描型',
        categoryIcon: '🥽',
        format: 'VR全景',
        formatIcon: '🥽',
        type: '博物馆',
        typeIcon: '🏛️',
        difficulty: 2,
        recommend: 85,
        summary: '南京博物院作为中国三大博物馆之一，较早开展了VR虚拟展厅建设。其VR展厅涵盖历史馆、艺术馆、特展馆等多个场馆空间，通过720°全景技术让观众在线漫游。展览配合语音讲解与展品信息弹窗，在保持浏览流畅度的同时提供了丰富的交互内容，是省级博物馆VR化的优秀范例。',
        features: [
            '720°全景覆盖多栋展馆建筑',
            '场景切换流畅，过渡动画自然',
            '展品热点信息详实，配有音频解说',
            '支持VR头显设备，增强沉浸感'
        ],
        worthLearning: [
            '多场馆VR内容的统一导航与组织',
            'VR场景音效与空间氛围的设计',
            '省级博物馆VR化的成本控制与分阶段实施',
            '线上VR与线下参观的互补设计'
        ],
        scenes: ['省级博物馆', 'VR全景', '线上线下融合'],
        screenshots: [
            { src: 'images/case05-01.jpg', alt: '南京博物院VR展厅 - 大厅' },
            { src: 'images/case05-02.jpg', alt: '南京博物院VR展厅 - 展厅内部' },
            { src: 'images/case05-03.jpg', alt: '南京博物院VR展厅 - 展品热点' }
        ]
    },

    // ==================== 3D建模交互型 ====================
    {
        id: 'case-04',
        name: '河南省档案馆《中福公司档案史料展》云虚拟展厅',
        org: '河南省档案馆',
        url: 'http://www.vrzan.com/customviewer/PQQ2BMV1/3d',
        category: '3D建模交互型',
        categoryIcon: '📦',
        format: '3D建模 + 交互展示',
        formatIcon: '📦',
        type: '档案馆',
        typeIcon: '📁',
        difficulty: 2,
        recommend: 80,
        summary: '河南省档案馆以馆藏中福公司档案为基础，运用3D建模与交互展示技术打造的云虚拟展厅。展览通过三维空间建模还原了实体展厅的空间格局，观众可以在3D场景中自由漫游、缩放视角、点击展品查阅档案高清影像与文献解读。相比平面网页叙事型展览，3D交互提供了更强的空间沉浸感和自主探索的自由度，是地方档案馆数字化转型中技术升级的典型代表。',
        features: [
            '3D空间建模还原实体展厅格局，自由漫游探索',
            '展品支持点击放大查阅高清档案影像',
            '三维空间导航直观，视角缩放与旋转操作流畅',
            '融合档案原件影像、历史照片与文字解说的多媒体热点'
        ],
        worthLearning: [
            '地方档案馆从平面网页到3D交互的技术升级路径',
            '3D展厅中展品信息热点的交互设计规范',
            '轻量化3D建模在档案展览中的性价比平衡',
            '档案数字化呈现的空间叙事设计思路'
        ],
        scenes: ['地方档案馆', '3D展厅', '档案数字化'],
        screenshots: [
            { src: 'images/case01-01.jpg', alt: '中福公司档案史料展 - 展厅首页' },
            { src: 'images/case01-02.jpg', alt: '中福公司档案史料展 - 历史时间线' },
            { src: 'images/case01-03.jpg', alt: '中福公司档案史料展 - 档案原件展示' }
        ]
    },

    // ==================== 数据库/档案检索型 ====================
    {
        id: 'case-05',
        name: '故宫博物院数字文物库',
        org: '故宫博物院',
        url: 'https://digicol.dpm.org.cn/',
        category: '数据库/档案检索型',
        categoryIcon: '🗄️',
        format: '高清影像 + 数据库',
        formatIcon: '🖼️',
        type: '博物馆',
        typeIcon: '🏛️',
        difficulty: 3,
        recommend: 96,
        summary: '故宫博物院数字文物库是国内规模最大的博物馆藏品数字化项目之一，收录了超过186万件（套）馆藏文物的高清影像资料。平台以数据库检索为核心，结合分类浏览、关键词搜索、高清放大等功能，为研究者与公众提供了前所未有的文物数字访问体验。其数据标准化程度在国内文博领域处于领先地位。',
        features: [
            '186万+件藏品在线，覆盖故宫全部品类',
            '支持按品类、年代、材质等多维度检索',
            '高清大图支持像素级放大，细节清晰',
            '开放的元数据标准，便于学术引用'
        ],
        worthLearning: [
            '超大规模藏品数据库的架构设计',
            '文物元数据标准化与跨平台互操作',
            '面向研究者的专业检索与公众浏览的平衡',
            '文化遗产数字化的国际标准接轨'
        ],
        scenes: ['藏品数据库', '学术研究', '文化遗产保护'],
        screenshots: [
            { src: 'images/case04-01.jpg', alt: '故宫数字文物库 - 首页' },
            { src: 'images/case04-02.jpg', alt: '故宫数字文物库 - 藏品检索' },
            { src: 'images/case04-03.jpg', alt: '故宫数字文物库 - 高清大图' }
        ]
    }
];

// 按四大分类排序：平面网页叙事型 → 全景扫描型 → 3D建模交互型 → 数据库/档案检索型
// 同一分类内保持数据中的顺序（推荐指数已降序）
const CATEGORY_ORDER = ['平面网页叙事型', '全景扫描型', '3D建模交互型', '数据库/档案检索型'];
const casesData = [...casesDataRaw].sort((a, b) => {
    const ai = CATEGORY_ORDER.indexOf(a.category);
    const bi = CATEGORY_ORDER.indexOf(b.category);
    if (ai !== bi) return ai - bi;
    return b.recommend - a.recommend;
});

// ========== DOM 引用缓存 ==========
let DOM = {};

// ========== 应用状态 ==========
const state = {
    activeCategory: 'all',
    searchQuery: '',
    darkMode: false,
    currentLightboxIndex: -1,
    currentLightboxCase: null
};

// ========== 初始化 ==========
document.addEventListener('DOMContentLoaded', () => {
    cacheDOM();
    renderAllCases();
    renderStats();
    renderComparisonTable();
    initSidebar();
    initSearch();
    initFilters();
    initDarkMode();
    initScrollEffects();
    initBackToTop();
    initLightbox();
    initMobileNav();
    hideLoader();
});

// ========== DOM 缓存 ==========
function cacheDOM() {
    DOM.loader = document.getElementById('loader');
    DOM.header = document.getElementById('header');
    DOM.sidebar = document.getElementById('sidebar');
    DOM.sidebarNav = document.getElementById('sidebarNav');
    DOM.sidebarStats = document.getElementById('sidebarStats');
    DOM.content = document.getElementById('content');
    DOM.casesGrid = document.getElementById('casesGrid');
    DOM.noResults = document.getElementById('noResults');
    DOM.searchInput = document.getElementById('searchInput');
    DOM.filterCategory = document.getElementById('filterCategory');
    DOM.themeToggle = document.getElementById('themeToggle');
    DOM.backToTop = document.getElementById('backToTop');
    DOM.lightbox = document.getElementById('lightbox');
    DOM.lightboxImg = document.getElementById('lightboxImg');
    DOM.lightboxCounter = document.getElementById('lightboxCounter');
    DOM.comparisonBody = document.getElementById('comparisonBody');
    DOM.statsTotal = document.getElementById('statTotal');
    DOM.statsCat1 = document.getElementById('statCat1');
    DOM.statsCat2 = document.getElementById('statCat2');
    DOM.statsCat3 = document.getElementById('statCat3');
    DOM.statsCat4 = document.getElementById('statCat4');
    DOM.mobileNavToggle = document.getElementById('mobileNavToggle');
    DOM.sidebarOverlay = document.getElementById('sidebarOverlay');
    DOM.caseCount = document.getElementById('caseCount');
}

// ========== 加载动画 ==========
function hideLoader() {
    setTimeout(() => {
        if (DOM.loader) {
            DOM.loader.classList.add('hidden');
            // 加载完成后移除DOM
            setTimeout(() => {
                if (DOM.loader.parentNode) {
                    DOM.loader.parentNode.removeChild(DOM.loader);
                }
            }, 600);
        }
    }, 600);
}

// ========== 统计信息 ==========
function renderStats() {
    const total = casesData.length;
    const cat1 = casesData.filter(c => c.category === '平面网页叙事型').length;
    const cat2 = casesData.filter(c => c.category === '全景扫描型').length;
    const cat3 = casesData.filter(c => c.category === '3D建模交互型').length;
    const cat4 = casesData.filter(c => c.category === '数据库/档案检索型').length;

    // 顶部统计卡片
    if (DOM.statsTotal) animateNumber(DOM.statsTotal, total);
    if (DOM.statsCat1) animateNumber(DOM.statsCat1, cat1);
    if (DOM.statsCat2) animateNumber(DOM.statsCat2, cat2);
    if (DOM.statsCat3) animateNumber(DOM.statsCat3, cat3);
    if (DOM.statsCat4) animateNumber(DOM.statsCat4, cat4);

    // 侧边栏统计
    if (DOM.sidebarStats) {
        DOM.sidebarStats.innerHTML = `
            <div class="sidebar__stat-row"><span>案例总数</span><span>${total}</span></div>
            <div class="sidebar__stat-row"><span>平面网页叙事型</span><span>${cat1}</span></div>
            <div class="sidebar__stat-row"><span>全景扫描型</span><span>${cat2}</span></div>
            <div class="sidebar__stat-row"><span>3D建模交互型</span><span>${cat3}</span></div>
            <div class="sidebar__stat-row"><span>数据库/档案检索型</span><span>${cat4}</span></div>
        `;
    }

    // 底部统计
    if (DOM.caseCount) {
        DOM.caseCount.textContent = total;
    }
}

// ========== 数字滚动动画 ==========
function animateNumber(el, target) {
    const duration = 1200;
    const start = 0;
    const startTime = performance.now();

    function update(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // ease-out-expo
        const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        el.textContent = Math.floor(eased * target);

        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            el.textContent = target;
        }
    }

    requestAnimationFrame(update);
}

// ========== 筛选功能 ==========
function initFilters() {
    // 案例分类筛选
    if (DOM.filterCategory) {
        DOM.filterCategory.querySelectorAll('.filter-bar__tag').forEach(tag => {
            tag.addEventListener('click', () => {
                setActiveTag(DOM.filterCategory, tag);
                state.activeCategory = tag.dataset.filter;
                applyAllFilters();
            });
        });
    }
}

function setActiveTag(container, activeTag) {
    container.querySelectorAll('.filter-bar__tag').forEach(t => t.classList.remove('active'));
    activeTag.classList.add('active');
}

// ========== 搜索功能 ==========
function initSearch() {
    if (DOM.searchInput) {
        DOM.searchInput.addEventListener('input', () => {
            state.searchQuery = DOM.searchInput.value.trim().toLowerCase();
            applyAllFilters();
        });
    }
}

// ========== 综合过滤 ==========
function applyAllFilters() {
    let filtered = [...casesData];

    // 分类过滤
    if (state.activeCategory !== 'all') {
        filtered = filtered.filter(c => c.category === state.activeCategory);
    }

    // 搜索过滤
    if (state.searchQuery) {
        filtered = filtered.filter(c =>
            c.name.toLowerCase().includes(state.searchQuery) ||
            c.org.toLowerCase().includes(state.searchQuery) ||
            c.summary.toLowerCase().includes(state.searchQuery) ||
            c.features.some(f => f.toLowerCase().includes(state.searchQuery)) ||
            c.scenes.some(s => s.toLowerCase().includes(state.searchQuery))
        );
    }

    renderFilteredCases(filtered);
    updateSidebarNav(filtered);
}

// ========== 渲染案例卡片 ==========
function renderAllCases() {
    renderFilteredCases(casesData);
}

function renderFilteredCases(cases) {
    if (!DOM.casesGrid) return;

    if (cases.length === 0) {
        DOM.casesGrid.innerHTML = '';
        if (DOM.noResults) DOM.noResults.classList.add('visible');
        return;
    }

    if (DOM.noResults) DOM.noResults.classList.remove('visible');

    DOM.casesGrid.innerHTML = cases.map((c, i) => buildCaseCard(c, i)).join('');

    // 重新绑定截图点击事件
    bindScreenshotClicks();
}

function buildCaseCard(c, index) {
    const difficultyStars = buildDifficultyStars(c.difficulty);
    const recommendBar = buildRecommendBar(c.recommend);
    const sceneTags = c.scenes.map(s => `<span class="scene-tag">${s}</span>`).join('');

    // 过滤掉占位 SVG 图片（搜不到真实截图的案例不显示图片区）
    const realScreenshots = c.screenshots.filter(ss => !ss.src.endsWith('.svg'));

    let screenshotsHtml;
    if (realScreenshots.length > 0) {
        screenshotsHtml = `<div class="case-card__screenshots">${realScreenshots.map((ss, i) => `
            <div class="screenshot" data-case-id="${c.id}" data-index="${i}"
                 onclick="openLightbox('${c.id}', ${i})">
                <img src="${ss.src}" alt="${ss.alt}" loading="lazy"
                     onerror="this.parentElement.innerHTML='<div style=\\'display:flex;align-items:center;justify-content:center;height:100%;color:var(--text-tertiary);font-size:0.75rem;padding:0.5rem;text-align:center\\'>📷 暂无截图</div>'">
                <div class="screenshot__overlay">🔍</div>
            </div>
        `).join('')}</div>`;
    } else {
        screenshotsHtml = `<div class="screenshots-empty">
            <div class="screenshots-empty__icon">📷</div>
            <p>该案例暂未收录截图</p>
        </div>`;
    }

    const featuresHtml = c.features.map(f => `<li>• ${f}</li>`).join('');
    const worthLearningHtml = c.worthLearning.map(w => `<li>• ${w}</li>`).join('');

    return `
        <article class="case-card animate-on-scroll" id="${c.id}">
            <div class="case-card__header">
                <div>
                    <div class="case-card__number">案例 ${String(index + 1).padStart(2, '0')}</div>
                    <h2 class="case-card__name">${c.name}</h2>
                    <p class="case-card__org">
                        ${c.typeIcon} ${c.org}
                        ${c.url ? ` · <a href="${c.url}" target="_blank" rel="noopener noreferrer">🌐 官方网站</a>` : ''}
                    </p>
                </div>
                <div class="case-card__meta">
                    <span class="case-card__badge case-card__badge--category">${c.categoryIcon} ${c.category}</span>
                    <span class="case-card__badge case-card__badge--format">${c.formatIcon} ${c.format}</span>
                </div>
            </div>

            <div class="case-card__body">
                <div>
                    <p class="case-card__desc">${c.summary}</p>
                    ${sceneTags ? `<div class="scene-tags">${sceneTags}</div>` : ''}
                </div>
                <div class="case-card__info-list">
                    <div class="case-card__info-item">
                        <span class="case-card__info-label">制作难度</span>
                        <span class="difficulty" data-level="${c.difficulty}">${difficultyStars}</span>
                    </div>
                    <div class="case-card__info-item">
                        <span class="case-card__info-label">推荐指数</span>
                        ${recommendBar}
                    </div>
                    <div class="case-card__info-item">
                        <span class="case-card__info-label">特色分析</span>
                        <span class="case-card__info-value"><ul style="margin:0;padding-left:0;list-style:none">${featuresHtml}</ul></span>
                    </div>
                    <div class="case-card__info-item">
                        <span class="case-card__info-label">值得借鉴</span>
                        <span class="case-card__info-value"><ul style="margin:0;padding-left:0;list-style:none">${worthLearningHtml}</ul></span>
                    </div>
                </div>
            </div>

            ${screenshotsHtml}
        </article>
    `;
}

// ========== 难度星级（3级） ==========
function buildDifficultyStars(level) {
    const labels = ['', '简单', '中等', '复杂'];
    const colors = ['', 'var(--diff-1)', 'var(--diff-3)', 'var(--diff-5)'];
    let stars = '';
    for (let i = 1; i <= 3; i++) {
        stars += `<span class="difficulty__star ${i <= level ? 'filled' : ''}" style="${i <= level ? 'color:' + colors[level] : ''}">★</span>`;
    }
    return `<span class="difficulty__label">${labels[level]}</span> ${stars}`;
}

// ========== 推荐指数条 ==========
function buildRecommendBar(score) {
    return `
        <span class="recommend">
            <span class="recommend__bar">
                <span class="recommend__bar-fill" style="width:${score}%"></span>
            </span>
            <span class="recommend__score">${score}</span>
        </span>
    `;
}

// ========== 侧边栏导航 ==========
function initSidebar() {
    buildSidebarNav(casesData);
    initSidebarToggle();
}

function buildSidebarNav(cases) {
    if (!DOM.sidebarNav) return;

    DOM.sidebarNav.innerHTML = cases.map((c, i) => `
        <a class="sidebar__nav-item" href="#${c.id}" data-case-id="${c.id}" title="${c.name}">
            <span class="sidebar__nav-num">${i + 1}</span>
            <span>${c.name.length > 18 ? c.name.substring(0, 16) + '…' : c.name}</span>
        </a>
    `).join('');

    // 绑定点击事件：直接跳转到展厅案例卡片
    DOM.sidebarNav.querySelectorAll('.sidebar__nav-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = item.dataset.caseId;
            const target = document.getElementById(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
            // 移动端关闭侧栏
            closeMobileSidebar();
        });
    });
}

function updateSidebarNav(visibleCases) {
    const visibleIds = new Set(visibleCases.map(c => c.id));

    if (!DOM.sidebarNav) return;

    DOM.sidebarNav.querySelectorAll('.sidebar__nav-item').forEach(item => {
        const caseId = item.dataset.caseId;
        if (visibleIds.has(caseId)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
}

// ========== 桌面端侧栏折叠 ==========
function initSidebarToggle() {
    const toggleBtn = document.getElementById('sidebarToggle');
    const footer = document.querySelector('.footer');
    if (!toggleBtn || !DOM.sidebar) return;

    // 恢复折叠状态
    const savedCollapsed = localStorage.getItem('vr-sidebar-collapsed');
    if (savedCollapsed === 'true') {
        DOM.sidebar.classList.add('collapsed');
        if (DOM.content) DOM.content.classList.add('sidebar-collapsed');
        if (footer) footer.classList.add('sidebar-collapsed');
        updateToggleIcon(true);
    }

    toggleBtn.addEventListener('click', () => {
        const isCollapsed = DOM.sidebar.classList.toggle('collapsed');
        if (DOM.content) DOM.content.classList.toggle('sidebar-collapsed', isCollapsed);
        if (footer) footer.classList.toggle('sidebar-collapsed', isCollapsed);
        localStorage.setItem('vr-sidebar-collapsed', isCollapsed);
        updateToggleIcon(isCollapsed);

        // 折叠后重新触发滚动高亮
        setTimeout(highlightNavItem, 100);
    });
}

function updateToggleIcon(isCollapsed) {
    const icon = document.querySelector('.sidebar__toggle-icon');
    if (icon) {
        icon.textContent = isCollapsed ? '▶' : '◀';
    }
}

// ========== 滚动效果 ==========
function initScrollEffects() {
    let lastScrollY = 0;
    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                const scrollY = window.scrollY;

                // 头部显隐
                handleHeaderVisibility(scrollY, lastScrollY);

                // 导航高亮
                highlightNavItem();

                // 滚动动画
                triggerScrollAnimations();

                // 返回顶部按钮
                handleBackToTop(scrollY);

                lastScrollY = scrollY;
                ticking = false;
            });
            ticking = true;
        }
    });

    // 初始触发一次滚动动画
    setTimeout(triggerScrollAnimations, 200);
}

function handleHeaderVisibility(scrollY, lastScrollY) {
    if (!DOM.header) return;

    if (scrollY > 100 && scrollY > lastScrollY) {
        DOM.header.classList.add('header--hidden');
    } else if (scrollY < lastScrollY || scrollY < 50) {
        DOM.header.classList.remove('header--hidden');
    }
}

function highlightNavItem() {
    if (!DOM.sidebarNav) return;

    const navItems = DOM.sidebarNav.querySelectorAll('.sidebar__nav-item');
    const caseCards = document.querySelectorAll('.case-card');

    let currentId = null;
    caseCards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top <= 200) {
            currentId = card.id;
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.dataset.caseId === currentId) {
            item.classList.add('active');
        }
    });
}

function triggerScrollAnimations() {
    const elements = document.querySelectorAll('.animate-on-scroll:not(.animated)');
    const windowHeight = window.innerHeight;

    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < windowHeight - 80) {
            el.classList.add('animated');
        }
    });
}

// ========== 返回顶部 ==========
function initBackToTop() {
    if (!DOM.backToTop) return;

    DOM.backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

function handleBackToTop(scrollY) {
    if (!DOM.backToTop) return;

    if (scrollY > 600) {
        DOM.backToTop.classList.add('visible');
    } else {
        DOM.backToTop.classList.remove('visible');
    }
}

// ========== 深色模式 ==========
function initDarkMode() {
    // 检查系统偏好
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    // 检查本地存储
    const savedTheme = localStorage.getItem('vr-exhibition-theme');

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        state.darkMode = true;
        document.documentElement.setAttribute('data-theme', 'dark');
    }

    if (DOM.themeToggle) {
        updateThemeIcon();
        DOM.themeToggle.addEventListener('click', toggleDarkMode);
    }

    // 监听系统主题变化
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('vr-exhibition-theme')) {
            state.darkMode = e.matches;
            document.documentElement.setAttribute('data-theme', state.darkMode ? 'dark' : 'light');
            updateThemeIcon();
        }
    });
}

function toggleDarkMode() {
    state.darkMode = !state.darkMode;
    document.documentElement.setAttribute('data-theme', state.darkMode ? 'dark' : 'light');
    localStorage.setItem('vr-exhibition-theme', state.darkMode ? 'dark' : 'light');
    updateThemeIcon();
}

function updateThemeIcon() {
    if (DOM.themeToggle) {
        DOM.themeToggle.textContent = state.darkMode ? '☀️' : '🌙';
    }
}

// ========== 图片灯箱 ==========
function initLightbox() {
    if (!DOM.lightbox) return;

    DOM.lightbox.addEventListener('click', (e) => {
        if (e.target === DOM.lightbox || e.target.classList.contains('lightbox__close')) {
            closeLightbox();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (!DOM.lightbox.classList.contains('open')) return;

        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') navigateLightbox(1);
        if (e.key === 'ArrowLeft') navigateLightbox(-1);
    });
}

function openLightbox(caseId, index) {
    const caseData = casesData.find(c => c.id === caseId);
    if (!caseData) return;

    // 只使用非SVG的真实截图
    const realScreenshots = caseData.screenshots.filter(ss => !ss.src.endsWith('.svg'));
    if (realScreenshots.length === 0) return;

    state.currentLightboxCase = caseData;
    state.currentLightboxIndex = index;

    if (DOM.lightboxImg) {
        DOM.lightboxImg.src = realScreenshots[index].src;
        DOM.lightboxImg.alt = realScreenshots[index].alt;
    }

    if (DOM.lightboxCounter) {
        DOM.lightboxCounter.textContent = `${index + 1} / ${realScreenshots.length}`;
    }

    if (DOM.lightbox) {
        DOM.lightbox.classList.add('open');
        document.body.style.overflow = 'hidden';
    }
}

function closeLightbox() {
    if (DOM.lightbox) {
        DOM.lightbox.classList.remove('open');
        document.body.style.overflow = '';
    }
    state.currentLightboxCase = null;
    state.currentLightboxIndex = -1;
}

function navigateLightbox(direction) {
    if (!state.currentLightboxCase) return;

    const realScreenshots = state.currentLightboxCase.screenshots.filter(ss => !ss.src.endsWith('.svg'));
    if (realScreenshots.length === 0) return;

    let newIndex = state.currentLightboxIndex + direction;

    if (newIndex < 0) newIndex = realScreenshots.length - 1;
    if (newIndex >= realScreenshots.length) newIndex = 0;

    state.currentLightboxIndex = newIndex;

    if (DOM.lightboxImg) {
        DOM.lightboxImg.src = realScreenshots[newIndex].src;
        DOM.lightboxImg.alt = realScreenshots[newIndex].alt;
    }

    if (DOM.lightboxCounter) {
        DOM.lightboxCounter.textContent = `${newIndex + 1} / ${realScreenshots.length}`;
    }
}

// ========== 绑定截图点击 ==========
function bindScreenshotClicks() {
    // 已在HTML中通过onclick绑定
}

// ========== 移动端导航 ==========
function initMobileNav() {
    if (!DOM.mobileNavToggle || !DOM.sidebar || !DOM.sidebarOverlay) return;

    DOM.mobileNavToggle.addEventListener('click', toggleMobileSidebar);
    DOM.sidebarOverlay.addEventListener('click', closeMobileSidebar);

    // ESC关闭
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && DOM.sidebar.classList.contains('open')) {
            closeMobileSidebar();
        }
    });
}

function toggleMobileSidebar() {
    if (!DOM.sidebar || !DOM.sidebarOverlay) return;
    const isOpen = DOM.sidebar.classList.contains('open');

    if (isOpen) {
        closeMobileSidebar();
    } else {
        DOM.sidebar.classList.add('open');
        DOM.sidebarOverlay.classList.add('open');
        document.body.style.overflow = 'hidden';
    }
}

function closeMobileSidebar() {
    if (!DOM.sidebar || !DOM.sidebarOverlay) return;
    DOM.sidebar.classList.remove('open');
    DOM.sidebarOverlay.classList.remove('open');
    document.body.style.overflow = '';
}

// ========== 对比表格 ==========
function renderComparisonTable() {
    if (!DOM.comparisonBody) return;

    const rows = casesData.map(c => {
        const formatShort = c.format.includes('VR') ? 'VR全景' :
                            c.format.includes('网页叙事') ? '网页叙事' :
                            c.format.includes('3D') ? '3D展示' : c.format;
        const interactionType = c.format.includes('VR') ? '全景漫游+热点' :
                                c.format.includes('网页叙事') ? '滚动浏览+点击' :
                                '多维交互';
        const contentOrg = c.type === '档案馆' ? '档案分类+时间线' :
                           c.type === '纪念馆' ? '主题叙事+史料' :
                           '展品分类+专题';
        const techImpl = c.difficulty >= 3 ? '高精度3D+VR+多媒体' :
                         c.difficulty >= 2 ? 'VR全景+网页' :
                         '网页+图片';

        const targetAudience = c.scenes.includes('学术研究') ? '研究者+公众' :
                               c.scenes.includes('青少年受众') ? '青少年+家庭' :
                               c.scenes.includes('国际') ? '国内外公众' :
                               '社会公众';

        const strengths = c.features[0] || '—';
        const weaknesses = c.difficulty >= 3 ? '需要较高带宽与技术支持' :
                           c.difficulty <= 1 ? '交互深度有限' :
                           '部分内容更新频率低';

        return `
            <tr>
                <td class="case-name-col">${c.name.length > 20 ? c.name.substring(0, 18) + '…' : c.name}</td>
                <td>${c.category}</td>
                <td>${c.type}</td>
                <td>${formatShort}</td>
                <td>${interactionType}</td>
                <td>${contentOrg}</td>
                <td>${techImpl}</td>
                <td>${targetAudience}</td>
                <td>${strengths}</td>
                <td>${weaknesses}</td>
                <td>${'⭐'.repeat(c.difficulty)}</td>
                <td>${c.recommend}</td>
            </tr>
        `;
    }).join('');

    DOM.comparisonBody.innerHTML = rows;
}

// ========== 全局函数暴露 ==========
// 使onclick能够调用
window.openLightbox = openLightbox;
