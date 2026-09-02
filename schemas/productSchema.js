import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  rating: {
    stars: {
      type: Number,
      required: true,
      min: 0,
      max: 5
    },
    count: {
      type: Number,
      required: true,
      min: 0
    }
  },
  priceCents: {
    type: Number,
    required: true,
    min: 0
  },
  keywords: {
    type: [String], // array of strings
    default: []
  }
}, {
  timestamps: true // optional: adds createdAt & updatedAt
});

const ProductModel = mongoose.model("Product", productSchema);

export default ProductModel;