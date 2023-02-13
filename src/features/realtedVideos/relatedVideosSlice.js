import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getRelatedVideosFromServer } from "./relatedVideosAPI"

// initial state
const initialState = {
    relatedVideos: [],
    isLoading: false,
    isError: false,
    error: ""
}

// Create async thunk for the realted videos
export const fetchRelatedVideos = createAsyncThunk('realtedVideos/fetchRelatedVideos', async({videoId,tags} )=>{
    const relatedVideos = await getRelatedVideosFromServer({videoId, tags});
    return relatedVideos;
})


// create slice for the realted videos
const relatedVideosSlice = createSlice({
    name:'realtedVideos',
    initialState,
    extraReducers:(builder)=>{
        builder
        .addCase(fetchRelatedVideos.pending, state=>{
            state.isError=false;
            state.isLoading = true;
        })
        .addCase(fetchRelatedVideos.rejected, (state, action)=>{
            state.isLoading=false;
            state.isError=true;
            state.error=action.error?.message;
            
        })
        .addCase(fetchRelatedVideos.fulfilled, (state, action)=>{
            state.isLoading=false;
            state.isError=false;
            state.error="";
            state.relatedVideos=action.payload;
        })
    }
})

export default relatedVideosSlice.reducer;