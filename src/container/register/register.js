import React from "react";
import Logo from "../../component/logo/logo"
import {List,InputItem,WhiteSpace,Button,Radio} from "antd-mobile";
class Register extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            type:"genius"
        }
    }
    render(){
        const RadioIten = Radio.RadioItem;
        return (
            <div>
                <Logo></Logo>
                <List>
                    <InputItem>用户名</InputItem>
                    <WhiteSpace></WhiteSpace>
                    <InputItem>密码</InputItem>
                    <WhiteSpace></WhiteSpace>
                    <InputItem>确认密码</InputItem>
                    <WhiteSpace></WhiteSpace>
                    <RadioIten checked={this.state.type === "genius"}>牛人</RadioIten>
                    <RadioIten checked={this.state.type === "boss"}>Boss</RadioIten>
                    <WhiteSpace></WhiteSpace>
                    <Button type="primary">注册</Button>
                </List>
                
            </div>
        )
    }
}
export default Register;