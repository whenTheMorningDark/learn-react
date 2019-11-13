import React, { Component } from 'react'
import {connect} from "react-redux";
import {Result, List, WhiteSpace} from "antd-mobile";
// import {getUserList} from "../../redux/list.redux.js";
// 9-3
const mapStateToProps = (state)=>{
    return {
        user:state.user
    }
}
const actionCreators = {};
class User extends Component {
    render() {
        const props = this.props.user;
        const Item = List.Item;
        const Brief = Item.Brief;
        console.log(props);
        return props.user?(
            <div>
                <Result
                  img={<img src={require(`../avatarSelector/images/${props.avatar}.png`)} style={{width:50}} alt=""/>}
                  title={props.user}
                  message={props.type==="boss"?props.company:null}
                ></Result>
                <List renderHeader={()=>"简介"}>
                    <Item>
                        {props.title}
                        {props.desc.split("\n").map(v=><Brief key={v}>{v}</Brief>)}
                        {props.money?<Brief>薪资:{props.money}</Brief>:null}
                    </Item>
                </List>
                <WhiteSpace></WhiteSpace>
                <List>
                    <Item>
                        退出登录
                    </Item>
                </List>
            </div>
        ):null;
    }
}
User = connect(mapStateToProps,actionCreators)(User);
export default User;
