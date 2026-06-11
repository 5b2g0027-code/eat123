/* ==========================================================================
   GOURMET HAVEN (食光之境) - CORE JAVASCRIPT APPLICATION LOGIC
   ========================================================================== */

// 1. DATA STORE (RECIPES & PAIRING MATRIX)
const RECIPES = [
    {
        id: "salmon",
        title: "香煎奢華蒔蘿鮭魚",
        englishTitle: "Pan-Seared Luxury Dill Salmon",
        image: "images/salmon_dish.png",
        description: "新鮮空運鮭魚排，以高溫煎至金黃酥脆的外皮，鎖住飽滿肉汁。佐以奢華新鮮蒔蘿奶油白醬，散發誘人的草本香氣，並配以脆嫩綠蘆筍，打造完美的北歐風情。",
        prepTime: "10 分鐘",
        cookTime: "15 分鐘",
        totalTime: "25 分鐘",
        difficulty: "中級",
        diet: "低碳水,無麩質",
        servingDefault: 2,
        flavors: { sweet: 2, sour: 4, spicy: 1, savory: 8, texture: 7 },
        ingredients: [
            { name: "鮭魚排", amount: 400, unit: "g", category: "protein" },
            { name: "新鮮蒔蘿", amount: 15, unit: "g", category: "produce" },
            { name: "無鹽奶油", amount: 30, unit: "g", category: "dairy" },
            { name: "黃檸檬", amount: 0.5, unit: "個", category: "produce" },
            { name: "白葡萄酒", amount: 30, unit: "ml", category: "pantry" },
            { name: "鮮奶油", amount: 50, unit: "ml", category: "dairy" },
            { name: "綠蘆筍", amount: 100, unit: "g", category: "produce" },
            { name: "海鹽與黑胡椒", amount: 1, unit: "適量", category: "pantry" }
        ],
        steps: [
            { title: "處理食材與醃製", desc: "將鮭魚排洗淨並用紙巾徹底壓乾，雙面均勻撒上適量海鹽與現磨黑胡椒醃製 5 分鐘。同時洗淨蘆筍去除粗纖維，蒔蘿切碎末備用。", timeLimit: 300 },
            { title: "皮朝下高溫煎製", desc: "平底鍋中熱少許橄欖油，皮朝下放入鮭魚排，用中大火煎 4 分鐘直至魚皮極致酥脆。翻面後加入蘆筍同煎 3 分鐘，隨後將鮭魚與蘆筍盛出盛盤備用。", timeLimit: 420 },
            { title: "調配蒔蘿白醬", desc: "將原鍋轉小火，加入奶油融化，隨後倒入切碎的蒔蘿、白葡萄酒與檸檬汁，中火煮沸至白酒稍微揮發濃縮（約 2 分鐘），最後注入鮮奶油徐徐攪拌至醬汁濃稠。", timeLimit: 180 },
            { title: "極致擺盤與澆汁", desc: "將煎好的金黃鮭魚排端正擺放於盛盤蘆筍之上，均勻淋上熱騰騰的蒔蘿奶油白醬，放上檸檬切片裝飾即可尊榮上桌。", timeLimit: 60 }
        ],
        reviews: [
            { author: "藍帶主廚 Leo", rating: 5, date: "2026-06-01", text: "魚皮煎得非常完美，這款蒔蘿醬汁比例調得極好，微酸的檸檬汁恰好解了鮭魚與鮮奶油的膩，非常高雅！" },
            { author: "美食評論家 雅婷", rating: 4, date: "2026-06-02", text: "搭配蘆筍增加清脆的口感很聰明，蒔蘿香氣很鮮明，在家也能做出五星級法式料理的感覺。" }
        ]
    },
    {
        id: "beef_bourg",
        title: "經典法式紅酒燉牛肉",
        englishTitle: "Classic French Boeuf Bourguignon",
        image: "images/steak_dish.png",
        description: "勃艮第殿堂級名菜。精選厚切牛肋條與勃艮第紅酒、培根、珍珠洋蔥、蘑菇與百里香慢火燉煮數小時，醬汁濃郁，牛肉入口即化，帶有沉穩厚重的紅酒香。",
        prepTime: "20 分鐘",
        cookTime: "90 分鐘",
        totalTime: "110 分鐘",
        difficulty: "高級",
        diet: "無麩質",
        servingDefault: 4,
        flavors: { sweet: 3, sour: 3, spicy: 1, savory: 9, texture: 8 },
        ingredients: [
            { name: "牛肋條", amount: 600, unit: "g", category: "protein" },
            { name: "紅葡萄酒", amount: 375, unit: "ml", category: "pantry" },
            { name: "培根丁", amount: 50, unit: "g", category: "protein" },
            { name: "蘑菇", amount: 100, unit: "g", category: "produce" },
            { name: "胡蘿蔔", amount: 120, unit: "g", category: "produce" },
            { name: "大蒜瓣", amount: 4, unit: "瓣", category: "produce" }
        ],
        steps: [
            { title: "煎炒培根與牛肉", desc: "在深燉鍋中爆香培根丁至出油，撈出培根。用培根油將切大塊的牛肋條表面煎到金黃上色，盛出備用。", timeLimit: 480 },
            { title: "拌炒蔬菜", desc: "下胡蘿蔔塊、大蒜瓣、蘑菇與洋蔥同炒，倒入一小匙麵粉拌炒均勻（使湯汁變濃稠）。", timeLimit: 240 },
            { title: "倒入紅酒慢燉", desc: "倒入整瓶紅酒及牛肉高湯，放回牛肉與培根，加入百里香與月桂葉。加蓋轉小火慢燉 90 分鐘至牛肉酥爛。", timeLimit: 5400 }
        ],
        reviews: [
            { author: "饕客 阿明", rating: 5, date: "2026-05-30", text: "這才是真正的法式紅酒燉牛肉！湯汁濃稠，充滿紅酒與香草的底蘊，牛肉燉得軟爛入味。" }
        ]
    },
    {
        id: "tofu_mapo",
        title: "經典老成都麻婆豆腐",
        englishTitle: "Classic Chengdu Mapo Tofu",
        image: "images/tofu_dish.png",
        description: "川菜之王。嫩滑的豆腐在麻辣鹹香的牛肉末豆瓣醬汁中慢火煨煮，最後撒上滿滿的漢源花椒粉。麻、辣、燙、捆、酥、嫩、鮮，七味俱全。",
        prepTime: "10 分鐘",
        cookTime: "10 分鐘",
        totalTime: "20 分鐘",
        difficulty: "中級",
        diet: "無限制",
        servingDefault: 2,
        flavors: { sweet: 1, sour: 1, spicy: 8, savory: 9, texture: 6 },
        ingredients: [
            { name: "有機板豆腐", amount: 350, unit: "g", category: "protein" },
            { name: "熟成肋眼牛排", amount: 80, unit: "g", category: "protein" },
            { name: "大蒜碎", amount: 15, unit: "g", category: "produce" },
            { name: "乾紅辣椒絲", amount: 5, unit: "g", category: "pantry" },
            { name: "花椒粉", amount: 5, unit: "g", category: "pantry" }
        ],
        steps: [
            { title: "豆腐汆燙", desc: "豆腐切成 1.5 公分方塊，放入加了少許鹽的滾水中汆燙 1 分鐘，去除豆腥味並防碎，撈出備用。", timeLimit: 180 },
            { title: "炒牛牛肉末與醬料", desc: "鍋熱油，下切碎的牛排肉末煸炒至酥香，加入豆瓣醬、豆豉、乾辣椒絲、蒜末炒出紅油。", timeLimit: 240 },
            { title: "煨煮與勾芡", desc: "倒入少許高湯與豆腐，小火煨煮 3 分鐘入味。分三次倒入太白粉水勾芡收汁，裝盤撒上花椒粉與蔥花。", timeLimit: 300 }
        ],
        reviews: [
            { author: "蜀中客", rating: 5, date: "2026-05-31", text: "花椒的麻味非常過癮，豆腐燙口且極為嫩滑，豆瓣紅油炒得非常香！" }
        ]
    },
    {
        id: "avocado_guac",
        title: "經典墨西哥酪梨醬",
        englishTitle: "Classic Guacamole with Chips",
        image: "images/avocado_dish.png",
        description: "風靡全球的墨西哥派對名菜。熟透的酪梨肉手搗至粗泥狀，拌入番茄丁、洋蔥碎、香菜、檸檬汁與少許海鹽。搭配香脆的玉米片食用，新鮮清爽。",
        prepTime: "10 分鐘",
        cookTime: "0 分鐘",
        totalTime: "10 分鐘",
        difficulty: "初級",
        diet: "素食,無麩質",
        servingDefault: 2,
        flavors: { sweet: 2, sour: 5, spicy: 2, savory: 5, texture: 6 },
        ingredients: [
            { name: "熟酪梨", amount: 2, unit: "顆", category: "produce" },
            { name: "櫻桃番茄", amount: 60, unit: "g", category: "produce" },
            { name: "水晶紅洋蔥", amount: 30, unit: "g", category: "produce" },
            { name: "新鮮香菜", amount: 5, unit: "g", category: "produce" },
            { name: "鮮榨青檸汁", amount: 15, unit: "ml", category: "pantry" }
        ],
        steps: [
            { title: "酪梨搗泥", desc: "將熟酪梨果肉挖出放於石臼或大碗中，用叉子或木杵搗碎成帶有些許顆粒感的酪梨泥。", timeLimit: 240 },
            { title: "切碎拌合", desc: "將櫻桃番茄去籽切小丁，紅洋蔥與香菜切細碎，倒入酪梨泥中。", timeLimit: 240 },
            { title: "調味點綴", desc: "倒入青檸汁，撒上鹽、黑胡椒及少許辣椒粉，徹底翻拌均勻，旁邊擺上玉米脆片享用。", timeLimit: 120 }
        ],
        reviews: [
            { author: "Carlos", rating: 5, date: "2026-05-27", text: "新鮮的手搗 Guacamole 最棒了！青檸汁的用量恰到好處，非常開胃的開胃菜！" }
        ]
    }
];

const PAIRING_MATRIX = {
    "鮭魚": [
        { name: "蒔蘿 (Dill)", desc: "蒔蘿的清新香草香氣與鮭魚的溫和油脂感是天然絕配，其帶有草本微甜與清涼感的尾韻，能完美中和海鮮腥味，是北歐料理最具代表性的經典風味。", recipeId: "salmon" },
        { name: "檸檬 (Lemon)", desc: "檸檬的明亮酸度與果香能瞬間激活鮭魚的肉質鮮甜，並分解脂肪的厚重感，在口中形成一抹清爽的柑橘芬芳。", recipeId: "salmon" },
        { name: "白葡萄酒 (White Wine)", desc: "白酒中的果酸在加熱時能幫助鮭魚排保持鮮嫩多汁，並與鍋底的奶油焦香乳化，調和出高級的法式溫熱醬汁。", recipeId: "salmon" },
        { name: "酪梨 (Avocado)", desc: "酪梨的綿密草本奶香與鮭魚滑嫩多脂的魚肉相得益彰，在冷盤或沙拉中結合，提供極致奢華的滑順口感。", recipeId: "avocado" },
        { name: "綠蘆筍 (Asparagus)", desc: "帶有淡淡泥土氣息與明亮清甜的綠蘆筍，其飽含水分與清脆的口感，為軟嫩的鮭魚肉提供了絕佳的質地對比。", recipeId: "salmon" }
    ],
    "牛肉": [
        { name: "黑松露 (Truffle)", desc: "黑松露強烈的大地蕈菇氣味能深度放大牛排的「旨味」(Umami)，與牛肉的高脂肪在高溫下融為一體，散發極致奢華的味覺震撼。", recipeId: "steak" },
        { name: "迷迭香 (Rosemary)", desc: "迷迭香濃郁的松木、樟腦草本香氣在高溫奶油中煸出，能深入牛排纖維，帶來一種沉穩的北義大利煙燻木質風味。", recipeId: "steak" },
        { name: "大蒜 (Garlic)", desc: "大蒜在牛油與奶油中慢火煎出的焦甜與辛香，極具侵略性地挑逗食慾，是香煎紅肉不可或缺的核心底色。", recipeId: "steak" },
        { name: "紅葡萄酒 (Red Wine)", desc: "紅酒的單寧能中和牛排的油膩並軟化纖維，其熟成漿果香氣與牛骨、牛脂熬煮出的醬汁，具備最深邃的層次感。", recipeId: "steak" },
        { name: "奶油 (Butter)", desc: "煎牛排尾段加入奶油進行澆淋 (Basting)，融化的乳脂在高溫下焦糖化，包裹住牛排，形成一圈香氣四溢的金黃外殼。", recipeId: "steak" }
    ],
    "豆腐": [
        { name: "純楓糖 (Maple Syrup)", desc: "楓糖溫潤的木質甘甜與豆腐的清淡黃豆香氣產生奇妙的化學反應，能形成一層油亮的甘甜外殼而不顯膩口。", recipeId: "tofu" },
        { name: "熟白芝麻 (Sesame)", desc: "烘烤過的芝麻富含堅果油脂香，當均勻撒在焦糖化的豆腐表面時，能提供咀嚼時喀嚓的趣味性與濃醇的烘焙香。", recipeId: "tofu" },
        { name: "日式醬油 (Soy Sauce)", desc: "發酵豆香濃郁的日式減鹽醬油與楓糖的甜度混合，演繹出經典的照燒甜鹹感，為清淡的豆腐注滿厚實的靈魂風味。", recipeId: "tofu" },
        { name: "青江菜 (Bok Choy)", desc: "清脆且帶有微微蔬菜苦甜的青江菜，吸飽了鍋中焦糖醬油與芝麻油，提供多汁而爽口的綠色植物纖維平衡。", recipeId: "tofu" },
        { name: "乾辣椒絲 (Chili)", desc: "微微的辣度能瞬間劃破甜鹹醬汁的平淡感，刺激味蕾分泌唾液，提升整道蔬食菜餚的跳躍性與視覺彩度。", recipeId: "tofu" }
    ],
    "酪梨": [
        { name: "白蝦仁 (Shrimp)", desc: "白蝦仁緊實清甜的海洋肉質，搭配酪梨綿密乳酪般的植物奶油感，堪稱海陸聯姻的完美典範，清爽而不失高貴。", recipeId: "avocado" },
        { name: "櫻桃番茄 (Tomato)", desc: "番茄爆漿的酸甜與酪梨的高脂肪在口中咀嚼時自然乳化，調和成一種類似天然千島醬的豐富且和諧的沙拉質地。", recipeId: "avocado" },
        { name: "青檸汁 (Lime Juice)", desc: "鮮榨青檸汁的強酸度能抑制酪梨的酵素性褐變，同時像魔術般喚醒酪梨的潛在果仁香氣與蝦仁的海洋鮮味。", recipeId: "avocado" },
        { name: "紅洋蔥 (Red Onion)", desc: "水晶紅洋蔥微辛微甜的水分與清脆口感，適度劃破酪梨的油潤感，在溫柔的沙拉塔中注入活潑的辛辣刺激。", recipeId: "avocado" },
        { name: "新鮮香菜 (Cilantro)", desc: "香菜特有的辛香氣息與青檸、酪梨、蝦仁融合，交織出最正宗的拉丁美洲微風，香氣四溢、極度開胃。", recipeId: "avocado" }
    ]
};

// 2. STATE MANAGER
const State = {
    currentTheme: "dark",
    currentPage: "recipes",
    selectedRecipeId: "salmon",
    selectedServing: 2,
    weeklyPlan: {
        Mon: null, Tue: null, Wed: null, Thu: null, Fri: null, Sat: null, Sun: null
    },
    checkedShoppingItems: new Set(),
    activeMatrixBase: "鮭魚",
    activeMatrixSatelliteIdx: 0,
    
    // Guided Cook Mode Status
    guidedActive: false,
    guidedStepIdx: 0,
    timerInterval: null,
    timerTimeLeft: 0,
    timerTotalTime: 0,
    timerRunning: false,
    
    // Custom Reviews added in session
    customReviews: {}, // recipeId -> Array of review objects

    // Firebase favorites: 從資料庫預先載入的最愛食譜 ID / 資料
    favoriteRecipeIds: new Set(),
    favoriteRecipesData: new Map(),

    // Firebase viewed recipes: 使用者點開過的食譜資料
    viewedRecipesData: new Map(),

    // Scroll restore: 從詳情頁回食譜市集時，回到原本列表位置
    recipeListScrollY: 0
};

// 3. INITIALIZATION AND ROUTING
document.addEventListener("DOMContentLoaded", () => {
    initApp();
});

function initApp() {
    // Attach Event Listeners
    setupNavbarScroll();
    setupThemeToggle();
    setupPageNavigation();
    setupSearchAutoComplete();
    setupRecipeFilters();
    setupReviewSubmission();
    setupMatrixControls();
    setupGuidedTimer();
    setupCustomModals();
    
    // 每次進網站都重新隨機排序既有料理
    shuffleRecipesForNewVisit();

    // Load initial views
    renderRecipeGrid();
    updateActivePage("recipes", { skipSave: true });
    
    // Render flavor matrix initial state
    renderMatrixSatelliteNodes();
    updateMatrixSidePanel();

    // 先恢復使用者上次所在頁面；TheMealDB 載入完後再補一次，確保外部食譜詳情也能恢復
    restoreSavedRoute(false);

    // TheMealDB 大量食譜載入
    loadTheMealDBRecipes().then(() => {
        restoreSavedRoute(true);
        updateAllFavoriteButtons();
    });

    // Firebase 登入與帳號同步：延後執行，避免 Firebase 錯誤影響原本食譜顯示
    setTimeout(() => {
        try {
            setupFirebaseAuthSystem();
        } catch (error) {
            console.error("Firebase 登入系統載入失敗，但不影響原本食譜功能：", error);
        }
    }, 0);
}

