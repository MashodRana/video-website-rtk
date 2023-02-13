import axiosInstance from "../../utils/axios";


export const getRelatedVideosFromServer = async ({videoId, tags})=>{
    let queryString = "";
    queryString = tags.map(tag=>`tags_like=${tag}`).join('&');
    queryString = `${queryString}&id_ne=${videoId}`;
    const response = await axiosInstance.get(`/videos?${queryString}&limit=5`);
    return response.data;

}