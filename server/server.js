const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const cartRoute = require("./routes/cart");
const productRoute = require("./routes/product");
const orderRoute = require("./routes/order");

require("dotenv").config();

//App Config
const app = express();
const port = process.env.PORT || 5000;

//Connection to MongoDB
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("db connection successful"))
  .catch((err) => console.log(err));

//Middlewares
app.use(cors());
app.use(express.json());

//API Routes
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/product", productRoute);
app.use("/api/order", orderRoute);
app.use("/api/cart", cartRoute);

//defualt route
app.get("/", (req, res) => {
  res.status(200).send("CLOTHINGIFY!");
});

// app listening to port 5000 or process.env.PORT
app.listen(port, () => {
  console.log("listening in port 5000");
});
