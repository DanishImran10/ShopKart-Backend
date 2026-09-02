import OrderModel from "../schemas/orderSchema.js"
import asyncHandler from "../utils/asyncHandler.js"
import mongoose from "mongoose"
import { deleteAllItems } from "./cartItemRouteController.js"

const createOrder = asyncHandler(async (req, res) => {
    const {orderTimeMs, totalCostCents, products} = req.body
    console.log(req.body)

    if (orderTimeMs === undefined || totalCostCents === undefined || products === undefined
        || !Array.isArray(products) || products.length === 0)
    {
        return res.status(404).json({
                message: "Order details insufficient!"
        })
    }

    const result = await OrderModel.create({
        orderTimeMs: Number(orderTimeMs),
        totalCostCents: Number(totalCostCents),
        products
    })

    await deleteAllItems()

    res.status(201).json({
        message: "Order created successfully"
    })
})

const getOrders = asyncHandler(async (req, res) => {
    const orders = await OrderModel.find().populate("products.product")
    res.status(200).json(orders)
})

const deleteOrder = asyncHandler(async (req, res) => {
    const { orderId } = req.params

    if (!mongoose.Types.ObjectId.isValid(orderId))
    {
        return res.status(400).json({
            message: `Invalid id: ${cartItemId}`
        })
    }

    const result = await OrderModel.findByIdAndDelete(orderId)

    if (result)
    {
        res.status(200).json({
            message: `Order: ${orderId} deleted successfully`
        })
    }
    else
    {
        res.status(404).json({
            message: `Order: ${orderId} does not exist!`
        })
    }
})

export {createOrder, getOrders, deleteOrder}