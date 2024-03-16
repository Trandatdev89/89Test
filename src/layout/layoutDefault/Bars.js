import { IoMdClose } from "react-icons/io";
import { NavLink } from "react-router-dom";

function Bars() {
  return (
    <>
        <ul className="bars__list">
          <li className="bars__item">
            <NavLink to="/">Trang chủ</NavLink>
          </li>
          <li className="bars__item">
            <NavLink to="/topic">Chủ đề</NavLink>
          </li>
          <li className="bars__item">
            <NavLink to="/blog">Bài viết</NavLink>
          </li>
          <li className="bars__item">
            <NavLink to="/quiz">Về 89test</NavLink>
          </li>
          <li className="bars__item">
            <NavLink to="/anwser">Lịch sử</NavLink>
          </li>
        </ul>
      
    </>
  );
}

export default Bars;
