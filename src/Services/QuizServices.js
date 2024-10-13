import { getAttachToken, postAttachToken } from "../utils/requestAPIToken";


export const getQuizByTopic=async(id,token)=>{
    const res=await getAttachToken(`api/question?topicId=${id}`,token);
    return res;
}

export const createQuiz=async(data,token)=>{
    const res=await postAttachToken("api/question",data,token);
    return res;
}
