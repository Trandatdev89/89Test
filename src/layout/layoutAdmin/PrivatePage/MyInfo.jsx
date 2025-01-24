import { Button, Col, Form, Input, Row } from "antd";
import React from "react";
import {  updateUser } from "../../../Services/UserServices";
import { jwtDecode } from "jwt-decode";

export default function MyInfo() {
  const token = localStorage.getItem("token");

  const handleFinish = async (values) => {
    const res = await updateUser(parseInt(jwtDecode(token).sub), values, token);
    if ((res.code = "OK")) {
      alert("Câp nhập thành công !");
    } else {
      alert("Câp nhập thất bại !");
    }
  };
  return (
    <>
      <div className="container">
        <h1 style={{ textAlign: "center", marginTop: "50px" }}>
          Thay đổi mật khẩu
        </h1>

        <div className="myInfo" style={{ padding: "100px 0" }}>
      
            <Form
              layout="horizontal"
              onFinish={handleFinish}
            >
              <Row gutter={[20]}>
                <Col span={12}>
                  <Form.Item label="Mật khẩu cũ" name="password">
                    <Input placeholder="Nhập Mật khẩu cũ..." />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Mật khẩu mới" name="passwordNew">
                    <Input placeholder="Mat khau mới..." />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item>
                    <Button htmlType="submit" size="large" type="primary">
                      Update
                    </Button>
                  </Form.Item>
                </Col>
              </Row>
            </Form>
         
        </div>
      </div>
    </>
  );
}
