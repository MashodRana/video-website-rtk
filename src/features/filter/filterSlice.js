const { createSlice } = require("@reduxjs/toolkit")

// initial state
const initialState = {
    tags: [],
    searchString: "",
}

// create slice for filter
const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        selectTag: (state, action) => {
            state.tags.push(action.payload);
        },
        removeTag: (state, action) => {
            const index = state.tags.indexOf(action.payload);
            if (index > -1) {
                state.tags.splice(index, 1);
            }

        },
        setSearchString: (state, action) => {
            state.searchString = action.payload;
        }

    }
})

export default filterSlice.reducer;
export const { selectTag, removeTag, setSearchString } = filterSlice.actions;