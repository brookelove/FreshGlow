const { Product } = require("../models");
const ProductData = [
  {
    product_name: "Red Lipstick",
    price: 12.99,
    stock: 50,
    image_url: "4.png",
    category_id: 1,
  },
  {
    product_name: "Liquid Foundation",
    price: 19.99,
    stock: 30,
    image_url: "3.png",
    category_id: 2,
  },
  {
    product_name: "Volumizing Mascara",
    price: 8.99,
    stock: 60,
    image_url: "2.png",
    category_id: 3,
  },
  {
    product_name: "Neutral Eyeshadow Palette",
    price: 24.99,
    stock: 40,
    image_url: "5.png",
    category_id: 4,
  },
  {
    product_name: "Blush Powder",
    price: 10.99,
    stock: 45,
    image_url: "6.png",
    category_id: 5,
  },
  {
    product_name: "Waterproof Eyeliner",
    price: 7.49,
    stock: 70,
    image_url: "1.png",
    category_id: 6,
  },
  {
    product_name: "Highlighter",
    price: 14.99,
    stock: 25,
    image_url: "13.png",
    category_id: 7,
  },
  {
    product_name: "Bronzer Compact",
    price: 11.99,
    stock: 35,
    image_url: "7.png",
    category_id: 8,
  },
  {
    product_name: "Brigtening Concealer",
    price: 9.99,
    stock: 55,
    image_url: "8.png",
    category_id: 9,
  },
  {
    product_name: "Makeup Brush Set",
    price: 29.99,
    stock: 20,
    image_url: "9.png",
    category_id: 10,
  },
  {
    product_name: "Matte Lipstick Set",
    price: 18.99,
    stock: 15,
    image_url: "11.png",
    category_id: 1,
  },
  {
    product_name: "BB Cream",
    price: 15.99,
    stock: 40,
    image_url: "10.png",
    category_id: 2,
  },
  {
    product_name: "Cream Blush",
    price: 11.49,
    stock: 35,
    image_url: "15.png",
    category_id: 5,
  },
  {
    product_name: "Makeup Sponge",
    price: 9.99,
    stock: 25,
    image_url: "14.png",
    category_id: 10,
  },
];

const seedProducts = () => Product.bulkCreate(ProductData);
module.exports = seedProducts;
