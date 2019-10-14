const express = require("express");
const userRouter = require("./user");
let bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended:false}));//解析 x-www-form-urlencoded
app.use(bodyParser.json());//无法演示 解析json数据依赖于urlencoded模块 必须同时应用
app.use("/user",userRouter);
app.listen(9093,()=>{
  console.log("at 9093")
})