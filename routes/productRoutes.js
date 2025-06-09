const express = require("express");
const {getAllProduct, getProductByID, addProduct, updateProductByID, deleteProductByID} = require("../controller/productController");

const router = express.Router();

router.get("/get", getAllProduct);
router.get("/get/:id", getProductByID);
router.post("/add", addProduct);
router.put("/update/:id", updateProductByID);
router.delete("/delete/:id", deleteProductByID);

module.exports = router;