const express = require("express");
const mongoose = require("mongoose");
const morgan = require('morgan');
const path = require("path");
const cors = require('cors');
const { client, uri } = require('./config/db');
const lessonsRouter = require('./routes/lesson_routes');
const ordersRouter = require('./routes/order_routes');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

mongoose
    .connect(uri)
    .then(() => {
        console.log("Connected to the MongoDB database");
    })
    .catch((e) => {
        console.log(e);
    });

client.connect((err) => {
    if (err) {
        console.error('Error connecting to MongoDB:', err);
        return;
    }
    console.log('Connected to the MongoDB database');
});

app.use(lessonsRouter);
app.use(ordersRouter);

app.get("/", (req, res) => {
    res.json({ message: 'Backend is Working' });
});

app.listen(port, () => {
    console.log(`Backend is working on port ${port}`);
});
