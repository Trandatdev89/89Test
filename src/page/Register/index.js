import { useState } from "react";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
import "./index.scss";
import logo from "../../img/logo.png";
import { register } from "../../Services/AuthServices";

function Register() {
    const [option,setOption]=useState({});
    const navigate=useNavigate();


    const handleSubmit=  async(e)=>{
       e.preventDefault();
       
       const res = await register(option);
       console.log(res);
       if(res.data == null && res.code === "BAD_REQUEST"){
        Swal.fire({
          icon: "error",
          title: `${res.message} .Hay đăng ký với username khác`,
          text: "Vui lòng sử dụng email khác để đăng ký!",
          footer: '<a href="#">Why do I have this issue?</a>'
        });
       }
       else{
           if(res.code === "OK"){
            alert("Bạn đã đăng ký thành công!");
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: "Bạn đã đăng ký thành công!",
              showConfirmButton: false,
              timer: 1500
            });
            navigate("/login");
           }
           else{
            Swal.fire({
              icon: "error",
              title: `${res.message}`,
              footer: '<a href="#">Why do I have this issue?</a>'
            });
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
                <label className="form-label" htmlFor="fullname">
                   Tên đầy đủ:
                </label>
                <input
                  className="form-control"
                  id="name"
                  name="fullname"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-12">
                <label className="form-label" htmlFor="username">
                   Username:
                </label>
                <input
                  className="form-control"
                  id="username"
                  name="username"
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
                <label className="form-label" htmlFor="birth">Ngày sinh:</label>
                <input
                  type="date"
                  className="form-control"
                  id="birth"
                  name="birth"
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
