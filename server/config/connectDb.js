import mongoose from "mongoose";

const connectDb = async () => {
    try {
        if (mongoose.connections[0].readyState) {
            console.log("DataBase Already Connected");
            return;
        }
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("DataBase Connected")
    } catch (error) {
        console.log(`DataBase Error ${error}`)
    }
}

export default connectDb