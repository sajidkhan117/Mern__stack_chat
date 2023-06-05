const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const connectDB = require("./Config/db");
const color = require("color");
const userRoutes = require('./routes/userRoutes')
const chatRoutes = require("./routes/chatRoutes")
const { notFound, errorHandler } = require("./middlewares/errorMiddleware")

var cors = require('cors')

dotenv.config();
connectDB();


const app = express();
app.use(express.json()); // to accept json token
app.get('/', (req, res) => {
    res.send("api is Ruining")
});

app.use('/api/user', userRoutes);
app.use('/api/chat', chatRoutes);

app.use(notFound)
app.use(errorHandler)


const Port = process.env.PORT || 5000;

app.listen(5000, console.log(`Server Started on PORT ${Port}`));
