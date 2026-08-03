import mongoose from "mongoose"

const dbConnect = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/ClipMartdb");
        console.log("mongodb connected ✅ ");
    } catch (error) {
        console.log("mongodb error ❌", error);
    }
}

export default dbConnect;