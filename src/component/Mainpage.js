import React from "react";
import Dashboard from "./Dashboard";
import Sidebar from "./Sidebar";
import { Layout, Space } from "antd";

const { Sider, Content } = Layout;
const Mainpage = () => {
  const contentStyle = {
    textAlign: "center",
    minHeight: "100vh",

    backgroundColor: "#fff",
  };
  const siderStyle = {
    textAlign: "center",

    backgroundColor: "#fff",
  };
  return (
    <>
      <Space
        direction="vertical"
        style={{ width: "100%", height: "100vh" }}
        size={[0, 48]}
      >
        <Layout>
          <Sider className="smallscreenhide" style={siderStyle}>
            <Sidebar />
          </Sider>
          <Layout>
            <Content style={contentStyle}>
              <Dashboard />
            </Content>
          </Layout>
        </Layout>
      </Space>
    </>
  );
};

export default Mainpage;
