import React, { useState } from "react";
import { Menu } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;

const Navbar: React.FC = () => {
  const [current, setCurrent] = useState<string | null>("mail");
  const handleClick = (e: any) => {
    setCurrent(e);
  };

  return (
    <>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">
          <a href="/diaries">Home</a>
        </Menu.Item>
        {/* <Menu.Item key="2">About Me</Menu.Item>
                <Menu.Item key="3">Graph</Menu.Item> */}
      </Menu>
    </>
  );
};

export default Navbar;
