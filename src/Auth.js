import React, { Component } from 'react'
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {login, getUserData} from "./Auth.redux";

 class Auth extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: {}
    }
  }
  componentDidMount(){
    // console.log(axios);
    this.props.getUserData();
  }
  render() {
    // console.log(this.props.auth);
    return (
      <div>
        <h2>
          姓名:{this.props.auth.user}---年龄{this.props.auth.age}
        </h2>
        {this.props.auth.isAuth? <Redirect to="/dashborad"></Redirect> : null}
        没有权限
        <button onClick={this.props.login}>登录</button>
      </div>
    )
  }
}
const  mapStateToProps = (state, ownProps) => {

  return {
    auth: state.auth
  }
}
const actionCreators = {login,getUserData};
Auth = connect(mapStateToProps,actionCreators)(Auth);
export default Auth;
