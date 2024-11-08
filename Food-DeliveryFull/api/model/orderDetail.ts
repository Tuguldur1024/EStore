import mongoose, { Schema } from "mongoose";

type orderDetail = {
  foodId: Schema.Types.ObjectId;
  quantity: number;
  amount: string;
  orderId?: Schema.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
};

const orderDetailSchema = new Schema<orderDetail>({
  foodId: { type: Schema.Types.ObjectId, required: true, ref: "Food" },
  quantity: { type: Number, required: true },
  amount: { type: String, required: true },
  orderId: { type: mongoose.Types.ObjectId, ref: "Order" },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});

const orderDetailModel = mongoose.model<orderDetail>(
  "OrderDetail",
  orderDetailSchema
);
export default orderDetailModel;
