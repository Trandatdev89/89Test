import { get, post } from "../../utils/requestAPI"

export const createAnswer=async(data)=>{
    const res= await post("answers",data);
    return res;
}

export const getUserbyId=async(id)=>{
    const res=await get(`answers?userId=${id}`);
    return res;
}