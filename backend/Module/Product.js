const mongoose = require("mongoose");

// Define the product schema
const productSchema = new mongoose.Schema({
    theme: String,
    clothing_type: String,
    fabric: String,
    fabric_color: String,
    theme_color: String,
    admin_id: String,
    image: Array
});

// Define the product image schema
const productImageSchema = new mongoose.Schema({
    pid: String,
    imgpath: Array
});

// Create models
const productModel = mongoose.model("products", productSchema);
const productImageModel = mongoose.model("productimages", productImageSchema);

// Export models
module.exports = {
    productModel,
    productImageModel
};
