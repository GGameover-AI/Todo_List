const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

//Middleware
app.use(cors());
app.use(express.json());

//Connect MongoDB
mongoose
  .connect(
    "mongodb+srv://xverxai236:123456Mixza@cluster0.f9uycwl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("Connect MongoDB Success"))
  .catch((err) => console.log(err));

//Router API
const todoList = require("./routers/todolist_api")
app.use("/",todoList);


app.listen(5000, () => {
  console.log("Server is running on PORT 5000");
});
