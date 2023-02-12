import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { act } from "react-dom/test-utils";
import { getVideoInfoFromServer } from "./videoAPI"

// initial state
const initialState = {
    video: {},
    isLoading: false,
    isError: false,
    error: ""
}

// create asyn thunk for video
export const fetchVideoInfo = createAsyncThunk('video/fetchVideoInfo', async (videoId) => {
    const videoInfo = await getVideoInfoFromServer(videoId);
    return videoInfo;
})


// Create slice for a video
const videoSlice = createSlice({
    name: 'video',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchVideoInfo.pending, state => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(fetchVideoInfo.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error?.message;
                state.isError = true;
            })
            .addCase(fetchVideoInfo.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.error = "";
                state.video = action.payload;
            })
    }
})

export default videoSlice.reducer;