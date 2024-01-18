const OrdersModel = require('../models/order_model.js')

const OrderController = {
    addOrder: async (req, res) => {
        try {
            const { name, phone, lessonId, numberOfSpaces } = req.body;
            let Orders = new OrdersModel({ name, phone, lessonId, numberOfSpaces });
            ordersData = await Orders.save();
            res.status(200).json(ordersData);;
        } catch (error) {
            res.status(500).json({ error: error });
        }
    },

    getAllOrders: async (req, res) => {
        try {
            const Orders = await OrdersModel.find();
            res.status(200).json(Orders);
        } catch (error) {
            res.status(500).json({ error: error });
        }
    },

};


module.exports = OrderController;