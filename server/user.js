const express = require("express");
const Router = express.Router();
const model = require("./model");
const User = model.getModel("user");
const utils = require("utility");
// Router.get("/info",(req,res)=>{
//     return res.json({code:1});
// })
Router.get("/info",function(req,res){
    //从user表查询数据
    // User.remove({},function(err,doc){});
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
        User.create({user,type,pwd:md5Pwd(pwd)},(err,doc)=>{
            if(err){
                return res.json({code:1,msg:"后台出错!"})
            }
            return res.json({code:0});
        })
    })
})

//登录接口
Router.post("/login",(req,res)=>{
    const { user,pwd} = req.body;
    User.findOne({user,pwd:md5Pwd(pwd)},{"pwd":0},(err,doc)=>{
        if(!doc){
            return res.json({code:1,msg:"用户名密码报错!"})
        }
        return res.json({code:0,data:doc})
    })
})

function md5Pwd(pwd){
    const salt = "asdxasdqsdzajkjh_xw_@!";
    return utils.md5(utils.md5(pwd+salt));
}
module.exports = Router;