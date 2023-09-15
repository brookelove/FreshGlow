const seedCategories = require("./category-seeds");
const seedComments = require("./comment-seeds");
const seedProducts = require("./product-seeds");
const seedTags = require("./tag-seeds");
const seedProductTags = require("./product-tag-seeds");
const seedUsers = require("./user-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync();

  console.log("\n----- DATABASE SYNCED -----\n");
  await seedCategories();

  console.log("\n----- CATEGORIES SEEDED -----\n");
  await seedProducts();
  console.log("\n----- PRODUCTS SEEDED -----\n");

  await seedComments();
  console.log("\n----- COMMENTS SEEDED -----\n");

  await seedTags();
  console.log("\n----- TAGS SEEDED -----\n");

  // await seedProductTags();
  // console.log("\n----- PRODUCT TAGS SEEDED -----\n");

  await seedUsers();
  console.log("\n----- USERS SEEDED -----\n");
};

seedAll();
