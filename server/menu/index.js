function getMenu() {
  let menu = [
    {
      itemId: "L01",
      name: "SHRIMP W. SCRAMBLE EGGS 虾仁炒蛋",
      price: "$8.95 "
    },
    {
      itemId: "L02",
      name: "SHRIMP W. GARLIC SAUCE  鱼香虾",
      price: "$8.95 "
    },
    {
      itemId: "L03",
      name: "SHRIMP W. CURRY SAUCE 咖喱虾",
      price: "$8.95 "
    },
    {
      itemId: "L04",
      name: "CALAMARI W. SOUR CABBAGE 酸菜鱿鱼",
      price: "$8.95 "
    },
    {
      itemId: "L05",
      name: "CALAMARI W. CHINESE CELERY 芹菜鱿鱼",
      price: "$8.95 "
    },
    {
      itemId: "L06",
      name: "TWICE-COOKED FISH FILLET 回锅鱼片",
      price: "$8.95 "
    },
    {
      itemId: "L07",
      name: "SZECHUAN SPICY FISH FILLET IN BROTH 水煮鱼片",
      price: "$8.95 "
    },
    {
      itemId: "L08",
      name: "SZECHUAN SPICY FISH FILLET 川辣鱼片",
      price: "$8.95 "
    },
    {
      itemId: "L09",
      name: "FISH FILLET W. PRESERVED VEGGIE 雪菜鱼片",
      price: "$8.95 "
    },
    {
      itemId: "L10",
      name: "FISH W. SILKEN TOFU 豆花鱼",
      price: "$8.95 "
    },
    {
      itemId: "L11",
      name: "KUNG PAO CHICKEN 宫保鸡丁",
      price: "$8.95 "
    },
    {
      itemId: "L12",
      name: "DICED CHICKEN W. CHILLI PEPPER 辣子鸡丁",
      price: "$8.95 "
    },
    {
      itemId: "L13",
      name: "GENERAL GAU＇S CHICKEN 左宗鸡",
      price: "$8.95 "
    },
    {
      itemId: "L14",
      name: "CURRY CHICKEN 咖喱鸡",
      price: "$8.95 "
    },
    {
      itemId: "L15",
      name: "SESAME CHICKEN 芝麻鸡",
      price: "$8.95 "
    },
    {
      itemId: "L16",
      name: "THREE CUPS CHICKEN 三杯鸡(Chicken w. Basil, Garlic & Ginger)",
      price: "$8.95 "
    },
    {
      itemId: "L17",
      name: "FRIED CHICKEN LEG 炸鸡腿",
      price: "$8.95 "
    },
    {
      itemId: "L18",
      name: "CURRY BEEF 咖喱牛",
      price: "$8.95 "
    },
    {
      itemId: "L19",
      name: "BEEF W. BROCCOLI 芥兰牛",
      price: "$8.95 "
    },
    {
      itemId: "L20",
      name: "BEEF W. SCALLION 葱爆牛",
      price: "$8.95 "
    },
    {
      itemId: "L22",
      name: "DRY POT BEEF 干锅牛",
      price: "$8.95 "
    },
    {
      itemId: "L22",
      name: "BRAISED BEEF 红烧牛肉",
      price: "$8.95 "
    },
    {
      itemId: "L23",
      name: "BEEF W. POTATO 牛肉烧土豆",
      price: "$8.95 "
    },
    {
      itemId: "L24",
      name: "SHREDDED BEEF W. LONG HORN PEPPERS 小椒牛肉丝",
      price: "$8.95 "
    },
    {
      itemId: "L25",
      name: "SHREDDED PORK W. CABBAGE 台式炒高丽",
      price: "$8.95 "
    },
    {
      itemId: "L26",
      name: "SHREDDED PORK IN GARLIC SAUCE 鱼香肉丝",
      price: "$8.95 "
    },
    {
      itemId: "L27",
      name: "SHREDDED PORK, BAMBOO SHOOTS W. DRY TOFU 笋尖豆干肉丝",
      price: "$8.95 "
    },
    {
      itemId: "L28",
      name: "SHREDDED PORK W. LONG HORN PEPPERS & POTATO  小椒土豆肉丝",
      price: "$8.95 "
    },
    {
      itemId: "L29",
      name: "STIR-FRIED PORK STOMACH W. LONG HORN PEPPER 小辣椒炒肚片",
      price: "$8.95 "
    },
    {
      itemId: "L30",
      name: "STIR-FRIED PORK INTESTINE W. LONG HORN PEPPER 小辣椒炒大肠",
      price: "$8.95 "
    },
    {
      itemId: "L31",
      name: "STIR-FRIED SHREDDED PORK W. LONG HORN PEPPER 小辣椒猪肉丝",
      price: "$8.95 "
    },
    {
      itemId: "L32",
      name: "SHREDDED PORK W. WOOD FUNGUS 木耳肉丝",
      price: "$8.95 "
    },
    {
      itemId: "L33",
      name: "STIR-FRIED PORK INTESINE W. SOUR CABBAGE 酸菜炒大肠",
      price: "$8.95 "
    },
    {
      itemId: "L34",
      name: "STIR-FRIED PORK STOMACH W. SOUR CABBAGE 酸菜炒肚片",
      price: "$8.95 "
    },
    {
      itemId: "L35",
      name: "SWEET & SOUR PORK CHOP 京都排骨",
      price: "$8.95 "
    },
    {
      itemId: "L36",
      name: "BRAISED SPARERIBS 红烧排骨",
      price: "$8.95 "
    },
    {
      itemId: "L37",
      name: "STIR-FRIED PORK BELLY W. LEEKS 蒜苗五花肉",
      price: "$8.95 "
    },
    {
      itemId: "L38",
      name: "TWICE-COOKED PORK 回锅肉",
      price: "$8.95 "
    },
    {
      itemId: "L39",
      name: "BRAISED PORK 红烧肉",
      price: "$8.95 "
    },
    {
      itemId: "L40",
      name: "SOUR STRING BEAN W. MINCED PORK 酸豆角肉末",
      price: "$8.95 "
    },
    {
      itemId: "L41",
      name: "STRING BEAN W. SMOKED MEATS 干豆角熏肉",
      price: "$8.95 "
    },
    {
      itemId: "L42",
      name: "SPICY BEAN VERMICELLI W. MINCED PORK 蚂蚁上树",
      price: "$8.95 "
    },
    {
      itemId: "L43",
      name: "PORK INTESTINE & PIG＇S BLOOD 五更长旺",
      price: "$8.95 "
    },
    {
      itemId: "L44",
      name: "WOK-TOSSED PIG＇S KIDNEY 火爆腰花",
      price: "$8.95 "
    },
    {
      itemId: "L45",
      name: "CHINESE CELERY W. DRY BEAN CURD 中芹香干",
      price: "$8.95 "
    },
    {
      itemId: "L46",
      name: "MA-PO TOFU 麻婆豆腐",
      price: "$8.95 "
    },
    {
      itemId: "L47",
      name: "EGGPLANT IN GARLIC SAUCE 鱼香茄子",
      price: "$8.95 "
    },
    {
      itemId: "L48",
      name: "BRAISED EGGPLANT W. STRING BEANS 四季豆烧茄子",
      price: "$8.95 "
    },
    {
      itemId: "L49",
      name: "PRESERVED VEGGIE W. BEAN CURD SHEET & EDAMAME 雪菜百页毛豆",
      price: "$8.95 "
    },
    {
      itemId: "L50",
      name: "SAUTEED STRING BEANS 清炒四季豆",
      price: "$8.95 "
    },
    {
      itemId: "L51",
      name: "SAUTEED BABY BAK CHOY 清炒上海菜",
      price: "$8.95 "
    },
    {
      itemId: "L52",
      name: "SAUTTED MELON 清炒苦瓜",
      price: "$8.95 "
    },
    {
      itemId: "L53",
      name: "DRY POT CAULIFLOWER 干锅白菜花",
      price: "$8.95 "
    },
    {
      itemId: "L54",
      name: "DRY POT CHINESE CABBAGE 干锅高丽菜",
      price: "$8.95 "
    },
    {
      itemId: "L55",
      name: "DRY POT POTATO 干锅土豆",
      price: "$8.95 "
    },
    {
      itemId: "L56",
      name: "SHREDDED POTATO IN VINEGAR SAUCE 醋溜土豆丝",
      price: "$8.95 "
    },
    {
      itemId: "L57",
      name: "SCRAMBLE EGG W. TOMATO 番茄炒蛋",
      price: "$8.95 "
    }
  ];
  return menu;
}
exports.getMenu = getMenu;
