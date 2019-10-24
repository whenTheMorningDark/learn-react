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

 class GeniusInfo extends Component {
    constructor(props){
        super(props);
        this.state = {
            title:"",
            desc:"",
            company:"",
            money:""
        }
    }
    onChange(key,val) {
        this.setState({
            [key]:val
        })
    }
    render() {
        // const path = this.props.location.pathname;
        const redirect = this.props.user.redirectTo;
        // console.log(this.props.user.redirectTo);
        return (
            <div className="geniusinfo"> 

                {redirect?<Redirect to={this.props.user.redirectTo}/>:null}
                <NavBar mode="dark">牛人完善信息页面</NavBar>
                <AvatarSelector
                    selectAvatar={(image)=>{
                        this.setState({
                            avatar:image
                        })
                    }}
                ></AvatarSelector>
                <InputItem onChange={(v)=>this.onChange("title",v)}>
                    求职岗位
                </InputItem>
                <TextareaItem 
                    onChange={(v)=>this.onChange("desc",v)}
                    rows={3}
                    autoHeight
                    title="个人简介"
                    >
                </TextareaItem>
                <Button type="primary" onClick={()=>{
                    this.props.update(this.state)
                }}>保存</Button>
            </div>
        )
    }
}
GeniusInfo = connect(mapStateToProps,actionCreators)(GeniusInfo);
export default GeniusInfo;
