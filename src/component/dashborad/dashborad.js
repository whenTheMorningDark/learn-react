import React, { Component } from 'react'
import {Route, Switch} from "react-router-dom";
import {connect} from "react-redux";
import {NavBar} from "antd-mobile";
import NavLinkBar from "../navlink/navlink";
import Boss from "../../component/Boss/Boss";
import Genius from "../../component/genius/genius"
import User from "../../component/user/user"
// function Genius() {
//     return <h2>Genius</h2>
// }
function Msg() {
    return <h2>msg</h2>
}
const mapStateToProps = (state)=>{
    return {
        user:state.user
    }
}
const actionCreators = {};

 class Dashborad extends Component {

    render() {
        const user = this.props.user;
        // console.log(this.props);
        const {pathname} = this.props.location;
        const navList = [
            {path:"/boss",text:"牛人",icon:"boss",title:"牛人列表",component: Boss,hide:user.type==="genius"},
            {path:"/genius",text:"boss",icon:"job",title:"BOSS列表",component: Genius,hide:user.type==="boss"},
            {path:"/msg",text:"消息",icon:"msg",title:"消息",component: Msg},
            {path:"/me",text:"我",icon:"m",title:"个人中心",component: User}
        ]
        return (
            <div style={{paddingBottom:52}}>
                <NavBar mode="dark" className="fixed-header">
                    {navList.find((v)=>v.path === pathname).title}
                </NavBar>
                <div style={{marginTop:45}}>
                    <Switch>
                    {navList.map(v=>{
                        return <Route
                                key={v.path} path={v.path} component={v.component}
                        >

                        </Route>
                    })}
                    </Switch>
                </div>

                <NavLinkBar data={navList}></NavLinkBar>
            </div>
        )
    }
}
Dashborad = connect(mapStateToProps,actionCreators)(Dashborad);
export default Dashborad
