table_element_rel = [
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
    [3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 6, 7, 8, 9, 10],
    [11, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 14, 15, 16, 17, 18],
    [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
    [37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54],
    [55, 56, 0, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86],
    [87, 88, 0, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118],
    [0, 0, 0, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71],
    [0, 0, 0, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103]
  ]
  
  element_names = {
    1: ['H', 'Водород'],
  2: ['He', 'Гелий'],
  3: ['Li', 'Литий'],
  4: ['Be', 'Бериллий'],
  5: ['B', 'Бор'],
  6: ['C', 'Углерод'],
  7: ['N', 'Азот'],
  8: ['O', 'Кислород'],
  9: ['F', 'Фтор'],
  10: ['Ne', 'Неон'],
  11: ['Na', 'Натрий'],
  12: ['Mg', 'Магний'],
  13: ['Al', 'Алюминий'],
  14: ['Si', 'Кремний'],
  15: ['P', 'Фосфор'],
  16: ['S', 'Сера'],
  17: ['Cl', 'Хлор'],
  18: ['Ar', 'Аргон'],
  19: ['K', 'Калий'],
  20: ['Ca', 'Кальций'],
  21: ['Sc', 'Скандий'],
  22: ['Ti', 'Титан'],
  23: ['V', 'Ванадий'],
  24: ['Cr', 'Хром'],
  25: ['Mn', 'Марганец'],
  26: ['Fe', 'Железо'],
  27: ['Co', 'Кобальт'],
  28: ['Ni', 'Никель'],
  29: ['Cu', 'Медь'],
  30: ['Zn', 'Цинк'],
  31: ['Ga', 'Галлий'],
  32: ['Ge', 'Германий'],
  33: ['As', 'Мышьяк'],
  34: ['Se', 'Селен'],
  35: ['Br', 'Бром'],
  36: ['Kr', 'Криптон'],
  37: ['Rb', 'Рубидий'],
  38: ['Sr', 'Стронций'],
  39: ['Y', 'Иттрий'],
  40: ['Zr', 'Цирконий'],
  41: ['Nb', 'Ниобий'],
  42: ['Mo', 'Молибден'],
  43: ['Tc', 'Технеций'],
  44: ['Ru', 'Рутений'],
  45: ['Rh', 'Родий'],
  46: ['Pd', 'Палладий'],
  47: ['Ag', 'Серебро'],
  48: ['Cd', 'Кадмий'],
  49: ['In', 'Индий'],
  50: ['Sn', 'Олово'],
  51: ['Sb', 'Сурьма'],
  52: ['Te', 'Теллур'],
  53: ['I', 'Иод'],
  54: ['Xe', 'Ксенон'],
  55: ['Cs', 'Цезий'],
  56: ['Ba', 'Барий'],
  57: ['La', 'Лантан'],
  58: ['Ce', 'Церий'],
  59: ['Pr', 'Празеодим'],
  60: ['Nd', 'Неодим'],
  61: ['Pm', 'Прометий'],
  62: ['Sm', 'Самарий'],
  63: ['Eu', 'Европий'],
  64: ['Gd', 'Гадолиний'],
  65: ['Tb', 'Тербий'],
  66: ['Dy', 'Диспрозий'],
  67: ['Ho', 'Гольмий'],
  68: ['Er', 'Эрбий'],
  69: ['Tm', 'Тулий'],
  70: ['Yb', 'Иттербий'],
  71: ['Lu', 'Лютеций'],
  72: ['Hf', 'Гафний'],
  73: ['Ta', 'Тантал'],
  74: ['W', 'Вольфрам'],
  75: ['Re', 'Рений'],
  76: ['Os', 'Осмий'],
  77: ['Ir', 'Иридий'],
  78: ['Pt', 'Платина'],
  79: ['Au', 'Золото'],
  80: ['Hg', 'Ртуть'],
  81: ['Tl', 'Таллий'],
  82: ['Pb', 'Свинец'],
  83: ['Bi', 'Висмут'],
  84: ['Po', 'Полоний'],
  85: ['At', 'Астат'],
  86: ['Rn', 'Радон'],
  87: ['Fr', 'Франций'],
  88: ['Ra', 'Радий'],
  89: ['Ac', 'Актиний'],
  90: ['Th', 'Торий'],
  91: ['Pa', 'Протактиний'],
  92: ['U', 'Уран'],
  93: ['Np', 'Нептуний'],
  94: ['Pu', 'Плутоний'],
  95: ['Am', 'Америций'],
  96: ['Cm', 'Кюрий'],
  97: ['Bk', 'Берклий'],
  98: ['Cf', 'Калифорний'],
  99: ['Es', 'Эйнштейний'],
  100: ['Fm', 'Фермий'],
  101: ['Md', 'Менделевий'],
  102: ['No', 'Нобелий'],
  103: ['Lr', 'Лоуренсий'],
  104: ['Rf', 'Резерфордий'],
  105: ['Db', 'Дубний'],
  106: ['Sg', 'Сиборгий'],
  107: ['Bh', 'Борий'],
  108: ['Hs', 'Хассий'],
  109: ['Mt', 'Мейтнерий'],
  110: ['Ds', 'Дармштадтий'],
  111: ['Rg', 'Рентгений'],
  112: ['Cn', 'Коперниций'],
  113: ['Nh', 'Нихоний'],
  114: ['Fl', 'Флеровий'],
  115: ['Mc', 'Московий'],
  116: ['Lv', 'Ливерморий'],
  117: ['Ts', 'Теннессин'],
  118: ['Og', 'Оганессон'],
  }

element_isotopes = {
  1: [1, 2, 3],
2: [4, 3],
3: [7, 6, 8, 9],
4: [7, 8, 9, 10],
5: [10, 11, 8, 7],
6: [12, 13, 14, 8, 19],
7: [14, 15, 13, 16],
8: [16, 17, 18, 15, 14],
9: [19, 18],
10: [20, 21, 22, 24],
11: [22, 23, 24],
12: [24, 25, 26, 28],
13: [13, 27, 26],
14: [28, 29, 30, 31, 32],
15: [31, 32, 33],
16: [32, 33, 34, 35, 36],
17: [35, 37, 36, 38],
18: [36, 38, 40, 39],
19: [40, 39, 41, 43],
20: [40, 48, 41],
21: [45, 46, 47, 48, 44],
22: [44, 46, 47],
23: [51, 50, 49, 48],
24: [50, 52, 53, 54, 51],
25: [55, 53, 54, 52],
26: [54, 56, 57, 58, 60],
27: [59, 60, 57, 58],
28: [58, 60, 61, 62, 64],
29: [63, 65, 67, 62, 64],
30: [64, 66, 67, 68, 70],
31: [69, 71, 67, 68],
32: [70, 72, 73, 74, 76],
33: [75, 73, 71, 72, 74],
34: [74, 76, 77, 78, 80],
35: [79, 81, 77],
36: [84, 86, 82, 83, 85],
37: [85, 87, 83, 82, 86],
38: [84, 86, 87, 88, 82],
39: [89, 91, 90, 88, 87],
40: [90, 91, 92, 94, 96],
41: [93, 92, 113],
42: [92, 100, 93, 99],
43: [99, 97, 98, "99m"],
44: [96, 104, 106, 103],
45: [103, 101, 102],
46: [102, 110, 103],
47: [107, 109, 105, 111, 112],
48: [113, 116, 109, 115],
49: [113, 115, 111],
50: [100, 132, 117, 119, 126],
51: [121, 123, 125, 124],
52: [126, 125, 128, 130],
53: [127, 129, 131, 123, 125],
54: [124, 136, 133, 135],
55: [133, 135, 131],
56: [132, 138, 133],
57: [139, 138, 137],
58: [136, 138, 140, 142, 144],
59: [141, 142, 143],
60: [142, 143, 144, 146, 150],
61: [151, 145, 146],
62: [144, 150, 152, 154, 146],
63: [151, 153, 154, 155],
64: [155, 157, 152, 153],
65: [159, 171, 135, 149],
66: [164, 162, 154],
67: [165, 161, 163, 166],
68: [166, 168, 169, 167],
69: [169, 171, 170],
70: [168, 176, 174, 169],
71: [175, 176, 177, 174],
72: [176, 180, 182],
73: [181, 180, 179, 182],
74: [182, 183, 184, 185, 180],
75: [185, 187, 186, 188],
76: [187, 188, 189, 190, 192],
77: [191, 193, 192, 188, 189],
78: [192, 194, 195, 196, 198],
79: [197, 171, 195, 196],
80: [194, 203, 199, 201],
81: [205, 203, 201, 199, 204],
82: [204, 206, 207, 208, 210],
83: [209, 210, 212, 213],
84: [209, 208, 214, 218, 210],
85: [210, 211, 213],
86: [222, 218, 220, 219],
87: [221, 223, 215, 216, 213],
88: [226, 222, 224],
89: [225, 227, 228, 217],
90: [232, 230, 229, 228],
91: [231, 230, 232],
92: [235, 233, 238, 220],
93: [237, 236, 235],
94: [238, 239, 240, 244],
95: [243, 241, 240],
96: [247, 248, 242, 244],
97: [249, 243, 247, 248],
98: [251, 249, 250, 252],
99: [253, 254, 252, 255],
100: [257, 253, 258, 260],
101: [258, 256, 244, 260],
102: [259, 261, 253, 250],
103: [266, 256, 251],
104: [253, 254, 267, 262, 270],
105: [268, 270, 266],
106: [261, 269, 261],
107: [262, 278, 270, 274],
108: [269, 270, 277],
109: [268, 270, 278, 282],
110: [270, 271, 281, 294],
111: [272, 274, 280, 291],
112: [283, 285, 291, 293],
113: [285, 286, 278],
114: [],
115: [],
116: [],
117: [],
118: [],
}
send_element_colors = {
  1: "#aa2e03", 
  2: "#fe6000",
  3: "#aa2e03",
  4: "#aa2e03",
  5: "#fe6000",
  6: "#aa2e03", 
  7: "#aa2e03", 
  8: "#aa2e03", 
  9: "#aa2e03",
  10: "#aa2e03",
  11: "#aa2e03",  
  12: "#aa2e03",
  13: "#aa2e03",
  14: "#aa2e03",
  15: "#fe6000", 
  16: "#aa2e03", 
  17: "#ae4f03",
  18: "#fe6000",
  19: "#aa2e03",
  20: "#aa2e03",
  21: "#aa2e03",
  22: "#aa2e03",
  23: "#aa2e03",
  24: "#aa2e03",
  25: "#aa2e03",
  26: "#fe6000",
  27: "#aa2e03",
  28: "#fe6000",
  29: "#aa2e03",
  30: "#aa2e03",
  31: "#fe6000",
  32: "#aa2e03",
  33: "#aa2e03",
  34: "#aa2e03", 
  35: "#aa2e03",
  37: "#aa2e03",
  38: "#aa2e03",
  39: "#aa2e03",
  40: "#aa2e03",
  41: "#aa2e03",
  42: "#aa2e03",
  43: "#aa2e03",
  44: "#aa2e03",
  45: "#aa2e03",
  46: "#aa2e03",
  47: "#aa2e03",
  48: "#aa2e03",
  49: "#fe6000",
  50: "#aa2e03",
  51: "#fe6000",
  52: "#aa2e03",
  36: "#aa2e03", 
  53: "#fe6000",
  54: "#aa2e03",
  55: "#aa2e03",
  56: "#fe6000",
  57: "#aa2e03",
  58: "#fe6000",
  59: "#fe6000",
  60: "#aa2e03",
  61: "#aa2e03",
  62: "#aa2e03",
  63: "#aa2e03",
  64: "#aa2e03",
  65: "#fe6000",
  66: "#aa2e03",
  67: "#aa2e03",
  68: "#aa2e03",
  69: "#aa2e03",
  70: "#aa2e03",
  71: "#aa2e03",
  72: "#aa2e03",
  73: "#aa2e03",
  74: "#aa2e03",
  75: "#fe6000",
  76: "#fe6000",
  77: "#fe6000",
  78: "#aa2e03",
  79: "#aa2e03",
  80: "#fe6000",
  81: "#fe6000", 
  82: "#fe6000", 
  83: "#aa2e03",
  84: "#aa2e03",
  85: "#fe6000",
  86: "#fe6000", 
  87: "#aa2e03",
  88: "#aa2e03",
  89: "#aa2e03",
  90: "#aa2e03",
  91: "#aa2e03",
  92: "#aa2e03",
  93: "#aa2e03",
  94: "#aa2e03",
  95: "#fe6000",
  96: "#aa2e03",
  97: "#aa2e03",
  98: "#aa2e03",
  99: "#aa2e03",
  100: "#fe6000",
  101: "#aa2e03",
  102: "#fe6000",
  103: "#aa2e03",
  104: "#aa2e03",
  105: "#aa2e03",
  106: "#aa2e03",
  107: "#aa2e03",
  108: "#aa2e03",
  109: "#aa2e03",
  110: "#aa2e03",
  111: "#fe6000",
  112: "#aa2e03",
  113: "#aa2e03", 
  114: "#aa2e03", 
  115: "#aa2e03", 
  116: "#aa2e03",
  117: "#aa2e03",
  118: "#fe6000",

}
send_element_colors_on = {
  1: "#ff1000", 
  2: "#ff2000",
  3: "#ff1000",
  4: "#ff1000",
  5: "#ff1000",
  6: "#ff1000", 
  7: "#ff1000", 
  8: "#ff1000", 
  9: "#ff1000",
  10: "#ff1000",
  11: "#ff1000",  
  12: "#ff1000",
  13: "#ff1000",
  14: "#ff1000",
  15: "#ff2000", 
  16: "#ff1000", 
  17: "#ff1000",
  18: "#ff2000",
  19: "#ff1000",
  20: "#ff1000",
  21: "#ff1000",
  22: "#ff1000",
  23: "#ff1000",
  24: "#ff1000",
  25: "#ff1000",
  26: "#ff2000",
  27: "#ff1000",
  28: "#ff2000",
  29: "#ff1000",
  30: "#ff1000",
  31: "#ff2000",
  32: "#ff1000",
  33: "#ff1000",
  34: "#ff1000", 
  35: "#ff1000",
  37: "#ff1000",
  38: "#ff1000",
  39: "#ff1000",
  40: "#ff1000",
  41: "#ff1000",
  42: "#ff1000",
  43: "#ff1000",
  44: "#ff1000",
  45: "#ff1000",
  46: "#ff1000",
  47: "#ff1000",
  48: "#ff1000",
  49: "#ff2000",
  50: "#ff1000",
  51: "#ff2000",
  52: "#ff1000",
  36: "#ff1000", 
  53: "#ff2000",
  54: "#ff1000",
  55: "#ff1000",
  56: "#ff2000",
  57: "#ff1000",
  58: "#ff2000",
  59: "#ff1000",
  60: "#ff1000",
  61: "#ff1000",
  62: "#ff1000",
  63: "#ff1000",
  64: "#ff1000",
  65: "#ff2000",
  66: "#ff1000",
  67: "#ff1000",
  68: "#ff1000",
  69: "#ff1000",
  70: "#ff1000",
  71: "#ff1000",
  72: "#ff1000",
  73: "#ff1000",
  74: "#ff1000",
  75: "#ff2000",
  76: "#ff2000",
  77: "#ff2000",
  78: "#ff1000",
  79: "#ff1000",
  80: "#ff2000",
  81: "#ff2000", 
  82: "#ff2000", 
  83: "#ff1000",
  84: "#ff1000",
  85: "#ff2000",
  86: "#ff2000", 
  87: "#ff1000",
  88: "#ff1000",
  89: "#ff1000",
  90: "#ff1000",
  91: "#ff1000",
  92: "#ff1000",
  93: "#ff1000",
  94: "#ff1000",
  95: "#ff2000",
  96: "#ff1000",
  97: "#ff1000",
  98: "#ff1000",
  99: "#ff1000",
  100: "#ff2000",
  101: "#ff1000",
  102: "#ff2000",
  103: "#ff1000",
  104: "#ff1000",
  105: "#ff1000",
  106: "#ff1000",
  107: "#ff1000",
  108: "#ff1000",
  109: "#ff1000",
  110: "#ff1000",
  111: "#ff2000",
  112: "#ff1000",
  113: "#ff1000", 
  114: "#ff1000", 
  115: "#ff1000", 
  116: "#ff1000",
  117: "#ff1000",
  118: "#ff2000",
}

element_colors = {
  1: "#CD8223", 
  2: "#CD8223",
  3: "#CD8223",
  4: "#CD8223",
  5: "#CD8223",
  6: "#CD8223", 
  7: "#CD8223", 
  8: "#CD8223", 
  9: "#CD8223",
  10: "#CD8223",
  11: "#CD8223",  
  12: "#CD8223",
  13: "#CD8223",
  14: "#CD8223",
  15: "#CD8223", 
  16: "#CD8223", 
  17: "#CD8223",
  18: "#CD8223",
  19: "#CD8223",
  20: "#CD8223",
  21: "#CD8223",
  22: "#CD8223",
  23: "#CD8223",
  24: "#CD8223",
  25: "#CD8223",
  26: "#CD8223",
  27: "#CD8223",
  28: "#CD8223",
  29: "#CD8223",
  30: "#CD8223",
  31: "#CD8223",
  32: "#CD8223",
  33: "#CD8223",
  34: "#CD8223", 
  35: "#CD8223",
  37: "#CD8223",
  38: "#CD8223",
  39: "#CD8223",
  40: "#CD8223",
  41: "#CD8223",
  42: "#CD8223",
  43: "#CD8223",
  44: "#CD8223",
  45: "#CD8223",
  46: "#CD8223",
  47: "#CD8223",
  48: "#CD8223",
  49: "#CD8223",
  50: "#CD8223",
  51: "#CD8223",
  52: "#CD8223",
  36: "#CD8223", 
  53: "#CD8223",
  54: "#CD8223",
  55: "#CD8223",
  56: "#CD8223",
  57: "#CD8223",
  58: "#CD8223",
  59: "#CD8223",
  60: "#CD8223",
  61: "#CD8223",
  62: "#CD8223",
  63: "#CD8223",
  64: "#CD8223",
  65: "#CD8223",
  66: "#CD8223",
  67: "#CD8223",
  68: "#CD8223",
  69: "#CD8223",
  70: "#CD8223",
  71: "#CD8223",
  72: "#CD8223",
  73: "#CD8223",
  74: "#CD8223",
  75: "#CD8223",
  76: "#CD8223",
  77: "#CD8223",
  78: "#CD8223",
  79: "#CD8223",
  80: "#CD8223",
  81: "#CD8223", 
  82: "#CD8223", 
  83: "#CD8223",
  84: "#CD8223",
  85: "#CD8223",
  86: "#CD8223", 
  87: "#CD8223",
  88: "#CD8223",
  89: "#CD8223",
  90: "#CD8223",
  91: "#CD8223",
  92: "#CD8223",
  93: "#CD8223",
  94: "#CD8223",
  95: "#CD8223",
  96: "#CD8223",
  97: "#CD8223",
  98: "#CD8223",
  99: "#CD8223",
  100: "#CD8223",
  101: "#CD8223",
  102: "#CD8223",
  103: "#CD8223",
  104: "#CD8223",
  105: "#CD8223",
  106: "#CD8223",
  107: "#CD8223",
  108: "#CD8223",
  109: "#CD8223",
  110: "#CD8223",
  111: "#CD8223",
  112: "#CD8223",
  113: "#CD8223", 
  114: "#CD8223", 
  115: "#CD8223", 
  116: "#CD8223",
  117: "#CD8223",
  118: "#CD8223",
}