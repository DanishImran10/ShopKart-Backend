import mongoose from "mongoose"

const orderSchema = new mongoose.Schema({
    orderTimeMs: {
        type: Number,
        required: true,
    },
    totalCostCents: {
        type: Number,
        required: true,
    },
    products: [
        {
            _id: false,
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product",
                required: true
            },
            quantity: {
                type: Number,
                required: true,
                min: 1
            },
            estimatedDeliveryTimeMs: {
                type: Number,
                required: true
            }
        }
    ]
})

const OrderModel = mongoose.model("Order", orderSchema)

export default OrderModel