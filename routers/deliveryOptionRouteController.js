import DeliveryOptionModel from "../schemas/deliveryOptionSchema.js"

async function getDeliveryOptions(req, res) {
    const result = await DeliveryOptionModel.find()
    res.status(200).json(result)
}

export { getDeliveryOptions }