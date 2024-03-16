import { get } from "../../utils/requestAPI"

export const QuizServices=async(id)=>{
    const res=await get(`questions?topicId=${id}`);
    return res;
}