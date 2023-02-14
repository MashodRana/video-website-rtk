import axiosInstance from "../../utils/axios";


export const getRelatedVideosFromServer = async ({currentVideoId, tags})=>{
    let queryString = "";
    queryString = tags.map(tag=>`tags_like=${tag}`).join('&');
    queryString = `${queryString}&id_ne=${currentVideoId}`;
    const response = await axiosInstance.get(`/videos?${queryString}&limit=5`);
    return response.data;

}