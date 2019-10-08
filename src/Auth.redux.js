import axios from "axios";
// p27
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";
const USERDATA = "USERDATA";
const initState = {
  isAuth:false,
  user:"咖啡",
  age: 201
}
export function auth(state=initState,action){
  console.log(state,action)
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isAuth:true
      }
    case LOGOUT:
      return {
        ...state,
        isAuth:false
      }
    case USERDATA:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state;
  }
}

//action 
export function getUserData(){
  return dispatchEvent=>{
    axios.get("/data").then(res=>{
      console.log(res.data[0]);
      dispatchEvent(userData(res.data[0]));
      // this.setState({data:res.data[0]})
      // console.log(this.props.auth);
    })
  }
}
export function userData(data){
  return {type:USERDATA,payload:data}
}
export function login(){
  // console.log("login")
  return {type:LOGIN}
}
export function logout(){
  return {type:LOGOUT}
}