import { setCookie } from "../../components/helper/cookie";
import { getUser } from "../../components/Services/LoginServices";
import "./index.scss";
import {useDispatch} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import { useState} from "react";
import { ReloadUser } from "../../Actions";
import Swal from 'sweetalert2';
import logo from "../../img/logo.png";
function Login() {
  const navigate=useNavigate();
  const [option,setOption]=useState({});
  const dispatch=useDispatch();
  const handleSubmit= async(e)=>{
    e.preventDefault();
    //lay ra nhung user de check tai khoan
    const res=await getUser();
    const result=res.find((item)=>item.email===option.email && item.password===option.password);
    
    if(result){
       //luu du lieu vao trong cookie
       Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Bạn đã đăng nhập thành công!",
        showConfirmButton: false,
        timer: 1500
      });
       setCookie("id",result.id,1);
       setCookie("fullName",result.fullName,1);
       setCookie("email",result.email,1);
       setCookie("token",result.token,1);
       dispatch(ReloadUser(true));   //gui len store de render lai header khi dang nhap
       navigate("/");
    }
    else{
      Swal.fire({
        icon: "error",
        title: "Tài khoản hoặc mật khẩu không đúng",
        text: "Hãy nhập lại tài khoản!",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
    }
    
  }


  //Lay du lieu nguoi dung nhap tu ban phim:
  const handleChange=(e)=>{
      const name=e.target.name;
      const value=e.target.value;
    
      setOption({
        ...option,
        [name]:value
      })
  }
  
  return (
    <>
      <div className="login">
       <div className="login__logo">
          <img src={logo} alt="logo"/>
        </div> 
      <h2 style={{textAlign:"center"}} className="login__title">Đăng nhập tài khoản</h2>
        <form className="login__form" onSubmit={handleSubmit}>
          <div className="container">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <label id="email">Nhập Email:</label>
                <input required type="email" className="login__input" name="email" onChange={handleChange}/>
              </div>
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <label>Mật Khẩu:</label>
                <input required type="password" className="login__input" name="password" onChange={handleChange}/>
              </div>
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <button className="login__btn">Login</button>
              </div>
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12" style={{marginTop:"10px"}}>
                Nếu chưa có tài khoản thì đăng ký <Link to="/register">Tại đây</Link>!
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
