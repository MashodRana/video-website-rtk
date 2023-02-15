import axios from "../../utils/axios";

export const getVideos = async (tags, searchString) => {
  let queryString = "";
  if (tags?.length > 0)
    queryString = tags.map((tag) => `tags_like=${tag}`).join("&");
  if (searchString) queryString = `${queryString}&q=${searchString}`;
  const response = await axios.get(`/videos?${queryString}`);
  return response.data;
};
