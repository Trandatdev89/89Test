import { post } from "../../utils/requestAPI"

export const createAnswer=async(data)=>{
    const res= await post("answers",data);
    return res;
}