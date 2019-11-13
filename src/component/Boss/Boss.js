import React, { Component } from 'react'
import {connect} from "react-redux";
import {getUserList} from "../../redux/list.redux.js";
import UserCard from "../../component/usercard/usercard"; // 公共的usercard
// 9-2
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
            <UserCard userlist={data}></UserCard>
        )
    }
}
Boss = connect(mapStateToProps,actionCreators)(Boss);
export default Boss;
