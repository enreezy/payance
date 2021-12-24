import React from "react";
import { Menu } from "antd";
import {
  UserOutlined,
  PlusCircleOutlined,
  BookOutlined,
  SettingFilled,
  PoweroffOutlined,
} from "@ant-design/icons";
import { Link, Redirect, useHistory } from "react-router-dom";

const { SubMenu } = Menu;

const Sidebar: React.FC = () => {
  const history = useHistory();
  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      style={{ height: "100%", borderRight: 0 }}
    >
      <SubMenu key="sub1" icon={<UserOutlined />} title="Admin">
        <Menu.Item key="1" icon={<BookOutlined />}>
          <Link to="/">Dashboard</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<BookOutlined />}>
          <Link to="/members">Members</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<PlusCircleOutlined />}>
          <Link to="/attendances">Attendance</Link>
        </Menu.Item>
        <Menu.Item key="5" icon={<PlusCircleOutlined />}>
          <Link to="/schedules">Schedule</Link>
        </Menu.Item>
        <Menu.Item key="6" icon={<PlusCircleOutlined />}>
          <Link to="/departments">Department</Link>
        </Menu.Item>
        <Menu.Item key="7" icon={<PlusCircleOutlined />}>
          <Link to="/roles">Role</Link>
        </Menu.Item>
        <Menu.Item key="8" icon={<PlusCircleOutlined />}>
          <Link to="/reports">Reports</Link>
        </Menu.Item>
      </SubMenu>
      <SubMenu key="sub2" icon={<UserOutlined />} title="Payroll">
        <Menu.Item key="9" icon={<BookOutlined />}>
          <Link to="/overtime">Overtime</Link>
        </Menu.Item>
        <Menu.Item key="10" icon={<BookOutlined />}>
          <Link to="/deductions">Deductions</Link>
        </Menu.Item>
        <Menu.Item key="11" icon={<BookOutlined />}>
          <Link to="/earnings">Earnings</Link>
        </Menu.Item>
        <Menu.Item key="12" icon={<BookOutlined />}>
          <Link to="/payslip">Payslip</Link>
        </Menu.Item>
      </SubMenu>
      <SubMenu key="sub3" icon={<UserOutlined />} title="Billing">
        <Menu.Item key="13" icon={<BookOutlined />}>
          <Link to="/billing">Billing</Link>
        </Menu.Item>
        <Menu.Item key="14" icon={<BookOutlined />}>
          <Link to="/settings">Settings</Link>
        </Menu.Item>
      </SubMenu>
      <SubMenu key="sub4" title="More">
        <Menu.Item key="15" icon={<SettingFilled />}>
          Settings
        </Menu.Item>
        <Menu.Item key="16" icon={<PoweroffOutlined />}>
          <a href="/signin">Logout</a>
        </Menu.Item>
      </SubMenu>
      {/* <SubMenu key="sub3" icon={<SettingFilled />} title="Settings">
                <Menu.Item key="9">option9</Menu.Item>
                <Menu.Item key="10">option10</Menu.Item>
                <Menu.Item key="11">option11</Menu.Item>
                <Menu.Item key="12">option12</Menu.Item>
            </SubMenu> */}
    </Menu>
  );
};

export default Sidebar;
