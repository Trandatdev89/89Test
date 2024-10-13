import { Button, Popconfirm } from 'antd';
import React from 'react'
import { ReloadUser } from '../../../Actions';
import { deleteUser } from '../../../Services/UserServices';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteOutlined } from "@ant-design/icons";

export default function DeleteUser(props) {
    const {record}=props;

    const reload=useSelector(state=>state.ReducerUser);
    const token=localStorage.getItem("token");
    const dispatch=useDispatch();

    const handleComfirm=async(id)=>{
        const res= await deleteUser(id,token);
        if(res.code==="OK"){
            dispatch(ReloadUser(!reload));
            alert("Xóa thành công");
        }else{
            alert("Xóa không thành công");
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
