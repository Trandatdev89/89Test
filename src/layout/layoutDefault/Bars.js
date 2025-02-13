import { NavLink } from "react-router-dom";

function Bars(props) {
  const {setBars}=props;
  const handleClick=()=>{
    setBars(false);
  }
  const token=localStorage.getItem("token");
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
            {token?(<NavLink to="/logout">Đăng xuất</NavLink>):(<NavLink to="/login">Đăng nhập</NavLink>)}        
          </li>
          <li className="bars__item" onClick={handleClick}>
            <NavLink to="/register">Đăng ký</NavLink>
          </li>
        </ul>
      
    </>
  );
}

export default Bars;
