const mongoose = require('mongoose')
const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String},
    category: { type: String},
  }
);

const Product = mongoose.model("products",productSchema);

exports.Product = Product;