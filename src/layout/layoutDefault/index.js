import { Link, NavLink, Outlet } from "react-router-dom";
import logo from "../../img/logo.png";
import { FaUser } from "react-icons/fa";
import "bootstrap";
import { MdLogout } from "react-icons/md";
import "./index.scss";
import "./base.scss";
import { getCookie } from "../../components/helper/cookie";
import { useSelector } from "react-redux";
import { FaBars } from "react-icons/fa6";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import Bars from "./Bars";

function LayoutDefault() {
  const token = getCookie("token");
  const [bars, setBars] = useState(false);
  const name = getCookie("fullName");
  const handleClick = () => {
    setBars(!bars);
  };
  //Render lai header khi login hoac logout:
  const reload = useSelector((state) => state.ReducerUser);
  return (
    <>
      <div className="layoutDefault">
        <header className="layoutDefault__header">
          <div className="layoutDefault__logo">
            <Link to="/">
              <img src={logo} />
            </Link>
          </div>
          <ul className="Menu">
            {token ? (
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
                <li className="Menu__item">
                  <NavLink to="/anwser">Lịch sử</NavLink>
                </li>
              </>
            ) : (
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
            )}
          </ul>
          <div className="layoutDefault__dat">
            {token&&(<div className="layoutDefault__name" style={{color:"red"}}>Xin chào: {name}</div>)}            
            <div className="layoutDefault__icons">
              {token ? (
                <>
                  <Link to="/logout" title="Đăng xuất">
                    <MdLogout />
                  </Link>
                </>
              ) : (
                <Link to="/login" title="Đăng nhập">
                  <FaUser />
                </Link>
              )}
            </div>
          </div>
          <div className="bars" onClick={handleClick}>
            {bars ? <IoMdClose /> : <FaBars />}
          </div>
        </header>
        {bars ? <Bars setBars={setBars} /> : ""}
        <main className="main">
          <Outlet />
        </main>
        <footer className="footer">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="footer__box">
                  <h2 className="footer__title">Gửi Yêu Cầu Tư Vấn Miễn Phí</h2>
                  <p className="footer__desc">
                    Vui lòng để lại số điện thoại để nhận tư vấn sớm nhất
                  </p>
                  <div className="footer__input">
                    <input placeholder="Số điện thoại" />
                    <button className="footer__btn">Đăng Ký</button>
                  </div>
                </div>
              </div>
            </div>

            <hr />
            <div className="row">
              <div className="col-12">
                <div className="footer__contact">
                  CopyRight 2022-2023 by 89Test.vn
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default LayoutDefault;
