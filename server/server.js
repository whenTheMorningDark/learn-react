const express = require("express");
const mongoose = require("mongoose");
const dbUrl = "mongodb://localhost:27017";
mongoose.connect(dbUrl);
mongoose.connection.on("connent",()=>{
  console.log("连接");
})
const app = express();
app.get("/",(req,res)=>{
  res.send("hell js");
})
app.listen(9093,()=>{
  console.log("at 9093")
})