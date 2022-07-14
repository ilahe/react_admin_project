import React from "react";
import {Layout, Menu} from 'antd';
import {Link} from "react-router-dom";
import logo from "../../assets/images/logo.png";
const {Sider} = Layout;



function SidebarC({routesMy}) {
    return (
        <div>
            <Sider style={{height: '100%'}}>
                <div className="logo">
                    <img src={logo} alt="XXXX.az" />
                </div>
                <Menu
                    className="sidebar_menu"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark">
                    {routesMy.map((route, index) => (
                        <Menu.Item key={index} style={{display: `${route.display}`}}>
                            <Link to={route.path}>
                                <span className="sideIcons">{route.icon}</span>
                                {route.name}
                            </Link>
                        </Menu.Item>
                    ))}
                </Menu>
            </Sider>
        </div>
    )
}

export default SidebarC;


