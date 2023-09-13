const { Category } = require("../models");
const categoryData = [
  { category_name: "Lipstick" },
  { category_name: "Foundation" },
  { category_name: "Mascara" },
  { category_name: "Eyeshadow" },
  { category_name: "Blush" },
  { category_name: "Eyeliner" },
  { category_name: "Highlighter" },
  { category_name: "Bronzer" },
  { category_name: "Concealer" },
  { category_name: "Makeup Brushes" },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
