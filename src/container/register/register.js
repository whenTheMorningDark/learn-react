import React from "react";
import Logo from "../../component/logo/logo"
import {List,InputItem,WhiteSpace,Button,Radio} from "antd-mobile";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {register} from "../../redux/user.redux";
const mapStateToProps = (state)=>{
    return {
        user:state.user
    }
}
const actionCreators = {register};
class Register extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            user: "",
            pwd: "",
            repeatpwd:"",
            type:"genius"
        }
    }
    handleChange(key,val){
        this.setState({
            [key]:val
        })
    }
    handleRegister = ()=>{
        // console.log(this.props);
        // 直接调用reduce中的register()
        this.props.register(this.state);
        // console.log(this.state);
        // axios.post("/user/register",this.state).then(res=>{
        //     console.log(res);
        // })
        // console.log(this.props);
    }
    render(){
        const RadioIten = Radio.RadioItem;
        console.log(this.props.user.redirectTo);
        return (
            <div>
                {this.props.user.redirectTo?<Redirect to={this.props.user.redirectTo}/>:null}
                <Logo></Logo>
                <List>
                    <p>{this.props.user.msg}</p>
                    <InputItem
                        onChange={v=>this.handleChange("user",v)}
                    >用户名</InputItem>
                    <WhiteSpace></WhiteSpace>
                    <InputItem
                        type="password"
                        onChange={v=>this.handleChange("pwd",v)}
                    >密码</InputItem>
                    <WhiteSpace></WhiteSpace>
                    <InputItem
                        type="password"
                        onChange={v=>this.handleChange("repeatpwd",v)}
                    >确认密码</InputItem>
                    <WhiteSpace></WhiteSpace>
                    <RadioIten 
                        checked={this.state.type === "genius"}
                        onChange={()=>this.handleChange("type","genius")}
                    >牛人</RadioIten>
                    <RadioIten 
                        checked={this.state.type === "boss"}
                        onChange={()=>this.handleChange("type","boss")}
                    >Boss</RadioIten>
                    <WhiteSpace></WhiteSpace>
                    <Button type="primary" onClick={this.handleRegister}>注册</Button>
                </List>
                
            </div>
        )
    }
}

Register = connect(mapStateToProps,actionCreators)(Register);
export default Register;