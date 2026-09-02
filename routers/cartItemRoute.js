import express from "express"
import { addItem, deleteItem, getItems, updateItem } from "./cartItemRouteController.js"

const cartItemRouter = express.Router()

cartItemRouter.post('/', addItem)
cartItemRouter.get('/', getItems)
cartItemRouter.put('/:cartItemId', updateItem)
cartItemRouter.delete('/:cartItemId', deleteItem)

export default cartItemRouter