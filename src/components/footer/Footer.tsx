import React from 'react'
import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Footer } = Layout;
const Footerpage = () => {
  return (
    <Footer style={{ textAlign: 'center' }}>
    Ant Design ©{new Date().getFullYear()} Created by Ant UED
  </Footer>
  )
}

export default Footerpage