import { useState } from "react";
import { RegisterUser, checkEmail } from "../../components/Services/RegisterUser";
import { setCookie } from "../../components/helper/cookie";
import generateToken from "../../components/helper/generateToken";
import { useNavigate } from "react-router-dom";
import "./index.scss";
import logo from "../../img/logo.png";

function Register() {
    const [option,setOption]=useState({});
    const navigate=useNavigate()
    const handleSubmit=  async(e)=>{
       e.preventDefault();
       const token=generateToken();
       option.token=token;
       const checkUser=await checkEmail(option.email);
       if(checkUser.length>0){
        alert("email nay da ton tai!");
       }
       else{
           const res= await RegisterUser(option);
           if(res){
            alert("ban da dang ky thanh cong!");
            navigate("/login");
           }
           else{
            alert("dang ky khong thanh cong")
           }
       }
    }

    //lay du lieu cua nguoi dung nhap vao form:
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
      <div className="register">
      <div className="login__logo">
          <img src={logo} alt="logo"/>
        </div> 
      <h2 style={{textAlign:"center"}} className="login__title">Đăng ký tài khoản</h2>
        <form className="register__form" onSubmit={handleSubmit}>
          <div className="container">
            <div className="row">
            <div className="col-12">
                <label className="form-label" htmlFor="name">
                   Tên đầy đủ:
                </label>
                <input
                  className="form-control"
                  id="name"
                  name="fullName"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-12">
                <label className="form-label" htmlFor="email">
                  Nhập Email:
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-12">
                <label className="form-label" htmlFor="password">Mật Khẩu:</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="col-12">
                <button className="mt-3 register__btn">Đăng ký</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Register;
