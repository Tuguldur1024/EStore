import { Request, Response } from "express";
import OrderModel from "../../model/order";
import mongoose, { Schema } from "mongoose";
import orderDetailModel from "../../model/orderDetail";

type OrderDetail = {
  quantity: Number;
  foodId: Schema.Types.ObjectId;
  amount: Number;
  orderId: Schema.Types.ObjectId;
};
type createDetailsOrder = {
  userId: Schema.Types.ObjectId;
  totalPrice: number;
  process: string;
  district: string;
  khoroo: string;
  apartment: string;
  description: string;
  orderItem: OrderDetail[];
};

export const createOrderWithDetails = async (
  req: Request<createDetailsOrder>,
  res: Response
) => {
  const { userId, district, khoroo, apartment, description, orderItems } =
    req.body;
  try {
    const newOrderItems = await orderDetailModel.insertMany<OrderDetail>(
      orderItems
    );
    const newOrderItemsIds = newOrderItems.map(
      (newOrderItem) => newOrderItem._id
    );
    const order = await OrderModel.create({
      userId,
      district,
      khoroo,
      apartment,
      description,
      process: "Ordered",
      totalPrice: 100,
      orderItem: newOrderItemsIds,
    });

    res.status(200).json({ message: order });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error });
  }
};
