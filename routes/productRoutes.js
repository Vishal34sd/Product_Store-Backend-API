const express = require("express");
const {getAllProduct, getProductByID} = require("../controller/product");

const router = express.Router();

router.get("/get", getAllProduct);
router.get("/get/:id", getProductByID);
// router.post("/add", addProduct);
// router.get("/update", updateProduct);
// router.get("/delete", deleteProduct);

module.exports = router;