import React, { Component } from 'react'
// import {Card,WhiteSpace,WingBlank} from "antd-mobile";
import {connect} from "react-redux";
import {getUserList} from "../../redux/list.redux.js";
import UserCard from "../../component/usercard/usercard"; // 公共的usercard
// 9-1
const mapStateToProps = (state)=>{
    return {
        chatuser:state.chatuser
    }
}
const actionCreators = {getUserList};
class Genius extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         data:[]
    //     }
    // }
    componentDidMount() {
        this.props.getUserList("boss");
        // console.log(this.props);
    }
    render() {
        const data = this.props.chatuser.userlist;
        console.log(this.props.chatuser.userlist);
        return (
           <UserCard userlist={data}></UserCard>
        )
    }
}
Genius = connect(mapStateToProps,actionCreators)(Genius);
export default Genius;
