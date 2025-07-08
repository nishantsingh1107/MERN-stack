const express = require("express");
const { createProductController, getAllProducts, updateProductController } = require("./controllers.js");

const productRouter = express.Router();

productRouter.get("/", getAllProducts);
productRouter.post("/", createProductController);
productRouter.patch("/:productId", updateProductController);

module.exports = { productRouter };