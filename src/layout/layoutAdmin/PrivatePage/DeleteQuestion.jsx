import { Button, Popconfirm } from 'antd';
import React, { useState } from 'react'
import { DeleteOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from 'react-redux';
import { ReloadUser } from '../../../Actions';
import { deleteTopic } from '../../../Services/TopicServices';


export default function DeleteQuestion(props) {

  const {record}=props;

    const reload=useSelector(state=>state.ReducerUser);
    const token=localStorage.getItem("token");
    const dispatch=useDispatch();

    const handleComfirm=async(id)=>{
        const res= await deleteTopic(id,token);
        if(res.code==="OK"){
            dispatch(ReloadUser(!reload));
            alert("xoa thanh cong");
        }else{
            alert("xoa khong thanh cong");
        }
    }

  return (
    <Popconfirm
    title="Bạn có chắc chắn muốn xóa nó"
    description="Nếu xóa thì sản phẩm sẽ không thể phục hồi?"
    okText="Yes"
    cancelText="No"
    onConfirm={()=>handleComfirm(record.id)}
  >
    <Button className="ms-1" danger icon={<DeleteOutlined />} />
  </Popconfirm>
  )
}
