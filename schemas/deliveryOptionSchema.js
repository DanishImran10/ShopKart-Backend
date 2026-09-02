import mongoose from "mongoose"

const deliveryOptionSchema = new mongoose.Schema({
    index: {
        type: Number,
        required: true,
        min: 1,
        max: 3
    },
    deliveryDays: {
        type: Number,
        required: true
    },
    priceCents: {
        type: Number,
        required: true
    }
})

const DeliveryOptionModel = mongoose.model("DeliveryOption", deliveryOptionSchema)

export default DeliveryOptionModel