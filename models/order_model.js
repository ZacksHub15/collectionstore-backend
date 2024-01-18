const mongoose = require("mongoose");

const OrdersSchema = mongoose.Schema({
    name: {
        required: true,
        type: String,
    },
    phone: {
        required: true,
        type: String,
    },
    lessonId: {
        required: true,
        type: [String],
    },
    numberOfSpaces: {
        required: true,
        type: Number,
    },
});

module.exports = mongoose.model("orders", OrdersSchema);
