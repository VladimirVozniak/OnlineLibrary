import {createSlice} from "@reduxjs/toolkit";

const toolkitSlice = createSlice({
    name: "books",
    initialState: {
        bookList: []
    },
    reducers: {
        setBook(state, action) {
            state.bookList = action.payload
        },
        addBook(state, action) {
            state.bookList.push({
                ...action.payload
            })
        },
        editPropertyBook(state, action) {
            state.bookList = state.bookList.map(elem => elem._id === action.payload.bookId ? {
                ...elem,
                title: action.payload.title,
                author_id: action.payload.author_id,
                year: action.payload.year
            } : elem)
        },
        removeBook(state, action) {
            state.bookList = state.bookList.filter(book => book._id !== action.payload)
        },
        removeBooksAuthor(state, action) {
            state.bookList = state.bookList.filter(book => book.author_id !== action.payload)
        }
    }
})

export const {setBook, addBook, editPropertyBook, removeBook, removeBooksAuthor} = toolkitSlice.actions
export default toolkitSlice.reducer
