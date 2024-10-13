import React, { useEffect, useState } from "react";
import { getMyInfo } from "../../Services/UserServices";
import { Link } from "react-router-dom";
import { Dropdown } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { jwtDecode } from "jwt-decode";

export default function InfoUser() {
  const token = localStorage.getItem("token");
  const idUser = jwtDecode(token).sub;
  const [data, setData] = useState({});
  const role = jwtDecode(token).scope;
  useEffect(() => {
    const fetchAPI = async () => {
      const User = await getMyInfo(parseInt(idUser), token);
      setData(User.data);
    };
    fetchAPI();
  }, []);

  const items = [
    {
      key: "1",
      label: (
        <>
          {role === "ADMIN" && (
            <div className="dropdownUser__hover">
              <Link to="/admin/dashboard">Trang quản lý</Link>
            </div>
          )}
        </>
      ),
    },
    {
      key: "2",
      label: (
        <>
          <div className="dropdownUser__hover">
            <Link to="/my-info">Tài khoản của tôi</Link>
          </div>
        </>
      ),
    },
    {
      key: "3",
      label: (
        <>
          <div className="dropdownUser__hover">
            <Link to="/logout">Đăng xuất</Link>
          </div>
        </>
      ),
    },
  ];
  return (
    <>
      <div className="dropdownUser">
        <Dropdown
          arrow
          menu={{ items }}
          dropdownRender={(menu) => (
            <>
              <div className="dropdownUser__body">{menu}</div>
            </>
          )}
        >
          <div
            className="dropdownUser__render"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              cursor: "pointer",
            }}
          >
            <div
              style={{
                width: "35px",
                height: "35px",
                borderRadius: "50%",
                backgroundColor: "#ddd",
                color: "#000",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <UserOutlined />
            </div>
            <div style={{ marginLeft: "10px" }}>{data.fullname}</div>
          </div>
        </Dropdown>
      </div>
    </>
  );
}
