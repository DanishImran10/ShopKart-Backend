import express from "express"
import { getProducts } from "./productRouteController.js"

const productRouter = express.Router()

productRouter.get("/", getProducts)

export default productRouter