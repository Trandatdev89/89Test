import {get} from "../../utils/requestAPI";

export const getUser=async()=>{
    const res=await get("users");
    return res;
}