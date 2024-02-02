import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./db/index.js";
const PORT = process.env.PORT || 5000;
dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server is running at port : http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log("database connection failed!!", error);
  });
