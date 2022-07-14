import React from "react";
import {Layout} from 'antd';
import { Menu, Dropdown, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import {logout} from "../../redux/actions/auth";
import {useDispatch} from "react-redux";
const {Header} = Layout;

function HeaderC(user) {
    const userName = user.user ? (user.user.username) : "";
    const dispatch = useDispatch();

    const logOut = () => {
        dispatch(logout());
    };

    const menu = (
        <Menu
            items={[
                {
                    label: '1st menu item',
                    key: '1',
                },
                {
                    label: '2nd menu item',
                    key: '2',
                },
                {
                    label: '3rd menu item',
                    key: '3',
                },
            ]}
        />
    );

    return (
        <Header className="p-0 site-layout-background main-header">

            <a href="/login" className="nav-link mr-1" onClick={logOut}>
                LogOut
            </a>

            <Dropdown overlay={menu}  placement="bottomLeft" arrow={{ pointAtCenter: true }}>
                <a onClick={e => e.preventDefault()}>
                    <Space>
                        {userName}
                        <DownOutlined />
                    </Space>
                </a>
            </Dropdown>
        </Header>
    )
}

export default HeaderC;