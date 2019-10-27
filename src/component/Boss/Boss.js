import React, { Component } from 'react'
import {Card,WhiteSpace,WingBlank} from "antd-mobile";
import {connect} from "react-redux";
import {getUserList} from "../../redux/list.redux.js";
const mapStateToProps = (state)=>{
    console.log(state.chatuser.userlist);
    return {
        chatuser:state.chatuser
    }
}
const actionCreators = {getUserList};
class Boss extends Component {
    constructor(props){
        super(props);
        this.state = {
            data:[]
        }
    }
    componentDidMount() {
        this.props.getUserList("genius");
        // console.log(this.props);
    }
    render() {
        console.log(this.props.chatuser);
        const data = this.props.chatuser.userlist;
        return (
            <WingBlank>
                {data.map(v=>{
                    return v.avatar? <div key={v._id}>
                        <WhiteSpace></WhiteSpace>
                        <Card key={v._id}>
                        <Card.Header  title={v.user} thumb={require(`../avatarSelector/images/${v.avatar}.png`)} extra={<span>{v.title}</span>}>
                        </Card.Header>
                        <Card.Body>
                            {v.desc}
                        </Card.Body>
                    </Card>
                    </div>:null
                })}
            </WingBlank>
        )
    }
}
Boss = connect(mapStateToProps,actionCreators)(Boss);
export default Boss;
