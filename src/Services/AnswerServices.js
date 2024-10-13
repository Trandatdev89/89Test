import { getAttachToken, postAttachToken } from "../utils/requestAPIToken";

export const createAnswer=async(data,token)=>{
    const res= await postAttachToken("api/answer-user",data,token);
    return res;
}

export const getUserbyId=async(id,token)=>{
    const res=await getAttachToken(`answers?userId=${id}`,token);
    return res;
}

export const getAnswerByTopicIdAndUserId=async(idUser,idTopic,token)=>{
    const res=await getAttachToken(`api/answer-user?userId=${idUser}&topicId=${idTopic}`,token);
    return res;
}

export const getHistoryTest=async(idUser,token)=>{
    const res=await getAttachToken(`api/answer-user/history?userId=${idUser}`,token);
    return res;
}