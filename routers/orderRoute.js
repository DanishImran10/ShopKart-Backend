import express from "express"
import { createOrder, deleteOrder, getOrders } from "./orderRouteController.js"

const orderRouter = express.Router()

orderRouter.post('/', createOrder)
orderRouter.get('/', getOrders)
orderRouter.delete('/:orderId', deleteOrder)

export default orderRouter