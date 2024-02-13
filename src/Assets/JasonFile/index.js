import {
  MenBrown1,
  MenBlack2,
  MenWhite3,
  MenGreen4,
  MenBlack5,
  MenWhite6,
  MenBlack7,
  MenWhite8,
  MenWhite9,
  MenBlue10,
  MenBrown11,
  MenBlue12,
  MenOrange13,
  MenBlack14,
  WomenBlack17,
  WomenOrange28,
  WomenWhite18,
  WomenBrown16,
  WomenBrown19,
  WomenBlue20,
  WomenBlack21,
  WomenBlue22,
  WomenBlack23,
  WomenWhite24,
  WomenPink25,
  WomenGreen26,
  WomenPink27,
  WomenWhite29,
  KidsBlue30,
  KidsWhite31,
  KidsBlack32,
  KidsBlue33,
  KidsBlack34,
  KidsRed35,
  KidsWhite36,
  KidsRed37,
  KidsBlack38,
  KidsWhite39,
  KidsBlue40,
  KidsBlack41,
  KidsOrange42,
  KidsBlack43,
  KidsWhitw44,
  KidsRed45,
  MenOrangek15,
} from "../Images/index";



export const Product = [
  {
    id: 1,
    title: "Men T-shirt",
    price: 1499,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men",
    image: MenBrown1,
    rating: {
      rate: 3.9,
      count: 120,
    },
    variations: [
      {
        color: "Brown",
        sizes: [
          { size: "S", image: MenBrown1 },
          // { size: "M", image: MenBrown1 },
          { size: "L", image: MenBrown1 },
        ],
      },
      {
        color: "Black",
        sizes: [
          { size: "S", image: MenBlack2 },
          // { size: "M", image: MenBlack2 },
          { size: "L", image: MenBlack2 },
        ],
      },
      {
        color: "White",
        sizes: [
          { size: "S", image: MenWhite3 },
          // { size: "M", image: MenWhite3 },
          { size: "L", image: MenWhite3 },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Women Jackets",
    price: 2500,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "Women",
    image: WomenBrown19,
    rating: {
      rate: 3.2,
      count: 240,
    },
    variations: [
      {
        color: "Brown",
        sizes: [
          { size: "S", image: WomenBrown19 },
          { size: "M", image: WomenBrown19 },
          { size: "L", image: WomenBrown19 },
        ],
      },
      {
        color: "Blue",
        sizes: [
          { size: "S", image: WomenBlue20 },
          { size: "M", image: WomenBlue20 },
          { size: "l", image: WomenBlue20 },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Kids Swaters",
    price: 1500,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "Kids",
    image: KidsBlack34,
    rating: {
      rate: 5.3,
      count: 300,
    },
    variations: [
      {
        color: "Black",
        sizes: [
          { size: "S", image: KidsBlack34 },
          { size: "M", image: KidsBlack34 },
          { size: "L", image: KidsBlack34 },
        ],
      },
      {
        color: "Red",
        sizes: [
          { size: "S", image: KidsRed35 },
          { size: "M", image: KidsRed35 },
          { size: "L", image: KidsRed35 },
        ],
      },
      {
        color: "White",
        sizes: [
          { size: "S", image: KidsWhite36 },
          { size: "M", image: KidsWhite36 },
          { size: "L", image: KidsWhite36 },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Women Casual Top",
    price: 1950,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "Women",
    image: WomenPink27,
    rating: {
      rate: 3.8,
      count: 70,
    },
    variations: [
      {
        color: "Pink",
        sizes: [
          { size: "S", image: WomenPink27 },
          { size: "M", image: WomenPink27 },
          { size: "L", image: WomenPink27 },
        ],
      },
      {
        color: "Orange",
        sizes: [
          { size: "S", image: WomenOrange28 },
          { size: "M", image: WomenOrange28 },
          { size: "L", image: WomenOrange28 },
        ],
      },
      {
        color: "White",
        sizes: [
          { size: "S", image: WomenWhite29 },
          { size: "M", image: WomenWhite29 },
          { size: "L", image: WomenWhite29 },
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Men Jackets",
    price: 3500,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men",
    image: MenBlue12,
    rating: {
      rate: 5.0,
      count: 200,
    },
    variations: [
      {
        color: "Blue",
        sizes: [
          { size: "S", image: MenBlue12 },
          { size: "M", image: MenBlue12 },
          { size: "L", image: MenBlue12 },
        ],
      },
      {
        color: "Orange",
        sizes: [
          { size: "S", image: MenOrange13 },
          { size: "M", image: MenOrange13 },
          { size: "L", image: MenOrange13 },
        ],
      },
    ],
  },
  {
    id: 6,
    title: "Men Cap",
    price: 900,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men",
    image: MenBlack14,
    rating: {
      rate: 3.2,
      count: 100,
    },
    variations: [
      {
        color: "Black",
        sizes: [
          { size: "S", image: MenBlack14 },
          { size: "M", image: MenBlack14 },
          { size: "L", image: MenBlack14 },
        ],
      },
      {
        color: "Orange",
        sizes: [
          { size: "S", image: MenOrangek15 },
          { size: "S", image: MenOrangek15 },
          { size: "S", image: MenOrangek15 },
        ],
      },
    ],
  },
  {
    id: 7,
    title: "Kids Casual T-shirts",
    price: 800,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "Kids",
    image: KidsBlack43,
    rating: {
      rate: 4.3,
      count: 150,
    },
    variations: [
      {
        color: "Black",
        sizes: [
          { size: "S", image: KidsBlack43 },
          { size: "M", image: KidsBlack43 },
          { size: "L", image: KidsBlack43 },
        ],
      },
      {
        color: "White",
        sizes: [
          { size: "S", image: KidsWhitw44 },
          { size: "M", image: KidsWhitw44 },
          { size: "L", image: KidsWhitw44 },
        ],
      },
      {
        color: "Red",
        sizes: [
          { size: "S", image: KidsRed45 },
          { size: "M", image: KidsRed45 },
          { size: "L", image: KidsRed45 },
        ],
      },
    ],
  },
  {
    id: 8,
    title: "Men T-shirt",
    price: 1099,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men",
    image: MenGreen4,
    rating: {
      rate: 4.9,
      count: 150,
    },
    variations: [
      {
        color: "Green",
        sizes: [
          { size: "S", image: MenGreen4 },
          { size: "M", image: MenGreen4 },
          { size: "L", image: MenGreen4 },
        ],
      },
      {
        color: "Black",
        sizes: [
          { size: "S", image: MenBlack5 },
          { size: "M", image: MenBlack5 },
          { size: "L", image: MenBlack5 },
        ],
      },
      {
        color: "White",
        sizes: [
          { size: "S", image: MenWhite6 },
          { size: "M", image: MenWhite6 },
          { size: "L", image: MenWhite6 },
        ],
      },
    ],
  },
  {
    id: 9,
    title: "Women Jeanse",
    price: 1950,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "Women",
    image: WomenBlack21,
    rating: {
      rate: 5.2,
      count: 340,
    },
    variations: [
      {
        color: "Black",
        sizes: [
          { size: "S", image: WomenBlack21 },
          { size: "M", image: WomenBlack21 },
          { size: "L", image: WomenBlack21 },
        ],
      },
      {
        color: "Blue",
        sizes: [
          { size: "S", image: WomenBlue22 },
          { size: "M", image: WomenBlue22 },
          { size: "L", image: WomenBlue22 },
        ],
      },
    ],
  },
  {
    id: 10,
    title: "Women Casual Top",
    price: 1950,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "Women",
    image: WomenBlack23,
    rating: {
      rate: 4.4,
      count: 140,
    },
    variations: [
      {
        color: "Black",
        sizes: [
          { size: "S", image: WomenBlack23 },
          { size: "M", image: WomenBlack23 },
          { size: "L", image: WomenBlack23 },
        ],
      },
      {
        color: "White",
        sizes: [
          { size: "S", image: WomenWhite24 },
          { size: "M", image: WomenWhite24 },
          { size: "L", image: WomenWhite24 },
        ],
      },
    ],
  },
  {
    id: 11,
    title: "Women Casual Top",
    price: 1150,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "Women",
    image: WomenPink25,
    rating: {
      rate: 4.8,
      count: 270,
    },
    variations: [
      {
        color: "Pink",
        sizes: [
          { size: "S", image: WomenPink25 },
          { size: "M", image: WomenPink25 },
          { size: "L", image: WomenPink25 },
        ],
      },
      {
        color: "Green",
        sizes: [
          { size: "S", image: WomenGreen26 },
          { size: "M", image: WomenGreen26 },
          { size: "L", image: WomenGreen26 },
        ],
      },
    ],
  },
  {
    id: 12,
    title: "Men Shirt",
    price: 2500,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men",
    image: MenWhite9,
    rating: {
      rate: 4.5,
      count: 100,
    },
    variations: [
      {
        color: "White",
        sizes: [
          { size: "S", image: MenWhite9 },
          { size: "M", image: MenWhite9 },
          { size: "L", image: MenWhite9 },
        ],
      },
      {
        color: "Blue",
        sizes: [
          { size: "S", image: MenBlue10 },
          { size: "M", image: MenBlue10 },
          { size: "L", image: MenBlue10 },
        ],
      },
      {
        color: "Brown",
        sizes: [
          { size: "S", image: MenBrown11 },
          { size: "M", image: MenBrown11 },
          { size: "L", image: MenBrown11 },
        ],
      },
    ],
  },
  {
    id: 13,
    title: "Kids Jackets",
    price: 1550,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "Kids",
    image: KidsBlue30,
    rating: {
      rate: 4.9,
      count: 270,
    },
    variations: [
      {
        color: "Blue",
        sizes: [
          { size: "S", image: KidsBlue30 },
          { size: "M", image: KidsBlue30 },
          { size: "L", image: KidsBlue30 },
        ],
      },
    ],
  },
  {
    id: 14,
    title: "Kids Jeanse",
    price: 1550,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "Kids",
    image: KidsWhite31,
    rating: {
      rate: 3.3,
      count: 100,
    },
    variations: [
      {
        color: "White",
        sizes: [
          { size: "S", image: KidsWhite31 },
          { size: "M", image: KidsWhite31 },
          { size: "L", image: KidsWhite31 },
        ],
      },
      {
        color: "Black",
        sizes: [
          { size: "S", image: KidsBlack32 },
          { size: "M", image: KidsBlack32 },
          { size: "L", image: KidsBlack32 },
        ],
      },
      {
        color: "Blue",
        sizes: [
          { size: "S", image: KidsBlue33 },
          { size: "M", image: KidsBlue33 },
          { size: "L", image: KidsBlue33 },
        ],
      },
    ],
  },
  {
    id: 15,
    title: "Men Shirt",
    price: 1999,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men",
    image: MenBlack7,
    rating: {
      rate: 3.9,
      count: 110,
    },
    variations: [
      {
        color: "Black",
        sizes: [
          { size: "S", image: MenBlack7 },
          { size: "M", image: MenBlack7 },
          { size: "L", image: MenBlack7 },
        ],
      },
      {
        color: "White",
        sizes: [
          { size: "S", image: MenWhite8 },
          { size: "M", image: MenWhite8 },
          { size: "L", image: MenWhite8 },
        ],
      },
    ],
  },
  {
    id: 16,
    title: "Kids T-shirts",
    price: 1100,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "Kids",
    image: KidsRed37,
    rating: {
      rate: 3.3,
      count: 100,
    },
    variations: [
      {
        color: "Red",
        sizes: [
          { size: "S", image: KidsRed37 },
          { size: "M", image: KidsRed37 },
          { size: "L", image: KidsRed37 },
        ],
      },
      {
        color: "Black",
        sizes: [
          { size: "S", image: KidsBlack38 },
          { size: "M", image: KidsBlack38 },
          { size: "L", image: KidsBlack38 },
        ],
      },
      {
        color: "White",
        sizes: [
          { size: "S", image: KidsWhite39 },
          { size: "M", image: KidsWhite39 },
          { size: "L", image: KidsWhite39 },
        ],
      },
    ],
  },
  {
    id: 17,
    title: "Kids Jackets",
    price: 2500,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "Kids",
    image: KidsBlue40,
    rating: {
      rate: 5.3,
      count: 300,
    },
    variations: [
      {
        color: "Blue",
        sizes: [
          { size: "S", image: KidsBlue40 },
          { size: "M", image: KidsBlue40 },
          { size: "L", image: KidsBlue40 },
        ],
      },
      {
        color: "Black",
        sizes: [
          { size: "S", image: KidsBlack41 },
          { size: "M", image: KidsBlack41 },
          { size: "L", image: KidsBlack41 },
        ],
      },
      {
        color: "Orange",
        sizes: [
          { size: "S", image: KidsOrange42 },
          { size: "M", image: KidsOrange42 },
          { size: "L", image: KidsOrange42 },
        ],
      },
    ],
  },
  {
    id: 18,
    title: "Women Top",
    price: 1100,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "Women",
    image: WomenBrown16,
    rating: {
      rate: 4.2,
      count: 140,
    },
    variations: [
      {
        color: "Brown",
        sizes: [
          { size: "S", image: WomenBrown16 },
          { size: "M", image: WomenBrown16 },
          { size: "L", image: WomenBrown16 },
        ],
      },
      {
        color: "Black",
        sizes: [
          { size: "S", image: WomenBlack17 },
          { size: "M", image: WomenBlack17 },
          { size: "L", image: WomenBlack17 },
        ],
      },
      {
        color: "White",
        sizes: [
          { size: "S", image: WomenWhite18 },
          { size: "M", image: WomenWhite18 },
          { size: "L", image: WomenWhite18 },
        ],
      },
    ],
  },
];