// 4. THEME CONTROL
function setupThemeToggle() {
    // 原本右上角是深淺色切換，依需求改成「我的最愛」按鈕
    const favoriteBtn = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("theme-icon");
    if (!favoriteBtn) return;

    favoriteBtn.setAttribute("aria-label", "開啟我的最愛");
    favoriteBtn.setAttribute("title", "我的最愛");
    favoriteBtn.classList.add("my-favorites-top-btn");

    if (themeIcon) {
        themeIcon.outerHTML = `<span class="my-favorites-top-btn-text">我的最愛</span>`;
    } else {
        favoriteBtn.textContent = "我的最愛";
    }

    injectFavoritesFeatureStyle();

    favoriteBtn.addEventListener("click", (e) => {
        e.preventDefault();
        openFavoritesModal();
    });
}

// 5. NAVBAR SCROLL EFFECT
function setupNavbarScroll() {
    const navbar = document.getElementById("navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
}

// 6. ROUTER AND VIEWS
function setupPageNavigation() {
    const links = document.querySelectorAll(".nav-link, .footer-nav-link");
    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const target = link.getAttribute("data-target");
            
            // Hide details page and go to target
            updateActivePage(target);
            
            // Sync active class on header nav links
            document.querySelectorAll(".nav-menu .nav-link").forEach(l => {
                if (l.getAttribute("data-target") === target) {
                    l.classList.add("active");
                } else {
                    l.classList.remove("active");
                }
            });
            
            // Scroll to main content if in hero view
            if (window.scrollY < 200 && target !== "recipes") {
                document.getElementById("main-content").scrollIntoView();
            }
        });
    });
    
    // Logo Click Home
    document.getElementById("logo-home").addEventListener("click", (e) => {
        e.preventDefault();
        updateActivePage("recipes");
        document.querySelectorAll(".nav-menu .nav-link").forEach(l => {
            if (l.getAttribute("data-target") === "recipes") l.classList.add("active");
            else l.classList.remove("active");
        });
        // 保留目前捲動位置
    });

    // Logo Click Scroll Down Button
    document.getElementById("scroll-to-content").addEventListener("click", (e) => {
        e.preventDefault();
        document.getElementById("main-content").scrollIntoView();
    });
    
    // Back to Market button in Recipe Details
    document.getElementById("detail-back-btn").addEventListener("click", () => {
        updateActivePage("recipes", { restoreRecipeScroll: true });
    });
}

function updateActivePage(pageId, options = {}) {
    const previousPage = State.currentPage;

    // Hide all views
    document.querySelectorAll(".page-view").forEach(view => {
        view.classList.remove("active");
    });
    
    // Show target view
    const targetPage = document.getElementById(`page-${pageId}`);
    if (targetPage) {
        targetPage.classList.add("active");
        State.currentPage = pageId;
        syncHeroVisibility(pageId);
        if (!options.skipSave) saveCurrentRoute(pageId);
    }
    
    // Extra view updates
    if (pageId === "planner") {
        renderMealPlanner();
    }

    // 從食譜詳情回到食譜市集時，停在使用者原本滑到的位置
    if (pageId === "recipes" && previousPage === "detail" && options.restoreRecipeScroll !== false) {
        restoreRecipeListScroll();
    }
}

function saveRecipeListScroll() {
    State.recipeListScrollY = window.scrollY || 0;
    try {
        sessionStorage.setItem("gourmet-haven-recipe-scroll-y", String(State.recipeListScrollY));
    } catch (error) {
        console.warn("儲存食譜市集捲動位置失敗：", error);
    }
}

function restoreRecipeListScroll() {
    let targetY = State.recipeListScrollY || 0;
    try {
        const saved = sessionStorage.getItem("gourmet-haven-recipe-scroll-y");
        if (saved !== null) targetY = Number(saved) || 0;
    } catch (error) {
        console.warn("讀取食譜市集捲動位置失敗：", error);
    }

    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            window.scrollTo({ top: targetY, left: 0, behavior: "auto" });
        });
    });
}

function scrollToRecipeDetailTop() {
    requestAnimationFrame(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    });
}

function shuffleRecipesForNewVisit() {
    shuffleArrayInPlace(RECIPES);
}

