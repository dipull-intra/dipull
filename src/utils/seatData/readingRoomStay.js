const readingRoomStay = [
  {
    "grade": [1, 2],
    "gender": "male",
    "color": "#eb8334",
    "seat": {
      "I": [10, 11, 12, 13, 14, 15, 16, 17, 18],
      "J": [10, 11, 12, 13, 14, 15, 16, 17, 18],
      "K": [10, 11, 12, 13, 14, 15, 16, 17, 18],
      "L": [10, 11, 12, 13, 14, 15, 16, 17, 18],
      "M": [1, 2, 3, 4, 5, 6, 7],
      "N": [1, 2, 3, 4, 5, 6, 7],
    }
  },
  {
    "grade": [1, 2],
    "gender": "female",
    "color": "#c86dfc",
    "seat": {
      "F": [10, 11, 12, 13, 14, 15, 16, 17, 18],
      "G": [10, 11, 12, 13, 14, 15, 16, 17, 18],
      "H": [10, 11, 12, 13, 14, 15, 16, 17, 18],
    }
  },
  {
    "grade": [3],
    "gender": "male",
    "color": "#3B89FF",
    "seat": {
      // "A": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
      "B": [1, 2, 3, 4, 5, 6, 7, 8, 9, /* 10, 11, 12, 13, 14, 15, 16, 17, 18 */],
      "C": [1, 2, 3, 4, 5, 6, 7, 8, 9, /* 10, 11, 12, 13, 14, 15, 16, 17, 18 */],
      "D": [1, 2, 3, 4, 5, 6, 7, 8, 9, /* 10, 11, 12, 13, 14, 15, 16, 17, 18 */],
      "E": [1, 2, 3, 4, 5, 6, 7, 8, 9, /* 10, 11, 12, 13, 14, 15, 16, 17, 18 */],
      "F": [1, 2, 3, 4, 5, 6, 7, 8, 9, /* 10, 11, 12, 13, 14, 15, 16, 17, 18 */],
      "G": [1, 2, 3, 4, 5, 6, 7, 8, 9, /* 10, 11, 12, 13, 14, 15, 16, 17, 18 */],
      "H": [1, 2, 3, 4, 5, 6, 7, 8, 9, /* 10, 11, 12, 13, 14, 15, 16, 17, 18 */],
      "I": [1, 2, 3, 4, 5, 6, 7, 8, 9, /* 10, 11, 12, 13, 14, 15, 16, 17, 18 */],
      "J": [1, 2, 3, 4, 5, 6, 7, 8, 9, /* 10, 11, 12, 13, 14, 15, 16, 17, 18 */],
      "K": [1, 2, 3, 4, 5, 6, 7, 8, 9, /* 10, 11, 12, 13, 14, 15, 16, 17, 18 */],
      "L": [1, 2, 3, 4, 5, 6, 7, 8, 9, /* 10, 11, 12, 13, 14, 15, 16, 17, 18 */],
      // "M": [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
      // "N": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
    },
  },
  {
    "grade": [3],
    "gender": "female",
    "color": "#D65562",
    "seat": {
      "A": [/* 1, 2, 3, 4, 5, 6, 7, 8, 9, */ 10, 11, 12, 13, 14, 15, 16, 17, 18],
      "B": [/* 1, 2, 3, 4, 5, 6, 7, 8, 9, */ 10, 11, 12, 13, 14, 15, 16, 17, 18],
      "C": [/* 1, 2, 3, 4, 5, 6, 7, 8, 9, */ 10, 11, 12, 13, 14, 15, 16, 17, 18],
      "D": [/* 1, 2, 3, 4, 5, 6, 7, 8, 9, */ 10, 11, 12, 13, 14, 15, 16, 17, 18],
      "E": [/* 1, 2, 3, 4, 5, 6, 7, 8, 9, */ 10, 11, 12, 13, 14, 15, 16, 17, 18],
      "F": [/* 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18 */],
      "G": [/* 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18 */],
      "H": [/* 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18 */],
      "I": [/* 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18 */],
      "J": [/* 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18 */],
      "K": [/* 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18 */],
      "L": [/* 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18 */],
      "M": [/* 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18 */],
      // "N": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
    },
  }
];

export default readingRoomStay;