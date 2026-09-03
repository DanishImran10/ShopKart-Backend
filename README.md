# ShopKart Backend

A RESTful API backend for an e-commerce application built using Node.js and Express. This backend handles product management, cart operations, order processing, and database interactions using MongoDB.

---

## Features

* **RESTful API Architecture**:

  * Structured endpoints for products, cart, and orders
  * Clean separation of routes and controllers

* **Database Integration**:

  * MongoDB database using Mongoose ODM
  * Schema-based data modeling

* **Cart & Order Management**:

  * Add/update/remove cart items
  * Create and retrieve orders

* **Dynamic Data Handling**:

  * Stores and retrieves real-time user data
  * Supports relational referencing using ObjectIds

* **Middleware Support**:

  * JSON parsing using `express.json()`
  * Custom middleware for validation and error handling

* **Error Handling**:

  * Centralized error handling middleware
  * Graceful API responses

* **Data Validation**:

  * Validates request payloads
  * Ensures correct data types and constraints

* **Scalable Structure**:

  * Organized into routes, controllers, and models

---

## Project Structure

```bash
src/
  ├── models/
  │     ├── productModel.js
  │     ├── cartModel.js
  │     └── orderModel.js
  │
  ├── routes/
  │     ├── productRoutes.js
  │     ├── cartRoutes.js
  │     └── orderRoutes.js
  │
  ├── controllers/
  │     ├── productController.js
  │     ├── cartController.js
  │     └── orderController.js
  │
  ├── connectDB.js
  └── server.js
```

---

## How It Works

1. Server initializes using Express.

2. Connects to MongoDB using Mongoose.

3. Defines schemas for:

   * Products
   * Cart items
   * Orders

4. API endpoints handle:

   * Fetching products
   * Updating cart
   * Creating and retrieving orders

5. Controllers process requests and interact with the database.

6. Responses are returned in JSON format for frontend consumption.

---

## Technologies Used

* **Node.js**:

  * Runtime environment for backend

* **Express.js**:

  * Routing
  * Middleware handling
  * API creation

* **MongoDB**:

  * NoSQL database

* **Mongoose**:

  * ODM for MongoDB
  * Schema definitions
  * Data validation

* **JavaScript (ES6+)**:

  * Async/await
  * Modular code structure

---

## Implementation Highlights

* **Schema Design**:

  * Structured models with nested fields
  * Use of `_id` and references for relationships

* **Controllers**:

  * Handle business logic
  * Separate from routing layer

* **Routes**:

  * Clean endpoint definitions
  * RESTful conventions

* **Middleware**:

  * Request parsing
  * Error handling pipeline

* **Database Operations**:

  * CRUD operations using Mongoose
  * Use of methods like `find`, `findOneAndUpdate`, `$inc`, `$unset`

* **Environment Configuration**:

  * Uses `.env` for secure variables (DB URI, PORT)

---

## API Endpoints (Sample)

* `GET /api/products` → Fetch all products
* `GET /api/cart` → Get cart items
* `POST /api/cart` → Add new cart item
* `PUT /api/cart/:cartItemId` → Update a cart item
* `GET /api/orders` → Fetch orders
* `POST /api/orders` → Create new order
* `DELETE /api/orders/:orderId` → Delete an order

---

## Deployed Backend

Live API: https://shopkart-backend-hqno.onrender.com

> Note: Hosted on free tier (Render), may experience cold starts.

---

## Getting Started

```bash
npm install
npm run dev
```

---

## Future Improvements

* Authentication & authorization
* Input validation using libraries (Joi/Zod)
* Logging & monitoring
* Pagination & filtering
* Deployment with no cold-start infrastructure
