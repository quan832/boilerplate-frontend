import React from 'react'
import { Link } from 'react-router-dom';
import logo from 'assets/images/logo.png';
import { Menu, Avatar, Layout, Divider } from 'antd';
import { ContainerSidebar } from './Sidebar.styled';
import {
    HomeFilled
} from '@ant-design/icons';
const { Sider } = Layout;

export default function Sidebar() {
    const [collapsed, setCollapsed] = React.useState(true);

    return (
        <ContainerSidebar>
            <Sider
                width={300}
                trigger={null}
                collapsible
                className="site-layout-background sider"
                collapsed={collapsed}
            >
                <div className="logo">
                    <img src={logo} alt=""></img>
                </div>
                <Divider />
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    className="menu-style"
                    subMenuCloseDelay={0.8}
                    subMenuOpenDelay={0.8}
                // selectedKeys={'/'}
                // style={{ height: "100%" }}
                // theme="dark"
                // inlineCollapsed={this.state.collapsed}
                >
                    <Menu.Item key="1" icon={<HomeFilled />}>
                        <Link to='/'>
                            Dashboard
                        </Link>
                    </Menu.Item>
                </Menu>
                {/* <div className="logout-menu">
                    <Divider />
                    <FlexDiv rowReverse spaceBetween>
                        <p onClick={onLogout} className="font-weight-medium text-dark hover-primary">
                            Logout
                        </p>
                        <p className="text-fade">Booking System</p>
                    </FlexDiv>
                </div> */}
            </Sider>
        </ContainerSidebar>
    )
}
