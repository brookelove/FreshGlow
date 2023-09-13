const Category = require("./Category");
const Comment = require("./Comment");
const Product = require("./Product");
const Order = require("./Order");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");
const User = require("./User");

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: "category_id",
  onDelete: "CASCADE",
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: "category_id",
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

// User belongToMany Products (through ProductTag)
User.belongsToMany(Product, {
  through: Order,
  // as: 'product_tags',
  foreignKey: "user_id",
});
// User belongToMany Products (through ProductTag)
Product.belongsToMany(User, {
  through: Order,
  // as: 'product_tags',
  foreignKey: "product_id",
});
// Cart.js
Cart.hasMany(Product, {
  foreignKey: "cartId", // This should match the foreign key in CartItem
  as: "cartItems", // An alias to access the cart items (optional)
});
Product.belongsTo(Cart, {
  foreignKey: "cartId", // This should match the foreign key in CartItem
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
