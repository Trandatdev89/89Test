import {DeleteAttachToken, getAttachToken, patchAttachToken} from "../utils/requestAPIToken";

export const getMyInfo=async(id,token)=>{
    const res=await getAttachToken(`api/user/${id}`,token);
    return res;
}

export const updateUser=async(id,data,token)=>{
    const res=await patchAttachToken("api/user",id,data,token);
    return res;
}

export const deleteUser=async(id,token)=>{
    const res=await DeleteAttachToken("api/user",id,token);
    return res;
}


export const getAllUsers=async(token)=>{
    const res=await getAttachToken(`api/user`,token);
    return res;
}