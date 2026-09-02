import express from "express"
import dotenv from "dotenv"
import connectDB from "./connectDB.js"
import productRouter from "./routers/productRoute.js"
import cartItemRouter from "./routers/cartItemRoute.js"
import orderRouter from "./routers/orderRoute.js"
import deliveryOptionRouter from "./routers/deliveryOptionRoute.js"
import cors from "cors"

dotenv.config({
    path: "./.env"
})
    
start()

async function start() {
    await connectDB(process.env.DB_NAME)

    const app = express()

    app.use(cors())
    app.use(express.json())

    app.use('/api/products', productRouter)
    app.use('/api/cart', cartItemRouter)
    app.use('/api/orders', orderRouter)
    app.use('/api/deliveryOptions', deliveryOptionRouter)

    app.use((err, req, res, next) => {
        res.status(500).json({
            message: err.message || "Internal Server Error"
        });
    });

    const server = app.listen(5000, () => {
        console.log("Server is running on port 5000")
    })
}