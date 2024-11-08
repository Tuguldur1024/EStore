import express from "express";

import { createFood } from "../controller/food";

const foodRouter = express.Router();

foodRouter.post("/CreateFood", createFood);

export default foodRouter;
