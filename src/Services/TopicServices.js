import { DeleteAttachToken, getAttachToken, postAttachToken, postFormDataAttachToken } from "../utils/requestAPIToken";

export const getTopics=async(token)=>{
    const res=await getAttachToken("api/topic",token);
    return res;
}

export const getTopicById=async(id,token)=>{
    const res=await getAttachToken(`api/topic/${id}`,token);
    return res;
}

export const createTopic=async(data,token)=>{
    const res=await postFormDataAttachToken("api/topic",data,token);
    return res;
}

export const deleteTopic=async(id,token)=>{
    const res=await DeleteAttachToken("api/topic",id,token);
    return res;
}

