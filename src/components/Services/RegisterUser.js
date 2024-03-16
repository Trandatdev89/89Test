import { get, post } from "../../utils/requestAPI"

export const RegisterUser=async(data)=>{
    const res=await post("users",data);
    return res;
}

export const checkEmail=async(email)=>{
    const res=await get(`users/?email=${email}`);
    return res;
}

