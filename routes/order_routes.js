const OrderRouter = require("express").Router();
const OrdersController = require("../controller/order_controller");

OrderRouter.get("/getOrders", OrdersController.getAllOrders);
OrderRouter.post("/order", OrdersController.addOrder);

module.exports = OrderRouter;
