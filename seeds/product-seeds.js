const { Product } = require("../models");
const ProductData = [
  {
    product_name: "Red Lipstick",
    price: 12.99,
    stock: 50,
    image_url: "../Images/4.jpg",
    category_id: 1,
  },
  {
    product_name: "Liquid Foundation",
    price: 19.99,
    stock: 30,
    image_url: "../Images/3.jpg",
    category_id: 2,
  },
  {
    product_name: "Volumizing Mascara",
    price: 8.99,
    stock: 60,
    image_url: "../Images/2.jpg",
    category_id: 3,
  },
  {
    product_name: "Neutral Eyeshadow Palette",
    price: 24.99,
    stock: 40,
    image_url: "../Images/5.jpg",
    category_id: 4,
  },
  {
    product_name: "Blush Powder",
    price: 10.99,
    stock: 45,
    image_url: "../Images/6.jpg",
    category_id: 5,
  },
  {
    product_name: "Waterproof Eyeliner",
    price: 7.49,
    stock: 70,
    image_url: "../Images/1.jpg",
    category_id: 6,
  },
  {
    product_name: "Highlighter",
    price: 14.99,
    stock: 25,
    image_url: "../Images/13.jpg",
    category_id: 7,
  },
  {
    product_name: "Bronzer Compact",
    price: 11.99,
    stock: 35,
    image_url: "../Images/7.jpg",
    category_id: 8,
  },
  {
    product_name: "Brigtening Concealer",
    price: 9.99,
    stock: 55,
    image_url: "../Images/8.jpg",
    category_id: 9,
  },
  {
    product_name: "Makeup Brush Set",
    price: 29.99,
    stock: 20,
    image_url: "../Images/9.jpg",
    category_id: 10,
  },
  {
    product_name: "Matte Lipstick Set",
    price: 18.99,
    stock: 15,
    image_url: "../Images/11.jpg",
    category_id: 1,
  },
  {
    product_name: "BB Cream",
    price: 15.99,
    stock: 40,
    image_url: "../Images/10.jpg",
    category_id: 2,
  },
  {
    product_name: "Cream Blush",
    price: 11.49,
    stock: 35,
    image_url: "../Images/15jpg",
    category_id: 5,
  },
  {
    product_name: "Makeup Sponge",
    price: 9.99,
    stock: 25,
    image_url: "../Images/14.jpg",
    category_id: 10,
  },
];

const seedProducts = () => Product.bulkCreate(ProductData);
module.exports = seedProducts;
