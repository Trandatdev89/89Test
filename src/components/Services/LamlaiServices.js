import { patch } from "../../utils/requestAPI"

const updateAnswer=async(id,data)=>{
    const res=await patch("answers",id,data);
    return res;
}

export default updateAnswer;