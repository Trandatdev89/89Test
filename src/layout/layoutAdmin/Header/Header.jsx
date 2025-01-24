import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../img/logo.png";
import { isValidToken } from "../../../Auth/isValidToken";
import InfoUser from "../../Dropdown/InfoUser";
import { Button } from "antd";

export default function Header() {
  const isToken = isValidToken();
  console.log(isToken);
  return (
    <header className="layoutDefault__header">
      <div className="layoutDefault__logo">
        <Link to="/">
          <img src={logo} />
        </Link>
      </div>
      <ul className="Menu">
        <>
          <li className="Menu__item">
            <NavLink to="/">Trang chủ</NavLink>
          </li>
          <li className="Menu__item">
            <NavLink to="/topic">Chủ đề</NavLink>
          </li>
          <li className="Menu__item">
            <NavLink to="/usage">Liên hệ</NavLink>
          </li>
          <li className="Menu__item">
            <NavLink to="/blog">Tin tức</NavLink>
          </li>
        </>
      </ul>
      <div className="layoutDefault__dat">
        {isToken ? (
          <>
            <InfoUser />
          </>
        ) : (
          <>
            <Link to="/login" style={{ marginRight: "10px" }}>
              <Button type="primary">Đăng nhập</Button>
            </Link>
            <Link to="/register">
              <Button type="primary">Đăng ký</Button>
            </Link>
          </>
        )}
      </div>
    </header>
  );
}
