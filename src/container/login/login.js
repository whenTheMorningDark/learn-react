import React from "react";
import Logo from "../../component/logo/logo"
import {List,InputItem,WingBlank,WhiteSpace,Button} from "antd-mobile";
import {login} from "../../redux/user.redux"
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
const mapStateToProps = (state)=>{
    return {
        user:state.user
    }
}
const actionCreators = {login};
class Login extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            user:"",
            pwd:""
        }
    }
    register=()=>{
        this.props.history.push("/register")
    }
    handleClick = ()=>{
        this.props.login(this.state);
    }
    handleChange = (key,val)=>{
        this.setState({
            [key]:val
        })
    }
    render(){
        return (
            <div>
                {this.props.user.redirectTo?<Redirect to={this.props.user.redirectTo}/>:null}
                <Logo></Logo>
                <List>
                    <p>{this.props.user.msg}</p>
                    <InputItem
                        onChange = {v=>this.handleChange("user",v)}
                    >用户名</InputItem>
                    <WhiteSpace></WhiteSpace>
                    <InputItem
                        onChange = {v=>this.handleChange("pwd",v)} 
                    >密码</InputItem>
                </List>
                <WhiteSpace></WhiteSpace>
                <WingBlank>
                    <Button type="primary" onClick={this.handleClick}>登录</Button>
                    <WhiteSpace></WhiteSpace>
                    <Button type="primary" onClick={this.register}>注册</Button>
                </WingBlank>
            </div>
        )
    }
}
Login = connect(mapStateToProps,actionCreators)(Login);
export default Login;