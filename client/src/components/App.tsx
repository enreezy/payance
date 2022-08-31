import React from "react";
import { Layout, Breadcrumb } from "antd";
const { Header, Content, Sider } = Layout;
// @ts-ignore
import Navbar from "./Layouts/Navbar.tsx";
// @ts-ignore
import Sidebar from "./Layouts/Sidebar.tsx";
import Routes from "../routes";
import "../style/global-variables.scss";
interface Props {}

const App: React.FC<Props> = () => {
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Navbar />
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Sidebar />
        </Sider>
        <Layout className="layout">
          <Content className="site-layout-background content">
            <Routes />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default App;