function shuffleArrayInPlace(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function syncHeroVisibility(pageId) {
    const hero = document.getElementById("hero-banner");
    if (!hero) return;
    hero.style.display = pageId === "detail" ? "none" : "flex";
}

function saveCurrentRoute(pageId, recipeId = State.selectedRecipeId) {
    try {
        const route = { page: pageId, recipeId, savedAt: Date.now() };
        localStorage.setItem("gourmet-haven-current-route", JSON.stringify(route));
        const hash = pageId === "detail" && recipeId
            ? `#detail=${encodeURIComponent(recipeId)}`
            : `#page=${encodeURIComponent(pageId)}`;
        if (window.location.hash !== hash) history.replaceState(null, "", hash);
    } catch (error) {
        console.warn("儲存頁面位置失敗：", error);
    }
}

function getSavedRoute() {
    try {
        const hash = window.location.hash || "";
        const detailMatch = hash.match(/^#detail=(.+)$/);
        if (detailMatch) return { page: "detail", recipeId: decodeURIComponent(detailMatch[1]) };
        const pageMatch = hash.match(/^#page=(.+)$/);
        if (pageMatch) return { page: decodeURIComponent(pageMatch[1]) };
        const raw = localStorage.getItem("gourmet-haven-current-route");
        return raw ? JSON.parse(raw) : null;
    } catch (error) {
        return null;
    }
}

function restoreSavedRoute(allowMealDBDetail = false) {
    const saved = getSavedRoute();
    if (!saved || !saved.page) return false;

    if (saved.page === "detail" && saved.recipeId) {
        const recipeExists = RECIPES.some(r => r.id === saved.recipeId);
        const isMealDB = String(saved.recipeId).startsWith("mealdb-");
        if (!recipeExists || (isMealDB && !allowMealDBDetail)) return false;
        showRecipeDetail(saved.recipeId, { skipSave: true, skipSaveRecipeScroll: true });
        return true;
    }

    updateActivePage(saved.page, { skipSave: true });
    syncActiveNavLink(saved.page);
    return true;
}

function syncActiveNavLink(pageId) {
    document.querySelectorAll(".nav-menu .nav-link").forEach(l => {
        if (l.getAttribute("data-target") === pageId) l.classList.add("active");
        else l.classList.remove("active");
    });
}

// 7. RECIPES GRID DISPLAY
function renderRecipeGrid(filterIng = "all", filterDiff = "all", filterDiet = "all", searchQuery = "") {
    const grid = document.getElementById("recipes-grid");
    grid.innerHTML = "";
    
    // Filter logic
    const filtered = RECIPES.filter(recipe => {
        // Ingredient match
        const matchesIng = filterIng === "all" || recipe.ingredients.some(i => i.name.includes(filterIng));
        
        // Difficulty match
        const matchesDiff = filterDiff === "all" || recipe.difficulty === filterDiff;
        
        // Diet match
        const matchesDiet = filterDiet === "all" || recipe.diet.includes(filterDiet) || (filterDiet === "素食" && recipe.diet.includes("素食"));
        
        // Search query match
        const queryClean = searchQuery.toLowerCase().trim();
        const matchesSearch = queryClean === "" || 
                              recipe.title.toLowerCase().includes(queryClean) || 
                              recipe.englishTitle.toLowerCase().includes(queryClean) ||
                              recipe.description.toLowerCase().includes(queryClean) ||
                              recipe.ingredients.some(i => i.name.toLowerCase().includes(queryClean));
                              
        return matchesIng && matchesDiff && matchesDiet && matchesSearch;
    });
    
    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="glass-card" style="grid-column: 1/-1; padding: 4rem; text-align: center; color: var(--text-muted);">
                <p style="font-size: 1.2rem; margin-bottom: 1rem;">找不到符合篩選條件的精緻食譜</p>
                <button class="btn btn-secondary" onclick="resetAllFilters()">重設所有篩選</button>
            </div>
        `;
        return;
    }
    
    filtered.forEach(recipe => {
        // Compute average star rating
        const reviews = [...recipe.reviews, ...(State.customReviews[recipe.id] || [])];
        const avgRating = reviews.length > 0 ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1) : "全新";
        
        const card = document.createElement("div");
        card.className = "recipe-card glass-card";
        card.id = `card-${recipe.id}`;
        card.innerHTML = `
            <div class="recipe-img-container">
                <img src="${recipe.image}" alt="${recipe.title}">
                <button class="favorite-recipe-btn ${isRecipeFavorite(recipe.id) ? "active" : ""}" id="btn-favorite-${recipe.id}" type="button" aria-label="切換最愛食譜" title="加入 / 移除最愛">
                    ${isRecipeFavorite(recipe.id) ? "♥" : "♡"}
                </button>
                <div class="recipe-difficulty">${recipe.difficulty}</div>
            </div>
            <div class="recipe-info">
                <div class="recipe-meta-row">
                    <svg viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
                    <span>${recipe.totalTime}</span>
                    <span style="margin-left: auto;">${recipe.diet.split(',')[0]}</span>
                </div>
                <h3 class="recipe-card-title">${recipe.title}</h3>
                <p class="recipe-card-desc">${recipe.description}</p>
                <div class="recipe-footer">
                    <div class="recipe-rating">
                        <svg viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                        <span>${avgRating} (${reviews.length})</span>
                    </div>
                    <button class="btn btn-secondary btn-icon" aria-label="查看詳情" id="btn-view-${recipe.id}">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
                    </button>
                </div>
            </div>
        `;
        
        grid.appendChild(card);
        
        // Add click listener on details button
        document.getElementById(`btn-view-${recipe.id}`).addEventListener("click", () => {
            showRecipeDetail(recipe.id);
        });

        const favoriteBtn = document.getElementById(`btn-favorite-${recipe.id}`);
        if (favoriteBtn) {
            favoriteBtn.addEventListener("click", (e) => {
                e.stopPropagation();
                toggleFirebaseFavoriteRecipe(recipe);
            });
        }
        // Click on whole card top also navigates to details
        card.querySelector(".recipe-img-container").addEventListener("click", () => {
            showRecipeDetail(recipe.id);
        });
    });
}

function resetAllFilters() {
    document.querySelectorAll(".filter-tag-btn").forEach(btn => {
        if (btn.getAttribute("data-val") === "all") btn.classList.add("active");
        else btn.classList.remove("active");
    });
    document.getElementById("recipe-search-input").value = "";
    renderRecipeGrid();
}

function setupRecipeFilters() {
    // Sidebar tags click filters
    const filterSections = ["filter-ingredients", "filter-difficulty", "filter-diet"];
    filterSections.forEach(sectionId => {
        const wrapper = document.getElementById(sectionId);
        wrapper.addEventListener("click", (e) => {
            const btn = e.target.closest(".filter-tag-btn");
            if (!btn) return;
            
            wrapper.querySelectorAll(".filter-tag-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            
            applyAllFilters();
        });
    });
    
    // Search button trigger
    document.getElementById("recipe-search-btn").addEventListener("click", () => {
        applyAllFilters();
        document.getElementById("main-content").scrollIntoView();
    });
}

function applyAllFilters() {
    const activeIng = document.querySelector("#filter-ingredients .filter-tag-btn.active").getAttribute("data-val");
    const activeDiff = document.querySelector("#filter-difficulty .filter-tag-btn.active").getAttribute("data-val");
    const activeDiet = document.querySelector("#filter-diet .filter-tag-btn.active").getAttribute("data-val");
    const query = document.getElementById("recipe-search-input").value;
    
    renderRecipeGrid(activeIng, activeDiff, activeDiet, query);
}

// 8. AUTOCOMPLETE SEARCH BOX
function setupSearchAutoComplete() {
    const input = document.getElementById("recipe-search-input");
    const suggestions = document.getElementById("search-suggestions");
    
    input.addEventListener("input", () => {
        const val = input.value.trim().toLowerCase();
        if (val.length === 0) {
            suggestions.style.display = "none";
            return;
        }
        
        // Find match candidates
        const matches = RECIPES.filter(r => 
            r.title.toLowerCase().includes(val) || 
            r.englishTitle.toLowerCase().includes(val) ||
            r.ingredients.some(i => i.name.toLowerCase().includes(val))
        );
        
        if (matches.length === 0) {
            suggestions.style.display = "none";
            return;
        }
        
        suggestions.innerHTML = "";
        matches.slice(0, 5).forEach(m => {
            const item = document.createElement("div");
            item.className = "suggestion-item";
            item.innerHTML = `
                <img src="${m.image}" style="width: 32px; height: 32px; object-fit: cover; border-radius: 4px;">
                <div>
                    <strong style="display:block; font-size:0.9rem;">${m.title}</strong>
                    <span style="font-size:0.75rem; color:var(--text-muted);">${m.englishTitle}</span>
                </div>
            `;
            item.addEventListener("click", () => {
                suggestions.style.display = "none";
                input.value = m.title;
                showRecipeDetail(m.id);
            });
            suggestions.appendChild(item);
        });
        
        suggestions.style.display = "block";
    });
    
    // Close suggestion on click outside
    document.addEventListener("click", (e) => {
        if (!e.target.closest(".search-box")) {
            suggestions.style.display = "none";
        }
    });
}

// 9. RECIPE DETAIL PANEL HYDRATION
async function showRecipeDetail(recipeId, options = {}) {
    State.selectedRecipeId = recipeId;
    State.selectedServing = 2; // Reset serving count

    let recipe = RECIPES.find(r => r.id === recipeId);
    if (!recipe) return;

    // 從主食譜列表進入詳情前，先記住目前列表滑動位置
    if (State.currentPage === "recipes" && !options.skipSaveRecipeScroll) {
        saveRecipeListScroll();
    }

    updateActivePage("detail", { skipSave: options.skipSave });
    if (!options.skipSave) saveCurrentRoute("detail", recipeId);

    // 進入食譜詳情頁時一律回到詳情頁最頂端
    scrollToRecipeDetailTop();
    // 不再自動往上捲動：讓使用者點進食譜後停留在目前視窗位置。

    // TheMealDB 食譜採用「先顯示卡片、點進去再抓完整資料與翻譯」
    // 這樣首頁不會等很久才出現新食譜。
    if (recipe.needsMealDBDetail) {
        renderRecipeDetailLoading(recipe.title || "TheMealDB 食譜");
        try {
            await hydrateMealDBRecipe(recipe.id);
        } catch (error) {
            console.error("TheMealDB 詳細資料/翻譯載入失敗：", error);
            showToast("食譜詳細資料載入失敗，請稍後再試。");
        }
    }

    // Trigger details render
    renderRecipeDetailContent();
    renderReviewsList();

    // Firebase 新增：只要使用者點開食譜詳情，就把該食譜資料同步到 Firebase
    saveFirebaseViewedRecipe(recipeId);
}

function renderRecipeDetailLoading(title) {
    const detailContent = document.getElementById("recipe-detail-content");
    if (!detailContent) return;

    detailContent.innerHTML = `
        <div class="glass-card" style="grid-column: 1 / -1; padding: 4rem; text-align: center;">
            <h2 style="font-family: var(--font-heading); margin-bottom: 1rem;">正在載入「${title}」</h2>
            <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">
                正在取得完整食材、料理步驟，並翻譯成繁體中文，第一次載入會稍久，之後會快很多。
            </p>
            <div style="width: 56px; height: 56px; margin: 0 auto; border-radius: 50%; border: 4px solid var(--border-glass); border-top-color: var(--accent-gold); animation: mealdb-spin 1s linear infinite;"></div>
        </div>
    `;

    if (!document.getElementById("mealdb-spin-style")) {
        const style = document.createElement("style");
        style.id = "mealdb-spin-style";
        style.textContent = `@keyframes mealdb-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`;
        document.head.appendChild(style);
    }
}

function renderRecipeDetailContent() {
    const recipe = RECIPES.find(r => r.id === State.selectedRecipeId);
    const detailContent = document.getElementById("recipe-detail-content");
    
    // Generate dietary requirements badges
    const tagsHtml = recipe.diet.split(',').map(tag => `<span class="detail-tag">${tag}</span>`).join('');
    
    // Generate ingredients HTML (scaled by serving size ratio)
    const ratio = State.selectedServing / recipe.servingDefault;
    const ingredientsHtml = recipe.ingredients.map(ing => {
        let amountStr = "";
        if (ing.amount && typeof ing.amount === "number" && ing.unit !== "適量" && ing.unit !== "少許") {
            const scaled = (ing.amount * ratio).toFixed(ing.amount % 1 === 0 ? 0 : 1);
            amountStr = `${scaled} ${ing.unit}`;
        } else {
            amountStr = ing.unit; // 適量 / 少許
        }
        return `
            <li class="ingredient-item">
                <span class="ingredient-name">${ing.name}</span>
                <span class="ingredient-amount">${amountStr}</span>
            </li>
        `;
    }).join('');
    
    // Generate directions step list
    const stepsHtml = recipe.steps.map((step, idx) => `
        <div class="step-card glass">
            <div class="step-num">${idx + 1}</div>
            <div class="step-details">
                <h4 class="step-title">${step.title}</h4>
                <p class="step-desc">${step.desc}</p>
            </div>
        </div>
    `).join('');
    
    // Generate SVG radar chart coordinates
    // We map a 100x100 space, center at 50,50
    // Angles: sweet(90deg/0rad), sour(162deg), spicy(234deg), savory(306deg), texture(18deg)
    const points = calculateRadarPoints(recipe.flavors);
    
    detailContent.innerHTML = `
        <!-- Left Panel: Media -->
        <div class="detail-left">
            <div class="detail-img-box">
                <img src="${recipe.image}" alt="${recipe.title}">
                <div class="detail-quick-stats">
                    <div class="stat-item">
                        <span class="stat-item-label">準備</span>
                        <span class="stat-item-val">${recipe.prepTime}</span>
                    </div>
                    <div style="width: 1px; background: var(--border-glass);"></div>
                    <div class="stat-item">
                        <span class="stat-item-label">烹飪</span>
                        <span class="stat-item-val">${recipe.cookTime}</span>
                    </div>
                    <div style="width: 1px; background: var(--border-glass);"></div>
                    <div class="stat-item">
                        <span class="stat-item-label">總時</span>
                        <span class="stat-item-val">${recipe.totalTime}</span>
                    </div>
                </div>
            </div>
            
            <div class="detail-actions-row" style="margin-top: 2rem;">
                <button class="btn btn-primary" id="btn-start-cooking" style="flex: 1;">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="margin-right: 4px;">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polygon points="10 8 16 12 10 16 10 8"></polygon>
                    </svg>
                    開始引導烹飪
                </button>
                <button class="btn btn-secondary" id="btn-add-planner">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 4px;">
                        <path d="M12 21a9.004 9.004 0 0 0 9-9 9.005 9.005 0 0 0-9-9 9.007 9.007 0 0 0-9 9 9.005 9.005 0 0 0 9 9z"></path>
                        <line x1="12" y1="8" x2="12" y2="16"></line>
                        <line x1="8" y1="12" x2="16" y2="12"></line>
                    </svg>
                    加入每週食曆
                </button>
            </div>
            
            <!-- Flavor profile radar card -->
            <div class="radar-panel glass">
                <div class="radar-svg-container">
                    <svg viewBox="0 0 100 100">
                        <!-- Radar grid background pentagons -->
                        <polygon points="50,10 88,38 73,83 27,83 12,38" fill="none" stroke="var(--border-glass)" stroke-width="0.75" />
                        <polygon points="50,22 80,44 69,78 31,78 20,44" fill="none" stroke="var(--border-glass)" stroke-width="0.75" />
                        <polygon points="50,34 72,50 64,73 36,73 28,50" fill="none" stroke="var(--border-glass)" stroke-width="0.75" />
                        <!-- Axis lines -->
                        <line x1="50" y1="50" x2="50" y2="10" stroke="var(--border-glass)" stroke-width="0.75" />
                        <line x1="50" y1="50" x2="88" y2="38" stroke="var(--border-glass)" stroke-width="0.75" />
                        <line x1="50" y1="50" x2="73" y2="83" stroke="var(--border-glass)" stroke-width="0.75" />
                        <line x1="50" y1="50" x2="27" y2="83" stroke="var(--border-glass)" stroke-width="0.75" />
                        <line x1="50" y1="50" x2="12" y2="38" stroke="var(--border-glass)" stroke-width="0.75" />
                        <!-- Colored Fill Shape -->
                        <polygon points="${points}" fill="rgba(var(--accent-gold-rgb), 0.35)" stroke="var(--accent-gold)" stroke-width="1.5" />
                    </svg>
                </div>
                <div class="radar-legend">
                    <div class="legend-item"><span class="legend-dot dot-sweet"></span>甜度 (${recipe.flavors.sweet}/10)</div>
                    <div class="legend-item"><span class="legend-dot dot-sour"></span>酸度 (${recipe.flavors.sour}/10)</div>
                    <div class="legend-item"><span class="legend-dot dot-spicy"></span>辛辣 (${recipe.flavors.spicy}/10)</div>
                    <div class="legend-item"><span class="legend-dot dot-savory"></span>旨味 (${recipe.flavors.savory}/10)</div>
                    <div class="legend-item" style="grid-column: span 2;"><span class="legend-dot dot-texture"></span>口感層次 (${recipe.flavors.texture}/10)</div>
                </div>
            </div>
        </div>
        
        <!-- Right Panel: Instructions and Ingredients -->
        <div class="detail-right">
            <div class="detail-meta">
                <div class="detail-tags">${tagsHtml}</div>
                <h2 class="detail-title">${recipe.title}</h2>
                <h4 style="color:var(--text-muted); font-size:1.1rem; margin-bottom:1.5rem; font-weight:normal;">${recipe.englishTitle}</h4>
                <p class="detail-desc">${recipe.description}</p>
            </div>
            
            <div class="detail-ingredients">
                <div class="ingredients-header">
                    <h3 style="font-family:var(--font-heading);">食材明細</h3>
                    <div class="serving-counter">
                        <button class="serving-btn" id="serving-minus">−</button>
                        <span id="serving-display" style="font-weight:600; font-size:0.95rem;">${State.selectedServing} 人份</span>
                        <button class="serving-btn" id="serving-plus">+</button>
                    </div>
                </div>
                
                <ul class="ingredient-list-items">
                    ${ingredientsHtml}
                </ul>
            </div>
            
            <div class="detail-instructions">
                <h3 style="font-family:var(--font-heading);">烹飪步驟</h3>
                <div class="instruction-steps">
                    ${stepsHtml}
                </div>
            </div>
        </div>
    `;
    
    // Bind dynamic detail actions
    document.getElementById("serving-minus").addEventListener("click", () => {
        if (State.selectedServing > 1) {
            State.selectedServing--;
            renderRecipeDetailContent();
        }
    });
    
    document.getElementById("serving-plus").addEventListener("click", () => {
        State.selectedServing++;
        renderRecipeDetailContent();
    });
    
    document.getElementById("btn-start-cooking").addEventListener("click", () => {
        openGuidedCookingModal();
    });
    
    document.getElementById("btn-add-planner").addEventListener("click", () => {
        promptAddToPlanner();
    });

    // Firebase 新增：在原本詳情頁按鈕旁邊補「最愛」與「標記完成」按鈕，不改原本版面
    injectFirebaseFavoriteDetailButton(recipe);
    injectFirebaseCompletedRecipeButton(recipe);
}

function calculateRadarPoints(flavors) {
    const center = 50;
    const maxVal = 10;
    // Axis distance mapping
    const len = 40; // Max radius from center to grid edge
    
    // Trigonometry offset (x = cx + r * cos(angle), y = cy + r * sin(angle))
    // Angles for 5 dimensions: Sweet (top, 270deg), Sour (right, ~342deg), Spicy (bottom-right, ~54deg), Savory (bottom-left, ~126deg), Texture (top-left, ~198deg)
    // Angles in radians:
    const angles = [
        -Math.PI / 2,                  // Sweet (Top)
        -Math.PI / 2 + (2 * Math.PI)/5, // Sour (Right-ish)
        -Math.PI / 2 + (4 * Math.PI)/5, // Savory (Bottom-right-ish)
        -Math.PI / 2 + (6 * Math.PI)/5, // Texture (Bottom-left-ish)
        -Math.PI / 2 + (8 * Math.PI)/5  // Spicy (Left-ish)
    ];
    
    const values = [
        flavors.sweet,
        flavors.sour,
        flavors.savory,
        flavors.texture,
        flavors.spicy
    ];
    
    const points = values.map((val, idx) => {
        const r = (val / maxVal) * len;
        const x = center + r * Math.cos(angles[idx]);
        const y = center + r * Math.sin(angles[idx]);
        return `${x.toFixed(1)},${y.toFixed(1)}`;
    });
    
    return points.join(' ');
}

// 10. DRAG & DROP / CLICK MEAL PLANNER
function promptAddToPlanner() {
    const recipe = RECIPES.find(r => r.id === State.selectedRecipeId);
    
    // Create a beautiful, temporary inline dialog or custom selection modal overlay
    const selectModal = document.createElement("div");
    selectModal.className = "guided-modal active";
    selectModal.id = "planner-select-modal";
    selectModal.innerHTML = `
        <div class="guided-card glass" style="max-width: 450px; height: auto; max-height: 480px; padding: 2rem; display: flex; flex-direction: column; justify-content: center; gap: 1.5rem;">
            <h3 style="text-align:center; font-family:var(--font-heading);">安排餐食計曆</h3>
            <p style="text-align:center; font-size:0.95rem; color:var(--text-secondary);">請選擇您想在哪一天享用「${recipe.title}」？</p>
            
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.8rem; margin:1rem 0;">
                <button class="btn btn-secondary day-btn" data-day="Mon">星期一</button>
                <button class="btn btn-secondary day-btn" data-day="Tue">星期二</button>
                <button class="btn btn-secondary day-btn" data-day="Wed">星期三</button>
                <button class="btn btn-secondary day-btn" data-day="Thu">星期四</button>
                <button class="btn btn-secondary day-btn" data-day="Fri">星期五</button>
                <button class="btn btn-secondary day-btn" data-day="Sat">星期六</button>
                <button class="btn btn-secondary day-btn" data-day="Sun" style="grid-column: span 2;">星期日</button>
            </div>
            
            <button class="btn btn-primary" id="planner-cancel-btn">取消</button>
        </div>
    `;
    
    document.body.appendChild(selectModal);
    
    // Bind click events on day selection
    selectModal.querySelectorAll(".day-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const selectedDay = btn.getAttribute("data-day");
            // Save planned recipe and serving quantity to state
            State.weeklyPlan[selectedDay] = {
                recipeId: recipe.id,
                servings: State.selectedServing
            };

            // Firebase 新增：同步食曆規劃到目前登入帳號
            saveFirebaseMealPlan();
            
            // Clean up checked items since plan changed, recalculating grocery list is needed
            State.checkedShoppingItems.clear();
            
            // Close modal
            selectModal.remove();
            
            // Render Notification
            showToast(`成功將 ${recipe.title} 安排在您的 ${getDayChinese(selectedDay)}！`);
        });
    });
    
    document.getElementById("planner-cancel-btn").addEventListener("click", () => {
        selectModal.remove();
    });
}

function showToast(msg) {
    const toast = document.createElement("div");
    toast.className = "glass";
    toast.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        padding: 1rem 2rem;
        z-index: 9999;
        border-color: var(--accent-gold);
        border-radius: var(--border-radius-full);
        box-shadow: var(--shadow-lg), var(--shadow-glow);
        color: var(--text-primary);
        font-weight: 500;
        animation: slide-up-toast 0.4s ease-out;
    `;
    toast.textContent = msg;
    document.body.appendChild(toast);
    
    // Slide up keyframe rule injection dynamically if not exists
    if (!document.getElementById("toast-animation")) {
        const style = document.createElement("style");
        style.id = "toast-animation";
        style.innerHTML = `
            @keyframes slide-up-toast {
                from { transform: translateY(40px); opacity: 0; }
                to { transform: translateY(0); opacity: 1; }
            }
        `;
        document.head.appendChild(style);
    }
    
    setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transform = "translateY(10px)";
        toast.style.transition = "opacity 0.4s, transform 0.4s";
        setTimeout(() => toast.remove(), 400);
    }, 3000);
}

function getDayChinese(day) {
    const mapping = { Mon: "週一", Tue: "週二", Wed: "週三", Thu: "週四", Fri: "週五", Sat: "週六", Sun: "週日" };
    return mapping[day] || day;
}

// 11. MEAL PLANNER TAB VIEW RENDER
function renderMealPlanner() {
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    
    days.forEach(day => {
        const dropzone = document.getElementById(`planner-${day}`);
        const plan = State.weeklyPlan[day];
        
        if (plan) {
            const recipe = RECIPES.find(r => r.id === plan.recipeId);
            dropzone.className = "day-recipe-dropzone has-meal";
            dropzone.innerHTML = `
                <div class="planned-meal-tag">
                    <img src="${recipe.image}" alt="${recipe.title}">
                    <div class="planned-meal-name">
                        <strong style="display:block;">${recipe.title}</strong>
                        <span style="font-size:0.75rem; color:var(--text-muted);">${plan.servings} 人份</span>
                    </div>
                    <button class="btn btn-secondary btn-icon" id="remove-plan-${day}" aria-label="刪除此餐" style="width: 32px; height: 32px;">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </button>
                </div>
            `;
            
            // Add click details trigger on image/name click
            dropzone.querySelector(".planned-meal-name").addEventListener("click", () => {
                showRecipeDetail(recipe.id);
            });
            dropzone.querySelector("img").addEventListener("click", () => {
                showRecipeDetail(recipe.id);
            });
            
            // Add delete event listener
            document.getElementById(`remove-plan-${day}`).addEventListener("click", (e) => {
                e.stopPropagation();
                State.weeklyPlan[day] = null;
                saveFirebaseMealPlan(); // Firebase 新增：刪除後同步食曆
                renderMealPlanner();
            });
        } else {
            dropzone.className = "day-recipe-dropzone";
            dropzone.innerHTML = `<span class="dropzone-empty-text">點擊食譜中的「加入食曆」來規劃</span>`;
        }
    });
    
    renderShoppingList();
}

// 12. DYNAMIC CONSOLIDATED GROCERY CALCULATOR
function renderShoppingList() {
    const listWrapper = document.getElementById("shopping-list-categories");
    const countBadge = document.getElementById("shopping-item-count");
    
    // Consolidate ingredient list from plan
    const merged = {}; // ingredientKey (name+unit) -> { name, amount, unit, category }
    
    Object.keys(State.weeklyPlan).forEach(day => {
        const plan = State.weeklyPlan[day];
        if (!plan) return;
        
        const recipe = RECIPES.find(r => r.id === plan.recipeId);
        if (!recipe) return;
        
        // Calculate ratio
        const ratio = plan.servings / recipe.servingDefault;
        
        recipe.ingredients.forEach(ing => {
            const key = `${ing.name} (${ing.unit})`;
            if (!merged[key]) {
                merged[key] = {
                    name: ing.name,
                    amount: typeof ing.amount === "number" ? 0 : null,
                    unit: ing.unit,
                    category: ing.category
                };
            }
            if (typeof ing.amount === "number" && merged[key].amount !== null) {
                merged[key].amount += ing.amount * ratio;
            }
        });
    });
    
    const keys = Object.keys(merged);
    countBadge.textContent = `${keys.length} 項待採購`;
    
    if (keys.length === 0) {
        listWrapper.innerHTML = `
            <div class="shopping-empty-state" id="shopping-empty">
                <svg viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
                <p>尚無規劃任何餐食。在左側規劃每日食譜後，系統將自動分析並合併產生所有食材的採購單。</p>
            </div>
        `;
        return;
    }
    
    // Group by category
    const categorized = {
        protein: { label: "肉品與蛋白質 (Meat & Protein)", items: [] },
        produce: { label: "新鮮蔬果 (Fresh Produce)", items: [] },
        dairy: { label: "乳製品與油脂 (Dairy & Oils)", items: [] },
        pantry: { label: "調味與乾貨 (Pantry & Spices)", items: [] }
    };
    
    keys.forEach(key => {
        const item = merged[key];
        const cat = item.category || "pantry";
        if (categorized[cat]) {
            categorized[cat].items.push(item);
        } else {
            categorized.pantry.items.push(item);
        }
    });
    
    // Build HTML output
    let html = "";
    Object.keys(categorized).forEach(catKey => {
        const group = categorized[catKey];
        if (group.items.length === 0) return;
        
        const itemsHtml = group.items.map(item => {
            let qtyStr = "";
            if (item.amount) {
                qtyStr = `${item.amount.toFixed(item.amount % 1 === 0 ? 0 : 1)} ${item.unit}`;
            } else {
                qtyStr = item.unit; // 適量 / 少許
            }
            
            const isChecked = State.checkedShoppingItems.has(item.name);
            
            return `
                <div class="shopping-item ${isChecked ? 'checked' : ''}" data-name="${item.name}">
                    <div class="shopping-checkbox">
                        <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <span class="shopping-item-name">${item.name}</span>
                    <span class="shopping-item-quantity">${qtyStr}</span>
                </div>
            `;
        }).join('');
        
        html += `
            <div class="shopping-category-group">
                <h5>${group.label}</h5>
                <div class="shopping-items-list">
                    ${itemsHtml}
                </div>
            </div>
        `;
    });
    
    listWrapper.innerHTML = html;
    
    // Bind click events on checkable items
    listWrapper.querySelectorAll(".shopping-item").forEach(el => {
        el.addEventListener("click", () => {
            const name = el.getAttribute("data-name");
            if (State.checkedShoppingItems.has(name)) {
                State.checkedShoppingItems.delete(name);
                el.classList.remove("checked");
            } else {
                State.checkedShoppingItems.add(name);
                el.classList.add("checked");
            }
        });
    });
}

// 13. FLAVOR PAIRING MATRIX INTERACTION
function setupMatrixControls() {
    const selector = document.getElementById("matrix-selector");
    selector.addEventListener("click", (e) => {
        const pill = e.target.closest(".selector-pill");
        if (!pill) return;
        
        selector.querySelectorAll(".selector-pill").forEach(p => p.classList.remove("active"));
        pill.classList.add("active");
        
        const ing = pill.getAttribute("data-ing");
        State.activeMatrixBase = ing;
        State.activeMatrixSatelliteIdx = 0; // Reset active node
        
        // Render
        renderMatrixSatelliteNodes();
        updateMatrixSidePanel();
    });
    
    // Matrix cook button click
    document.getElementById("matrix-cook-btn").addEventListener("click", () => {
        const currentSatList = PAIRING_MATRIX[State.activeMatrixBase];
        const activeSat = currentSatList[State.activeMatrixSatelliteIdx];
        if (activeSat && activeSat.recipeId) {
            showRecipeDetail(activeSat.recipeId);
        }
    });
}

function renderMatrixSatelliteNodes() {
    const baseIng = State.activeMatrixBase;
    const list = PAIRING_MATRIX[baseIng] || [];
    const container = document.getElementById("matrix-satellites");
    container.innerHTML = "";
    
    // Center Hub setup
    document.getElementById("matrix-hub-name").textContent = baseIng;
    const baseRecipe = RECIPES.find(r => r.ingredients.some(ing => ing.name === baseIng));
    document.getElementById("matrix-hub-img").src = baseRecipe ? baseRecipe.image : "images/hero_background.png";
    
    // Define layout: 5 points
    const count = list.length;
    const radii = [130, 220, 130, 220, 130]; // Alternate inner/outer orbits
    
    list.forEach((sat, idx) => {
        const angle = (idx * 2 * Math.PI) / count - Math.PI / 2; // Start from top
        const R = radii[idx];
        
        // Coordinate offsets
        const offsetLeft = R * Math.cos(angle);
        const offsetTop = R * Math.sin(angle);
        
        const satNode = document.createElement("div");
        satNode.className = `matrix-node ${idx === State.activeMatrixSatelliteIdx ? 'active-node' : ''}`;
        satNode.style.left = `calc(50% + ${offsetLeft}px)`;
        satNode.style.top = `calc(50% + ${offsetTop}px)`;
        
        // Find matching image to satellite (if recipe exists, use recipe image, else fallback)
        const targetRecipe = RECIPES.find(r => r.id === sat.recipeId);
        const satImg = targetRecipe ? targetRecipe.image : "images/hero_background.png";
        
        satNode.innerHTML = `
            <img src="${satImg}" alt="${sat.name}">
            <span>${sat.name.split(' ')[0]}</span>
        `;
        
        satNode.addEventListener("click", () => {
            // Update selected index
            State.activeMatrixSatelliteIdx = idx;
            document.querySelectorAll(".matrix-node").forEach((n, index) => {
                if (index === idx) n.classList.add("active-node");
                else n.classList.remove("active-node");
            });
            updateMatrixSidePanel();
        });
        
        container.appendChild(satNode);
    });
}

function updateMatrixSidePanel() {
    const list = PAIRING_MATRIX[State.activeMatrixBase] || [];
    const activeSat = list[State.activeMatrixSatelliteIdx];
    
    if (!activeSat) return;
    
    document.getElementById("pairing-node-name").textContent = activeSat.name;
    document.getElementById("pairing-node-desc").textContent = activeSat.desc;
    
    // suggested recipes list
    const recipesWrapper = document.getElementById("pairing-recipes");
    recipesWrapper.innerHTML = "";
    
    const recipe = RECIPES.find(r => r.id === activeSat.recipeId);
    if (recipe) {
        const item = document.createElement("a");
        item.href = "#";
        item.className = "matrix-recipe-item";
        item.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.title}">
            <div class="matrix-recipe-details">
                <h5>${recipe.title}</h5>
                <span>${recipe.totalTime} • ${recipe.difficulty}</span>
            </div>
        `;
        item.addEventListener("click", (e) => {
            e.preventDefault();
            showRecipeDetail(recipe.id);
        });
        recipesWrapper.appendChild(item);
    }
}

// 14. GUIDED COOKING MODE & DIGITAL TIMER
function openGuidedCookingModal() {
    const recipe = RECIPES.find(r => r.id === State.selectedRecipeId);
    if (!recipe) return;
    
    State.guidedActive = true;
    State.guidedStepIdx = 0;
    
    document.getElementById("guided-recipe-title").textContent = recipe.title;
    document.getElementById("guided-cooking-modal").classList.add("active");
    
    // Trigger render
    renderGuidedStep();
}

function renderGuidedStep() {
    const recipe = RECIPES.find(r => r.id === State.selectedRecipeId);
    const step = recipe.steps[State.guidedStepIdx];
    
    // Cancel any running timer
    resetGuidedTimerState();
    
    // Update labels
    document.getElementById("guided-step-badge").textContent = `步驟 ${State.guidedStepIdx + 1} / ${recipe.steps.length}`;
    document.getElementById("guided-step-title").textContent = step.title;
    document.getElementById("guided-step-desc").textContent = step.desc;
    
    // Update progress bar
    const progressPct = ((State.guidedStepIdx + 1) / recipe.steps.length) * 100;
    document.getElementById("guided-progress-fill").style.width = `${progressPct}%`;
    
    // Setup timer parameters
    State.timerTimeLeft = step.timeLimit;
    State.timerTotalTime = step.timeLimit;
    updateTimerDisplay();
    
    // Show/Hide prev/next buttons
    document.getElementById("guided-prev-btn").style.visibility = State.guidedStepIdx === 0 ? "hidden" : "visible";
    
    const nextBtn = document.getElementById("guided-next-btn");
    if (State.guidedStepIdx === recipe.steps.length - 1) {
        nextBtn.textContent = "完成烹飪";
    } else {
        nextBtn.textContent = "下一步";
    }
}

function setupGuidedTimer() {
    const modal = document.getElementById("guided-cooking-modal");
    const closeBtn = document.getElementById("guided-close-btn");
    const prevBtn = document.getElementById("guided-prev-btn");
    const nextBtn = document.getElementById("guided-next-btn");
    const startBtn = document.getElementById("timer-start-btn");
    const resetBtn = document.getElementById("timer-reset-btn");
    
    closeBtn.addEventListener("click", () => {
        closeGuidedCookingModal();
    });
    
    prevBtn.addEventListener("click", () => {
        if (State.guidedStepIdx > 0) {
            State.guidedStepIdx--;
            renderGuidedStep();
        }
    });
    
    nextBtn.addEventListener("click", () => {
        const recipe = RECIPES.find(r => r.id === State.selectedRecipeId);
        if (State.guidedStepIdx < recipe.steps.length - 1) {
            State.guidedStepIdx++;
            renderGuidedStep();
        } else {
            // Cooking finished!
            closeGuidedCookingModal();
            showToast("恭喜您完成了這道究極美食！祝您用餐愉快！");
        }
    });
    
    startBtn.addEventListener("click", () => {
        if (State.timerRunning) {
            pauseGuidedTimer();
        } else {
            startGuidedTimer();
        }
    });
    
    resetBtn.addEventListener("click", () => {
        resetGuidedTimerState();
        updateTimerDisplay();
    });
}

function closeGuidedCookingModal() {
    resetGuidedTimerState();
    document.getElementById("guided-cooking-modal").classList.remove("active");
    State.guidedActive = false;
}

function startGuidedTimer() {
    if (State.timerInterval) clearInterval(State.timerInterval);
    
    State.timerRunning = true;
    document.getElementById("timer-start-btn").textContent = "暫停";
    document.getElementById("timer-start-btn").className = "btn btn-secondary";
    document.getElementById("timer-steam").classList.add("active"); // Activation of steam
    
    State.timerInterval = setInterval(() => {
        if (State.timerTimeLeft > 0) {
            State.timerTimeLeft--;
            updateTimerDisplay();
        } else {
            // Timer expired!
            clearInterval(State.timerInterval);
            State.timerInterval = null;
            State.timerRunning = false;
            document.getElementById("timer-steam").classList.remove("active");
            
            // Web Audio Synthesis Notification Beep (Extremely high-end, clean solution)
            playTimerAlarmSound();
            
            showToast("計時時間到！請準備進行下一個烹飪動作。");
            document.getElementById("timer-start-btn").textContent = "開始計時";
            document.getElementById("timer-start-btn").className = "btn btn-primary";
        }
    }, 1000);
}

function pauseGuidedTimer() {
    clearInterval(State.timerInterval);
    State.timerInterval = null;
    State.timerRunning = false;
    document.getElementById("timer-start-btn").textContent = "繼續";
    document.getElementById("timer-start-btn").className = "btn btn-primary";
    document.getElementById("timer-steam").classList.remove("active"); // Pause steam
}

function resetGuidedTimerState() {
    if (State.timerInterval) clearInterval(State.timerInterval);
    State.timerInterval = null;
    State.timerRunning = false;
    State.timerTimeLeft = State.timerTotalTime;
    
    document.getElementById("timer-start-btn").textContent = "開始計時";
    document.getElementById("timer-start-btn").className = "btn btn-primary";
    document.getElementById("timer-steam").classList.remove("active");
}

function updateTimerDisplay() {
    const mins = Math.floor(State.timerTimeLeft / 60);
    const secs = State.timerTimeLeft % 60;
    
    // Update numbers
    document.getElementById("timer-display").textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    
    // Update SVG stroke-dashoffset (max circumference is 628)
    const circle = document.getElementById("timer-circle-progress");
    const circumference = 628;
    const progress = State.timerTimeLeft / State.timerTotalTime;
    const offset = circumference * (1 - progress);
    circle.style.strokeDashoffset = offset;
}

// Custom Synth sound synthesis (Web Audio API)
function playTimerAlarmSound() {
    try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        
        // High quality triple chime
        const chime = (time, freq) => {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            
            osc.type = "sine";
            osc.frequency.setValueAtTime(freq, time);
            
            gain.gain.setValueAtTime(0.3, time);
            gain.gain.exponentialRampToValueAtTime(0.001, time + 0.6);
            
            osc.start(time);
            osc.stop(time + 0.6);
        };
        
        const now = audioCtx.currentTime;
        chime(now, 523.25); // C5
        chime(now + 0.25, 659.25); // E5
        chime(now + 0.5, 783.99); // G5
        chime(now + 0.75, 1046.5); // C6 (Peak chime!)
    } catch (e) {
        console.warn("Web Audio API is blocked or unsupported by browser: ", e);
    }
}

// 15. REVIEW SUBMISSION SIMULATOR
function renderReviewsList() {
    const listWrapper = document.getElementById("reviews-list");
    listWrapper.innerHTML = "";
    
    const recipe = RECIPES.find(r => r.id === State.selectedRecipeId);
    if (!recipe) return;
    
    // Merge baseline and custom reviews
    const baselineReviews = recipe.reviews;
    const sessionReviews = State.customReviews[recipe.id] || [];
    const merged = [...sessionReviews, ...baselineReviews]; // Put newest first
    
    if (merged.length === 0) {
        listWrapper.innerHTML = `<div class="reviews-empty-state">尚無饕客評論。成為第一個發表品鑑的人吧！</div>`;
        return;
    }
    
    merged.forEach(r => {
        // Draw star list
        let starsHtml = "";
        for (let i = 1; i <= 5; i++) {
            starsHtml += `<svg viewBox="0 0 24 24" style="fill: ${i <= r.rating ? 'var(--accent-gold)' : 'var(--text-muted)'}"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>`;
        }
        
        const card = document.createElement("div");
        card.className = "review-item-card glass";
        card.innerHTML = `
            <div class="review-item-header">
                <div class="review-author-info">
                    <h5>${r.author}</h5>
                    <span class="review-date">${r.date}</span>
                </div>
                <div class="review-item-stars">
                    ${starsHtml}
                </div>
            </div>
            <p class="review-item-text">${r.text}</p>
        `;
        listWrapper.appendChild(card);
    });
}

function setupReviewSubmission() {
    let ratingInputVal = 5; // Default stars
    
    const starBtns = document.querySelectorAll("#star-rating-input .star-btn");
    starBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const val = parseInt(btn.getAttribute("data-star"));
            ratingInputVal = val;
            
            // Highlight selected stars and preceding ones
            starBtns.forEach((b, idx) => {
                if (idx < val) {
                    b.classList.add("active");
                } else {
                    b.classList.remove("active");
                }
            });
        });
    });
    
    // Submit review click trigger
    document.getElementById("submit-review-btn").addEventListener("click", () => {
        const authorEl = document.getElementById("review-author");
        const textEl = document.getElementById("review-text");
        
        const author = authorEl.value.trim();
        const text = textEl.value.trim();
        
        if (author.length === 0 || text.length === 0) {
            return; // HTML5 standard required validation handles this, but safe fallback
        }
        
        // Save comment in state
        if (!State.customReviews[State.selectedRecipeId]) {
            State.customReviews[State.selectedRecipeId] = [];
        }
        
        const newReview = {
            author: author,
            rating: ratingInputVal,
            date: new Date().toISOString().split('T')[0],
            text: text
        };
        
        State.customReviews[State.selectedRecipeId].unshift(newReview); // Add to beginning of session list
        
        // Clear forms
        authorEl.value = "";
        textEl.value = "";
        
        // Reset stars display
        ratingInputVal = 5;
        starBtns.forEach(b => b.classList.add("active"));
        
        // Re-render comments list and cards
        renderReviewsList();
        
        // Show success notification
        showToast("感謝您的品鑑！評論已成功公開發表。");
    });
}

// 16. CUSTOM INTERACTIVE MODALS FOR CONTACT, VIP, CHEF, PRIVACY
function setupCustomModals() {
    // Triggers mapping
    const triggers = [
        { id: "nav-contact-trigger", target: "contact-modal" },
        { id: "footer-contact-link", target: "contact-modal" },
        { id: "footer-vip-link", target: "vip-modal" },
        { id: "footer-chef-link", target: "chef-modal" },
        { id: "footer-privacy-link", target: "privacy-modal" }
    ];

    // Cache original modal body HTML content to reset them on reopen
    const modalResets = {
        "contact-modal": {
            containerId: "contact-content-area",
            html: document.getElementById("contact-content-area") ? document.getElementById("contact-content-area").innerHTML : ""
        },
        "vip-modal": {
            containerId: "vip-body-content",
            html: document.getElementById("vip-body-content") ? document.getElementById("vip-body-content").innerHTML : ""
        },
        "chef-modal": {
            containerId: "chef-body-content",
            html: document.getElementById("chef-body-content") ? document.getElementById("chef-body-content").innerHTML : ""
        }
    };

    // Bind triggers to open modals
    triggers.forEach(t => {
        const el = document.getElementById(t.id);
        if (el) {
            el.addEventListener("click", (e) => {
                e.preventDefault();
                // Reset modal content if applicable
                if (modalResets[t.target]) {
                    const container = document.getElementById(modalResets[t.target].containerId);
                    if (container) {
                        container.innerHTML = modalResets[t.target].html;
                    }
                }
                
                // Re-bind actions every time we open/reset
                bindModalInnerActions(t.target);
                
                // Show modal
                const modalEl = document.getElementById(t.target);
                if (modalEl) {
                    modalEl.classList.add("active");
                }
            });
        }
    });

    // Close buttons logic
    document.querySelectorAll(".modal-close-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            const modalId = btn.getAttribute("data-modal");
            const modalEl = document.getElementById(modalId);
            if (modalEl) {
                modalEl.classList.remove("active");
            }
        });
    });

    // Close on background overlay click
    const modalOverlays = document.querySelectorAll(".guided-modal");
    modalOverlays.forEach(overlay => {
        overlay.addEventListener("click", (e) => {
            if (e.target === overlay) {
                overlay.classList.remove("active");
            }
        });
    });

    // Tab switching for Privacy Modal
    const privacyModal = document.getElementById("privacy-modal");
    if (privacyModal) {
        const tabBtns = privacyModal.querySelectorAll(".tab-btn");
        tabBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                const targetTab = btn.getAttribute("data-tab");
                
                tabBtns.forEach(b => b.classList.remove("active"));
                btn.classList.add("active");
                
                privacyModal.querySelectorAll(".tab-content").forEach(content => {
                    if (content.id === targetTab) {
                        content.classList.add("active");
                    } else {
                        content.classList.remove("active");
                    }
                });
            });
        });
    }

    // Run initial bindings
    bindModalInnerActions("contact-modal");
    bindModalInnerActions("vip-modal");
    bindModalInnerActions("chef-modal");

    // Helper to bind submit/click actions inside modifiable modals
    function bindModalInnerActions(modalId) {
        if (modalId === "contact-modal") {
            const form = document.getElementById("contact-form");
            if (form) {
                form.addEventListener("submit", (e) => {
                    e.preventDefault();
                    const submitBtn = document.getElementById("contact-submit-btn");
                    if (submitBtn) {
                        submitBtn.disabled = true;
                        submitBtn.textContent = "傳送中...";
                    }
                    
                    setTimeout(() => {
                        const contentEl = document.getElementById("contact-content-area");
                        if (contentEl) {
                            contentEl.innerHTML = `
                                <div class="modal-success-state" style="grid-column: span 2;">
                                    <div class="success-icon-box">
                                        <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    </div>
                                    <h4>聯絡留言送出成功</h4>
                                    <p>感謝您的來信。我們的客席服務專員已收到您的訊息，我們將於 24 小時內與您取得聯繫。</p>
                                    <button class="btn btn-secondary modal-close-btn" data-modal="contact-modal" style="padding: 0.6rem 2rem;">關閉視窗</button>
                                </div>
                            `;
                            // Re-bind the close button inside the success view
                            contentEl.querySelector(".modal-close-btn").addEventListener("click", () => {
                                document.getElementById("contact-modal").classList.remove("active");
                            });
                        }
                        showToast("聯絡留言傳送成功！");
                    }, 1200);
                });
            }
        } else if (modalId === "chef-modal") {
            const form = document.getElementById("chef-form");
            if (form) {
                form.addEventListener("submit", (e) => {
                    e.preventDefault();
                    const submitBtn = document.getElementById("chef-submit-btn");
                    if (submitBtn) {
                        submitBtn.disabled = true;
                        submitBtn.textContent = "提案送出中...";
                    }
                    
                    setTimeout(() => {
                        const contentEl = document.getElementById("chef-body-content");
                        if (contentEl) {
                            contentEl.innerHTML = `
                                <div class="modal-success-state">
                                    <div class="success-icon-box">
                                        <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    </div>
                                    <h4>主廚提案送出成功</h4>
                                    <p>感謝您的合作提案！「食光之境」聯名企劃專員將於 2-3 個工作天內，仔細閱讀您的意向書並致信回覆。</p>
                                    <button class="btn btn-secondary modal-close-btn" data-modal="chef-modal" style="padding: 0.6rem 2rem;">關閉視窗</button>
                                </div>
                            `;
                            contentEl.querySelector(".modal-close-btn").addEventListener("click", () => {
                                document.getElementById("chef-modal").classList.remove("active");
                            });
                        }
                        showToast("主廚提案已遞交！");
                    }, 1200);
                });
            }
        } else if (modalId === "vip-modal") {
            const applyBtn = document.getElementById("vip-apply-btn");
            if (applyBtn) {
                applyBtn.addEventListener("click", () => {
                    const contentEl = document.getElementById("vip-body-content");
                    if (contentEl) {
                        contentEl.innerHTML = `
                            <p style="text-align: center; color: var(--text-secondary); margin-bottom: 2rem;">
                                請填寫您的聯絡電話，我們將指派一對一專屬 VIP 顧問致電為您說明會籍禮遇。
                            </p>
                            <form class="contact-form" id="vip-apply-form" style="max-width: 450px; margin: 0 auto;">
                                <div class="form-group">
                                    <label for="vip-phone">您的聯絡電話 *</label>
                                    <input type="tel" id="vip-phone" placeholder="0912-345-678" required>
                                </div>
                                <div class="form-group" style="margin-top: 0.8rem;">
                                    <label for="vip-time">方便接聽電話的時間</label>
                                    <select id="vip-time">
                                        <option value="anytime">隨時皆可</option>
                                        <option value="morning">上午 (09:00 - 12:00)</option>
                                        <option value="afternoon">下午 (12:00 - 18:00)</option>
                                        <option value="evening">晚上 (18:00 - 21:00)</option>
                                    </select>
                                </div>
                                <button type="submit" class="btn btn-primary" id="vip-submit-btn" style="margin-top: 1.5rem; width: 100%;">遞交會籍申請</button>
                            </form>
                        `;
                        
                        // Bind submit inside VIP form
                        const vipForm = document.getElementById("vip-apply-form");
                        if (vipForm) {
                            vipForm.addEventListener("submit", (e) => {
                                e.preventDefault();
                                const submitBtn = document.getElementById("vip-submit-btn");
                                if (submitBtn) {
                                    submitBtn.disabled = true;
                                    submitBtn.textContent = "遞交申請中...";
                                }
                                
                                setTimeout(() => {
                                    contentEl.innerHTML = `
                                        <div class="modal-success-state">
                                            <div class="success-icon-box" style="border-color: var(--accent-gold); box-shadow: 0 0 20px rgba(var(--accent-gold-rgb), 0.25);">
                                                <svg viewBox="0 0 24 24" style="stroke: var(--accent-gold);"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                            </div>
                                            <h4 style="color: var(--accent-gold);">會籍申請已受理</h4>
                                            <p>您的專屬會籍禮遇申請已遞交，專員將於您選擇的時段致電，為您量身規劃尊榮服務計畫。</p>
                                            <button class="btn btn-secondary modal-close-btn" data-modal="vip-modal" style="padding: 0.6rem 2rem;">關閉視窗</button>
                                        </div>
                                    `;
                                    contentEl.querySelector(".modal-close-btn").addEventListener("click", () => {
                                        document.getElementById("vip-modal").classList.remove("active");
                                    });
                                    showToast("VIP 會籍申請已受理！");
                                }, 1200);
                            });
                        }
                    }
                });
            }
        }
    }
}


/* ========================================================================== 
   17. THEMEALDB API INTEGRATION - 快速載入 + 點擊後完整資料 + 繁中翻譯
   ========================================================================== */
const THEMEALDB_CONFIG = {
    baseUrl: "https://www.themealdb.com/api/json/v1/1",
    categories: ["Seafood", "Beef", "Chicken", "Pork", "Vegetarian", "Dessert"],
    maxRecipes: 48,
    perCategoryLimit: 8,
    summaryCacheKey: "gourmet-haven-mealdb-summary-v9",
    detailCachePrefix: "gourmet-haven-mealdb-detail-v9-",
    translationCachePrefix: "gourmet-haven-zh-tw-v9-"
};

const TRANSLATION_CONFIG = {
    enabled: true,
    target: "zh-TW",
    source: "en",
    // 使用免金鑰 MyMemory 做示範。正式作品建議改成自己的後端/Serverless 串 Azure Translator，避免前端暴露金鑰。
    provider: "mymemory"
};

async function loadTheMealDBRecipes() {
    if (State.mealDbLoading || State.mealDbLoaded) return;
    State.mealDbLoading = true;

    try {
        console.log("TheMealDB：快速載入食譜卡片...");

        const cachedSummaries = readJsonCache(THEMEALDB_CONFIG.summaryCacheKey);
        if (Array.isArray(cachedSummaries) && cachedSummaries.length > 0) {
            pushMealDBRecipes(cachedSummaries);
            State.mealDbLoaded = true;
            State.mealDbLoading = false;
            renderRecipeGrid();
            console.log(`TheMealDB：使用快取載入 ${cachedSummaries.length} 張卡片`);
            return;
        }

        const summaryMap = new Map();

        // 只抓清單，不卡首頁；完整食材/步驟等使用者點進去時再抓。
        for (const category of THEMEALDB_CONFIG.categories) {
            if (summaryMap.size >= THEMEALDB_CONFIG.maxRecipes) break;

            const res = await fetch(`${THEMEALDB_CONFIG.baseUrl}/filter.php?c=${encodeURIComponent(category)}`);
            if (!res.ok) continue;

            const data = await res.json();
            const meals = (data.meals || []).slice(0, THEMEALDB_CONFIG.perCategoryLimit);

            meals.forEach(meal => {
                if (meal && meal.idMeal && summaryMap.size < THEMEALDB_CONFIG.maxRecipes) {
                    summaryMap.set(meal.idMeal, createMealDBSummaryRecipe(meal, category));
                }
            });

            // 每抓完一個分類就重畫一次，使用者不用等全部完成。
            pushMealDBRecipes([...summaryMap.values()]);
            renderRecipeGrid();
        }

        const summaries = [...summaryMap.values()];
        writeJsonCache(THEMEALDB_CONFIG.summaryCacheKey, summaries);
        State.mealDbLoaded = true;
        renderRecipeGrid();
        showToast(`已快速載入 ${summaries.length} 道 TheMealDB 食譜；點進去會自動翻譯。`);

    } catch (error) {
        console.error("TheMealDB 卡片載入失敗：", error);
        showToast("TheMealDB 食譜載入失敗，請確認網路或使用 Live Server。");
    } finally {
        State.mealDbLoading = false;
    }
}

function pushMealDBRecipes(recipes) {
    const newRecipes = recipes.filter(recipe => !RECIPES.some(r => r.id === recipe.id));
    shuffleArrayInPlace(newRecipes);

    newRecipes.forEach(recipe => {
        const insertAt = Math.floor(Math.random() * (RECIPES.length + 1));
        RECIPES.splice(insertAt, 0, recipe);
    });
}

function createMealDBSummaryRecipe(meal, category) {
    const cachedDetail = readJsonCache(`${THEMEALDB_CONFIG.detailCachePrefix}${meal.idMeal}`);
    if (cachedDetail) return cachedDetail;

    const estimatedTimes = estimateMealDBSummaryTimes(category, meal.strMeal);
    const chineseTitle = getSmartChineseMealName(meal.strMeal || "TheMealDB 食譜", category);

    return {
        id: `mealdb-${meal.idMeal}`,
        mealDbId: meal.idMeal,
        needsMealDBDetail: true,
        title: chineseTitle,
        englishTitle: meal.strMeal || "TheMealDB Recipe",
        image: meal.strMealThumb || "images/hero_background.png",
        description: buildMealDBSummaryDescription(meal.strMeal, category),
        prepTime: estimatedTimes.prepTime,
        cookTime: estimatedTimes.cookTime,
        totalTime: estimatedTimes.totalTime,
        difficulty: estimateMealDBDifficultyFromCategory(category, meal.strMeal),
        diet: category === "Vegetarian" ? "素食" : inferMealDBDietFromCategory(category),
        servingDefault: 2,
        flavors: inferMealDBSummaryFlavorProfile(category, meal.strMeal),
        ingredients: [{ name: translateCategoryName(category), amount: 1, unit: "分類", category: "pantry" }],
        steps: [{ title: "載入完整食譜", desc: "點進詳情後會自動取得完整烹飪指導。", timeLimit: 60 }],
        reviews: [{ author: "TheMealDB", rating: 4, date: new Date().toISOString().split('T')[0], text: "外部食譜來源，點進後載入完整資料。" }],
        source: "TheMealDB"
    };
}

async function hydrateMealDBRecipe(recipeId) {
    const recipe = RECIPES.find(r => r.id === recipeId);
    if (!recipe || !recipe.needsMealDBDetail) return recipe;

    const mealDbId = recipe.mealDbId || recipe.id.replace("mealdb-", "");
    const cacheKey = `${THEMEALDB_CONFIG.detailCachePrefix}${mealDbId}`;
    const cachedDetail = readJsonCache(cacheKey);

    if (cachedDetail) {
        Object.assign(recipe, cachedDetail, { needsMealDBDetail: false });
        return recipe;
    }

    showToast("正在載入完整食材與翻譯，第一次會稍久...");

    const res = await fetch(`${THEMEALDB_CONFIG.baseUrl}/lookup.php?i=${encodeURIComponent(mealDbId)}`);
    if (!res.ok) throw new Error(`lookup failed: ${res.status}`);

    const data = await res.json();
    const meal = data.meals && data.meals[0];
    if (!meal) throw new Error("TheMealDB detail not found");

    let fullRecipe = convertMealDBFullMealToRecipe(meal);

    if (TRANSLATION_CONFIG.enabled) {
        fullRecipe = await translateMealDBRecipe(fullRecipe);
    }

    fullRecipe.needsMealDBDetail = false;
    fullRecipe.mealDbId = mealDbId;

    Object.assign(recipe, fullRecipe);
    writeJsonCache(cacheKey, fullRecipe);

    return recipe;
}

function convertMealDBFullMealToRecipe(meal) {
    const ingredients = extractMealDBIngredients(meal);
    const steps = createGuidedStepsFromMealDBInstructions(meal);
    const estimatedTimes = estimateMealDBTimes(meal, steps);

    return {
        id: `mealdb-${meal.idMeal}`,
        mealDbId: meal.idMeal,
        category: meal.strCategory || "",
        area: meal.strArea || "",
        title: getSmartChineseMealName(meal.strMeal || "TheMealDB 精選食譜", meal.strCategory),
        englishTitle: meal.strMeal || "TheMealDB Recipe",
        image: meal.strMealThumb || "images/hero_background.png",
        description: buildMealDBDescription(meal),
        prepTime: `${estimatedTimes.prep} 分鐘`,
        cookTime: `${estimatedTimes.cook} 分鐘`,
        totalTime: `${estimatedTimes.total} 分鐘`,
        difficulty: estimateMealDBDifficulty(steps, meal.strCategory),
        diet: inferMealDBDiet(meal, ingredients),
        servingDefault: 2,
        flavors: inferMealDBFlavorProfile(meal, ingredients),
        ingredients,
        steps,
        reviews: [{
            author: "TheMealDB",
            rating: 4,
            date: new Date().toISOString().split('T')[0],
            text: `完整食譜資料由 TheMealDB 匯入。分類：${meal.strCategory || "未分類"}${meal.strArea ? `，地區：${meal.strArea}` : ""}。`
        }],
        source: "TheMealDB",
        sourceUrl: meal.strSource || meal.strYoutube || "https://www.themealdb.com/"
    };
}

async function translateMealDBRecipe(recipe) {
    const translatedIngredients = await Promise.all(recipe.ingredients.map(async ing => ({
        ...ing,
        name: translateIngredientByDictionary(ing.name) || polishChineseText(await translateTextToZhTW(ing.name))
    })));

    const chineseTitle = getSmartChineseMealName(recipe.englishTitle || recipe.title, recipe.category, translatedIngredients);
    const translatedSteps = await Promise.all(recipe.steps.map(async (step, idx) => {
        const translatedDesc = polishChineseText(await translateTextToZhTW(step.desc));
        return {
            ...step,
            title: createChineseStepTitle(translatedDesc, idx),
            desc: translatedDesc
        };
    }));

    return {
        ...recipe,
        title: chineseTitle || recipe.title,
        description: buildChineseRecipeIntro({
            ...recipe,
            title: chineseTitle || recipe.title,
            ingredients: translatedIngredients
        }),
        ingredients: translatedIngredients,
        steps: translatedSteps,
        reviews: recipe.reviews.map(r => ({ ...r, text: "此食譜已由 TheMealDB 匯入，並已整理成繁體中文料理說明。" }))
    };
}

async function translateTextToZhTW(text) {
    const cleanText = String(text || "").trim();
    if (!cleanText) return cleanText;
    if (containsChinese(cleanText)) return cleanText;

    const cacheKey = `${THEMEALDB_CONFIG.translationCachePrefix}${hashString(cleanText)}`;
    const cached = localStorage.getItem(cacheKey);
    if (cached) return cached;

    try {
        // MyMemory 單次請求不適合太長文字，因此長段落先切成小段。
        const chunks = splitTextForTranslation(cleanText, 450);
        const translatedChunks = [];

        for (const chunk of chunks) {
            const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(chunk)}&langpair=${TRANSLATION_CONFIG.source}|${TRANSLATION_CONFIG.target}`;
            const res = await fetch(url);
            if (!res.ok) throw new Error(`translation failed: ${res.status}`);
            const data = await res.json();
            translatedChunks.push(data?.responseData?.translatedText || chunk);
        }

        const translated = translatedChunks.join(" ").replace(/&#39;/g, "'").replace(/&quot;/g, '"');
        localStorage.setItem(cacheKey, translated);
        return translated;
    } catch (error) {
        console.warn("翻譯失敗，保留原文：", cleanText, error);
        return cleanText;
    }
}

