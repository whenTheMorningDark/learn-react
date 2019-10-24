import React, { Component } from 'react'
import { Grid,List } from 'antd-mobile';
import PropTypes from "prop-types";
// 7-1 17:26
export default class avatarSelector extends Component {
    static propTypes = {
        selectAvatar:PropTypes.func.isRequired
    }
    constructor(props){
        super(props);
        this.state = {}
    }
    render() {
        const avatarList = "boy,girl,bull,chick,crab,hedgehog,hippopotamus,koala,lemur,man,pig,tiger,whale,woman,zebra".split(",").map((v)=>({icon:require(`./images/${v}.png`),text:v}));
        const gridHeader = this.state.text ? (<div>
                            <span>已选择头像</span>
                            <img src={this.state.icon} alt="" style={{width:20}}></img>
                            </div>) :"请选择头像!";
        return (
            <div>
                <List renderHeader={()=>gridHeader}>
                </List>
                <Grid 
                    data={avatarList} 
                    columnNum={5}
                    onClick={elm=>{
                        this.setState(elm);
                        this.props.selectAvatar(elm.text)
                    }}
                ></Grid>
            </div>
        )
    }
}
