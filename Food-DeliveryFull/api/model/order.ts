import mongoose, { Schema } from "mongoose";

const process = ["Pending", "Delivered", "Canceled"];

type Order = {
  userId: Schema.Types.ObjectId;
  totalPrice: number;
  process: string;
  createdDate: Date;
  district: string;
  khoroo: string;
  apartment: string;
  description: string;
  orderItem: Schema.Types.ObjectId[];
};

const orderSchema = new Schema<Order>({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  totalPrice: { type: Number, default: 0 },
  process: {
    type: String,
    enum: ["Pending", "Delivered", "Canceled", "Ordered"],
    required: true,
  },
  createdDate: { type: Date, default: Date.now },
  district: { type: String, required: true },
  khoroo: { type: String, required: true },
  apartment: { type: String },
  description: { type: String },
  orderItem: [
    { type: mongoose.Types.ObjectId, ref: "OrderDetail", default: [] },
  ],
});

const OrderModel = mongoose.model<Order>("Order", orderSchema);
export default OrderModel;
