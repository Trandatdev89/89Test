import React from "react";
import { Menu } from "antd";
import { DashboardOutlined,UserOutlined,TableOutlined,BarsOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";


export default function Slider() {
  const css={
    textDecoration:"none"
  }
  const item = [
    {
      key: 1,
      label: <Link style={css} to="/admin/dashboard">Quản lý tài khoản</Link>,
      icon: <DashboardOutlined />,
    },
    {
      key: 2,
      label: <Link style={css} to="/admin/list-question">Quản lý câu hỏi</Link>,
      icon: <UserOutlined />,
    },
    {
      key: 3,
      label: <Link  style={css}  to="/admin/dashboard">Quản lý </Link>,
      icon: <BarsOutlined />,
    },
    {
      key: 4,
      label: <Link  style={css}  to="/admin/dashboard">Quản lý </Link>,
      icon: <TableOutlined />,
    },
    
  ];
  return (
    <>
      <Menu style={{
         fontSize: "19px",
      }}  items={item} mode="inline" defaultOpenKeys={["1"]}/>
    </>
  );
}
