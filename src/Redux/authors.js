import {createSlice} from "@reduxjs/toolkit";

const toolkitSlice = createSlice({
    name: "authors",
    initialState: {
        authorList: [{
            id: 123,
            first_name: "John",
            last_name: "Smith"
        }, {
            id: 124,
            first_name: "Black",
            last_name: "White"
        }]
    },
    reducers: {
        editPropertyAuthor(state, action) {
            state.authorList = state.authorList.map(elem => elem.id === action.payload.id ? {
                ...elem,
                first_name: action.payload.first_name,
                last_name: action.payload.last_name
            } : elem)
        },
        removeAuthor(state, action) {
            state.authorList = state.authorList.filter(book => book.id !== action.payload)
        }
    }
})

export const {editPropertyAuthor, removeAuthor} = toolkitSlice.actions
export default toolkitSlice.reducer
