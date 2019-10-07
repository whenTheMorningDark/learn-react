import React, { Component } from 'react'
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {login} from "./Auth.redux";
 class Auth extends Component {
  render() {
    // console.log(this.props.auth);
    return (
      <div>
        {this.props.auth.isAuth? <Redirect to="/dashborad"></Redirect> : null}
        没有权限a
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
const actionCreators = {login};
Auth = connect(mapStateToProps,actionCreators)(Auth);
export default Auth;
