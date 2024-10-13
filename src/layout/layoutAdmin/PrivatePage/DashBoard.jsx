import { Card, Table, Tooltip } from 'antd'
import React, { useEffect, useState } from 'react'
import DeleteUser from './DeleteUser';
import { getAllUsers } from '../../../Services/UserServices';
import { jwtDecode } from "jwt-decode";
export default function DashBoard() {
 
    const [data,setData]=useState([]);
  
    const role = jwtDecode(localStorage.getItem("token")).scope;
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const columns = [
    {
      title: "tên đăng nhập",
      dataIndex: "username",
    },
    {
      title: "tên đầy đủ",
      dataIndex: "fullname",
    },
    {
      title: "email",
      dataIndex: "email",
    },
    {
      key: "action",
      title: "Hành Động",
      render: (_, record) => {
        return (
          <>
            <div
              className="action"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
                <>
                  
                  <Tooltip title="Xóa tài khoản">
                    <div>
                      <DeleteUser record={record} />
                    </div>
                  </Tooltip>
                  
              </>
            </div>
          </>
        );
      },
    },
  ];

  const token=localStorage.getItem("token");

  useEffect(()=>{
    const fetchAPI=async()=>{
       const res=await getAllUsers(token);
       setData(res.data);
    };
    fetchAPI();
  },[])

  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };


  return (
    <Card
    style={{ overflowX: "scroll", height: "100vh" }}
    title="Danh sách các tài khoản"
  >
    <Table
      rowKey="id"
      rowSelection={rowSelection}
      columns={columns}
      dataSource={data}
      pagination={false}
    />
  </Card>
  )
}
