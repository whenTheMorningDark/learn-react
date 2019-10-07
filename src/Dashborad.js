import React, { Component } from 'react'
import {Link,Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {logout} from "./Auth.redux"
import App from "./App";


function A(){
  return (
    <div>A</div>
  )
}
function B(){
  return (
    <div>B</div>
  )
}
const  mapStateToProps = (state, ownProps) => {
  return {
    auth: state.auth
  }
}
const actionCreators = {logout};
class Dashborad extends Component {
  render() {
    // console.log(this.props);
    const match = this.props.match
    // console.log(match);
    const redirectLogin = <Redirect to="/login"></Redirect>;
    const app = (
      <div>
        {this.props.auth.isAuth?<button onClick={this.props.logout}>{this.props.auth.user}退出</button>:<p>还没登录!</p>}
        <ul>
          <li>
            <Link to={`${match.url}`}>
              1
            </Link>
          </li>
          <li>
            <Link to={`${match.url}/erying`}>
              2
            </Link>
          </li>
          <li>
            <Link to={`${match.url}/qibinglian`}>
              3
            </Link>
          </li>
        </ul>
        <Route path={`${match.url}/`} exact component={App}></Route>
        <Route path={`${match.url}/erying`} component={A}></Route>
        <Route path={`${match.url}/qibinglian`} component={B}></Route>
      </div>
    )
    return this.props.auth.isAuth ? app:redirectLogin;
  }
}
Dashborad = connect(mapStateToProps,actionCreators)(Dashborad);
export default Dashborad;
