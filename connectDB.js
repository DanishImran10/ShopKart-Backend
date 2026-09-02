import mongoose from "mongoose";

export default async function connectDB(dbName) {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}`, {
            dbName: dbName,
        });
        console.log("Connected to MongoDB");
    }
    catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1); // Exit the process with failure
    }
}