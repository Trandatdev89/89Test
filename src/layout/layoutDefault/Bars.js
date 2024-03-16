import { NavLink } from "react-router-dom";

function Bars(props) {
  const {setBars}=props;
  const handleClick=()=>{
    setBars(false);
  }
  return (
    <>
        <ul className="bars__list">
          <li className="bars__item" onClick={handleClick}>
            <NavLink to="/">Trang chủ</NavLink>
          </li>
          <li className="bars__item" onClick={handleClick}>
            <NavLink to="/topic">Chủ đề</NavLink>
          </li>
          <li className="bars__item" onClick={handleClick}>
            <NavLink to="/blog">Bài viết</NavLink>
          </li>
          <li className="bars__item" onClick={handleClick}>
            <NavLink to="/anwser">Lịch sử</NavLink>
          </li>
          <li className="bars__item" onClick={handleClick}>
            <NavLink to="/login">Đăng nhập</NavLink>
          </li>
          <li className="bars__item" onClick={handleClick}>
            <NavLink to="/register">Đăng ký</NavLink>
          </li>
        </ul>
      
    </>
  );
}

export default Bars;
