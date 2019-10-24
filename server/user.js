const express = require("express");
const Router = express.Router();
const model = require("./model");
const User = model.getModel("user");
const utils = require("utility");
const _filter = {"pwd":0}
// Router.get("/info",(req,res)=>{
//     return res.json({code:1});
// })
Router.get("/list",function(req,res){
    //从user表查询数据
    // User.remove({},function(err,doc){});
    User.find({},function(err,doc){
        return res.json(doc);
    })
})
Router.post("/register",(req,res)=>{
    // console.log(req.body);
    // 6-12
    const { user,pwd,type} = req.body;
    User.findOne({user},(err,doc)=>{
        if(doc){
            return res.json({code:1,msg:"用户名重复!"})
        }
        const userModel = new User({user,type,pwd:md5Pwd(pwd)});
        userModel.save((err,doc)=>{
            if(err){
                return res.json({code:1,msg:"后台出错!"})
            }
            const { user,type,_id} = doc;
            res.cookie("userid",_id);
            return res.json({code:0,data:{user,type,_id}});
        })
        // User.create({user,type,pwd:md5Pwd(pwd)},(err,doc)=>{
        //     if(err){
        //         return res.json({code:1,msg:"后台出错!"})
        //     }
        //     return res.json({code:0});
        // })
    })
})

//登录接口
Router.post("/login",(req,res)=>{
    const { user,pwd} = req.body;
    User.findOne({user,pwd:md5Pwd(pwd)},{"pwd":0},(err,doc)=>{
        if(!doc){
            return res.json({code:1,msg:"用户名密码报错!"})
        }
        res.cookie("userid", doc._id);
        return res.json({code:0,data:doc})
    })
})
// 更新
Router.post("/update",(req,res)=>{
    const { userid } = req.cookies;
    if(!userid) {
        return res.json({code:1})
    }
    const body = req.body;
    User.findByIdAndUpdate(userid,body,(err,doc)=>{
        const data = Object.assign({},{
            user:doc.user,
            type:doc.type
        },body)
        return res.json({code:0,data});
    })
    // const { user,pwd} = req.body;
    // User.findOne({user,pwd:md5Pwd(pwd)},{"pwd":0},(err,doc)=>{
    //     if(!doc){
    //         return res.json({code:1,msg:"用户名密码报错!"})
    //     }
    //     res.cookie("userid", doc._id);
    //     return res.json({code:0,data:doc})
    // })
})
Router.get("/info",(req,res)=>{
    const {userid} = req.cookies;
    if(!userid) {
        return res.json({code:1})
    }
    User.findOne({_id:userid},_filter,(err,doc)=>{
        if(err){
            return res.json({code:1,msg:"后端出错!"})
        }
        if(doc){
            return res.json({code:0,data:doc})
        }
    })
})
function md5Pwd(pwd){
    const salt = "asdxasdqsdzajkjh_xw_@!";
    return utils.md5(utils.md5(pwd+salt));
}
module.exports = Router;