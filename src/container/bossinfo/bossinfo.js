import React, { Component } from 'react'
import { NavBar, InputItem, TextareaItem, Button } from 'antd-mobile';
import AvatarSelector from "../../component/avatarSelector/avatarSelector"
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {update} from "../../redux/user.redux";
const mapStateToProps = (state)=>{
    return {
        user:state.user
    }
}
const actionCreators = {update};
// 8-1
 class BossInfo extends Component {
    constructor(props){
        super(props);
        this.state = {
            title:""
        }
    }
    onChange(key,val) {
        this.setState({
            [key]:val
        })
    }
    render() {
        return (
            <div className="BossInfo"> 
                {/* <Redirect to={this.props.redirectTo}/> */}
                
                {this.props.user.redirectTo?<Redirect to={this.props.user.redirectTo}/>:null}
                <NavBar mode="dark">Boss完善信息页面</NavBar>
                <AvatarSelector
                    selectAvatar={(image)=>{
                        this.setState({
                            avatar:image
                        })
                    }}
                ></AvatarSelector>
                <InputItem onChange={(v)=>this.onChange("title",v)}>
                    招聘职位
                </InputItem>
                <InputItem onChange={(v)=>this.onChange("company",v)}>
                    公司名称
                </InputItem>
                <InputItem onChange={(v)=>this.onChange("money",v)}>
                    职位薪资
                </InputItem>
                <TextareaItem 
                    onChange={(v)=>this.onChange("desc",v)}
                    rows={3}
                    autoHeight
                    title="职位要求"
                    >
                </TextareaItem>
                <Button type="primary" onClick={()=>{
                    this.props.update(this.state)
                }}>保存</Button>
            </div>
        )
    }
}
BossInfo = connect(mapStateToProps,actionCreators)(BossInfo);
export default BossInfo;
