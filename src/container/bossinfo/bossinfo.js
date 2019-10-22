import React, { Component } from 'react'
import { NavBar, InputItem, TextareaItem } from 'antd-mobile';
import AvatarSelector from "../../component/avatarSelector/avatarSelector"


export default class BossInfo extends Component {
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
                <NavBar mode="dark">Boss完善信息页面</NavBar>
                <AvatarSelector></AvatarSelector>
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
            </div>
        )
    }
}
