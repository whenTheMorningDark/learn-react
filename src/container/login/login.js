import React from "react";
import Logo from "../../component/logo/logo"
import {List,InputItem,WingBlank,WhiteSpace,Button} from "antd-mobile";
class Login extends React.Component{
    register=()=>{
        this.props.history.push("/register")
    }
    render(){
        return (
            <div>
                <Logo></Logo>
                <h2>登录</h2>
                <List>
                    <InputItem>用户名</InputItem>
                    <WhiteSpace></WhiteSpace>
                    <InputItem>密码</InputItem>
                </List>
                <WhiteSpace></WhiteSpace>
                <WingBlank>
                    <Button type="primary">登录</Button>
                    <WhiteSpace></WhiteSpace>
                    <Button type="primary" onClick={this.register}>注册</Button>
                </WingBlank>
            </div>
        )
    }
}
export default Login;