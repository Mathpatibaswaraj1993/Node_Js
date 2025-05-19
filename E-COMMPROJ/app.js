const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(express.json());
app.use('/users', userRoutes);

app.listen(5000, () => {
    console.log("Server is running on prot number 5000")
})