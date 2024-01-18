const mongoose = require("mongoose");

const lessonsSchema = mongoose.Schema({
    subject: {
        required: true,
        type: String,
    },
    image: {
        required: true,
        type: String,
    },
    location: {
        required: true,
        type: String,
    },
    price: {
        required: true,
        type: Number,
    },
    space: {
        required: true,
        type: Number,
    },
    id: {
        required: true,
        type: Number,
    },
});

module.exports = mongoose.model("Lessons", lessonsSchema);
