const router = require("express").Router();
const categoryRoutes = require("./category-routes.js");
const productRoutes = require("./product-routes.js");
const tagRoutes = require("./tag-routes.js");

router.use("/categories", categoryRoutes);
router.use("/products", productRoutes);
router.use("/tags", tagRoutes);

module.exports = router;
