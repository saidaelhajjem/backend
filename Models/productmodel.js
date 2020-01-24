const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const productSchema = mongoose.model(
  "product",
  new mongoose.Schema({
    name: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      required: true,
      trim: true
    },
    price: {
      type: String,
      required: true,
      trim: true
    },
    quantity: {
      type: String,
      required: true,
      trim: true
    },
    image: {
      type: String,
      required: true
    }
  })
);
module.exports = productSchema;
