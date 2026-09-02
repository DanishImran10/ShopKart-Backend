import ProductModel from "../schemas/productSchema.js"
import asyncHandler from "../utils/asyncHandler.js"

const getProducts = asyncHandler(async (req, res) => {
    const products = await ProductModel.find()
    res.status(200).json(products)
})

export {getProducts}