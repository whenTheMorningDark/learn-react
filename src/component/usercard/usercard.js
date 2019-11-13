import React, { Component } from 'react'
import PropTypes from "prop-types";
import {Card,WhiteSpace,WingBlank} from "antd-mobile";
class UserCard extends Component{
    static propTypes = {
        userlist:PropTypes.array.isRequired
    }
    render(){
        return(
            <WingBlank>
                {this.props.userlist.map(v=>{
                    return v.avatar? <div key={v._id}>
                        <WhiteSpace></WhiteSpace>
                        <Card key={v._id}>
                        <Card.Header  title={v.user} thumb={require(`../avatarSelector/images/${v.avatar}.png`)} extra={<span>{v.title}</span>}>
                        </Card.Header>
                        <Card.Body>
                        {v.type==="boss" ? <div>公司:{v.company}</div>:null}
                            {v.desc.split("\n").map(v=>{
                               return <div key={v}>{v}</div>
                            })}
                            {v.type==="boss" ? <div>薪资:{v.money}</div>:null}
                        </Card.Body>
                    </Card>
                    </div>:null
                })}
            </WingBlank>
        )
    }
}
export default UserCard;