function splitTextForTranslation(text, maxLength) {
    const sentences = text.replace(/\s+/g, " ").split(/(?<=[.!?])\s+/).filter(Boolean);
    const chunks = [];
    let current = "";

    sentences.forEach(sentence => {
        if ((current + " " + sentence).trim().length > maxLength && current) {
            chunks.push(current.trim());
            current = sentence;
        } else {
            current = `${current} ${sentence}`.trim();
        }
    });

    if (current) chunks.push(current.trim());
    return chunks.length ? chunks : [text.slice(0, maxLength)];
}

function translateIngredientByDictionary(name) {
    const dictionary = {
        "salmon": "鮭魚", "haddock": "黑線鱈", "cod": "鱈魚", "fish": "魚", "shrimp": "蝦仁", "prawns": "明蝦", "beef": "牛肉", "chicken": "雞肉", "pork": "豬肉", "egg": "雞蛋",
        "onion": "洋蔥", "garlic": "大蒜", "tomato": "番茄", "potato": "馬鈴薯", "carrot": "胡蘿蔔", "leek": "韭蔥", "celery": "芹菜", "parsley": "巴西里", "coriander": "香菜", "basil": "羅勒", "mushroom": "蘑菇",
        "salt": "鹽", "pepper": "胡椒", "sugar": "糖", "flour": "麵粉", "butter": "奶油", "cream": "鮮奶油", "milk": "牛奶", "cheese": "起司", "olive oil": "橄欖油", "oil": "油", "water": "水",
        "lemon": "檸檬", "lime": "萊姆", "vinegar": "醋", "wine": "葡萄酒", "stock": "高湯", "broth": "高湯", "paprika": "紅椒粉", "curry powder": "咖哩粉",
        "haddock": "黑線鱈", "cod": "鱈魚", "mussels": "淡菜", "clams": "蛤蜊", "peas": "豌豆", "double cream": "高脂鮮奶油", "single cream": "鮮奶油", "plain flour": "中筋麵粉", "bay leaf": "月桂葉", "thyme": "百里香", "rosemary": "迷迭香", "ginger": "薑", "soy sauce": "醬油", "mustard": "芥末"
    };

    const key = String(name || "").trim().toLowerCase();
    return dictionary[key] || null;
}


