import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom"; // 把不是通过路由切换过来的组件中，将react-router 的 history、location、match 三个对象传入props对象上
// @withRouter
// p31
class AuthRoute extends React.Component{
    componentDidMount(){
        const publicList = ["/login","/register"]
        const pathname = this.props.location.pathname;
        // console.log(this.props.location.pathname)
        if(publicList.includes(pathname)){
            return null;
        }
        //获取用户信息
        axios.get("/user/info").then(res=>{
            if(res.status === 200) {
                // console.log(res.data);
                // console.log(this.props.history)
                if(res.data.code === 0) {
                    // 有登录信息
                }else{
                    this.props.history.push("/login");   
                }
            }
        })
    }
    render(){
        return null;
    }
}
export default withRouter(AuthRoute);