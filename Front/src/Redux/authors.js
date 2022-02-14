import {createSlice} from "@reduxjs/toolkit";

const toolkitSlice = createSlice({
    name: "authors",
    initialState: {
        authorList: []
    },
    reducers: {
        setAuthor(state, action) {
            state.authorList = action.payload
        },
        addAuthor(state, action) {
            state.authorList.push({
                ...action.payload
            })
        },
        editPropertyAuthor(state, action) {
            state.authorList = state.authorList.map(elem => elem._id === action.payload.authorId ? {
                ...elem,
                first_name: action.payload.first_name,
                last_name: action.payload.last_name
            } : elem)
        },
        removeAuthor(state, action) {
            state.authorList = state.authorList.filter(author => author._id !== action.payload)
        }
    }
})

export const {setAuthor, addAuthor, editPropertyAuthor, removeAuthor} = toolkitSlice.actions
export default toolkitSlice.reducer
