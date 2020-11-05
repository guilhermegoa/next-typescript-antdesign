import React, { ReactNode, useState } from 'react'

import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu

type Props = {
  children?: ReactNode
}

function layout({children }: Props) { 
  const [collapsed, setCollapsed] = useState(false)

  const toggle = () => {
    setCollapsed(!collapsed)
  };

  return(
    <Layout style={{ height:"100vh", overflow:"hidden"}}>
      <Header className="site-layout-background" style={{ padding: 0 }} />
      <Layout className="site-layout">
        <Sider 
          trigger={null} 
          collapsible 
          collapsed={collapsed}
          breakpoint="lg"
          collapsedWidth="80px"
          onBreakpoint={toggle}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <SubMenu key="1" icon={<UserOutlined />} title="subMenu 1" >
              <Menu.Item key="1">option1</Menu.Item>
              <Menu.Item key="2">option2</Menu.Item>
              <Menu.Item key="3">option3</Menu.Item>
              <Menu.Item key="4">option4</Menu.Item>
            </SubMenu>
            <SubMenu key="2" icon={<VideoCameraOutlined />} title="subMenu 2" >
              <Menu.Item key="1">option1</Menu.Item>
              <Menu.Item key="2">option2</Menu.Item>
              <Menu.Item key="3">option3</Menu.Item>
              <Menu.Item key="4">option4</Menu.Item>
            </SubMenu>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              nav 3
            </Menu.Item>
          </Menu>
        </Sider>
        {collapsed 
          ? <MenuUnfoldOutlined onClick={toggle} /> 
          : <MenuFoldOutlined onClick={toggle} /> 
        }
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  )
}

export default layout;