const MEALDB_TITLE_MAP = {
    "fiskesuppe": "挪威奶油魚湯",
    "creamy norwegian fish soup": "挪威奶油魚湯",
    "fish soup": "鮮魚湯",
    "fish pie": "英式奶香魚派",
    "kedgeree": "英式咖哩燻魚飯",
    "sushi": "壽司",
    "baked salmon with fennel & tomatoes": "茴香番茄烤鮭魚",
    "recheado masala fish": "印度香料烤魚",
    "beef and mustard pie": "芥末牛肉派",
    "beef wellington": "威靈頓牛排",
    "beef bourguignon": "法式紅酒燉牛肉",
    "chicken alfredo primavera": "春蔬奶油雞肉義大利麵",
    "chicken basquaise": "巴斯克燉雞",
    "chicken handi": "印度香料燉雞",
    "pork cassoulet": "法式豬肉白豆燉鍋",
    "vegetarian chilli": "蔬食辣豆燉醬",
    "apple frangipan tart": "杏仁蘋果塔",
    "banoffee pie": "香蕉太妃派",
    "brownie": "巧克力布朗尼"
};

const TITLE_TERM_MAP = [
    ["creamy", "奶油"], ["norwegian", "挪威"], ["fish", "鮮魚"], ["soup", "湯"], ["salmon", "鮭魚"],
    ["beef", "牛肉"], ["chicken", "雞肉"], ["pork", "豬肉"], ["lamb", "羊肉"], ["seafood", "海鮮"],
    ["pie", "派"], ["curry", "咖哩"], ["spicy", "香辣"], ["roast", "烤"], ["roasted", "烤"],
    ["baked", "焗烤"], ["grilled", "炙烤"], ["fried", "香煎"], ["stew", "燉菜"], ["stewed", "燉"],
    ["rice", "飯"], ["pasta", "義大利麵"], ["noodles", "麵"], ["cake", "蛋糕"], ["tart", "塔"],
    ["chocolate", "巧克力"], ["apple", "蘋果"], ["banana", "香蕉"], ["lemon", "檸檬"], ["mustard", "芥末"],
    ["garlic", "蒜香"], ["tomato", "番茄"], ["mushroom", "蘑菇"], ["vegetarian", "蔬食"]
];

