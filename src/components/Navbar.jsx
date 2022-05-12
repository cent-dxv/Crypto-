import React from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { BrowserRouter as Router, Link } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutliend,
} from "@ant-design/icons";

import icon from '../assets/f99p18g8.bmp'

const Navbar = () => {
  return (
    <div className="nav-container">
   
   <div className="logo-container">
   
        <Avatar src= {icon} size = 'large' />
        <Typography.Title level={2} className="logo">
          <Link to = "/">Cryp-punk</Link>
        </Typography.Title>
        {/* <Button className ='menu-control-container'>
            </Button> */}
            </div>
            <Menu theme = 'dark' >

            <Menu.Item icon = {<HomeOutlined/>}>
              <Link to ='/'>Home</Link>
            </Menu.Item>

            <Menu.Item icon = {<FundOutlined/>}>
              <Link to ='/CryptoCurrencies '>CryptoCurrencies</Link>
            </Menu.Item>

            
            <Menu.Item icon = {<MoneyCollectOutlined/>}>
              <Link to ='/Exchanges '>Exchanges</Link>
            </Menu.Item>

            <Menu.Item icon = {<BulbOutlined/>}>
              <Link to ='/News '>News</Link>
            </Menu.Item>



             </Menu>

      

    </div>
  );
};

export default Navbar;
