//import section
const express = require("express");
const app = express();
const mongoose = require("mongoose");
//DB connection
mongoose.connect(
    "mongodb+srv://commerce:commerce@cluster0.yyzs68h.mongodb.net/?retryWrites=true&w=majority"
);
mongoose.connection.on("connected", () => {
    console.log("DB connected");
});
mongoose.connection.on("error", (err) => {
    console.log("mongodb failed with", err);
});
//import routes
const itemRoutes = require("./routes/item.routes");
const typeRoutes = require("./routes/type.routes");

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes middleware
app.use("/items", itemRoutes);
app.use("/types", typeRoutes);
//server listening
const port = 8000;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});