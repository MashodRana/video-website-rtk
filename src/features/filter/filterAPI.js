import axiosInstance from "../../utils/axios"


const getFilteredVideosFromServer = async (tags, searchString)=>{
    let queryString = "";
    queryString = tags.map(tag=>`tags_like=${tag}`).join("&");
    const response  = await axiosInstance.get(`/videos?`);
    return response.data;
}