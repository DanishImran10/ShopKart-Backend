import mongoose from "mongoose";

const cartItemSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true
  },
  quantity: {
    type: Number,
    default: 1
  },
  deliveryOptionId: {
    type: Number,
    default: 1,
    min: 1,
    max: 3
  }
})

const CartItem = mongoose.model("CartItem", cartItemSchema)

export default CartItem