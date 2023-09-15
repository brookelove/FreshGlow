const router = require("express").Router();
const categoryRoutes = require("./category-routes");
const productRoutes = require("./product-routes");
const tagRoutes = require("./tag-routes");
const userRoutes = require("./user-routes.js");
const commentRoutes = require("./comment-routes");
const orderRoutes = require("./order-routes");

router.use("/categories", categoryRoutes);
router.use("/products", productRoutes);
router.use("/tags", tagRoutes);
router.use("/user", userRoutes);
router.use("/comment", commentRoutes);
router.use("/orders", orderRoutes);

module.exports = router;
