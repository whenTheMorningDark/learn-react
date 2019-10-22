import React, { Component } from 'react'
import { Grid } from 'antd-mobile';
// 7-1 17:26
export default class avatarSelector extends Component {
    render() {
        const avatarList = "boy,girl,bull,chick,crab,hedgehog,hippopotamus,koala,lemur,man,pig,tiger,whale,woman,zebra".split(",").map((v)=>({icon:require(`./images/${v}.png`),text:v}));
        
        return (
            <div>
                <Grid data={avatarList}></Grid>
            </div>
        )
    }
}
