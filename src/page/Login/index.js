import "./index.scss";
import { Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ReloadUser } from "../../Actions";
import Swal from "sweetalert2";
import logo from "../../img/logo.png";
import { login } from "../../Services/AuthServices";
function Login() {
  const navigate = useNavigate();
  const [option, setOption] = useState({});
  const dispatch = useDispatch();
  const [spining, setSpining] = useState(false);
  const reload = useSelector((state) => state.ReducerUser);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSpining(true);
    const result=await login(option);
    
    if (result.data) {
      setSpining(false);
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Bạn đã đăng nhập thành công!",
        showConfirmButton: false,
        timer: 1500,
      });
      localStorage.setItem("token", result.data.token);
      dispatch(ReloadUser(!reload));
      navigate("/");
    } else {
      setSpining(false);
      Swal.fire({
        icon: "error",
        title: "Tài khoản hoặc mật khẩu không đúng",
        text: "Hãy nhập lại tài khoản!",
        footer: '<a href="#">Why do I have this issue?</a>',
      });
    }
  };

  //Lay du lieu nguoi dung nhap tu ban phim:
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setOption({
      ...option,
      [name]: value,
    });
  };

  return (
    <>
      <div className="login">
        <div className="login__logo">
          <img src={logo} alt="logo" />
        </div>
        <h2 style={{ textAlign: "center" }} className="login__title">
          Đăng nhập 
        </h2>
        <Spin spinning={spining} tip="Đang đăng nhập">
          <form className="login__form" onSubmit={handleSubmit}>
            <div className="container">
              <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <label id="email">Nhập Username:</label>
                  <input
                    required
                    type="text"
                    className="login__input"
                    name="username"
                    onChange={handleChange}
                  />
                </div>
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <label>Mật Khẩu:</label>
                  <input
                    required
                    type="password"
                    className="login__input"
                    name="password"
                    onChange={handleChange}
                  />
                </div>
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <button className="login__btn">Login</button>
                </div>
                <div
                  className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"
                  style={{ marginTop: "10px" }}
                >
                  Nếu chưa có tài khoản thì đăng ký{" "}
                  <Link to="/register">Tại đây</Link>!
                </div>
              </div>
            </div>
          </form>
        </Spin>
      </div>
    </>
  );
}

export default Login;
