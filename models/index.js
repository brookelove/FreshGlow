const Category = require("./Category");
const Comment = require("./Comment");
const Product = require("./Product");
const Order = require("./Order");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");
const User = require("./User");

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: "category_id",
});

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: "category_id",
  onDelete: "SET NULL",
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  // as: 'product_tags',
  foreignKey: "product_id",
});

// Products have many Comments
Product.hasMany(Comment, {
  foreignKey: "productId",
  onDelete: "CASCADE",
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  // as: 'product_tags',
  foreignKey: "tag_id",
});
// Comments belondsToMany User
Comment.belongsTo(User, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});

// User have many Products
User.hasMany(Product, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});
// User have many Products
User.hasMany(Order, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});

//Product have many Order
Product.hasMany(Order, {
  foreignKey: "product_id",
});

Order.belongsTo(User, {
  foreignKey: "user_id",
});

Order.belongsTo(Product, {
  foreignKey: "product_id",
});

module.exports = {
  Category,
  Comment,
  Product,
  Order,
  Tag,
  ProductTag,
  User,
};
