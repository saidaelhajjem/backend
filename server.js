const express = require("express");
const bodyParser = require("body-parser");

const db = require("./Models/db");
const userRouter = require("./Router/userRouter");
const productRouter = require("./Router/productRouter");
const app = express();

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.set("secretKey", "test");
app.use(bodyParser.json());
app.use("/user", userRouter);
app.use("/product", productRouter);
app.listen(3050, function() {
  console.log("welcome test webify");
});
