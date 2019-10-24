import axios from "axios";
import {getRedirectPath} from "../utils";
// const REGISTER_SUCCESS = "REGISTER_SUCCESS"
const ERROR_MSG = "ERROR_MSG"
// const LOGIN_SUCCESS = "LOGIN_SUCCESS"
const LOADDATA = "LOADDATA"
const AUTH_SUCESS = "AUTH_SUCESS";
const initState = {
    redirectTo: "",
    msg:"",
    isAuth:false,
    user:"",
    type:""
}

//reducer
export function user(state = initState,action){
    console.log(action);
    // if(ac)
    switch(action.type){
        case AUTH_SUCESS:
            // let payload = {...action.payload,msg:"",isAuth:true}
            return {...state,msg:"",redirectTo:getRedirectPath(action.payload),...action.payload}; // 很奇怪的地方 p33
        case LOADDATA:
             return {...state,msg:"",isAuth:true,redirectTo:getRedirectPath(action.payload),...action.payload}
        case ERROR_MSG:
            return {...state,isAuth:false,msg:action.msg}
        default:
            return state
    }
}
function errorMsg(msg){
    // console.log(msg);
    return {msg, type:ERROR_MSG}
}
function authSuccess(obj) {
    const {pwd, ...data} = obj; // 过滤pwd
    return {type:AUTH_SUCESS,payload:data}
}
export function loadData(userInfo) {
    return {type:LOADDATA,payload:userInfo}
}
export function update(data){
    return dispatchEvent=>{
        axios.post("/user/update",data)
            .then(res=>{
                if(res.status === 200 && res.data.code ===0) {
                    dispatchEvent(authSuccess(res.data.data))
                }else {
                    dispatchEvent(errorMsg(res.data.msg))
                }
            })
    }
}

// 登录的reduce
export function login({user,pwd}){
    if(!user || !pwd){
        return errorMsg("用户名或者密码不能为空!")
    }
    return dispatchEvent=>{
        axios.post("/user/login",{user,pwd})
        .then(res=>{
            if(res.status === 200 && res.data.code ===0) {
                dispatchEvent(authSuccess(res.data.data))
            }else {
                dispatchEvent(errorMsg(res.data.msg))
            }
        })
    }
}

export function register({user,pwd,repeatpwd,type}){
    // return registerSuccess({user,pwd,repeatpwd,type})
    if(!user || !pwd || !type) {
        return errorMsg("用户名密码必须输入")
    }
    if(pwd !== repeatpwd) {
        return errorMsg("两次密码要一致");  
    }
    // return registerSuccess({user,pwd,type})
    return dispatchEvent=>{
        axios.post("/user/register",{user,pwd,type})
        .then(res=>{
            if(res.status === 200 && res.data.code ===0) {
                dispatchEvent(authSuccess({user,pwd,type}))
            }else {
                dispatchEvent(errorMsg(res.data.msg))
            }
        })
    }
    
}