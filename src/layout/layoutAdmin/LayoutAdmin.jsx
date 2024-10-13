import React, { useState } from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Slider from "./Slider/Slider";
import { useSelector } from "react-redux";
import { Drawer, Layout } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content, Footer } from "antd/es/layout/layout";
import { Outlet } from "react-router-dom";
import FooterAdmin from "../layoutAdmin/Footer/Footer";
import "./index.scss";

export default function LayoutAdmin() {

  const reload = useSelector((state) => state.ReducerUser);
  return (
    <Layout>
    <Header/>
    <Layout>
      <Sider theme="light" width="250px" className="sider">
        <Slider />
      </Sider>
      <Content>
        <div className="container">
          <div style={{ minHeight: "100vh", padding: "50px 0" }}>
            <Outlet />
          </div>
        </div>
      </Content>
    </Layout>
    <FooterAdmin/>
  
  </Layout>
  );
}
