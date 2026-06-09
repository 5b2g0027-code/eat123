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
        id: "steak",
        title: "尊爵松露熟成肋眼牛排",
        englishTitle: "Majestic Truffle Ribeye Steak",
        image: "images/steak_dish.png",
        description: "特選安格斯濕式熟成肋眼牛排，經過高溫炭烤與梅納反應，外焦內嫩。搭配義大利頂級黑松露醬調製的松露奶油，融合新鮮迷迭香與油封蒜球，散發無可比擬的尊貴氣息。",
        prepTime: "15 分鐘",
        cookTime: "10 分鐘",
        totalTime: "25 分鐘",
        difficulty: "高級",
        diet: "低碳水,無麩質",
        servingDefault: 2,
        flavors: { sweet: 1, sour: 2, spicy: 3, savory: 9, texture: 8 },
        ingredients: [
            { name: "熟成肋眼牛排", amount: 450, unit: "g", category: "protein" },
            { name: "黑松露醬", amount: 15, unit: "g", category: "pantry" },
            { name: "無鹽奶油", amount: 25, unit: "g", category: "dairy" },
            { name: "新鮮迷迭香", amount: 3, unit: "支", category: "produce" },
            { name: "大蒜瓣", amount: 5, unit: "瓣", category: "produce" },
            { name: "粗海鹽", amount: 1, unit: "適量", category: "pantry" },
            { name: "黑胡椒粒", amount: 1, unit: "適量", category: "pantry" }
        ],
        steps: [
            { title: "牛排回溫與調味", desc: "牛排在室溫下提前退冰並回溫至少 20 分鐘（關鍵步驟），用紙巾擦乾表面多餘水氣。均勻撒上大量粗海鹽與現磨黑胡椒粒醃製。", timeLimit: 900 },
            { title: "高溫熱鍋鎖水", desc: "鑄鐵鍋燒至極高溫且微微冒白煙，倒入高發煙點油，放入牛排大火煎 2 分鐘不翻面以形成金黃焦脆的梅納殼，隨後翻面繼續大火煎 1.5 分鐘。", timeLimit: 210 },
            { title: "奶油香草澆淋 (Basting)", desc: "轉中小火，迅速在鍋中丟入奶油、拍扁的大蒜瓣與新鮮迷迭香。將鐵鍋稍微傾斜，用湯匙不斷舀起融化的香草奶油澆淋在牛排表面，持續淋洗 1.5 分鐘（達三分熟）。", timeLimit: 90 },
            { title: "出鍋靜置與松露塗抹", desc: "將牛排移至溫熱的木板上，表面均勻塗抹一層奢華的黑松露醬，用錫箔紙蓬鬆覆蓋靜置 5 分鐘，使牛排內部纖維放鬆、肉汁回流，隨後切片上桌。", timeLimit: 300 }
        ],
        reviews: [
            { author: "饕客 蔡先生", rating: 5, date: "2026-05-28", text: "松露奶油與熟成牛肉的旨味完美結合，外殼焦香、內裡粉嫩，簡真是感官的極致享受！" },
            { author: "小食光", rating: 5, date: "2026-05-30", text: "按照澆淋步驟做出來的牛排非常軟嫩，迷迭香氣非常入味，大推！" }
        ]
    },
    {
        id: "tofu",
        title: "秘製楓糖芝麻豆腐",
        englishTitle: "Charred Sesame Maple Tofu",
        image: "images/tofu_dish.png",
        description: "有機板豆腐經過重壓脫水，慢煎至四面金黃酥脆，裹上秘製楓糖醬油汁，微甜甘醇。搭配香烤青江菜與烤白芝麻，展現極簡而層次豐富的蔬食新美學。",
        prepTime: "10 分鐘",
        cookTime: "12 分鐘",
        totalTime: "22 分鐘",
        difficulty: "初級",
        diet: "素食",
        servingDefault: 2,
        flavors: { sweet: 6, sour: 2, spicy: 2, savory: 7, texture: 6 },
        ingredients: [
            { name: "有機板豆腐", amount: 350, unit: "g", category: "protein" },
            { name: "純楓糖漿", amount: 20, unit: "ml", category: "pantry" },
            { name: "日式減鹽醬油", amount: 30, unit: "ml", category: "pantry" },
            { name: "熟白芝麻", amount: 10, unit: "g", category: "pantry" },
            { name: "新鮮青江菜", amount: 4, unit: "株", category: "produce" },
            { name: "特級芝麻油", amount: 15, unit: "ml", category: "dairy" },
            { name: "乾紅辣椒絲", amount: 2, unit: "g", category: "pantry" }
        ],
        steps: [
            { title: "豆腐重壓去水與切塊", desc: "將板豆腐包上乾淨廚房紙巾，上面壓一塊重砧板 15 分鐘以逼出水分（能使煎出來的豆腐更扎實酥脆）。去水後切成 2.5 公分的立方形狀。", timeLimit: 900 },
            { title: "特調楓糖照燒醬汁", desc: "在精緻小碗中混合純楓糖漿、日式醬油、芝麻油、一湯匙冷水與少許白胡椒粉，攪拌均勻至完全融合備用。", timeLimit: 120 },
            { title: "香煎豆腐與配菜", desc: "不沾鍋中倒入芝麻油中火熱鍋，將豆腐塊下鍋慢煎，每面煎約 1.5 分鐘直到表面呈金黃結殼狀（共約 6 分鐘）。煎至中途時放入對半切開的青江菜同煎。", timeLimit: 360 },
            { title: "裹汁收稠與點綴", desc: "將調好的楓糖醬汁倒入鍋中，轉大火快速翻炒，讓醬汁均勻裹覆在每塊豆腐上並收汁至焦糖微稠。盛盤後撒上現烤白芝麻與紅辣椒絲即成。", timeLimit: 120 }
        ],
        reviews: [
            { author: "Veggielover", rating: 4, date: "2026-05-25", text: "豆腐煎得非常脆！楓糖的微甜和醬油的鹹味配在一起有一種日式照燒的高級感，非常下飯。" },
            { author: "健康廚娘", rating: 5, date: "2026-05-29", text: "做法出乎意料的簡單，但味道非常有層次。青江菜裹著楓糖芝麻醬汁非常好吃。" }
        ]
    },
    {
        id: "avocado",
        title: "黃金比例酪梨鮮蝦塔",
        englishTitle: "Stuffed Golden Avocado Salad",
        image: "images/avocado_dish.png",
        description: "嚴選熟度恰到好處的酪梨，去籽去皮後切丁，拌入溫水汆燙的新鮮白蝦仁、多汁櫻桃小番茄與新鮮香菜。以鮮榨檸檬汁與特級初榨橄欖油調和，清新高雅，富含健康油脂。",
        prepTime: "15 分鐘",
        cookTime: "0 分鐘",
        totalTime: "15 分鐘",
        difficulty: "初級",
        diet: "低碳水,無麩質",
        servingDefault: 2,
        flavors: { sweet: 3, sour: 6, spicy: 1, savory: 5, texture: 5 },
        ingredients: [
            { name: "熟酪梨", amount: 2, unit: "顆", category: "produce" },
            { name: "熟白蝦仁", amount: 120, unit: "g", category: "protein" },
            { name: "櫻桃番茄", amount: 80, unit: "g", category: "produce" },
            { name: "水晶紅洋蔥", amount: 20, unit: "g", category: "produce" },
            { name: "新鮮香菜", amount: 5, unit: "g", category: "produce" },
            { name: "鮮榨青檸汁", amount: 15, unit: "ml", category: "pantry" },
            { name: "特級初榨橄欖油", amount: 10, unit: "ml", category: "dairy" },
            { name: "岩鹽與黑胡椒", amount: 1, unit: "少許", category: "pantry" }
        ],
        steps: [
            { title: "酪梨處理與切丁", desc: "酪梨沿縱向切對半，輕輕扭轉分開，去籽。用鐵湯匙小心沿邊緣挖出果肉（保留完好外殼做為容器），並將果肉切成 1 公分小丁。", timeLimit: 300 },
            { title: "食材汆燙與蔬菜切割", desc: "若非熟蝦仁，先將蝦仁用滾水快速汆燙 1 分鐘，隨後撈起過冰水以保持彈牙，切小丁。櫻桃小番茄切四等分，紅洋蔥與香菜切極細碎。", timeLimit: 240 },
            { title: "調味拌和與乳化", desc: "將酪梨丁、蝦丁、番茄、紅洋蔥、香菜放入精緻攪拌碗中。淋上青檸汁（能防酪梨氧化變黑並提味）、橄欖油、岩鹽與新鮮黑胡椒粉，輕柔翻拌均勻。", timeLimit: 120 },
            { title: "填裝盛塔與奢華裝飾", desc: "將拌好的酪梨鮮蝦沙拉小心填回酪梨空殼內，堆疊出飽滿的小塔形。頂端點綴幾片新鮮香菜葉與幾粒黑胡椒，精美冷盤即刻呈現。", timeLimit: 60 }
        ],
        reviews: [
            { author: "健身達人 Cindy", rating: 5, date: "2026-05-24", text: "超級清爽！低碳減脂的聖品，酪梨的奶香跟番茄的微酸、洋蔥的爽脆完全咬合在一起，口感太舒服了。" },
            { author: "小吃貨", rating: 4, date: "2026-06-02", text: "夏天吃這個超消暑。酪梨殼當餐盤非常優雅，發到 IG 上朋友們都說看起來超奢華！" }
        ]
    },
    // --- 20 NEW RECIPES ---
    {
        id: "salmon_baked",
        title: "法式香草奶油焗鮭魚",
        englishTitle: "French Herb Butter Baked Salmon",
        image: "images/salmon_dish.png",
        description: "鮮嫩的鮭魚排塗抹上滿滿的法式香草奶油，放入烤箱焗烤出淡淡焦香。口感多汁，帶有迷人的百里香與法式香蒜氣息。",
        prepTime: "10 分鐘",
        cookTime: "15 分鐘",
        totalTime: "25 分鐘",
        difficulty: "中級",
        diet: "低碳水,無麩質",
        servingDefault: 2,
        flavors: { sweet: 2, sour: 3, spicy: 1, savory: 8, texture: 6 },
        ingredients: [
            { name: "鮭魚排", amount: 400, unit: "g", category: "protein" },
            { name: "無鹽奶油", amount: 30, unit: "g", category: "dairy" },
            { name: "大蒜碎", amount: 10, unit: "g", category: "produce" },
            { name: "新鮮百里香", amount: 5, unit: "g", category: "produce" },
            { name: "檸檬汁", amount: 10, unit: "ml", category: "pantry" }
        ],
        steps: [
            { title: "抹醬調配", desc: "將軟化的奶油與大蒜碎、百里香葉、檸檬汁及少許鹽混合成香蒜草本奶油醬。", timeLimit: 180 },
            { title: "均勻塗抹", desc: "鮭魚排擦乾後放置在鋪有錫箔紙的烤盤上，將調好的香草奶油均勻塗抹在鮭魚表面。", timeLimit: 120 },
            { title: "高溫焗烤", desc: "放入預熱至 200°C 的烤箱中烤 12-15 分鐘，直到表面金黃且鮭魚肉呈現粉紅色熟透即可。", timeLimit: 900 }
        ],
        reviews: [
            { author: "Chef Pierre", rating: 5, date: "2026-06-01", text: "大蒜和百里香奶油的味道焗烤過後香氣驚人，鮭魚十分鮮嫩！" }
        ]
    },
    {
        id: "salmon_teriyaki",
        title: "日式照燒蜜汁鮭魚",
        englishTitle: "Japanese Teriyaki Honey Salmon",
        image: "images/salmon_dish.png",
        description: "甘甜微鹹的日式照燒醬油配上天然蜂蜜，包裹著香煎至酥脆的鮭魚排，撒上滿滿熟白芝麻，是一道極致下飯的日式家庭奢華料理。",
        prepTime: "5 分鐘",
        cookTime: "10 分鐘",
        totalTime: "15 分鐘",
        difficulty: "初級",
        diet: "無麩質",
        servingDefault: 2,
        flavors: { sweet: 7, sour: 1, spicy: 1, savory: 8, texture: 6 },
        ingredients: [
            { name: "鮭魚排", amount: 350, unit: "g", category: "protein" },
            { name: "日式醬油", amount: 40, unit: "ml", category: "pantry" },
            { name: "天然蜂蜜", amount: 20, unit: "ml", category: "pantry" },
            { name: "味醂", amount: 20, unit: "ml", category: "pantry" },
            { name: "熟白芝麻", amount: 5, unit: "g", category: "pantry" }
        ],
        steps: [
            { title: "醬汁調製", desc: "將日式醬油、蜂蜜與味醂在小碗中混合攪拌，直至蜂蜜完全溶解。", timeLimit: 120 },
            { title: "雙面煎製", desc: "熱油鍋，放入鮭魚排雙面各煎 3 分鐘至金黃結殼後，倒出鍋中多餘油分。", timeLimit: 360 },
            { title: "裹醬收汁", desc: "倒入照燒醬汁，小火慢煮並用湯匙將醬汁反覆澆淋在鮭魚上，直至醬汁濃稠收乾，撒上白芝麻裝飾。", timeLimit: 180 }
        ],
        reviews: [
            { author: "美代子", rating: 5, date: "2026-06-02", text: "非常甜美，蜂蜜的香氣讓照燒醬變得很高級，孩子非常喜歡吃！" }
        ]
    },
    {
        id: "salmon_steamed",
        title: "泰式酸辣檸檬蒸鮭魚",
        englishTitle: "Thai Spicy Lemon Steamed Salmon",
        image: "images/salmon_dish.png",
        description: "泰式宮廷風味的清蒸料理。以泰國青檸、朝天椒、魚露與蒜末調製出香氣四溢的酸辣汁，清蒸厚切鮭魚，酸辣開胃，清爽無負擔。",
        prepTime: "10 分鐘",
        cookTime: "12 分鐘",
        totalTime: "22 分鐘",
        difficulty: "初級",
        diet: "低碳水,無麩質",
        servingDefault: 2,
        flavors: { sweet: 3, sour: 8, spicy: 7, savory: 7, texture: 5 },
        ingredients: [
            { name: "鮭魚排", amount: 400, unit: "g", category: "protein" },
            { name: "鮮榨青檸汁", amount: 30, unit: "ml", category: "pantry" },
            { name: "魚露", amount: 20, unit: "ml", category: "pantry" },
            { name: "朝天椒末", amount: 5, unit: "g", category: "produce" },
            { name: "大蒜碎", amount: 15, unit: "g", category: "produce" }
        ],
        steps: [
            { title: "調配泰式酸辣汁", desc: "在碗中將檸檬汁、魚露、大蒜碎、朝天椒末與一茶匙糖混合均勻。", timeLimit: 180 },
            { title: "澆汁準備", desc: "將鮭魚排擺放在蒸盤中，把調好的泰式酸辣汁均勻淋在鮭魚排四周與表面。", timeLimit: 120 },
            { title: "大火清蒸", desc: "水燒開後放入蒸鍋，用大火蒸 10-12 分鐘至熟，出蒸鍋撒上新鮮香菜葉裝飾即可。", timeLimit: 720 }
        ],
        reviews: [
            { author: "泰料控", rating: 5, date: "2026-05-29", text: "超級夠味！酸度非常提神，辣味恰到好處，把鮭魚肥美的油脂感中和得非常好。" }
        ]
    },
    {
        id: "salmon_pesto",
        title: "意式羅勒青醬拌鮭魚排",
        englishTitle: "Italian Basil Pesto Salmon",
        image: "images/salmon_dish.png",
        description: "香煎金黃的鮭魚排淋上以新鮮羅勒葉、松子、帕馬森起司與特級橄欖油製成的手作青醬，散發深邃的義大利鄉村堅果香氣。",
        prepTime: "8 分鐘",
        cookTime: "10 分鐘",
        totalTime: "18 分鐘",
        difficulty: "初級",
        diet: "低碳水,無麩質",
        servingDefault: 2,
        flavors: { sweet: 1, sour: 2, spicy: 1, savory: 8, texture: 7 },
        ingredients: [
            { name: "鮭魚排", amount: 400, unit: "g", category: "protein" },
            { name: "手作羅勒青醬", amount: 40, unit: "g", category: "pantry" },
            { name: "小番茄", amount: 60, unit: "g", category: "produce" },
            { name: "特級初榨橄欖油", amount: 10, unit: "ml", category: "dairy" }
        ],
        steps: [
            { title: "香煎鮭魚", desc: "鮭魚排均勻抹上鹽與胡椒，熱鍋下橄欖油，雙面煎至金黃（約 6-8 分鐘）熟透盛盤。", timeLimit: 480 },
            { title: "熱起青醬配菜", desc: "原鍋加入小番茄稍微拌煎至外皮微縮，關火，利用餘溫加入青醬快速拌勻以防止羅勒變黑。", timeLimit: 120 },
            { title: "澆汁擺盤", desc: "將熱番茄青醬澆淋在煎好的鮭魚排上，撒上些許松子裝飾即成。", timeLimit: 120 }
        ],
        reviews: [
            { author: "Milano E.", rating: 4, date: "2026-05-27", text: "手作青醬非常香，松子和起司的奶香跟鮭魚特別搭！" }
        ]
    },
    {
        id: "salmon_avocado_tower",
        title: "北歐煙燻鮭魚酪梨塔",
        englishTitle: "Nordic Smoked Salmon Avocado Tower",
        image: "images/salmon_dish.png",
        description: "頂級北歐冷燻鮭魚薄片，搭配滑順綿密的熟酪梨泥與微辣的水晶紅洋蔥碎，層層堆疊成精緻的法式塔狀，口感如絲綢般柔滑細緻。",
        prepTime: "12 分鐘",
        cookTime: "0 分鐘",
        totalTime: "12 分鐘",
        difficulty: "中級",
        diet: "低碳水,無麩質",
        servingDefault: 2,
        flavors: { sweet: 2, sour: 4, spicy: 2, savory: 7, texture: 8 },
        ingredients: [
            { name: "燻鮭魚片", amount: 150, unit: "g", category: "protein" },
            { name: "熟酪梨", amount: 1.5, unit: "顆", category: "produce" },
            { name: "水晶紅洋蔥", amount: 20, unit: "g", category: "produce" },
            { name: "鮮榨青檸汁", amount: 10, unit: "ml", category: "pantry" },
            { name: "刺山柑 (Capers)", amount: 5, unit: "g", category: "pantry" }
        ],
        steps: [
            { title: "酪梨泥製作", desc: "將酪梨肉取出壓成粗泥，加入檸檬汁、鹽、黑胡椒及少許紅洋蔥碎拌勻防止變色。", timeLimit: 300 },
            { title: "鮭魚切丁", desc: "將煙燻鮭魚片切成 0.8 公分的小丁，與刺山柑拌在一起增加風味層次。", timeLimit: 240 },
            { title: "圓模塑形", desc: "在盤子中央放置圓形慕斯模，底層鋪滿酪梨泥，上層填入煙燻鮭魚丁，輕輕壓實後脫模即可。", timeLimit: 180 }
        ],
        reviews: [
            { author: "Sophia", rating: 5, date: "2026-06-03", text: "這是一道完美的宴會前菜！視覺上非常精緻，煙燻味和酪梨的油脂結合得恰到好處。" }
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
        id: "beef_yakiniku",
        title: "黑胡椒蒜片和牛燒肉",
        englishTitle: "Garlic Black Pepper Wagyu Yakiniku",
        image: "images/steak_dish.png",
        description: "嚴選頂級澳洲和牛薄片，在高溫鐵板上快速炙烤鎖住油脂，搭配炸至酥脆的金黃蒜片與研磨黑胡椒粒，油花豐盈，香氣噴鼻。",
        prepTime: "10 分鐘",
        cookTime: "5 分鐘",
        totalTime: "15 分鐘",
        difficulty: "中級",
        diet: "低碳水",
        servingDefault: 2,
        flavors: { sweet: 2, sour: 1, spicy: 4, savory: 9, texture: 7 },
        ingredients: [
            { name: "和牛燒肉片", amount: 300, unit: "g", category: "protein" },
            { name: "大蒜瓣", amount: 6, unit: "瓣", category: "produce" },
            { name: "黑胡椒粒", amount: 5, unit: "g", category: "pantry" },
            { name: "岩鹽", amount: 1, unit: "少許", category: "pantry" },
            { name: "特級芝麻油", amount: 10, unit: "ml", category: "dairy" }
        ],
        steps: [
            { title: "製作黃金蒜片", desc: "大蒜切極薄片，平底鍋倒入少許油，小火慢慢將蒜片煎至金黃酥脆後撈出，濾乾多餘油分備用。", timeLimit: 300 },
            { title: "高溫炙烤和牛", desc: "大火熱鐵鍋，下芝麻油，將和牛肉片平鋪入鍋中，單面快速煎 30 秒，翻面再煎 15 秒（達5分熟）。", timeLimit: 120 },
            { title: "調味點綴", desc: "撒上岩鹽、現磨粗黑胡椒粒，盛盤後鋪上香脆大蒜片即可享用。", timeLimit: 60 }
        ],
        reviews: [
            { author: "Yuki", rating: 5, date: "2026-06-01", text: "和牛油花在嘴裡化開，配上焦香的蒜片和黑胡椒，簡直太棒了！做法也超快。" }
        ]
    },
    {
        id: "beef_tenderloin",
        title: "法式勃艮第蒜香牛柳",
        englishTitle: "French Garlic Butter Beef Tenderloin",
        image: "images/steak_dish.png",
        description: "精選極嫩牛菲力切丁，以大火快煎鎖住肉汁，加入濃郁法式蒜香奶油與歐芹碎快速翻炒，是一道口感軟嫩、奶香濃郁的經典法式熱小炒。",
        prepTime: "10 分鐘",
        cookTime: "8 分鐘",
        totalTime: "18 分鐘",
        difficulty: "中級",
        diet: "低碳水,無麩質",
        servingDefault: 2,
        flavors: { sweet: 1, sour: 1, spicy: 2, savory: 9, texture: 8 },
        ingredients: [
            { name: "牛菲力肉", amount: 350, unit: "g", category: "protein" },
            { name: "無鹽奶油", amount: 30, unit: "g", category: "dairy" },
            { name: "大蒜碎", amount: 15, unit: "g", category: "produce" },
            { name: "新鮮歐芹碎", amount: 5, unit: "g", category: "produce" }
        ],
        steps: [
            { title: "切塊與醃製", desc: "牛菲力切成 2.5 公分方塊，加入少許鹽、胡椒與橄欖油醃製 5 分鐘。", timeLimit: 300 },
            { title: "高溫煎製鎖水", desc: "平底鍋大火燒熱，放入牛肉丁快速煎 2-3 分鐘至四面微焦，倒出多餘油脂並將火轉小。", timeLimit: 180 },
            { title: "奶油蒜香翻炒", desc: "加入奶油、大蒜碎及歐芹碎，快速翻炒 1 分鐘，讓融化的蒜香奶油均勻包裹牛肉粒即可出鍋。", timeLimit: 60 }
        ],
        reviews: [
            { author: "老饕路易", rating: 5, date: "2026-06-02", text: "牛柳丁非常軟嫩！大蒜奶油醬汁濃郁到可以拿來沾法棍麵包吃。" }
        ]
    },
    {
        id: "beef_sukiyaki",
        title: "日式壽喜燒肥牛鍋",
        englishTitle: "Japanese Sukiyaki Beef Pot",
        image: "images/steak_dish.png",
        description: "以柴魚高湯、日式醬油與砂糖熬製出甘甜的壽喜燒醬汁。燙煮雪花牛肉片、有機豆腐、大白菜與香菇，沾以新鮮無菌蛋液，口感溫潤滑順。",
        prepTime: "15 分鐘",
        cookTime: "15 分鐘",
        totalTime: "30 分鐘",
        difficulty: "初級",
        diet: "無限制",
        servingDefault: 2,
        flavors: { sweet: 6, sour: 1, spicy: 1, savory: 8, texture: 6 },
        ingredients: [
            { name: "雪花牛肉片", amount: 300, unit: "g", category: "protein" },
            { name: "日式醬油", amount: 60, unit: "ml", category: "pantry" },
            { name: "有機板豆腐", amount: 150, unit: "g", category: "protein" },
            { name: "大白菜", amount: 200, unit: "g", category: "produce" },
            { name: "新鮮無菌蛋", amount: 2, unit: "個", category: "protein" }
        ],
        steps: [
            { title: "熬製壽喜燒醬汁", desc: "將日式醬油、味醂、米酒與砂糖以 3:2:2:1 的黃金比例與少許高湯混合煮沸備用。", timeLimit: 300 },
            { title: "煎豆腐與配菜", desc: "在淺鐵鍋中倒入少許油，將板豆腐塊兩面煎至微焦，擺入大白菜、香菇及蔥段。", timeLimit: 300 },
            { title: "淋汁涮牛肉", desc: "倒入醬汁大火煮滾，隨後放入肥牛肉片輕輕涮煮至粉紅色，沾上打散的蛋液即可食用。", timeLimit: 300 }
        ],
        reviews: [
            { author: "櫻花妹", rating: 5, date: "2026-05-26", text: "湯頭甜鹹適中，牛肉沾生蛋液真的超級滑嫩，非常正宗的關東風味！" }
        ]
    },
    {
        id: "beef_spicy",
        title: "川香乾煸麻辣牛肉絲",
        englishTitle: "Sichuan Spicy Dry-Fried Shredded Beef",
        image: "images/steak_dish.png",
        description: "經典川菜。牛肉絲經過慢火煸乾水分，加入四川郫縣豆瓣醬、大紅袍花椒與乾辣椒段爆炒，口感酥香有嚼勁，香辣過癮。",
        prepTime: "15 分鐘",
        cookTime: "10 分鐘",
        totalTime: "25 分鐘",
        difficulty: "高級",
        diet: "低碳水",
        servingDefault: 2,
        flavors: { sweet: 2, sour: 1, spicy: 9, savory: 8, texture: 7 },
        ingredients: [
            { name: "牛菲力肉", amount: 300, unit: "g", category: "protein" },
            { name: "乾紅辣椒絲", amount: 15, unit: "g", category: "pantry" },
            { name: "花椒粒", amount: 5, unit: "g", category: "pantry" },
            { name: "薑絲", amount: 10, unit: "g", category: "produce" },
            { name: "特級芝麻油", amount: 10, unit: "ml", category: "dairy" }
        ],
        steps: [
            { title: "切絲醃製", desc: "牛肉切成長細絲，用少許醬油、料酒稍微抓醃 10 分鐘。", timeLimit: 600 },
            { title: "慢火乾煸", desc: "鍋熱油，下牛肉絲中火不停翻炒煸炒 5-6 分鐘，直到水分收乾、肉絲呈深褐色金黃邊緣。", timeLimit: 360 },
            { title: "麻辣爆炒", desc: "下薑絲、乾辣椒段、花椒粒及一勺豆瓣醬大火快速爆炒 2 分鐘，淋上芝麻油即可出鍋。", timeLimit: 120 }
        ],
        reviews: [
            { author: "無辣不歡", rating: 5, date: "2026-06-02", text: "麻辣味非常透徹，肉絲乾香有嚼勁，是非常棒的下酒菜！" }
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
        id: "tofu_salted_egg",
        title: "金沙咸蛋黃焗豆腐",
        englishTitle: "Crispy Salted Egg Yolk Tofu",
        image: "images/tofu_dish.png",
        description: "嫩豆腐裹上薄薄太白粉煎至外酥內嫩，再放入以小火煸炒至起沙、鹹香濃郁的鹹蛋黃金沙醬中均勻焗裹，外層酥沙、內裡爆漿。",
        prepTime: "10 分鐘",
        cookTime: "12 分鐘",
        totalTime: "22 分鐘",
        difficulty: "初級",
        diet: "素食",
        servingDefault: 2,
        flavors: { sweet: 2, sour: 1, spicy: 1, savory: 8, texture: 7 },
        ingredients: [
            { name: "有機板豆腐", amount: 350, unit: "g", category: "protein" },
            { name: "鹹鴨蛋黃", amount: 3, unit: "個", category: "protein" },
            { name: "無鹽奶油", amount: 15, unit: "g", category: "dairy" },
            { name: "太白粉", amount: 30, unit: "g", category: "pantry" },
            { name: "蔥花", amount: 10, unit: "g", category: "produce" }
        ],
        steps: [
            { title: "豆腐裹粉煎炸", desc: "豆腐切方塊，均勻沾上一層薄薄的太白粉。鍋中多倒油，煎炸至豆腐表面形成酥脆的硬殼，盛出備用。", timeLimit: 360 },
            { title: "金沙炒沙", desc: "鹹蛋黃先蒸熟壓碎。原鍋熱奶油，下鹹蛋黃末小火慢炒 2 分鐘，直至蛋黃起細密泡沫（起沙）。", timeLimit: 180 },
            { title: "均勻焗裹", desc: "倒入煎好的豆腐快速翻拌，讓金沙醬均勻裹在每塊豆腐上，撒上蔥花即可出鍋。", timeLimit: 120 }
        ],
        reviews: [
            { author: "鹹蛋黃狂熱者", rating: 5, date: "2026-06-02", text: "金沙炒得很成功，沙沙的口感包裹著超嫩的豆腐，實在是太美味了！" }
        ]
    },
    {
        id: "tofu_tomato",
        title: "意式番茄羅勒燉豆腐",
        englishTitle: "Italian Tomato Basil Tofu Stew",
        image: "images/tofu_dish.png",
        description: "以義大利進口去皮聖馬扎諾番茄與新鮮羅勒葉慢熬出酸甜醇厚的紅醬，燉煮嫩豆腐塊，番茄清香與豆香融合，是一道低卡無負擔的歐風健康蔬食。",
        prepTime: "10 分鐘",
        cookTime: "15 分鐘",
        totalTime: "25 分鐘",
        difficulty: "初級",
        diet: "素食,無麩質",
        servingDefault: 2,
        flavors: { sweet: 3, sour: 6, spicy: 1, savory: 6, texture: 6 },
        ingredients: [
            { name: "有機板豆腐", amount: 300, unit: "g", category: "protein" },
            { name: "櫻桃番茄", amount: 200, unit: "g", category: "produce" },
            { name: "新鮮香菜", amount: 10, unit: "g", category: "produce" },
            { name: "特級初榨橄欖油", amount: 15, unit: "ml", category: "dairy" },
            { name: "大蒜瓣", amount: 3, unit: "瓣", category: "produce" }
        ],
        steps: [
            { title: "爆香與炒茄", desc: "鍋熱橄欖油，下拍扁的大蒜瓣炒香，隨後加入切碎的小番茄，中火炒至軟爛出沙。", timeLimit: 300 },
            { title: "燉煮豆腐", desc: "倒入 100ml 水，加入豆腐塊，撒入鹽與黑胡椒，蓋上鍋蓋中火燉煮 8-10 分鐘入味。", timeLimit: 600 },
            { title: "加入香草", desc: "起鍋前關火，拌入撕碎的新鮮香菜與羅勒，淋上一圈橄欖油即成。", timeLimit: 60 }
        ],
        reviews: [
            { author: "蔬食主義", rating: 4, date: "2026-05-24", text: "用意式番茄紅醬燉豆腐真的很新穎，番茄的酸爽滲透到豆腐裡面，非常清爽。" }
        ]
    },
    {
        id: "tofu_agedashi",
        title: "日式揚出溫泉豆腐",
        englishTitle: "Japanese Agedashi Tofu",
        image: "images/tofu_dish.png",
        description: "裹上柴魚片與太白粉的日本嫩豆腐炸至金黃，浸泡在特製的日式昆布柴魚高湯中。點綴蘿蔔泥、薑泥與蔥花，外皮吸飽湯汁，外軟內嫩。",
        prepTime: "10 分鐘",
        cookTime: "8 分鐘",
        totalTime: "18 分鐘",
        difficulty: "初級",
        diet: "素食",
        servingDefault: 2,
        flavors: { sweet: 3, sour: 2, spicy: 1, savory: 7, texture: 7 },
        ingredients: [
            { name: "有機板豆腐", amount: 300, unit: "g", category: "protein" },
            { name: "日式醬油", amount: 30, unit: "ml", category: "pantry" },
            { name: "太白粉", amount: 40, unit: "g", category: "pantry" },
            { name: "蘿蔔泥", amount: 15, unit: "g", category: "produce" },
            { name: "熟白芝麻", amount: 5, unit: "g", category: "pantry" }
        ],
        steps: [
            { title: "切塊沾粉", desc: "豆腐切成 3 公分大方塊，用紙巾輕輕吸乾表面水分，四面均勻沾滿一層薄太白粉。", timeLimit: 240 },
            { title: "高溫煎炸", desc: "油鍋燒至 180°C，將豆腐下鍋炸至外表微黃酥脆（約 3 分鐘），撈出瀝乾擺在深碗中。", timeLimit: 240 },
            { title: "調汁裝盤", desc: "在小鍋中加熱醬油、味醂與柴魚高湯調製成溫醬汁，沿碗邊倒入。豆腐頂端鋪上蘿蔔泥、薑泥、熟白芝麻即可。", timeLimit: 180 }
        ],
        reviews: [
            { author: "Kato", rating: 5, date: "2026-06-03", text: "外皮吸滿了甜甜的柴魚高湯，豆腐入口即化，蘿蔔泥很解油膩。" }
        ]
    },
    {
        id: "tofu_kimchi",
        title: "韓式泡菜海鮮豆腐鍋",
        englishTitle: "Korean Kimchi Seafood Tofu Soup",
        image: "images/tofu_dish.png",
        description: "香辣發酵的韓式泡菜與嫩豆腐在石鍋中熱氣騰騰地慢熬，加入鮮美白蝦仁、花蛤與特製韓式辣醬，鮮香酸辣，極富冬日溫暖感。",
        prepTime: "10 分鐘",
        cookTime: "15 分鐘",
        totalTime: "25 分鐘",
        difficulty: "初級",
        diet: "無限制",
        servingDefault: 2,
        flavors: { sweet: 3, sour: 5, spicy: 6, savory: 8, texture: 6 },
        ingredients: [
            { name: "有機板豆腐", amount: 250, unit: "g", category: "protein" },
            { name: "熟白蝦仁", amount: 100, unit: "g", category: "protein" },
            { name: "韓式泡菜", amount: 120, unit: "g", category: "produce" },
            { name: "日式醬油", amount: 15, unit: "ml", category: "pantry" },
            { name: "大蒜碎", amount: 10, unit: "g", category: "produce" }
        ],
        steps: [
            { title: "炒製底料", desc: "鍋熱芝麻油，下蒜碎與泡菜，中火炒 2-3 分鐘至泡菜香氣釋放。", timeLimit: 180 },
            { title: "注入高湯煨煮", desc: "倒入 400ml 水或高湯，加入一勺韓式辣醬及醬油調味。煮沸後放入豆腐塊，蓋上鍋蓋煮 8 分鐘。", timeLimit: 480 },
            { title: "下海鮮出鍋", desc: "最後放入白蝦仁與蛤蜊，大火煮 3 分鐘至海鮮熟透，撒上蔥段即可滾燙端上桌。", timeLimit: 180 }
        ],
        reviews: [
            { author: "韓料愛好者", rating: 5, date: "2026-05-28", text: "湯頭非常鮮美！泡菜的酸辣味完全滲透到嫩豆腐裡面，熱熱的喝超棒。" }
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
    },
    {
        id: "avocado_toast",
        title: "酪梨水波蛋烤酸種麵包",
        englishTitle: "Avocado Poached Egg Sourdough",
        image: "images/avocado_dish.png",
        description: "經典輕食早餐。烤至微焦香脆的天然酸種麵包，鋪上厚厚一層調味酪梨泥，頂端放上一顆完美流心的低溫水波蛋。切開後蛋黃液流出，極致療癒。",
        prepTime: "10 分鐘",
        cookTime: "5 分鐘",
        totalTime: "15 分鐘",
        difficulty: "初級",
        diet: "素食",
        servingDefault: 1,
        flavors: { sweet: 2, sour: 3, spicy: 1, savory: 6, texture: 7 },
        ingredients: [
            { name: "熟酪梨", amount: 1, unit: "顆", category: "produce" },
            { name: "新鮮無菌蛋", amount: 1, unit: "個", category: "protein" },
            { name: "鮮榨青檸汁", amount: 5, unit: "ml", category: "pantry" },
            { name: "特級初榨橄欖油", amount: 5, unit: "ml", category: "dairy" },
            { name: "酸種麵包片", amount: 1, unit: "片", category: "pantry" }
        ],
        steps: [
            { title: "烤麵包與抹酪梨", desc: "將麵包片放入烤箱烤至兩面酥脆。酪梨肉壓碎，加檸檬汁、鹽調味後均勻塗抹在麵包表面。", timeLimit: 240 },
            { title: "煮流心水波蛋", desc: "鍋中燒開水，加少許醋。水滾後轉小火，用勺子攪出漩渦，將蛋打入漩渦中心，微火煮 3 分鐘至蛋清凝固、蛋黃液仍流動，撈出控乾。", timeLimit: 240 },
            { title: "組裝完成", desc: "將水波蛋鋪在酪梨麵包頂端，撒上黑胡椒、辣椒碎與少許橄欖油即可食用。", timeLimit: 60 }
        ],
        reviews: [
            { author: "Brunch Lover", rating: 5, date: "2026-06-01", text: "流心的水波蛋跟綿密的酪梨泥在酸種麵包上，實在是無敵的早午餐組合！" }
        ]
    },
    {
        id: "avocado_crab",
        title: "加州酪梨芒果鮮蟹卷",
        englishTitle: "California Avocado Mango Crab Roll",
        image: "images/avocado_dish.png",
        description: "奢華日式壽司卷的現代改良。將鮮甜蟹肉棒拌上輕蛋黃醬，與熟芒果條、生酪梨條層層捲入紫菜與醋飯中，散發淡雅果香與海洋鮮甜。",
        prepTime: "15 分鐘",
        cookTime: "0 分鐘",
        totalTime: "15 分鐘",
        difficulty: "中級",
        diet: "無麩質",
        servingDefault: 2,
        flavors: { sweet: 5, sour: 3, spicy: 1, savory: 7, texture: 7 },
        ingredients: [
            { name: "熟酪梨", amount: 1, unit: "顆", category: "produce" },
            { name: "熟白蝦仁", amount: 80, unit: "g", category: "protein" },
            { name: "櫻桃番茄", amount: 50, unit: "g", category: "produce" },
            { name: "鮮榨青檸汁", amount: 10, unit: "ml", category: "pantry" }
        ],
        steps: [
            { title: "食材切條", desc: "酪梨去皮去籽，切成長細條；芒果同樣去皮切長條。蟹肉拆成絲狀拌入少許日式美乃滋。", timeLimit: 360 },
            { title: "鋪飯捲壽司", desc: "壽司竹簾鋪上保鮮膜，鋪上海苔片及一薄層壽司飯，翻轉使飯朝下。將酪梨條、芒果條、蟹肉絲排在中心。", timeLimit: 360 },
            { title: "捲起切塊", desc: "拉起竹簾順勢將食材捲緊呈圓柱狀，用利刀切成 2 公分小段即可裝盤。", timeLimit: 180 }
        ],
        reviews: [
            { author: "壽希大師", rating: 4, date: "2026-05-29", text: "芒果的清甜跟酪梨的豐腴口感相得益彰，是非常有創意的加州卷配方！" }
        ]
    },
    {
        id: "avocado_smoothie",
        title: "酪梨奇亞籽椰奶昔",
        englishTitle: "Creamy Avocado Chia Coconut Smoothie",
        image: "images/avocado_dish.png",
        description: "健康的綠色排毒能量飲。酪梨與冰鎮無糖椰奶、香蕉、奇亞籽在高速調理機中打至奶油般濃稠滑順，口感醇厚，富含膳食纖維與優質脂肪。",
        prepTime: "5 分鐘",
        cookTime: "0 分鐘",
        totalTime: "5 分鐘",
        difficulty: "初級",
        diet: "素食,無麩質",
        servingDefault: 1,
        flavors: { sweet: 5, sour: 1, spicy: 1, savory: 3, texture: 8 },
        ingredients: [
            { name: "熟酪梨", amount: 0.5, unit: "顆", category: "produce" },
            { name: "天然蜂蜜", amount: 15, unit: "ml", category: "pantry" },
            { name: "鮮榨青檸汁", amount: 5, unit: "ml", category: "pantry" },
            { name: "無糖椰奶", amount: 200, unit: "ml", category: "dairy" },
            { name: "奇亞籽", amount: 10, unit: "g", category: "pantry" }
        ],
        steps: [
            { title: "放入調理機", desc: "將熟酪梨肉取出，與香蕉、奇亞籽、無糖椰奶、蜂蜜一同放入果汁調理機中。", timeLimit: 180 },
            { title: "高速攪打", desc: "開啟機器，以高速打 1-2 分鐘，直到奶昔質地如絲綢般均勻、濃密無顆粒。", timeLimit: 60 },
            { title: "裝杯點綴", desc: "倒入精緻高腳杯，頂端撒上少許乾奇亞籽及薄荷葉裝飾即成。", timeLimit: 60 }
        ],
        reviews: [
            { author: "YogaGirl", rating: 5, date: "2026-06-03", text: "口感像冰淇淋一樣綿密！但是非常健康，椰奶和酪梨味道簡直絕配。" }
        ]
    },
    {
        id: "avocado_chicken",
        title: "青醬酪梨雞肉暖沙拉",
        englishTitle: "Pesto Avocado Chicken Warm Salad",
        image: "images/avocado_dish.png",
        description: "舒食暖沙拉。煎至表皮金黃的嫩雞胸肉切片，與新鮮酪梨塊、小番茄、芝麻葉拌在一起，淋上手作羅勒青醬，是一道充滿飽足感的極致輕食。",
        prepTime: "10 分鐘",
        cookTime: "10 分鐘",
        totalTime: "20 分鐘",
        difficulty: "初級",
        diet: "低碳水,無麩質",
        servingDefault: 2,
        flavors: { sweet: 2, sour: 3, spicy: 1, savory: 8, texture: 6 },
        ingredients: [
            { name: "熟酪梨", amount: 1, unit: "顆", category: "produce" },
            { name: "手作羅勒青醬", amount: 30, unit: "g", category: "pantry" },
            { name: "櫻桃番茄", amount: 80, unit: "g", category: "produce" },
            { name: "大蒜碎", amount: 5, unit: "g", category: "produce" },
            { name: "雞胸肉", amount: 200, unit: "g", category: "protein" }
        ],
        steps: [
            { title: "香煎雞肉", desc: "雞胸肉切厚片，均勻抹上鹽和胡椒。平底鍋倒少許油，中火將雞片雙面煎至全熟金黃（約 6-8 分鐘）取出稍微降溫。", timeLimit: 480 },
            { title: "切配料", desc: "酪梨去皮切大方塊；櫻桃番茄對半切開；洗淨芝麻葉並瀝乾水分。", timeLimit: 180 },
            { title: "拌醬裝盤", desc: "將暖雞肉片、酪梨塊、番茄與芝麻葉放入大碗中，淋上青醬輕輕翻拌，使所有食材裹上醬汁即可盛盤。", timeLimit: 120 }
        ],
        reviews: [
            { author: "健美先生", rating: 5, date: "2026-05-29", text: "溫熱的雞肉跟冰涼的酪梨中和起來非常舒服，青醬讓整碗沙拉味道大升級。" }
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
    customReviews: {} // recipeId -> Array of review objects
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
    
    // Load initial views
    renderRecipeGrid();
    updateActivePage("recipes");
    
    // Render flavor matrix initial state
    renderMatrixSatelliteNodes();
    updateMatrixSidePanel();
}

// 4. THEME CONTROL
function setupThemeToggle() {
    const toggleBtn = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("theme-icon");
    
    toggleBtn.addEventListener("click", () => {
        const nextTheme = State.currentTheme === "dark" ? "light" : "dark";
        State.currentTheme = nextTheme;
        document.body.setAttribute("data-theme", nextTheme);
        
        // Update SVG Moon/Sun Path
        if (nextTheme === "light") {
            themeIcon.innerHTML = `<path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z"/>`;
        } else {
            themeIcon.innerHTML = `<path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41l-1.06-1.06zm1.06-12.37c-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06c.39-.39.39-1.03 0-1.41zm-12.37 12.37c-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06c.39-.39.39-1.03 0-1.41z"/>`;
        }
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
        window.scrollTo(0, 0);
    });

    // Logo Click Scroll Down Button
    document.getElementById("scroll-to-content").addEventListener("click", (e) => {
        e.preventDefault();
        document.getElementById("main-content").scrollIntoView();
    });
    
    // Back to Market button in Recipe Details
    document.getElementById("detail-back-btn").addEventListener("click", () => {
        updateActivePage("recipes");
    });
}

function updateActivePage(pageId) {
    // Hide all views
    document.querySelectorAll(".page-view").forEach(view => {
        view.classList.remove("active");
    });
    
    // Show target view
    const targetPage = document.getElementById(`page-${pageId}`);
    if (targetPage) {
        targetPage.classList.add("active");
        State.currentPage = pageId;
    }
    
    // Extra view updates
    if (pageId === "planner") {
        renderMealPlanner();
    }
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
function showRecipeDetail(recipeId) {
    State.selectedRecipeId = recipeId;
    State.selectedServing = 2; // Reset serving count
    
    const recipe = RECIPES.find(r => r.id === recipeId);
    if (!recipe) return;
    
    updateActivePage("detail");
    window.scrollTo(0, 0);
    
    // Trigger details render
    renderRecipeDetailContent();
    renderReviewsList();
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
