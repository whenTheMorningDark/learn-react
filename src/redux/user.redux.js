import axios from "axios";
import {getRedirectPath} from "../utils";
const REGISTER_SUCCESS = "REGISTER_SUCCESS"
const ERROR_MSG = "ERROR_MSG"
const LOGIN_SUCCESS = "LOGIN_SUCCESS"
const initState = {
    redirectTo: "",
    msg:"",
    isAuth:false,
    user:"",
    pwd:"",
    type:""
}

//reducer
export function user(state = initState,action){
    console.log(action);
    // if(ac)
    switch(action.type){
        case REGISTER_SUCCESS:
            // let payload = {...action.payload,msg:"",isAuth:true}
            return {...state,msg:"",isAuth:true,redirectTo:getRedirectPath(action.payload),...action.payload}; // 很奇怪的地方 p33
        case LOGIN_SUCCESS: 
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
export function registerSuccess(data){
    return {type:REGISTER_SUCCESS,payload:data}
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
                dispatchEvent(loginSuccess(res.data.data))
            }else {
                dispatchEvent(errorMsg(res.data.msg))
            }
        })
    }
}

function loginSuccess(data) {
    return {type:LOGIN_SUCCESS,payload:data}
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
                dispatchEvent(registerSuccess({user,pwd,type}))
            }else {
                dispatchEvent(errorMsg(res.data.msg))
            }
        })
    }
    
}