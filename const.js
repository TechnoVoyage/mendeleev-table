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
43: [99, 97, 98, 99],
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
97: [249, 243, 247, 249],
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
  1: "#f7925c", 
  2: "#f7925c",
  3: "#f7925c",
  4: "#f7925c",
  5: "#f7925c",
  6: "#f7925c", 
  7: "#f7925c", 
  8: "#f7925c", 
  9: "#f7925c",
  10: "#f7925c",
  11: "#f7925c",  
  12: "#f7925c",
  13: "#f7925c",
  14: "#f7925c",
  15: "#f7925c", 
  16: "#f7925c", 
  17: "#f7925c",
  18: "#f7925c",
  19: "#f7925c",
  20: "#f7925c",
  21: "#f7925c",
  22: "#f7925c",
  23: "#f7925c",
  24: "#f7925c",
  25: "#f7925c",
  26: "#f7925c",
  27: "#f7925c",
  28: "#f7925c",
  29: "#f7925c",
  30: "#f7925c",
  31: "#f7925c",
  32: "#f7925c",
  33: "#f7925c",
  34: "#f7925c", 
  35: "#f7925c",
  37: "#f7925c",
  38: "#f7925c",
  39: "#f7925c",
  40: "#f7925c",
  41: "#f7925c",
  42: "#f7925c",
  43: "#f7925c",
  44: "#f7925c",
  45: "#f7925c",
  46: "#f7925c",
  47: "#f7925c",
  48: "#f7925c",
  49: "#f7925c",
  50: "#f7925c",
  51: "#f7925c",
  52: "#f7925c",
  36: "#f7925c", 
  53: "#f7925c",
  54: "#f7925c",
  55: "#f7925c",
  56: "#f7925c",
  57: "#f7925c",
  58: "#f7925c",
  59: "#f7925c",
  60: "#f7925c",
  61: "#f7925c",
  62: "#f7925c",
  63: "#f7925c",
  64: "#f7925c",
  65: "#f7925c",
  66: "#f7925c",
  67: "#f7925c",
  68: "#f7925c",
  69: "#f7925c",
  70: "#f7925c",
  71: "#f7925c",
  72: "#f7925c",
  73: "#f7925c",
  74: "#f7925c",
  75: "#f7925c",
  76: "#f7925c",
  77: "#f7925c",
  78: "#f7925c",
  79: "#f7925c",
  80: "#f7925c",
  81: "#f7925c", 
  82: "#f7925c", 
  83: "#f7925c",
  84: "#f7925c",
  85: "#f7925c",
  86: "#f7925c", 
  87: "#f7925c",
  88: "#f7925c",
  89: "#f7925c",
  90: "#f7925c",
  91: "#f7925c",
  92: "#f7925c",
  93: "#f7925c",
  94: "#f7925c",
  95: "#f7925c",
  96: "#f7925c",
  97: "#f7925c",
  98: "#f7925c",
  99: "#f7925c",
  100: "#f7925c",
  101: "#f7925c",
  102: "#f7925c",
  103: "#f7925c",
  104: "#f7925c",
  105: "#f7925c",
  106: "#f7925c",
  107: "#f7925c",
  108: "#f7925c",
  109: "#f7925c",
  110: "#f7925c",
  111: "#f7925c",
  112: "#f7925c",
  113: "#f7925c", 
  114: "#f7925c", 
  115: "#f7925c", 
  116: "#f7925c",
  117: "#f7925c",
  118: "#f7925c",
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