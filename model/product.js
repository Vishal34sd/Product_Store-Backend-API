const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    productID: {
        type: Number,
        required: true,
        trim: true
    },
    productName: {
        type: String,
        required: true,
        trim: true
    },
    quantity: { // fixed typo here
        type: Number,
        required: true
    },
    productBrand: {
        type: String,
        required: true,
        trim: true
    }
});

module.exports = mongoose.model("Product", productSchema);
