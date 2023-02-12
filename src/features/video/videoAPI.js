import axiosInstance from "../../utils/axios";

export const getVideoInfoFromServer = async(videoId)=>{
    const response = await axiosInstance.get(`/videos/${videoId}`);
    return response.data;
}