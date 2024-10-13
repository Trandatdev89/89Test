import { Button, Col, DatePicker, Form, Input, Row } from 'antd';
import React, { useEffect, useState } from 'react'
import { getMyInfo, updateUser } from '../../../Services/UserServices';
import { jwtDecode } from 'jwt-decode';

export default function MyInfo() {

    const token=localStorage.getItem("token");

   const [data,setData]=useState({});

   useEffect(()=>{
    const fetchAPI=async()=>{
        const res=await getMyInfo(parseInt(jwtDecode(token).sub),token);
        setData(res.data);
    }
    fetchAPI();
   },[token]);


   const handleFinish=async(values)=>{
    const res=await updateUser(parseInt(jwtDecode(token).sub),values,token);
    if(res.code="OK"){
        alert("Câp nhập thành công !")
    }else{
        alert("Câp nhập thất bại !")
    }
   }
  return (
    <>
    
    <h1 style={{textAlign:"center"}}>Cập nhập tài khoản</h1>
    <div className="myInfo" style={{padding:"100px 0"}}>
         <Form layout="vertical" onFinish={handleFinish} initialValues={data}>
              <Row gutter={[20]}>
                <Col span={12}>
                  <Form.Item label="Username" name="username">
                    <Input placeholder="Username..."  />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Mat khau" name="password">
                    <Input placeholder="Mat khau..."  />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Ten day du" name="fullname">
                    <Input placeholder="Ten day du..."  />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Ngày sinh" name="birth">
                    <DatePicker  placeholder="Ngày sinh..."  />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="email" name="email">
                    <Input placeholder="email..." />
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
    </>
  )
}
