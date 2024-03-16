import { Outlet, useNavigate } from "react-router-dom";
import { getCookie } from "../helper/cookie";

import Blog from "../../page/Blog/index";

function PrivateUser(){
    const navigate=useNavigate();
    const token =getCookie("token");
    console.log(token);
    return(
        <>
           {token?(<Outlet/>):(<>
              <div style={{height:"60vh",textAlign:"center",fontSize:"30px",marginTop:"30vh"}}>
                Bạn chưa đăng nhập.Vui lòng đăng nhập tài khoản để làm bài thi!
              </div>             
           </>)}
        </>
    )
}

export default PrivateUser;