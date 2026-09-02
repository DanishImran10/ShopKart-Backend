import express from "express"
import {getDeliveryOptions} from "./deliveryOptionRouteController.js" 

const deliveryOptionRouter = express.Router()

deliveryOptionRouter.get('/', getDeliveryOptions)

export default deliveryOptionRouter