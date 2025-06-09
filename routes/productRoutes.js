const express = require("express");
const {getAllProduct, getProductByID, addProduct, updateProductByID} = require("../controller/productController");

const router = express.Router();

router.get("/get", getAllProduct);
router.get("/get/:id", getProductByID);
router.put("/add", addProduct);
router.delete("/update/:id", updateProductByID);
// router.get("/delete/:id", deleteProductByDelete);

module.exports = router;