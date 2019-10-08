const express = require("express");
const mongoose = require("mongoose");
const dbUrl = "mongodb://localhost:27017/chat";
mongoose.connect(dbUrl);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("success");
});
const User = mongoose.model("user",new mongoose.Schema({
  user:{type:String,require:true},
  age:{type:Number,require:true}
}))
User.create({
  user:"xiaoming",
  age:12
},(err,doc)=>{
  if(!err){
    console.log(doc)
  }
})
const app = express();
app.get("/",(req,res)=>{
  res.send("hell 1js");
})
app.get("/data",(req,res)=>{
  // res.send("hell 1js");
  User.find({},(err,doc)=>{
    return res.json(doc)
  })
})
app.listen(9093,()=>{
  console.log("at 9093")
})