function getSmartChineseMealName(englishName, category = "", ingredients = []) {
    const raw = String(englishName || "").trim();
    const key = raw.toLowerCase().replace(/\s*\([^)]*\)\s*/g, "").trim();
    if (MEALDB_TITLE_MAP[key]) return MEALDB_TITLE_MAP[key];

    // 如果名稱有括號補充，例如 Fiskesuppe (Creamy Norwegian Fish Soup)，優先翻括號內的英文說明。
    const parenthesized = raw.match(/\(([^)]+)\)/);
    if (parenthesized) {
        const pKey = parenthesized[1].toLowerCase().trim();
        if (MEALDB_TITLE_MAP[pKey]) return MEALDB_TITLE_MAP[pKey];
        const translatedParentheses = translateTitleByTerms(parenthesized[1]);
        if (translatedParentheses && translatedParentheses !== parenthesized[1]) return translatedParentheses;
    }

    const translated = translateTitleByTerms(raw);
    if (translated && translated !== raw) return translated;

    const mainIngredient = ingredients && ingredients.length ? ingredients[0].name : translateCategoryName(category);
    return `${mainIngredient || "異國"}風味料理`;
}

function translateTitleByTerms(title) {
    let clean = String(title || "")
        .replace(/\([^)]*\)/g, "")
        .replace(/&/g, "and")
        .replace(/[^a-zA-Z\s-]/g, " ")
        .replace(/\s+/g, " ")
        .trim();

    if (!clean) return "";

    let words = clean.toLowerCase().split(/[\s-]+/).filter(Boolean);
    let result = [];

    words.forEach(word => {
        const found = TITLE_TERM_MAP.find(([en]) => en === word);
        if (found) result.push(found[1]);
    });

    result = [...new Set(result)];
    if (result.length === 0) return clean;

    // 讓中文菜名比較自然：烹調法 + 風味 + 主食材 + 類型
    const dishType = result.find(x => ["湯", "派", "飯", "義大利麵", "麵", "蛋糕", "塔", "燉菜"].includes(x));
    const proteins = result.filter(x => ["鮮魚", "鮭魚", "牛肉", "雞肉", "豬肉", "羊肉", "海鮮"].includes(x));
    const methods = result.filter(x => ["奶油", "香辣", "烤", "焗烤", "炙烤", "香煎", "燉", "咖哩", "蒜香", "番茄", "芥末", "蘑菇", "蔬食"].includes(x));
    const others = result.filter(x => !proteins.includes(x) && !methods.includes(x) && x !== dishType);

    return [...methods, ...others, ...proteins, dishType].filter(Boolean).join("");
}

function buildMealDBSummaryDescription(englishName, category) {
    const chineseName = getSmartChineseMealName(englishName, category);
    const categoryName = translateCategoryName(category);
    const style = getCategoryCookingStyle(category);
    return `${chineseName}是一道以${categoryName}為主題的異國料理，特色是${style}。點進食譜後，系統會載入完整食材、份量與逐步料理引導，並整理成繁體中文說明。`;
}

function buildChineseRecipeIntro(recipe) {
    const title = recipe.title || getSmartChineseMealName(recipe.englishTitle, recipe.category, recipe.ingredients);
    const ingredients = (recipe.ingredients || []).slice(0, 4).map(i => i.name).filter(Boolean);
    const ingredientText = ingredients.length ? ingredients.join("、") : translateCategoryName(recipe.category);
    const categoryName = translateCategoryName(recipe.category);
    const style = getCategoryCookingStyle(recipe.category);
    const time = recipe.totalTime || "約 30 分鐘";
    return `${title}是一道${categoryName}風格料理，以${ingredientText}作為主要元素，呈現${style}的風味層次。這道料理預估完成時間為${time}，適合依照頁面中的食材明細與引導式步驟一步一步完成。`;
}

function translateCategoryName(category) {
    const map = {
        Seafood: "海鮮", Beef: "牛肉", Chicken: "雞肉", Pork: "豬肉", Vegetarian: "蔬食", Dessert: "甜點",
        Lamb: "羊肉", Pasta: "義大利麵", Starter: "前菜", Side: "配菜", Vegan: "純素"
    };
    return map[category] || category || "料理";
}

function getCategoryCookingStyle(category) {
    const map = {
        Seafood: "鮮味清爽、適合煎烤或燉煮的海洋風味",
        Beef: "濃郁厚實、帶有肉汁與醬汁香氣的飽滿口感",
        Chicken: "溫和耐搭配，能吸收香料、奶油或番茄醬汁的風味",
        Pork: "油脂香氣明顯，適合慢燉、烘烤或香煎",
        Vegetarian: "蔬菜香甜與香料層次並重，口感清爽不厚重",
        Dessert: "甜香柔和，常帶有奶油、果香或烘焙香氣"
    };
    return map[category] || "具有鮮明地方特色與家常料理的溫暖口感";
}

function estimateMealDBSummaryTimes(category, name = "") {
    const lower = `${category || ""} ${name || ""}`.toLowerCase();
    const isDessert = /dessert|cake|pie|tart|pudding|brownie|bread/.test(lower);
    const isSlow = /stew|casserole|cassoulet|bourguignon|wellington|roast|braised/.test(lower);
    const isBakedRice = /arroz|rice|baked|oven|horno/.test(lower);
    const isSeafood = /seafood|fish|salmon|cod|haddock|prawn|shrimp/.test(lower);
    const isVegetarian = /vegetarian|vegan|tofu|bean|lentil/.test(lower);

    let prep = 12;
    let cook = 25;
    if (isDessert) { prep = 20; cook = 45; }
    else if (isSlow) { prep = 20; cook = 75; }
    else if (isBakedRice) { prep = 15; cook = 55; }
    else if (isSeafood) { prep = 12; cook = 20; }
    else if (isVegetarian) { prep = 12; cook = 30; }
    else if (/beef|pork|lamb/.test(lower)) { prep = 15; cook = 45; }
    else if (/chicken/.test(lower)) { prep = 15; cook = 35; }

    return {
        prepTime: `${prep} 分鐘`,
        cookTime: `${cook} 分鐘`,
        totalTime: `${prep + cook} 分鐘`
    };
}

function estimateMealDBDifficultyFromCategory(category, name = "") {
    const c = String(category || "").toLowerCase();
    const n = String(name || "").toLowerCase();
    if (c.includes("dessert") || n.includes("wellington") || n.includes("bourguignon")) return "高級";
    if (c.includes("beef") || c.includes("pork") || n.includes("pie") || n.includes("stew")) return "中級";
    return "初級";
}

function inferMealDBDietFromCategory(category) {
    if (category === "Vegetarian") return "素食";
    if (["Seafood", "Beef", "Chicken", "Pork"].includes(category)) return "低碳水";
    return "無限制";
}

function inferMealDBSummaryFlavorProfile(category, name = "") {
    const c = String(category || "").toLowerCase();
    const n = String(name || "").toLowerCase();
    if (c.includes("dessert")) return { sweet: 8, sour: 2, spicy: 1, savory: 3, texture: 7 };
    if (n.includes("curry") || n.includes("spicy") || n.includes("chilli")) return { sweet: 2, sour: 3, spicy: 8, savory: 8, texture: 6 };
    if (c.includes("seafood")) return { sweet: 2, sour: 4, spicy: 2, savory: 7, texture: 6 };
    if (c.includes("beef") || c.includes("pork")) return { sweet: 2, sour: 2, spicy: 3, savory: 9, texture: 8 };
    return { sweet: 3, sour: 3, spicy: 3, savory: 7, texture: 6 };
}

function createChineseStepTitle(desc, idx) {
    const clean = String(desc || "").replace(/^[第\d\s.、-]+步[:：]?/, "").trim();
    if (!clean) return `第 ${idx + 1} 步`;
    const first = clean.split(/[，。；：]/)[0].slice(0, 16);
    return `第 ${idx + 1} 步：${first}`;
}

function polishChineseText(text) {
    if (!text) return text;
    let output = String(text);
    const replacements = [
        [/奶油 挪威 鮮魚 湯/g, "挪威奶油魚湯"],
        [/鮮魚 湯/g, "鮮魚湯"],
        [/牛肉 派/g, "牛肉派"],
        [/雞肉 義大利麵/g, "雞肉義大利麵"],
        [/橄欖 油/g, "橄欖油"],
        [/檸檬 果汁/g, "檸檬汁"],
        [/加入/g, "加入"],
        [/攪拌/g, "攪拌"],
        [/煮/g, "煮"],
        [/服務/g, "上桌"],
        [/盤子/g, "盤中"],
        [/直到/g, "直到"],
        [/分鐘/g, "分鐘"],
        [/\s+/g, " "]
    ];
    replacements.forEach(([from, to]) => output = output.replace(from, to));
    return output.trim();
}

function extractMealDBIngredients(meal) {
    const ingredients = [];

    for (let i = 1; i <= 20; i++) {
        const name = (meal[`strIngredient${i}`] || "").trim();
        const measure = (meal[`strMeasure${i}`] || "").trim();
        if (!name) continue;

        const parsed = parseMealDBMeasure(measure);
        ingredients.push({
            name,
            amount: parsed.amount,
            unit: parsed.unit,
            category: categorizeMealDBIngredient(name)
        });
    }

    return ingredients.length ? ingredients : [{ name: "主要食材", amount: 1, unit: "份", category: "pantry" }];
}

function parseMealDBMeasure(measure) {
    if (!measure) return { amount: 1, unit: "適量" };

    const cleaned = measure.replace(/\s+/g, " ").trim();
    const fractionMap = { "¼": 0.25, "½": 0.5, "¾": 0.75, "⅓": 1 / 3, "⅔": 2 / 3 };

    const unicodeFraction = cleaned.match(/^([¼½¾⅓⅔])\s*(.*)$/);
    if (unicodeFraction) return { amount: fractionMap[unicodeFraction[1]], unit: unicodeFraction[2] || "份" };

    const mixedFraction = cleaned.match(/^(\d+)\s+(\d+)\/(\d+)\s*(.*)$/);
    if (mixedFraction) return { amount: Number(mixedFraction[1]) + Number(mixedFraction[2]) / Number(mixedFraction[3]), unit: mixedFraction[4] || "份" };

    const fraction = cleaned.match(/^(\d+)\/(\d+)\s*(.*)$/);
    if (fraction) return { amount: Number(fraction[1]) / Number(fraction[2]), unit: fraction[3] || "份" };

    const number = cleaned.match(/^(\d+(?:\.\d+)?)\s*(.*)$/);
    if (number) return { amount: Number(number[1]), unit: number[2] || "份" };

    return { amount: 1, unit: cleaned || "適量" };
}

function categorizeMealDBIngredient(name) {
    const n = name.toLowerCase();
    const protein = ["beef", "chicken", "pork", "fish", "salmon", "cod", "haddock", "tuna", "shrimp", "prawn", "egg", "lamb", "turkey", "duck", "bacon", "ham", "sausage", "tofu", "crab", "mussels", "clam"];
    const dairy = ["milk", "cream", "butter", "cheese", "yogurt", "yoghurt", "oil", "ghee"];
    const produce = ["onion", "garlic", "tomato", "potato", "carrot", "lettuce", "pepper", "chilli", "chili", "lemon", "lime", "apple", "banana", "avocado", "mushroom", "parsley", "coriander", "cilantro", "basil", "spinach", "cabbage", "ginger", "leek", "celery", "peas"];

    if (protein.some(k => n.includes(k))) return "protein";
    if (dairy.some(k => n.includes(k))) return "dairy";
    if (produce.some(k => n.includes(k))) return "produce";
    return "pantry";
}

function createGuidedStepsFromMealDBInstructions(meal) {
    const raw = (meal.strInstructionsZH || meal.strInstructions || "").trim();

    if (!raw) {
        return [{ title: "料理步驟", desc: "TheMealDB 未提供詳細步驟。", timeLimit: 120 }];
    }

    let parts = raw.split(/\r?\n+/).map(s => s.trim()).filter(Boolean);

    if (parts.length <= 1) {
        parts = raw.replace(/\s+/g, " ").split(/(?<=[。！？.!?])\s+/).map(s => s.trim()).filter(Boolean);
    }

    const merged = [];
    for (const part of parts) {
        if (merged.length > 0 && part.length < 45) {
            merged[merged.length - 1] += " " + part;
        } else {
            merged.push(part);
        }
    }

    return merged.slice(0, 14).map((desc, idx) => ({
        title: `第 ${idx + 1} 步`,
        desc,
        timeLimit: estimateMealDBStepSeconds(desc)
    }));
}

function estimateMealDBStepSeconds(desc) {
    const lower = String(desc || "").toLowerCase();

    const hourMatch = lower.match(/(\d+(?:\.\d+)?)\s*(hours|hour|hrs|hr)/);
    if (hourMatch) return Math.min(7200, Math.max(300, Math.round(Number(hourMatch[1]) * 3600)));

    const minuteMatch = lower.match(/(\d+(?:\.\d+)?)\s*(minutes|minute|mins|min)/);
    if (minuteMatch) return Math.min(2400, Math.max(60, Math.round(Number(minuteMatch[1]) * 60)));

    if (desc.length > 220) return 360;
    if (desc.length > 120) return 240;
    return 120;
}

function estimateMealDBTimes(meal, steps) {
    const name = String(meal?.strMeal || "").toLowerCase();
    const category = String(meal?.strCategory || "").toLowerCase();
    const instructions = String(meal?.strInstructions || "").toLowerCase();
    const allText = `${name} ${category} ${instructions}`;

    let explicitCookMinutes = 0;
    const minuteMatches = [...allText.matchAll(/(\d+(?:\.\d+)?)\s*(minutes|minute|mins|min)/g)];
    minuteMatches.forEach(match => explicitCookMinutes += Number(match[1]));
    const hourMatches = [...allText.matchAll(/(\d+(?:\.\d+)?)\s*(hours|hour|hrs|hr)/g)];
    hourMatches.forEach(match => explicitCookMinutes += Number(match[1]) * 60);
    if (explicitCookMinutes > 0) explicitCookMinutes = Math.min(180, Math.max(10, Math.round(explicitCookMinutes)));

    const hasSlowCook = /stew|casserole|cassoulet|bourguignon|braise|simmer|slow|roast/.test(allText);
    const hasOvenRice = /arroz|rice|baked rice|oven|horno|bake/.test(allText);
    const isDessert = /dessert|cake|pie|tart|pudding|brownie|bread/.test(allText);
    const isSeafood = /seafood|fish|salmon|cod|haddock|prawn|shrimp/.test(allText);

    let prep = 12;
    let cook = explicitCookMinutes || 25;
    if (!explicitCookMinutes) {
        if (isDessert) { prep = 20; cook = 45; }
        else if (hasSlowCook) { prep = 20; cook = 75; }
        else if (hasOvenRice) { prep = 15; cook = 55; }
        else if (isSeafood) { prep = 12; cook = 22; }
        else if (/beef|pork|lamb/.test(allText)) { prep = 15; cook = 45; }
        else if (/chicken/.test(allText)) { prep = 15; cook = 35; }
        else if (/vegetarian|vegan|tofu|bean|lentil/.test(allText)) { prep = 12; cook = 30; }
    } else {
        prep = isDessert || hasSlowCook || hasOvenRice ? 15 : 10;
    }
    return { prep, cook, total: prep + cook };
}

function estimateMealDBTotalMinutes(steps, category) {
    const estimated = Math.ceil(steps.reduce((sum, step) => sum + (step.timeLimit || 120), 0) / 60);
    const c = (category || "").toLowerCase();
    if (c.includes("dessert")) return Math.max(65, estimated);
    if (c.includes("beef") || c.includes("pork")) return Math.max(60, estimated);
    if (c.includes("side") || c.includes("starter")) return Math.max(20, estimated);
    return Math.max(35, estimated);
}

function estimateMealDBDifficulty(steps, category) {
    const c = (category || "").toLowerCase();
    if (steps.length >= 9 || c.includes("dessert")) return "高級";
    if (steps.length >= 5 || c.includes("beef") || c.includes("lamb")) return "中級";
    return "初級";
}

function inferMealDBDiet(meal, ingredients) {
    const category = (meal.strCategory || "").toLowerCase();
    const ingredientText = ingredients.map(i => i.name.toLowerCase()).join(" ");
    const hasMeat = /(beef|chicken|pork|lamb|fish|salmon|cod|haddock|tuna|shrimp|prawn|bacon|ham|sausage|duck|turkey|crab|mussels|clam)/.test(ingredientText);
    const hasFlourOrBread = /(flour|bread|pasta|spaghetti|noodle|tortilla|bun|pastry)/.test(ingredientText);

    const diets = [];
    if (!hasMeat || category.includes("vegetarian") || category.includes("vegan")) diets.push("素食");
    if (!hasFlourOrBread) diets.push("無麩質");
    if (category.includes("seafood") || category.includes("beef") || category.includes("chicken")) diets.push("低碳水");
    return diets.length ? [...new Set(diets)].join(",") : "無限制";
}

function inferMealDBFlavorProfile(meal, ingredients) {
    const text = `${meal.strMeal || ""} ${meal.strCategory || ""} ${meal.strArea || ""} ${ingredients.map(i => i.name).join(" ")}`.toLowerCase();
    return {
        sweet: /(sugar|honey|syrup|chocolate|dessert|cake|banana|apple|mango|jam)/.test(text) ? 7 : 3,
        sour: /(lemon|lime|vinegar|tomato|yoghurt|yogurt|wine)/.test(text) ? 6 : 2,
        spicy: /(chilli|chili|pepper|curry|paprika|jalapeno|cayenne)/.test(text) ? 6 : 2,
        savory: /(beef|chicken|pork|fish|salmon|cod|cheese|soy|garlic|onion|stock|broth|bacon)/.test(text) ? 8 : 5,
        texture: /(fried|crispy|crunch|nuts|bread|pastry|batter)/.test(text) ? 8 : 6
    };
}

