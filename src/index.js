import dotenv from "dotenv";
import app from "./app";
import connectDB from "./db";
const PORT = process.env.PORT || 5000;
dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server is running at port : https://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log("database connection failed!!", error);
  });
