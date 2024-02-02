import express, { json } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);

app.use(
  express.json({
    limit: "16kb",
  })
);

app.use(
  express.urlencoded({
    extended: true,
    limit: "16kb",
  })
);

app.use(cookieParser());

import userRouter from "./routers/user.router.js";
import productRouter from "./routers/product.router.js";

app.use("/api/v1/user", userRouter);
app.use("/api/v1/product", productRouter);

export default app;
