import React from "react";
import { Menu } from "antd";
import { DashboardOutlined,UserOutlined} from "@ant-design/icons";
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
  ];
  return (
    <>
      <Menu style={{
         fontSize: "19px",
      }}  items={item} mode="inline" defaultOpenKeys={["1"]}/>
    </>
  );
}
