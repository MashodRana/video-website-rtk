import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getTags } from "./tagsAPI"

const initialState = {
    tags: [],
    isLoading: false,
    isError: false,
    error: ""
}

// create async thunk for tags
export const fetchTags = createAsyncThunk('tags/fetchTags', async () => {
    const tags = await getTags();
    return tags;
})

// Create slice for tags
const tagsSlice = createSlice({
    name: 'tags',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchTags.pending, state => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(fetchTags.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error?.message;
            })
            .addCase(fetchTags.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.error = "";
                state.tags = action.payload;
            });
    }
})

export default tagsSlice.reducer;