const express = require("express");
const Router = express.Router();
const model = require("./model");
const User = model.getModel("user");
// Router.get("/info",(req,res)=>{
//     return res.json({code:1});
// })
Router.get("/info",function(req,res){
    //从user表查询数据
    User.find({},function(err,doc){
        return res.json(doc);
    })
})
Router.post("/register",(req,res)=>{
    // console.log(req.body);
    const { user,pwd,type} = req.body;
    User.findOne({user},(err,doc)=>{
        if(doc){
            return res.json({code:1,msg:"用户名重复!"})
        }
        User.create({user,pwd,type},(err,doc)=>{
            if(err){
                return res.json({code:1,msg:"后台出错!"})
            }
            return res.json({code:0});
        })
    })
})
module.exports = Router;