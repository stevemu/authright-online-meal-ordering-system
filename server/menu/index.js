function getMenu() {
  let menu = [
    {
      itemId: "L01",
      name: "SHRIMP W. SCRAMBLE EGGS 虾仁炒蛋",
      price: "$8.75 "
    },
    {
      itemId: "L02",
      name: "SHRIMP W. GARLIC SAUCE 鱼香虾",
      price: "$8.75 "
    },
    {
      itemId: "L03",
      name: "SHRIMP W. CURRY SAUCE 咖喱虾",
      price: "$8.75 "
    },
    {
      itemId: "L04",
      name: "CALAMARI W. SOUR CABBAGE 酸菜鱿鱼",
      price: "$8.75 "
    },
    {
      itemId: "L05",
      name: "CALAMARI W. CHINESE CELERY 芹菜鱿鱼",
      price: "$8.75 "
    },
    {
      itemId: "L06",
      name: "TWICE-COOKED FISH FILLET 回锅鱼片",
      price: "$8.75 "
    },
    {
      itemId: "L07",
      name: "SZECHUAN SPICY FISH FILLET IN BROTH 水煮鱼片",
      price: "$8.75 "
    },
    {
      itemId: "L08",
      name: "SZECHUAN SPICY FISH FILLET 川辣鱼片",
      price: "$8.75 "
    },
    {
      itemId: "L09",
      name: "FISH FILLET W. PRESERVED VEGGIE 雪菜鱼片",
      price: "$8.75 "
    },
    {
      itemId: "L10",
      name: "FISH W. SILKEN TOFU 豆花鱼",
      price: "$8.75 "
    },
    {
      itemId: "L11",
      name: "KUNG PAO CHICKEN 宫保鸡丁",
      price: "$8.75 "
    },
    {
      itemId: "L12",
      name: "DICED CHICKEN W. CHILLI PEPPER 辣子鸡丁",
      price: "$8.75 "
    },
    {
      itemId: "L13",
      name: "GENERAL GAU＇S CHICKEN 左宗鸡",
      price: "$8.75 "
    },
    {
      itemId: "L14",
      name: "CURRY CHICKEN 咖喱鸡",
      price: "$8.75 "
    },
    {
      itemId: "L15",
      name: "SESAME CHICKEN 芝麻鸡",
      price: "$8.75 "
    },
    {
      itemId: "L16",
      name: "THREE CUPS CHICKEN 三杯鸡(Chicken w. Basil, Garlic & Ginger)",
      price: "$8.75 "
    },
    {
      itemId: "L17",
      name: "FRIED CHICKEN LEG 炸鸡腿",
      price: "$8.75 "
    },
    {
      itemId: "L18",
      name: "CURRY BEEF 咖喱牛",
      price: "$8.75 "
    },
    {
      itemId: "L19",
      name: "BEEF W. BROCCOLI 芥兰牛",
      price: "$8.75 "
    },
    {
      itemId: "L20",
      name: "BEEF W. SCALLION 葱爆牛",
      price: "$8.75 "
    },
    {
      itemId: "L22",
      name: "DRY POT BEEF 干锅牛",
      price: "$8.75 "
    },
    {
      itemId: "L22",
      name: "BRAISED BEEF 红烧牛肉",
      price: "$8.75 "
    },
    {
      itemId: "L23",
      name: "BEEF W. POTATO 牛肉烧土豆",
      price: "$8.75 "
    },
    {
      itemId: "L24",
      name: "SHREDDED BEEF W. LONG HORN PEPPERS 小椒牛肉丝",
      price: "$8.75 "
    },
    {
      itemId: "L25",
      name: "SHREDDED PORK W. CABBAGE 台式炒高丽",
      price: "$8.75 "
    },
    {
      itemId: "L26",
      name: "SHREDDED PORK IN GARLIC SAUCE 鱼香肉丝",
      price: "$8.75 "
    },
    {
      itemId: "L27",
      name: "SHREDDED PORK, BAMBOO SHOOTS W. DRY TOFU 笋尖豆干肉丝",
      price: "$8.75 "
    },
    {
      itemId: "L28",
      name: "SHREDDED PORK W. LONG HORN PEPPERS & POTATO  小椒土豆肉丝",
      price: "$8.75 "
    },
    {
      itemId: "L29",
      name: "STIR-FRIED PORK STOMACH W. LONG HORN PEPPER 小辣椒炒肚片",
      price: "$8.75 "
    },
    {
      itemId: "L30",
      name: "STIR-FRIED PORK INTESTINE W. LONG HORN PEPPER 小辣椒炒大肠",
      price: "$8.75 "
    },
    {
      itemId: "L31",
      name: "STIR-FRIED SHREDDED PORK W. LONG HORN PEPPER 小辣椒猪肉丝",
      price: "$8.75 "
    },
    {
      itemId: "L32",
      name: "SHREDDED PORK W. WOOD FUNGUS 木耳肉丝",
      price: "$8.75 "
    },
    {
      itemId: "L33",
      name: "STIR-FRIED PORK INTESINE W. SOUR CABBAGE 酸菜炒大肠",
      price: "$8.75 "
    },
    {
      itemId: "L34",
      name: "STIR-FRIED PORK STOMACH W. SOUR CABBAGE 酸菜炒肚片",
      price: "$8.75 "
    },
    {
      itemId: "L35",
      name: "SWEET & SOUR PORK CHOP 京都排骨",
      price: "$8.75 "
    },
    {
      itemId: "L36",
      name: "BRAISED SPARERIBS 红烧排骨",
      price: "$8.75 "
    },
    {
      itemId: "L37",
      name: "STIR-FRIED PORK BELLY W. LEEKS 蒜苗五花肉",
      price: "$8.75 "
    },
    {
      itemId: "L38",
      name: "TWICE-COOKED PORK 回锅肉",
      price: "$8.75 "
    },
    {
      itemId: "L39",
      name: "BRAISED PORK 红烧肉",
      price: "$8.75 "
    },
    {
      itemId: "L40",
      name: "SOUR STRING BEAN W. MINCED PORK 酸豆角肉末",
      price: "$8.75 "
    },
    {
      itemId: "L41",
      name: "STRING BEAN W. SMOKED MEATS 干豆角熏肉",
      price: "$8.75 "
    },
    {
      itemId: "L42",
      name: "SPICY BEAN VERMICELLI W. MINCED PORK 蚂蚁上树",
      price: "$8.75 "
    },
    {
      itemId: "L43",
      name: "PORK INTESTINE & PIG＇S BLOOD 五更长旺",
      price: "$8.75 "
    },
    {
      itemId: "L44",
      name: "WOK-TOSSED PIG＇S KIDNEY 火爆腰花",
      price: "$8.75 "
    },
    {
      itemId: "L45",
      name: "CHINESE CELERY W. DRY BEAN CURD 中芹香干",
      price: "$8.75 "
    },
    {
      itemId: "L46",
      name: "MA-PO TOFU 麻婆豆腐",
      price: "$8.75 "
    },
    {
      itemId: "L47",
      name: "EGGPLANT IN GARLIC SAUCE 鱼香茄子",
      price: "$8.75 "
    },
    {
      itemId: "L48",
      name: "BRAISED EGGPLANT W. STRING BEANS 四季豆烧茄子",
      price: "$8.75 "
    },
    {
      itemId: "L49",
      name: "PRESERVED VEGGIE W. BEAN CURD SHEET & EDAMAME 雪菜百页毛豆",
      price: "$8.75 "
    },
    {
      itemId: "L50",
      name: "SAUTEED STRING BEANS 清炒四季豆",
      price: "$8.75 "
    },
    {
      itemId: "L51",
      name: "SAUTEED BABY BAK CHOY 清炒上海菜",
      price: "$8.75 "
    },
    {
      itemId: "L52",
      name: "SAUTTED MELON 清炒苦瓜",
      price: "$8.75 "
    },
    {
      itemId: "L53",
      name: "DRY POT CAULIFLOWER 干锅白菜花",
      price: "$8.75 "
    },
    {
      itemId: "L54",
      name: "DRY POT CHINESE CABBAGE 干锅高丽菜",
      price: "$8.75 "
    },
    {
      itemId: "L55",
      name: "DRY POT POTATO 干锅土豆",
      price: "$8.75 "
    },
    {
      itemId: "L56",
      name: "SHREDDED POTATO IN VINEGAR SAUCE 醋溜土豆丝",
      price: "$8.75 "
    },
    {
      itemId: "L57",
      name: "SCRAMBLE EGG W. TOMATO 番茄炒蛋",
      price: "$8.75 "
    },
    {
      itemId: "A01",
      name: "CHILLED JELLY FISH 凉拌海蜇",
      price: "$12.50"
    },
    {
      itemId: "A02",
      name: "CHILLED ENOKI MUSHROOM WITH FUNGUS 金针菇拌云耳",
      price: "$7.50"
    },
    {
      itemId: "A03",
      name: "CUCUMBER IN CHILI SAUCE 拍黄瓜",
      price: "$7.50"
    },
    {
      itemId: "A04",
      name: "CHILLED CHICKEN IN WINE SAUCE 绍兴醉鲜鸡",
      price: "$9.50"
    },
    {
      itemId: "A05",
      name: "CHILLED SPICED PORK EARS 辣味耳丝",
      price: "$7.95"
    },
    {
      itemId: "A06",
      name: "BEEF WITH MARINATED SAUCE 酱牛肉",
      price: "$10.50"
    },
    {
      itemId: "A07",
      name: "TAKOYAKI 章鱼丸子 (6)",
      price: "$7.50"
    },
    {
      itemId: "A08",
      name: "STEAMED CHICKEN IN CHILI SAUCE 口水鸡",
      price: "$8.50"
    },
    {
      itemId: "A09",
      name: "STEAMED PORK BELLY WITH MINCED GARLIC 蒜泥白肉",
      price: "$8.50"
    },
    {
      itemId: "A10",
      name: "SLICED BEEF AND OX TONGUE IN CHILI SAUCE 夫妻肺片",
      price: "$8.95"
    },
    {
      itemId: "A11",
      name: "OYSTER PANCAKE 蚵仔煎",
      price: "$8.50"
    },
    {
      itemId: "A12",
      name: "SZECHUAN WONTON WITH RED CHILLI SAUCE 红油抄手",
      price: "$6.95"
    },
    {
      itemId: "A13",
      name: "CRISPY TOFU 酥炸豆腐",
      price: "$5.95"
    },
    {
      itemId: "A14",
      name: "CRISPY PIG INTESTINE 炸大肠",
      price: "$8.50"
    },
    {
      itemId: "A15",
      name: "SALTED CRISPY CHICKEN 盐酥鸡",
      price: "$8.25"
    },
    {
      itemId: "A16",
      name: "FRIED CHICKEN WINGS 炸鸡翅",
      price: "$8.50"
    },
    {
      itemId: "A17",
      name: "SALT AND PEPPER CHICKEN WINGS 椒盐鸡翅",
      price: "$9.50"
    },
    {
      itemId: "A18",
      name: "CRAB RANGOONS 蟹角",
      price: "$7.95"
    },
    {
      itemId: "A19",
      name: "DEEP FRIED STINKY BEAN CURD 酥炸臭豆腐",
      price: "$7.95"
    },
    {
      itemId: "A20",
      name: "SCALLIONS PANCAKE 葱油饼",
      price: "$5.95"
    },
    {
      itemId: "A21",
      name: "ROAST BEEF W. SCALLION ROLL IN SCALLIONS PANCAKES 牛肉卷饼",
      price: "$9.50"
    },
    {
      itemId: "A22",
      name: "ROAST BEEF WITH HOT CHILI PEPPER ROLLED IN SCALLION PANCAKE 小辣椒牛肉",
      price: "$9.50"
    },
    {
      itemId: "A23",
      name: "MARINATED SHREDDED DRY BEAN CURD 炝拌干豆腐丝",
      price: "$8.25"
    },
    {
      itemId: "A24",
      name: "POACHED SHREDDED POTATO WITH CHILI SAUCE 炝土豆丝",
      price: "$7.95"
    },
    {
      itemId: "A25",
      name: "MARINATED BEEF WITH CUCUMBER 牛肉拌黄瓜",
      price: "$9.50"
    },
    {
      itemId: "A26",
      name: "CHICKEN WINGS IN SHRIMP PASTE SAUCE 虾酱鸡翼",
      price: "$8.95"
    },
    {
      itemId: "A27",
      name: "PUMKIN PANCAKE 南瓜饼",
      price: "$8.95"
    },
    {
      itemId: "CS02",
      name: "CHONGQING SPICY FROG 重庆跳跳蛙",
      price: "$23.95"
    },
    {
      itemId: "CS03",
      name: "FROG WITH SPICY CHILI PEPPER 馋嘴牛蛙",
      price: "$23.95"
    },
    {
      itemId: "CS04",
      name: "GRILLED FISH WITH CHILI PEPPER 诸葛烤鱼",
      price: "$29.95"
    },
    {
      itemId: "CS05",
      name: "GRILLED FISH WITH SOUR CABBAGE 酸菜烤鱼",
      price: "$29.95"
    },
    {
      itemId: "CS07",
      name: "FISH FILET WITH SOUR CABBAGE 酸菜鱼片",
      price: "$19.95"
    },
    {
      itemId: "CS09",
      name: "DOUBLE BOILED FISH FILLET 泉水鱼片",
      price: "$19.95"
    },
    {
      itemId: "CS10",
      name: "SIGNATURE FRIED WHOLE FISH IN SWEET AND SOUR SAUCE 金牌松鼠鱼",
      price: "$29.95"
    },
    {
      itemId: "CS11",
      name: "CUMIN SPARERIBS WITH GARLIC 蒜香孜然骨",
      price: "$18.95"
    },
    {
      itemId: "CS12",
      name: "BEEF TRIPE, PORK STOMACH AND PORK BLOOD 毛血旺",
      price: "$17.95"
    },
    {
      itemId: "CS13",
      name: "BEAN CURD WITH CRAB ROE 蟹皇豆腐",
      price: "$15.95"
    },
    {
      itemId: "CS14",
      name: "BEEF OFFAL IN HONG KONG STYLE 港式牛杂",
      price: "$29.95"
    },
    {
      itemId: "CS15",
      name: "BRAISED CHICKEN WITH MUSHROOMS 小鸡炖蘑菇",
      price: "$19.95"
    },
    {
      itemId: "CS16",
      name: "SHANGHAI STYLE HOTPOT CHICKEN 湘味火锅鸡",
      price: "$19.95"
    },
    {
      itemId: "CS17",
      name: "BEEF OFFAL IN SPICY BROTH 水煮牛杂",
      price: "$19.95"
    },
    {
      itemId: "CS18",
      name: "BEEF SPARERIBS WITH MIX MUSHROOM IN CASSEROLE 牛排骨杂菌煲",
      price: "$22.95"
    },
    {
      itemId: "CS19",
      name: "DRY FRIED SHREDDED BEEF  干煸风味牛肉丝",
      price: "$19.50"
    },
    {
      itemId: "CS20",
      name: "PUMKIN AND SALTY EGG YOLK 蛋黄焗黄瓜",
      price: "$15.95"
    },
    {
      itemId: "CS21",
      name: "BRAISED TROTTER W. CHILI SAUCE 吮指猪蹄",
      price: "$14.95"
    },
    {
      itemId: "Y01",
      name: "STIR-FRIED BEEF TRIPE 爆炒牛肚",
      price: "$16.95"
    },
    {
      itemId: "Y02",
      name: "STIR-FRIED LAMB WITH LEEK AND ONION 长沙小炒羊",
      price: "$16.95"
    },
    {
      itemId: "Y03",
      name: "CUMIN LAMB 孜然羊肉",
      price: "$17.50"
    },
    {
      itemId: "Y04",
      name: "CUMIN BEEF 孜然牛肉",
      price: "$17.50"
    },
    {
      itemId: "Y05",
      name: "BRAISED BEEF TENDON 红烧蹄筋",
      price: "$16.95"
    },
    {
      itemId: "Y06",
      name: "MALA SPICY BEEF TENDON 麻辣蹄筋",
      price: "$16.95"
    },
    {
      itemId: "Y07",
      name: "BEEF BRISKET IN HOT CLAYPOT 砂锅牛腩",
      price: "$17.50"
    },
    {
      itemId: "Y08",
      name: "SPICY BEEF IN SZECHUAN STYLE 水煮牛肉",
      price: "$16.50"
    },
    {
      itemId: "Y09",
      name: "BEEF IN BLACK PEPPER SAUCE 黑椒牛肉",
      price: "$14.95"
    },
    {
      itemId: "Y10",
      name: "BEEF WITH SCALLION 葱爆牛肉",
      price: "$14.95"
    },
    {
      itemId: "Y11",
      name: "BEEF WITH BITTER MELON 苦瓜牛肉",
      price: "$14.95"
    },
    {
      itemId: "Y12",
      name: "SHREDDED BEEF WITH LONG HORN PEPPERS 小椒牛肉丝",
      price: "$14.95"
    },
    {
      itemId: "Y13",
      name: "CRISPY ORANGE BEEF 陈皮牛",
      price: "$14.95"
    },
    {
      itemId: "Y14",
      name: "BEEF IN CURRY SAUCE 咖喱牛",
      price: "$14.95"
    },
    {
      itemId: "Y15",
      name: "BEEF WITH WATER SPINACH IN SA-CHA SAUCE 空心菜沙茶牛肉",
      price: "$14.95"
    },
    {
      itemId: "Y16",
      name: "SHREDDED BEEF W. CILANTRO ROOTS & DRY BEAN CURD 豆干香梗牛肉",
      price: "$14.95"
    },
    {
      itemId: "P01",
      name: "SHREDDED PORK IN GARLIC SAUCE 鱼香肉丝",
      price: "$13.95"
    },
    {
      itemId: "P02",
      name: "SHREDDED PORK WITH CHILI PEPPER 小辣椒猪肉丝",
      price: "$12.95"
    },
    {
      itemId: "P03",
      name: "SHREDDED PORK AND POTATO WITH LONG HORN PEPPER 小椒肉丝土豆丝Mid spicy.",
      price: "$12.95"
    },
    {
      itemId: "P04",
      name: "SHREDDED PORK WITH DRIED BEAN CURD AND CHINESE CELERY 中芹香干肉丝",
      price: "$11.95"
    },
    {
      itemId: "P05",
      name: "SHREDDED PORK BAMBOO SHOOTS WITH DRY BEAN CURDS 笋尖豆干肉丝",
      price: "$12.95"
    },
    {
      itemId: "P06",
      name: "SHREDDED PORK IN SWEET AND SOUR SAUCE 京酱肉丝",
      price: "$16.95"
    },
    {
      itemId: "P07",
      name: "SALT AND PEPPER PORK CHOP 椒盐排骨",
      price: "$12.95"
    },
    {
      itemId: "P08",
      name: "SWEET AND SOUR PORK CHOP 京都排骨",
      price: "$12.95"
    },
    {
      itemId: "P09",
      name: "BRAISED SPARERIBS 红烧排骨",
      price: "$13.50"
    },
    {
      itemId: "P10",
      name: "SPICY BEAN VERMICELLI WITH MINCED PORK 蚂蚁上树Mid spicy.",
      price: "$11.95"
    },
    {
      itemId: "P11",
      name: "SPICY SZECHUAN TWICE-COOKED PORK 回锅肉Mid spicy.",
      price: "$12.50"
    },
    {
      itemId: "P12",
      name: "STIR-FRIED PORK BELLY WITH LEEKS 蒜苗五花肉",
      price: "$12.50"
    },
    {
      itemId: "P13",
      name: "PORK BELLY WITH SOUR CABBAGE AND VERMICELLI 川百肉",
      price: "$13.95"
    },
    {
      itemId: "P14",
      name: "STIR-FRIED PRESERVED MEAT WITH CHILI PEPPER 农家小炒肉",
      price: "$14.50"
    },
    {
      itemId: "P15",
      name: "STIR-FRIED STRING BEANS WITH SMOKED MEATS 干豆角熏肉Mid spicy.",
      price: "$14.50"
    },
    {
      itemId: "P16",
      name: "SAUTEED PIG INTESTINE WITH CHILI PEPPER 干煸肥肠",
      price: "$13.95"
    },
    {
      itemId: "P17",
      name: "PIG INTESTINE WITH LONG HORN PEPPER 小椒炒大肠",
      price: "$13.95"
    },
    {
      itemId: "P18",
      name: "STIR-FRIED PIG INTESTINE WITH SOUR CABBAGE 酸菜炒大肠",
      price: "$13.95"
    },
    {
      itemId: "P19",
      name: "STIR-FRIED PORK STOMACH WITH LONG HORN PEPPER 小椒炒肚片",
      price: "$13.95"
    },
    {
      itemId: "P20",
      name: "STIR-FRIED PORK STOMACH WITH SOUR CABBAGE 酸菜炒肚片",
      price: "$13.95"
    },
    {
      itemId: "P21",
      name: "WOK-TOSSED PIG KIDNEY 火爆腰花",
      price: "$14.50"
    },
    {
      itemId: "C01",
      name: "DUCK WITH BEER SAUCE IN SZECHUAN STYLE 川味啤酒鸭",
      price: "$18.95"
    },
    {
      itemId: "C02",
      name: "DEEP FRIED DICED CHICKEN 黄飞鸿鸡丁",
      price: "$18.95"
    },
    {
      itemId: "C03",
      name: "THREE CUPS CHICKEN 三杯鸡",
      price: "$13.95"
    },
    {
      itemId: "C04",
      name: "1/2 SHANGHAI STYLE CHICKEN 上海三黄鸡",
      price: "$17.95"
    },
    {
      itemId: "C05",
      name: "1/2 SZECHUAN STYLE BON BON CHICKEN 风味钵钵鸡",
      price: "$17.95"
    },
    {
      itemId: "C06",
      name: "SAUTEED DICED CHICKEN WITH CHILI AND PEPPER 重庆辣子鸡",
      price: "$15.95"
    },
    {
      itemId: "C07",
      name: "KUNG PAO CHICKEN 宫保鸡丁",
      price: "$11.50"
    },
    {
      itemId: "C08",
      name: "CHICKEN IN CURRY SAUCE 咖喱鸡",
      price: "$11.50"
    },
    {
      itemId: "C09",
      name: "GENERAL GAU＇S CHICKEN 左宗鸡",
      price: "$11.50"
    },
    {
      itemId: "C10",
      name: "CHICKEN IN GARLIC SAUCE 鱼香鸡",
      price: "$11.50"
    },
    {
      itemId: "C11",
      name: "SESAME CHICKEN 芝麻鸡",
      price: "$11.50"
    },
    {
      itemId: "C12",
      name: "CHICKEN WITH CASHEW NUTS 腰果鸡",
      price: "$12.95"
    },
    {
      itemId: "C13",
      name: "CHICKEN WINGETTES IN DRIED PEPPER AND PARSLEY 香辣鸡中翼",
      price: "$15.95"
    }
  ];
  return menu;
}
exports.getMenu = getMenu;
