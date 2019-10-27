import React, { Component } from 'react'
import PropTypes from "prop-types";
import {TabBar} from "antd-mobile";
import {withRouter} from "react-router-dom";
class NavLinkBar extends Component {
    static propTypes = {
        data:PropTypes.array.isRequired
    }
    render() {
        const navList = this.props.data.filter((v)=>!v.hide);
        const TabBarItem = TabBar.Item
        const {pathname} = this.props.location
        // console.log(navList);
        return (
            <TabBar>
                {
                    navList.map(v=>{
                        return <TabBarItem 
                            key={v.path}
                            title={v.text}
                            icon={{uri:require(`./images/${v.icon}.png`)}}
                            selectedIcon={{uri:require(`./images/${v.icon}-active.png`)}}
                            selected={pathname === v.path}
                            onPress={()=>{
                                this.props.history.push(v.path)
                            }}
                        ></TabBarItem>
                    })
                }
            </TabBar>
        )
    }
}
export default withRouter(NavLinkBar);

