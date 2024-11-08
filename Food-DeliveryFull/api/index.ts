import express from "express";
import connection from "./connectDB";
import userRouter from "./router/userRouter";
import categoryRouter from "./router/categoryRouter";
import foodRouter from "./router/foodRouter";
import orderRouter from "./router/orderRouter";

const app = express();

app.use(express.json());

const port = 8080;

app.use("/user", userRouter);
app.use("/category", categoryRouter);
app.use("/food", foodRouter);
app.use("/order", orderRouter);
connection();

app.listen(port, () => {
  console.log(`server is running at a http://localhost:${port}/`);
});
