import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Link } from 'react-router-dom';
const { Header,Content} = Layout;
const items = new Array(15).fill(null).map((_, index) => ({
  key: index + 1,
  label: `nav ${index + 1}`,
}));

const Headerpage = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const menuItems = [
    { key: 'home', label: <Link to="/">Home</Link> },
    { key: 'about', label: <Link to="/about">About</Link> },
    { key: 'projects', label: <Link to="/projects">Projects</Link> },
    { key: 'contact', label: <Link to="/contact">Contact</Link> },
    { key: 'login', label: <Link to="/login">Login</Link> },
  ];
  return (
    <>
    <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={menuItems}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      <Content style={{ padding: '0 48px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>My Portfolio</Breadcrumb.Item>
          
        </Breadcrumb>
       
      </Content>
      </>
  )
}

export default Headerpage