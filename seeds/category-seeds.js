const { Category } = require("../models");

const categoryData = [
  { category_name: "Body" },
  { category_name: "Face" },
  { category_name: "Eyes" },
  { category_name: "Hair" },
  { category_name: "Lips" },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
