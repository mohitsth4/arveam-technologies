import React from 'react';
import { Menu } from 'antd';


const Navbar = () => {

  return(
    <div>
      <div className="logo">
        <img src="/images/logo.png" alt="logo" width="200px" />
      </div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">Home</Menu.Item>
        <Menu.Item key="2">About</Menu.Item>
        <Menu.Item key="3">Services</Menu.Item>
        <Menu.Item key="4">Portfolio</Menu.Item>
        <Menu.Item key="5">Contact</Menu.Item>

      </Menu>
    </div>
  )

}

export default Navbar