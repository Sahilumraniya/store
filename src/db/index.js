import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connetection = await mongoose.connect(
      `${process.env.DB_URL}/${process.env.DB_NAME}`
    );
    // console.log("\nDatabase conntect successfully : ", connetection);
  } catch (error) {
    console.log("DB :: MONGODB connection error : ", error);
    process.exit(1);
  }
};

export default connectDB;