function buildMealDBDescription(meal) {
    const area = meal.strArea ? `${meal.strArea} 風格` : "國際風格";
    const category = meal.strCategory || "料理";
    const tags = meal.strTags ? `特色標籤：${meal.strTags.replaceAll(',', '、')}。` : "";
    return `This ${category} recipe comes from TheMealDB. Area: ${area}. The full ingredient list and cooking instructions are imported and converted into guided cooking mode. ${tags}`;
}

function containsChinese(text) {
    return /[\u4e00-\u9fff]/.test(text);
}

function hashString(text) {
    let hash = 0;
    for (let i = 0; i < text.length; i++) {
        hash = ((hash << 5) - hash) + text.charCodeAt(i);
        hash |= 0;
    }
    return String(hash).replace('-', 'n');
}

function readJsonCache(key) {
    try {
        const raw = localStorage.getItem(key);
        return raw ? JSON.parse(raw) : null;
    } catch (error) {
        return null;
    }
}

function writeJsonCache(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.warn("localStorage 快取失敗：", error);
    }
}


/* ==========================================================================
   FIREBASE LOGIN + USER DATA SYNC（新增功能）
   只新增登入系統與帳號資料儲存，不改動原本食譜功能
   ========================================================================== */

// ⚠️ 請把這段換成 Firebase Console 給你的設定
// Firebase Console → 專案設定 → 一般 → 你的應用程式 → SDK 設定與配置
const FIREBASE_CONFIG = {
    apiKey: "AIzaSyAxgwT8VXGJnfHUo9t-Zp1f6iMkUQO4eCg",
    authDomain: "eat112.firebaseapp.com",
    projectId: "eat112",
    storageBucket: "eat112.firebasestorage.app",
    messagingSenderId: "903083884872",
    appId: "1:903083884872:web:f3deab0a9e69f37630f37d",
    measurementId: "G-WKMBHK0KM8"
};

const FirebaseAccount = {
    ready: false,
    app: null,
    auth: null,
    db: null,
    user: null,
    api: null
};

async function setupFirebaseAuthSystem() {
    injectFirebaseAuthPanel();
    injectFirebaseAuthStyle();

    if (!isFirebaseConfigFilled()) {
        updateFirebaseLoginStatus("請先在 app.js 貼上 Firebase 設定", false);
        console.warn("Firebase 尚未設定：請先填入 FIREBASE_CONFIG。登入與雲端儲存功能會暫停。");
        return;
    }

    try {
        const [appModule, authModule, firestoreModule] = await Promise.all([
            import("https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js"),
            import("https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js"),
            import("https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js")
        ]);

        FirebaseAccount.app = appModule.initializeApp(FIREBASE_CONFIG);
        FirebaseAccount.auth = authModule.getAuth(FirebaseAccount.app);
        FirebaseAccount.db = firestoreModule.getFirestore(FirebaseAccount.app);
        FirebaseAccount.api = {
            createUserWithEmailAndPassword: authModule.createUserWithEmailAndPassword,
            signInWithEmailAndPassword: authModule.signInWithEmailAndPassword,
            signOut: authModule.signOut,
            onAuthStateChanged: authModule.onAuthStateChanged,
            doc: firestoreModule.doc,
            getDoc: firestoreModule.getDoc,
            setDoc: firestoreModule.setDoc,
            arrayUnion: firestoreModule.arrayUnion,
            serverTimestamp: firestoreModule.serverTimestamp
        };
        FirebaseAccount.ready = true;

        bindFirebaseAuthEvents();
        FirebaseAccount.api.onAuthStateChanged(FirebaseAccount.auth, async (user) => {
            FirebaseAccount.user = user || null;
            if (user) {
                updateFirebaseLoginStatus(`已登入：${user.displayName || getUsernameFromFirebaseUser(user)}`, true);
                closeFirebaseAuthPanel();

                try {
                    await ensureFirebaseUserDocument();
                    await loadFirebaseUserData();
                } catch (firestoreError) {
                    console.warn("已登入，但 Firebase Firestore 權限或讀寫失敗：", firestoreError);
                    showToast("已登入，但雲端資料權限尚未設定");
                }
            } else {
                updateFirebaseLoginStatus("目前尚未登入", false);
            }
        });
    } catch (error) {
        console.error("Firebase 初始化失敗：", error);
        updateFirebaseLoginStatus("Firebase 初始化失敗，請看 Console", false);
    }
}

function isFirebaseConfigFilled() {
    return FIREBASE_CONFIG
        && FIREBASE_CONFIG.apiKey
        && FIREBASE_CONFIG.projectId
        && !String(FIREBASE_CONFIG.apiKey).includes("請貼上")
        && !String(FIREBASE_CONFIG.projectId).includes("請貼上");
}

function injectFirebaseAuthPanel() {
    if (document.getElementById("firebase-auth-panel")) return;

    const panel = document.createElement("section");
    panel.id = "firebase-auth-panel";
    panel.className = "firebase-auth-panel glass";
    panel.innerHTML = `
        <button id="firebase-auth-close-btn" type="button" class="firebase-auth-close-btn" aria-label="關閉登入視窗">×</button>
        <div class="firebase-auth-title">會員帳號</div>
        <div id="firebase-login-status" class="firebase-login-status">Firebase 載入中...</div>
        <input id="firebase-username" class="firebase-auth-input" type="text" placeholder="使用者名稱" autocomplete="username">
        <input id="firebase-password" class="firebase-auth-input" type="password" placeholder="密碼至少 6 位" autocomplete="current-password">
        <div class="firebase-auth-buttons">
            <button id="firebase-register-btn" type="button" class="btn btn-secondary">註冊</button>
            <button id="firebase-login-btn" type="button" class="btn btn-primary">登入</button>
            <button id="firebase-logout-btn" type="button" class="btn btn-secondary" style="display:none;">登出</button>
        </div>
        <div class="firebase-auth-note">使用者名稱登入後，食曆規劃與做過的食譜會存到你的帳號。</div>
    `;

    // 只新增一個登入浮動面板，不改原本 HTML 結構
    document.body.appendChild(panel);
}

function injectFirebaseAuthStyle() {
    if (document.getElementById("firebase-auth-style")) return;

    const style = document.createElement("style");
    style.id = "firebase-auth-style";
    style.textContent = `
        .firebase-auth-panel {
            position: fixed;
            right: 18px;
            bottom: 18px;
            z-index: 9999;
            width: min(320px, calc(100vw - 36px));
            padding: 16px;
            border-radius: 18px;
            background: var(--bg-glass, rgba(255,255,255,0.88));
            border: 1px solid var(--border-glass, rgba(255,255,255,0.35));
            box-shadow: 0 12px 32px rgba(0,0,0,0.16);
            backdrop-filter: blur(14px);
            transition: opacity 0.2s ease, transform 0.2s ease;
        }
        .firebase-auth-panel.is-hidden {
            opacity: 0;
            pointer-events: none;
            transform: translateY(12px) scale(0.98);
        }
        .firebase-auth-close-btn {
            position: absolute;
            top: 10px;
            right: 12px;
            width: 28px;
            height: 28px;
            border: none;
            border-radius: 999px;
            background: rgba(0,0,0,0.08);
            color: var(--text-primary, #222);
            font-size: 20px;
            line-height: 26px;
            cursor: pointer;
            padding: 0;
        }
        .firebase-auth-close-btn:hover {
            background: rgba(0,0,0,0.16);
        }
        .firebase-auth-title {
            font-family: var(--font-heading, inherit);
            font-weight: 700;
            margin-bottom: 8px;
            color: var(--text-primary, #222);
        }
        .firebase-login-status {
            font-size: 0.85rem;
            margin-bottom: 10px;
            color: var(--text-secondary, #666);
        }
        .firebase-login-status.is-login {
            color: #15803d;
            font-weight: 700;
        }
        .firebase-auth-input {
            width: 100%;
            margin-bottom: 8px;
            padding: 10px 12px;
            border-radius: 12px;
            border: 1px solid var(--border-glass, #ddd);
            background: var(--input-bg, rgba(255,255,255,0.85));
            color: var(--text-primary, #222);
            outline: none;
        }
        .firebase-auth-buttons {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 8px;
            margin-top: 6px;
        }
        .firebase-auth-buttons .btn {
            min-height: 38px;
            padding: 8px 10px;
            font-size: 0.85rem;
        }
        .firebase-auth-note {
            margin-top: 10px;
            font-size: 0.78rem;
            color: var(--text-muted, #888);
            line-height: 1.5;
        }
        .favorite-recipe-btn {
            position: absolute;
            top: 12px;
            left: 12px;
            z-index: 5;
            width: 38px;
            height: 38px;
            border: none;
            border-radius: 999px;
            background: rgba(0, 0, 0, 0.46);
            color: #fff;
            font-size: 1.35rem;
            line-height: 1;
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 6px 18px rgba(0,0,0,0.2);
            transition: transform 0.18s ease, background 0.18s ease, color 0.18s ease;
        }
        .favorite-recipe-btn:hover {
            transform: scale(1.08);
            background: rgba(0, 0, 0, 0.62);
        }
        .favorite-recipe-btn.active {
            background: rgba(220, 38, 38, 0.92);
            color: #fff;
        }
        #btn-detail-favorite.active {
            background: #dc2626;
            color: #fff;
        }
        @media (max-width: 640px) {
            .firebase-auth-panel {
                left: 12px;
                right: 12px;
                bottom: 12px;
                width: auto;
            }
        }
    `;
    document.head.appendChild(style);
}

function bindFirebaseAuthEvents() {
    const registerBtn = document.getElementById("firebase-register-btn");
    const loginBtn = document.getElementById("firebase-login-btn");
    const logoutBtn = document.getElementById("firebase-logout-btn");
    const closeBtn = document.getElementById("firebase-auth-close-btn");

    registerBtn?.addEventListener("click", firebaseRegister);
    loginBtn?.addEventListener("click", firebaseLogin);
    logoutBtn?.addEventListener("click", firebaseLogout);
    closeBtn?.addEventListener("click", closeFirebaseAuthPanel);
}

function closeFirebaseAuthPanel() {
    const panel = document.getElementById("firebase-auth-panel");
    if (!panel) return;
    panel.classList.add("is-hidden");
}

function openFirebaseAuthPanel() {
    const panel = document.getElementById("firebase-auth-panel");
    if (!panel) return;
    panel.classList.remove("is-hidden");
}

async function firebaseRegister() {
    if (!FirebaseAccount.ready) return alert("Firebase 尚未初始化完成");

    const username = getFirebaseUsernameInput();
    const password = document.getElementById("firebase-password")?.value.trim();

    if (!username || !password) return alert("請輸入使用者名稱和密碼");
    if (!isValidUsername(username)) return alert("使用者名稱只能使用英文、數字、底線，長度 3～20 個字");
    if (password.length < 6) return alert("密碼至少需要 6 位數");

    try {
        const loginEmail = usernameToFirebaseEmail(username);
        const result = await FirebaseAccount.api.createUserWithEmailAndPassword(FirebaseAccount.auth, loginEmail, password);

        // Auth 註冊成功就先視為成功：先提示、先關閉視窗
        showToast("註冊成功，已登入");
        closeFirebaseAuthPanel();

        // Firestore 建立使用者資料可能會因 Rules 尚未設定而 permission-denied。
        // 這裡改成不阻擋註冊，只提醒需要設定 Firestore Rules。
        try {
            const { doc, setDoc, serverTimestamp } = FirebaseAccount.api;
            await setDoc(doc(FirebaseAccount.db, "users", result.user.uid), {
                username,
                loginType: "username",
                createdAt: serverTimestamp(),
                updatedAt: serverTimestamp()
            }, { merge: true });
        } catch (firestoreError) {
            console.warn("註冊成功，但 Firestore 使用者資料建立失敗：", firestoreError);
            showToast("註冊成功，但雲端資料權限尚未設定");
        }
    } catch (error) {
        console.error(error);
        alert("註冊失敗：" + getFirebaseAuthErrorText(error.code));
    }
}

async function firebaseLogin() {
    if (!FirebaseAccount.ready) return alert("Firebase 尚未初始化完成");

    const username = getFirebaseUsernameInput();
    const password = document.getElementById("firebase-password")?.value.trim();

    if (!username || !password) return alert("請輸入使用者名稱和密碼");
    if (!isValidUsername(username)) return alert("使用者名稱只能使用英文、數字、底線，長度 3～20 個字");

    try {
        const loginEmail = usernameToFirebaseEmail(username);
        await FirebaseAccount.api.signInWithEmailAndPassword(FirebaseAccount.auth, loginEmail, password);
        showToast("登入成功");
        closeFirebaseAuthPanel();
    } catch (error) {
        console.error(error);
        alert("登入失敗：" + getFirebaseAuthErrorText(error.code));
    }
}

async function firebaseLogout() {
    if (!FirebaseAccount.ready) return;

    try {
        await FirebaseAccount.api.signOut(FirebaseAccount.auth);
        showToast("已登出");
        openFirebaseAuthPanel();
    } catch (error) {
        console.error(error);
        alert("登出失敗：" + error.message);
    }
}

function updateFirebaseLoginStatus(text, isLogin) {
    const status = document.getElementById("firebase-login-status");
    const loginBtn = document.getElementById("firebase-login-btn");
    const registerBtn = document.getElementById("firebase-register-btn");
    const logoutBtn = document.getElementById("firebase-logout-btn");

    if (status) {
        status.textContent = text;
        status.classList.toggle("is-login", !!isLogin);
    }

    if (loginBtn) loginBtn.style.display = isLogin ? "none" : "";
    if (registerBtn) registerBtn.style.display = isLogin ? "none" : "";
    if (logoutBtn) logoutBtn.style.display = isLogin ? "" : "none";

    // 同步頁面上方/外部的登入按鈕：登入後會變成「登出」
    syncGlobalAuthButtons(isLogin ? FirebaseAccount.user : null);
}

// 同步 HTML 裡可能存在的登入/登出按鈕
function syncGlobalAuthButtons(user) {
    const isLogin = !!user;
    const username = isLogin ? getUsernameFromFirebaseUser(user) : "";

    const loginBtn = document.getElementById("login-btn");
    const logoutBtn = document.getElementById("logout-btn");
    const userNameEls = document.querySelectorAll("#username-display, .username-display, [data-auth-username]");

    userNameEls.forEach(el => {
        el.textContent = isLogin ? username : "";
        el.style.display = isLogin ? "" : "none";
    });

    // 情況 A：只有一顆 #login-btn，登入後直接改成「登出」
    if (loginBtn && !logoutBtn) {
        loginBtn.textContent = isLogin ? "登出" : "登入";
        loginBtn.setAttribute("aria-label", isLogin ? "登出" : "登入");
        loginBtn.title = isLogin ? "登出" : "登入";
        loginBtn.style.display = "";
        loginBtn.onclick = (event) => {
            event.preventDefault();
            if (FirebaseAccount.user) {
                firebaseLogout();
            } else {
                openFirebaseAuthPanel();
            }
        };
        return;
    }

    // 情況 B：有 #login-btn 和 #logout-btn 兩顆，登入後隱藏登入、顯示登出
    if (loginBtn) {
        loginBtn.textContent = "登入";
        loginBtn.style.display = isLogin ? "none" : "inline-flex";
        loginBtn.onclick = (event) => {
            event.preventDefault();
            openFirebaseAuthPanel();
        };
    }

    if (logoutBtn) {
        logoutBtn.textContent = "登出";
        logoutBtn.style.display = isLogin ? "inline-flex" : "none";
        logoutBtn.onclick = (event) => {
            event.preventDefault();
            firebaseLogout();
        };
    }
}

async function ensureFirebaseUserDocument() {
    if (!FirebaseAccount.user) return;

    try {
        const { doc, setDoc, serverTimestamp } = FirebaseAccount.api;
        const userRef = doc(FirebaseAccount.db, "users", FirebaseAccount.user.uid);

        await setDoc(userRef, {
            username: getUsernameFromFirebaseUser(FirebaseAccount.user),
            loginType: "username",
            updatedAt: serverTimestamp()
        }, { merge: true });
    } catch (error) {
        console.warn("建立 / 更新使用者文件失敗，通常是 Firestore Rules 尚未允許登入者寫入：", error);
        throw error;
    }
}

async function loadFirebaseUserData() {
    if (!FirebaseAccount.user) return;

    try {
        const { doc, getDoc } = FirebaseAccount.api;
        const userRef = doc(FirebaseAccount.db, "users", FirebaseAccount.user.uid);
        const snap = await getDoc(userRef);

        const data = snap.exists() ? snap.data() : {};

        // 登入後，把 Firebase 裡的食曆載回原本 State.weeklyPlan
        if (data.weeklyPlan && typeof data.weeklyPlan === "object") {
            State.weeklyPlan = {
                Mon: null,
                Tue: null,
                Wed: null,
                Thu: null,
                Fri: null,
                Sat: null,
                Sun: null,
                ...data.weeklyPlan
            };
            if (typeof renderMealPlanner === "function") renderMealPlanner();
        }

        // 登入後，把 Firebase 裡的最愛食譜預先載入，並把畫面上的愛心按鈕標成已收藏
        const favoriteItems = data.favoriteRecipes || data.favorites || [];
        State.favoriteRecipeIds = normalizeFirebaseFavoriteIds(favoriteItems);
        State.favoriteRecipesData = normalizeFirebaseRecipeDataMap(favoriteItems);
        updateAllFavoriteButtons();

        // 登入後，也把資料庫中曾經點開過的食譜預先載入到本機狀態
        State.viewedRecipesData = normalizeFirebaseRecipeDataMap(data.viewedRecipes || []);

        // 如果使用者在登入前已點開過食譜，登入後補傳到 Firebase
        if (State.viewedRecipesData.size > 0) {
            saveFirebaseViewedRecipes({ silent: true });
        }

        showToast("已載入此帳號的食曆、最愛與瀏覽紀錄");
    } catch (error) {
        console.error("讀取 Firebase 使用者資料失敗：", error);
    }
}

