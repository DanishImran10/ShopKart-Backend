import CartItemModel from "../schemas/cartItemSchema.js"
import asyncHandler from "../utils/asyncHandler.js"
import mongoose from "mongoose"

const addItem = asyncHandler(async (req, res) => {
    const item = req.body

    if (item.quantity === undefined || item.quantity <= 0)
    {
        return res.status(400).json({
            message: "Quantity not specified or incorrect!"
        })
    }

    if (item.deliveryOptionId !== undefined && !(item.deliveryOptionId >= 1 && item.deliveryOptionId <= 3))
    {
        return res.status(400).json({
            message: "Delivery option id must be between 1 and 3!"
        })
    }

    const result = await CartItemModel.findOneAndUpdate(
        { product: item.productId },
        { $inc: { quantity: Number(item.quantity) } },
        { new: true, upsert: true, includeResultMetadata: true }
    )

    if (result.lastErrorObject.updatedExisting)
    {
        res.status(200).json({ message: `product: ${item.productId} quantity updated.` })
    }
    else
    {
        if (item.deliveryOptionId !== undefined)
            result.value.deliveryOptionId = Number(item.deliveryOptionId)

        await result.value.save()

        res.status(201).json({
            message: "Item added to cart successfully"
        })  
    }
})

const getItems = asyncHandler(async (req, res) => {
    const items = await CartItemModel.find().populate("product")
    res.status(200).json(items)
})

const updateItem = asyncHandler(async (req, res) => {
    const { cartItemId } = req.params
    const item = req.body

    if (!mongoose.Types.ObjectId.isValid(cartItemId))
    {
        return res.status(400).json({
            message: `Invalid id: ${cartItemId}`
        })
    }

    const update = {}

    if (item.quantity !== undefined && item.quantity > 0)
        update.quantity = item.quantity

    if (item.deliveryOptionId !== undefined && item.deliveryOptionId >= 1 && item.deliveryOptionId <= 3)
        update.deliveryOptionId = item.deliveryOptionId

    const resultDoc = await CartItemModel.findOneAndUpdate(
        { _id: cartItemId },
        { $set: update }
    )

    if (resultDoc)
    {
        res.status(200).json({
            message: `Cart Item: ${cartItemId} updated successfully.`
        })
    }
    else
    {
        res.status(404).json({
            message: `Cart Item: ${cartItemId} does not exist in the cart!`
        })
    }
})

const deleteItem = asyncHandler(async (req, res) => {
    const { cartItemId } = req.params

    if (!mongoose.Types.ObjectId.isValid(cartItemId))
    {
        return res.status(400).json({
            message: `Invalid id: ${cartItemId}`
        })
    }

    const result = await CartItemModel.findByIdAndDelete(cartItemId)

    if (result)
    {
        res.status(200).json({
            message: "Deleted successfully"
        })
    }
    else
    {
        res.status(404).json({
            message: `Cart Item ${cartItemId} doesn't exist!`
        })
    }
})

const deleteAllItems = asyncHandler(async (req, res) => {
    await CartItemModel.deleteMany({})
})

export { addItem, getItems, updateItem, deleteItem, deleteAllItems }