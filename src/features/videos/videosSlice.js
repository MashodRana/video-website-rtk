import { getVideos } from "./videoAPI";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit")

// initial state
const initialState = {
    videos: [],
    isLoading: false,
    isError: false,
    error: ""
}

// Create Async Thunk

export const fetchVideos = createAsyncThunk('videos/fetchVideos', async () => {
    const videos = await getVideos();
    return videos;
})

// Create videos slice
const videoSlice = createSlice({
    name: 'videos',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchVideos.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(fetchVideos.fulfilled, (state, action) => {
                state.isLoading = false;
                state.videos = action.payload;
                state.isError = false;
                state.error = "";
            })
            .addCase(fetchVideos.rejected, (state, action) => {
                state.isLoading = false;
                state.videos = [];
                state.isError = true;
                state.error = action.error?.message;
            });
    }
});

export default videoSlice.reducer;