async function saveFirebaseMealPlan() {
    if (!FirebaseAccount.ready || !FirebaseAccount.user) {
        console.warn("尚未登入 Firebase，食曆只會保留在目前畫面，不會同步到帳號。");
        return;
    }

    try {
        const { doc, setDoc, serverTimestamp } = FirebaseAccount.api;
        const userRef = doc(FirebaseAccount.db, "users", FirebaseAccount.user.uid);

        await setDoc(userRef, {
            weeklyPlan: State.weeklyPlan,
            updatedAt: serverTimestamp()
        }, { merge: true });
    } catch (error) {
        console.error("儲存食曆到 Firebase 失敗：", error);
        alert("食曆雲端儲存失敗：" + error.message);
    }
}

function injectFirebaseCompletedRecipeButton(recipe) {
    const plannerBtn = document.getElementById("btn-add-planner");
    const actionRow = plannerBtn?.parentElement;

    if (!actionRow || document.getElementById("btn-mark-completed")) return;

    const doneBtn = document.createElement("button");
    doneBtn.className = "btn btn-secondary";
    doneBtn.id = "btn-mark-completed";
    doneBtn.type = "button";
    doneBtn.textContent = "標記完成";
    doneBtn.addEventListener("click", () => saveFirebaseCompletedRecipe(recipe));

    actionRow.appendChild(doneBtn);
}


function isRecipeFavorite(recipeId) {
    return State.favoriteRecipeIds instanceof Set && State.favoriteRecipeIds.has(recipeId);
}

function normalizeFirebaseFavoriteIds(rawFavorites) {
    const ids = new Set();

    if (!Array.isArray(rawFavorites)) return ids;

    rawFavorites.forEach(item => {
        if (typeof item === "string") {
            ids.add(item);
        } else if (item && typeof item === "object") {
            const id = item.recipeId || item.id;
            if (id) ids.add(id);
        }
    });

    return ids;
}

function getRecipeFavoritePayload(recipe) {
    return {
        recipeId: recipe.id,
        title: recipe.title,
        englishTitle: recipe.englishTitle || "",
        image: recipe.image || "",
        totalTime: recipe.totalTime || "",
        difficulty: recipe.difficulty || "",
        savedAt: new Date().toISOString()
    };
}

async function toggleFirebaseFavoriteRecipe(recipe) {
    if (!FirebaseAccount.ready) {
        alert("Firebase 尚未初始化完成，請稍後再試");
        return;
    }

    if (!FirebaseAccount.user) {
        alert("請先登入，才能收藏最愛食譜");
        openFirebaseAuthPanel();
        return;
    }

    const wasFavorite = isRecipeFavorite(recipe.id);

    if (wasFavorite) {
        State.favoriteRecipeIds.delete(recipe.id);
        State.favoriteRecipesData.delete(recipe.id);
    } else {
        State.favoriteRecipeIds.add(recipe.id);
        State.favoriteRecipesData.set(recipe.id, getRecipeFirebasePayload(recipe, { savedAt: new Date().toISOString() }));
    }

    updateAllFavoriteButtons();

    try {
        await saveFirebaseFavoriteRecipes();
        showToast(wasFavorite ? `已從最愛移除「${recipe.title}」` : `已加入最愛「${recipe.title}」`);
    } catch (error) {
        // 如果雲端儲存失敗，回復畫面狀態，避免使用者誤會已存成功
        if (wasFavorite) {
            State.favoriteRecipeIds.add(recipe.id);
            State.favoriteRecipesData.set(recipe.id, getRecipeFirebasePayload(recipe, { savedAt: new Date().toISOString() }));
        } else {
            State.favoriteRecipeIds.delete(recipe.id);
            State.favoriteRecipesData.delete(recipe.id);
        }
        updateAllFavoriteButtons();

        console.error("儲存最愛食譜失敗：", error);
        alert("儲存最愛食譜失敗：請確認 Firestore Rules 是否允許登入者寫入自己的 users/{uid}");
    }
}

async function saveFirebaseFavoriteRecipes() {
    if (!FirebaseAccount.ready || !FirebaseAccount.user) return;

    const { doc, setDoc, serverTimestamp } = FirebaseAccount.api;
    const userRef = doc(FirebaseAccount.db, "users", FirebaseAccount.user.uid);

    const favoriteRecipes = Array.from(State.favoriteRecipeIds)
        .map(recipeId => {
            const recipe = RECIPES.find(r => r.id === recipeId);
            const saved = State.favoriteRecipesData?.get(recipeId);
            return recipe
                ? getRecipeFirebasePayload(recipe, { savedAt: saved?.savedAt || new Date().toISOString() })
                : (saved || { recipeId, savedAt: new Date().toISOString() });
        });

    await setDoc(userRef, {
        favoriteRecipes,
        updatedAt: serverTimestamp()
    }, { merge: true });
}

function updateAllFavoriteButtons() {
    document.querySelectorAll(".favorite-recipe-btn").forEach(btn => {
        const recipeId = btn.id.replace("btn-favorite-", "");
        updateSingleFavoriteButton(btn, recipeId);
    });

    const detailBtn = document.getElementById("btn-detail-favorite");
    if (detailBtn && State.selectedRecipeId) {
        updateSingleFavoriteButton(detailBtn, State.selectedRecipeId, true);
    }

    if (document.getElementById("favorites-modal")?.classList.contains("active")) {
        renderFavoritesList();
    }
}

function updateSingleFavoriteButton(btn, recipeId, isDetailButton = false) {
    const active = isRecipeFavorite(recipeId);
    btn.classList.toggle("active", active);
    btn.setAttribute("aria-pressed", active ? "true" : "false");

    if (isDetailButton) {
        btn.textContent = active ? "♥ 已收藏" : "♡ 加入最愛";
    } else {
        btn.textContent = active ? "♥" : "♡";
    }
}

function injectFirebaseFavoriteDetailButton(recipe) {
    const plannerBtn = document.getElementById("btn-add-planner");
    const actionRow = plannerBtn?.parentElement;

    if (!actionRow || document.getElementById("btn-detail-favorite")) return;

    const favoriteBtn = document.createElement("button");
    favoriteBtn.className = `btn btn-secondary ${isRecipeFavorite(recipe.id) ? "active" : ""}`;
    favoriteBtn.id = "btn-detail-favorite";
    favoriteBtn.type = "button";
    favoriteBtn.textContent = isRecipeFavorite(recipe.id) ? "♥ 已收藏" : "♡ 加入最愛";
    favoriteBtn.addEventListener("click", () => toggleFirebaseFavoriteRecipe(recipe));

    actionRow.appendChild(favoriteBtn);
}


function normalizeFirebaseRecipeDataMap(rawRecipes) {
    const map = new Map();

    if (!Array.isArray(rawRecipes)) return map;

    rawRecipes.forEach(item => {
        if (!item) return;
        if (typeof item === "string") {
            map.set(item, { recipeId: item });
            return;
        }
        if (typeof item === "object") {
            const id = item.recipeId || item.id;
            if (id) map.set(id, item);
        }
    });

    return map;
}

function getRecipeFirebasePayload(recipe, extra = {}) {
    if (!recipe) return null;

    return {
        recipeId: recipe.id,
        title: recipe.title || "",
        englishTitle: recipe.englishTitle || "",
        image: recipe.image || "",
        description: recipe.description || "",
        prepTime: recipe.prepTime || "",
        cookTime: recipe.cookTime || "",
        totalTime: recipe.totalTime || "",
        difficulty: recipe.difficulty || "",
        diet: recipe.diet || "",
        servingDefault: recipe.servingDefault || 1,
        ingredients: Array.isArray(recipe.ingredients) ? recipe.ingredients : [],
        steps: Array.isArray(recipe.steps) ? recipe.steps : [],
        flavors: recipe.flavors || {},
        ...extra
    };
}

function injectFavoritesFeatureStyle() {
    if (document.getElementById("favorites-feature-style")) return;

    const style = document.createElement("style");
    style.id = "favorites-feature-style";
    style.textContent = `
        .my-favorites-top-btn {
            width: auto !important;
            min-width: 96px;
            padding: 0 14px !important;
            border-radius: 999px !important;
            font-weight: 800;
            letter-spacing: 0.03em;
        }
        .my-favorites-top-btn-text {
            font-size: 0.92rem;
            white-space: nowrap;
        }
        .favorites-modal {
            position: fixed;
            inset: 0;
            z-index: 10000;
            display: none;
            align-items: center;
            justify-content: center;
            padding: 24px;
            background: rgba(0,0,0,0.55);
            backdrop-filter: blur(10px);
        }
        .favorites-modal.active {
            display: flex;
        }
        .favorites-modal-card {
            width: min(980px, 96vw);
            max-height: 84vh;
            overflow: auto;
            border-radius: 24px;
            padding: 24px;
            background: var(--bg-glass, rgba(255,255,255,0.92));
            border: 1px solid var(--border-glass, rgba(255,255,255,0.35));
            box-shadow: 0 18px 60px rgba(0,0,0,0.32);
        }
        .favorites-modal-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 16px;
            margin-bottom: 18px;
        }
        .favorites-modal-title {
            margin: 0;
            font-family: var(--font-heading, inherit);
            color: var(--text-primary, #222);
        }
        .favorites-modal-close {
            width: 36px;
            height: 36px;
            border: 0;
            border-radius: 999px;
            cursor: pointer;
            background: rgba(0,0,0,0.12);
            color: var(--text-primary, #222);
            font-size: 24px;
            line-height: 1;
        }
        .favorites-list {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
            gap: 16px;
        }
        .favorite-list-card {
            overflow: hidden;
            border-radius: 18px;
            background: rgba(255,255,255,0.08);
            border: 1px solid var(--border-glass, rgba(255,255,255,0.25));
            cursor: pointer;
        }
        .favorite-list-card img {
            width: 100%;
            height: 130px;
            object-fit: cover;
            display: block;
        }
        .favorite-list-card-body {
            padding: 12px;
        }
        .favorite-list-card-title {
            margin: 0 0 8px;
            color: var(--text-primary, #222);
            font-weight: 800;
            line-height: 1.35;
        }
        .favorite-list-card-meta {
            color: var(--text-muted, #777);
            font-size: 0.82rem;
            line-height: 1.5;
        }
        .favorites-empty {
            padding: 36px;
            text-align: center;
            color: var(--text-muted, #777);
            border: 1px dashed var(--border-glass, rgba(255,255,255,0.35));
            border-radius: 18px;
        }
    `;
    document.head.appendChild(style);
}

function openFavoritesModal() {
    injectFavoritesFeatureStyle();

    let modal = document.getElementById("favorites-modal");
    if (!modal) {
        modal = document.createElement("div");
        modal.id = "favorites-modal";
        modal.className = "favorites-modal";
        modal.innerHTML = `
            <div class="favorites-modal-card">
                <div class="favorites-modal-header">
                    <h2 class="favorites-modal-title">我的最愛</h2>
                    <button type="button" class="favorites-modal-close" id="favorites-modal-close" aria-label="關閉我的最愛">×</button>
                </div>
                <div id="favorites-list" class="favorites-list"></div>
            </div>
        `;
        document.body.appendChild(modal);

        document.getElementById("favorites-modal-close")?.addEventListener("click", closeFavoritesModal);
        modal.addEventListener("click", (e) => {
            if (e.target === modal) closeFavoritesModal();
        });
    }

    renderFavoritesList();
    modal.classList.add("active");
}

function closeFavoritesModal() {
    document.getElementById("favorites-modal")?.classList.remove("active");
}

function renderFavoritesList() {
    const list = document.getElementById("favorites-list");
    if (!list) return;

    const favoriteIds = Array.from(State.favoriteRecipeIds || []);

    if (favoriteIds.length === 0) {
        list.className = "favorites-empty";
        list.innerHTML = "目前還沒有收藏食譜。回到食譜市集，點愛心就會加入我的最愛。";
        return;
    }

    list.className = "favorites-list";
    list.innerHTML = favoriteIds.map(recipeId => {
        const localRecipe = RECIPES.find(r => r.id === recipeId);
        const savedRecipe = State.favoriteRecipesData?.get(recipeId) || {};
        const recipe = localRecipe || savedRecipe;
        const title = recipe.title || recipeId;
        const image = recipe.image || "";
        const meta = [recipe.totalTime, recipe.difficulty, recipe.diet].filter(Boolean).join("｜") || "已收藏食譜";

        return `
            <article class="favorite-list-card" data-recipe-id="${recipeId}">
                ${image ? `<img src="${image}" alt="${title}">` : ""}
                <div class="favorite-list-card-body">
                    <h3 class="favorite-list-card-title">${title}</h3>
                    <div class="favorite-list-card-meta">${meta}</div>
                </div>
            </article>
        `;
    }).join("");

    list.querySelectorAll(".favorite-list-card").forEach(card => {
        card.addEventListener("click", () => {
            const recipeId = card.getAttribute("data-recipe-id");
            closeFavoritesModal();
            if (RECIPES.some(r => r.id === recipeId)) {
                showRecipeDetail(recipeId);
            } else {
                alert("這筆最愛資料存在資料庫，但目前食譜列表還沒有載入完整內容。請稍後再試或重新整理頁面。");
            }
        });
    });
}

async function saveFirebaseViewedRecipe(recipeId) {
    const recipe = RECIPES.find(r => r.id === recipeId);
    if (!recipe) return;

    const payload = getRecipeFirebasePayload(recipe, {
        viewedAt: new Date().toISOString()
    });

    State.viewedRecipesData.set(recipe.id, payload);

    if (!FirebaseAccount.ready || !FirebaseAccount.user) {
        // 尚未登入時先記在本機狀態，登入後 loadFirebaseUserData 會補傳
        return;
    }

    try {
        await saveFirebaseViewedRecipes({ silent: true });
    } catch (error) {
        console.error("同步點開過的食譜到 Firebase 失敗：", error);
    }
}

async function saveFirebaseViewedRecipes(options = {}) {
    if (!FirebaseAccount.ready || !FirebaseAccount.user) return;

    const { doc, setDoc, serverTimestamp } = FirebaseAccount.api;
    const userRef = doc(FirebaseAccount.db, "users", FirebaseAccount.user.uid);
    const viewedRecipes = Array.from(State.viewedRecipesData.values());

    await setDoc(userRef, {
        viewedRecipes,
        updatedAt: serverTimestamp()
    }, { merge: true });

    if (!options.silent) showToast("已同步點開過的食譜到 Firebase");
}

async function saveFirebaseCompletedRecipe(recipe) {
    if (!FirebaseAccount.ready) {
        alert("Firebase 尚未初始化完成，請確認 app.js 已填入 Firebase 設定");
        return;
    }

    if (!FirebaseAccount.user) {
        alert("請先登入，才能把做過的食譜存到帳號");
        return;
    }

    try {
        const { doc, setDoc, arrayUnion, serverTimestamp } = FirebaseAccount.api;
        const userRef = doc(FirebaseAccount.db, "users", FirebaseAccount.user.uid);

        await setDoc(userRef, {
            completedRecipes: arrayUnion({
                recipeId: recipe.id,
                title: recipe.title,
                englishTitle: recipe.englishTitle || "",
                image: recipe.image || "",
                servings: State.selectedServing || recipe.servingDefault || 1,
                completedAt: new Date().toISOString()
            }),
            updatedAt: serverTimestamp()
        }, { merge: true });

        showToast(`已將「${recipe.title}」存到做過的食譜`);
    } catch (error) {
        console.error("儲存做過的食譜失敗：", error);
        alert("儲存做過的食譜失敗：" + error.message);
    }
}


function getFirebaseUsernameInput() {
    return (document.getElementById("firebase-username")?.value || "")
        .trim()
        .toLowerCase();
}

function isValidUsername(username) {
    return /^[a-zA-Z0-9_]{3,20}$/.test(username);
}

function usernameToFirebaseEmail(username) {
    // Firebase Authentication 的 Email/Password 需要 email 格式。
    // 這裡把使用者名稱轉成系統內部 email，畫面上仍然是「使用者名稱登入」。
    return `${username.toLowerCase()}@gourmethaven.local`;
}

function getUsernameFromFirebaseUser(user) {
    if (!user) return "使用者";
    const email = user.email || "";
    return email.includes("@gourmethaven.local") ? email.split("@")[0] : email;
}

function getFirebaseAuthErrorText(code) {
    switch (code) {
        case "auth/email-already-in-use":
            return "這個使用者名稱已經註冊過了";
        case "auth/invalid-email":
            return "使用者名稱格式不正確";
        case "auth/weak-password":
            return "密碼太簡單，至少需要 6 位數";
        case "auth/invalid-credential":
            return "帳號或密碼錯誤";
        case "auth/user-not-found":
            return "找不到這個使用者名稱";
        case "auth/wrong-password":
            return "密碼錯誤";
        case "permission-denied":
            return "Firestore 權限被拒，請到 Firebase Rules 開放登入者讀寫自己的 users/{uid}";
        default:
            return code || "發生未知錯誤";
    }
}
/* ==========================================
   登入狀態與功能管理系統
   ========================================== */

// Firebase v10 模組版不會產生全域 auth 變數。
// 所以不要使用 auth.signOut() / auth.onAuthStateChanged()；
// 本專案統一使用 FirebaseAccount 與 setupFirebaseAuthSystem() 管理登入狀態。
document.addEventListener("DOMContentLoaded", () => {
    // 頁面剛載入先顯示未登入狀態；Firebase 初始化完成後會自動更新。
    if (typeof syncGlobalAuthButtons === "function") {
        syncGlobalAuthButtons(null);
    }
});
