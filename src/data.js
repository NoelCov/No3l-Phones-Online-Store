const data = {
  apple: [
    {
      name: "Iphone 12 Pro Max",
      imageUrl: "https://i.ibb.co/7rCswBq/iphone-12-pro.jpg",
      price: 1099.99,
    },
    {
      name: "Iphone 12 Pro",
      imageUrl: "https://i.ibb.co/z8cqgvX/iphone-12-pro-max-blue-hero.png",
      price: 1049.99,
    },
    {
      name: "Iphone 12",
      imageUrl: "https://i.ibb.co/vDb6bMf/iphone-12-family-select-2021.jpg",
      price: 979.99,
    },
    {
      name: "Iphone 12 mini",
      imageUrl:
        "https://i.ibb.co/LRXmsdd/iphone-12-mini-blue-select-2020-wid-470-hei-556-fmt-jpeg-qlt-95.jpg",
      price: 879.99,
    },
    {
      name: "Iphone SE",
      imageUrl: "https://i.ibb.co/zhz5D5K/iphone-se-red-select-2020.png",
      price: 649.99,
    },
    {
      name: "Iphone 11 Pro Max",
      imageUrl:
        "https://i.ibb.co/4Rdw5zs/refurb-iphone-11-pro-max-midnight-green-2019.jpg",
      price: 929.00,
    },
    {
      name: "Iphone 11 Pro",
      imageUrl:
        "https://i.ibb.co/4Rdw5zs/refurb-iphone-11-pro-max-midnight-green-2019.jpg",
      price: 899.99,
    },
    {
      name: "Iphone 11",
      imageUrl: "https://i.ibb.co/3dQsmxh/iphone11-black-select-2019.png",
      price: 759.99,
    },
  ],
  samsung: [
    {
      name: "Samsung Galaxy S21 Ultra 5g",
      imageUrl:
        "https://i.ibb.co/37hcxHx/215-samsung-galaxy-s21-ultra-back.jpg",
      price: 1249.99,
    },
    {
      name: "Samsung Galaxy S21 5g",
      imageUrl: "https://i.ibb.co/NytRmP1/02-samsung-palette-pink.jpg",
      price: 1049.99,
    },
    {
      name: "Samsung Galaxy S20 FE 5g",
      imageUrl: "https://i.ibb.co/3cCjjMK/71-Rx-Oft-Vo-QL-AC-SX569.jpg",
      price: 699.99,
    },
    {
      name: "Samsung Galaxy Note 20 Ultra 5g",
      imageUrl: "https://i.ibb.co/f8d2FT4/81-AT-Flc-EL-AC-SL1500.jpg",
      price: 1299.99,
    },
    {
      name: "Samsung Galaxy A02s",
      imageUrl: "https://i.ibb.co/Lgd96jW/Samsung-Galaxy-A02s-500x500.jpg",
      price: 154.00,
    },
    {
      name: "Samsung Galaxy A12",
      imageUrl: "https://i.ibb.co/gD0SLgs/819st-Uwa7-RL-AC-SL1500.jpg",
      price: 189.00,
    },
  ],
  lg: [
    {
      name: "LG Velvet 5G",
      imageUrl: "https://i.ibb.co/9gQ0Sy6/lg-velvet-1.jpg",
      price: 355.00,
    },
    {
      name: "LG W41 Pro",
      imageUrl: "https://i.ibb.co/GdrbW3H/lg-w41-pro-1.jpg",
      price: 129.99,
    },
    {
      name: "LG W41+",
      imageUrl: "https://i.ibb.co/0nSTXtr/lg-w41-plus-1.jpg",
      price: 79.99,
    },
    {
      name: "LG V60 ThinQ 5G",
      imageUrl: "https://i.ibb.co/6sYsgWP/lg-v60-thinq-5g-000.jpg",
      price: 379.00,
    },
  ],
  google: [
    {
      name: "Google Pixel 5",
      imageUrl: "https://i.ibb.co/dLHGmYy/google-pixel-5-5g-1.jpg",
      price: 699.99,
    },
    {
      name: "Google Pixel 4a 5G",
      imageUrl:
        "https://fdn2.gsmarena.com/vv/pics/google/google-pixel-4a-5g-1.jpg",
      price: 427.99,
    },
    {
      name: "Google Pixel 4a",
      imageUrl:
        "https://fdn2.gsmarena.com/vv/pics/google/google-pixel-4a-1.jpg",
      price: 527.99,
    },
    {
      name: "Google Pixel 4 XL",
      imageUrl:
        "https://fdn2.gsmarena.com/vv/pics/google/google-pixel-4-xl-1.jpg",
      price: 299.99,
    },
    {
      name: "Google Pixel 4",
      imageUrl: "https://fdn2.gsmarena.com/vv/pics/google/google-pixel-4-1.jpg",
      price: 249.99,
    },
  ],
  huawei: [
    {
      name: "Huawei nova 8 Pro 4G",
      imageUrl:
        "https://fdn2.gsmarena.com/vv/pics/huawei/huawei-nova-8-pro-5g-1.jpg",
      price: 577.99,
    },
    {
      name: "Huawei P30 Pro",
      imageUrl: "https://fdn2.gsmarena.com/vv/pics/huawei/huawei-p30-pro-1.jpg",
      price: 584.99,
    },
    {
      name: "Huawei P40 Pro",
      imageUrl:
        "https://fdn2.gsmarena.com/vv/pics/huawei/huawei-p40-pro-01.jpg",
      price: 759.99,
    },
    {
      name: "Huawei P40 lite",
      imageUrl:
        "https://fdn2.gsmarena.com/vv/pics/huawei/huawei-p40-lite-1.jpg",
      price: 197.99,
    },
    {
      name: "Huawei Mate 40 Pro",
      imageUrl:
        "https://fdn2.gsmarena.com/vv/pics/huawei/huawei-mate40-pro-1.jpg",
      price: 1129.99,
    },
    {
      name: "Huawei Nova 7i",
      imageUrl:
        "https://fdn2.gsmarena.com/vv/pics/huawei/huawei-p40-lite-1.jpg",
      price: 429.95,
    },
  ],
  lenovo: [
    {
      name: "Lenovo Legion 2 Pro",
      imageUrl:
        "https://fdn2.gsmarena.com/vv/pics/lenovo/lenovo-legion-2-pro-phone-duel2-1.jpg",
      price: 529.99,
    },
    {
      name: "Lenovo Legion Duel 2",
      imageUrl:
        "https://fdn2.gsmarena.com/vv/pics/lenovo/lenovo-legion-2-pro-phone-duel2-1.jpg",
      price: 1185.50,
    },
    {
      name: "Lenovo M10 Plus",
      imageUrl:
        "https://fdn2.gsmarena.com/vv/pics/lenovo/lenovo-m10-plus-1.jpg",
      price: 189.99,
    },
    {
      name: "Lenovo K12 Pro",
      imageUrl: "https://fdn2.gsmarena.com/vv/pics/lenovo/lenovo-k12-pro-1.jpg",
      price: 149.99,
    },
    {
      name: "Lenovo K10 Note",
      imageUrl:
        "https://fdn2.gsmarena.com/vv/pics/lenovo/lenovo-z6-youth-2.jpg",
      price: 699.99,
    },
  ],
  motorola: [
    {
      name: "Motorola Moto G60",
      imageUrl:
        "https://fdn2.gsmarena.com/vv/pics/motorola/motorola-moto-g60-1.jpg",
      price: 230.00,
    },
    {
      name: "Motorola Moto G100",
      imageUrl:
        "https://fdn2.gsmarena.com/vv/pics/motorola/motorola-moto-g100-ofic-01.jpg",
      price: 499.99,
    },
    {
      name: "Motorola Moto G20",
      imageUrl:
        "https://fdn2.gsmarena.com/vv/pics/motorola/motorola-moto-g20-1.jpg",
      price: 229.00
    },
    {
      name: "Motorola Moto G30",
      imageUrl:
        "https://fdn2.gsmarena.com/vv/pics/motorola/motorola-moto-g30-1.jpg",
      price: 309.00,
    },
    {
      name: "Motorola Moto G9 Plus",
      imageUrl:
        "https://fdn2.gsmarena.com/vv/pics/motorola/motorola-moto-g9-plus-1.jpg",
      price: 288.99,
    },
    {
      name: "Motorola Moto G40 Fusion",
      imageUrl:
        "https://fdn2.gsmarena.com/vv/pics/motorola/motorola-moto-g40-fusion-1.jpg",
      price: 217.99,
    },
  ],
  nokia: [
    {
      name: "Nokia X20",
      imageUrl: "https://fdn2.gsmarena.com/vv/pics/nokia/nokia-x20-1.jpg",
      price: 415.00,
    },
    {
      name: "Nokia G20",
      imageUrl: "https://fdn2.gsmarena.com/vv/pics/nokia/nokia-g20-1.jpg",
      price: 219.00,
    },
    {
      name: "Nokia 5.4",
      imageUrl: "https://fdn2.gsmarena.com/vv/pics/nokia/nokia-54-2020-1.jpg",
      price: 249.99,
    },
    {
      name: "Nokia X10",
      imageUrl: "https://fdn2.gsmarena.com/vv/pics/nokia/nokia-x10-1.jpg",
      price: 379.99,
    },
    {
      name: "Nokia 3.4",
      imageUrl: "https://fdn2.gsmarena.com/vv/pics/nokia/nokia-34-1.jpg",
      price: 179.99,
    },
    {
      name: "Nokia 8.3 5G",
      imageUrl: "https://fdn2.gsmarena.com/vv/pics/nokia/nokia-83-5g-1.jpg",
      price: 479.98,
    },
    {
      name: "Nokia G10",
      imageUrl: "https://fdn2.gsmarena.com/vv/pics/nokia/nokia-g10-1.jpg",
      price: 149.99,
    },
  ],
};

export default data;
