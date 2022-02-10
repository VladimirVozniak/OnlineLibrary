import {createSlice} from "@reduxjs/toolkit";

const toolkitSlice = createSlice({
    name: "books",
    initialState: {
        bookList: [{
            id: 1,
            title: "One",
            author_id: 123,
            created_at: 1644395473176,
            year: 1634392473176
        }, {
            id: 2,
            title: "Two",
            author_id: 124,
            created_at: 1444395483176,
            year: 1424385483176
        }, {
            id: 4,
            title: "Three",
            author_id: 123,
            created_at: 1544395373176,
            year: 1534395173176
        }]
    },
    reducers: {
        editPropertyBook(state, action) {
            state.bookList = state.bookList.map(elem => elem.id === action.payload.bookId ? {
                ...elem,
                title: action.payload.title,
                author_id: action.payload.author_id,
                year: action.payload.year
            } : elem)
        },
        removeBook(state, action) {
            state.bookList = state.bookList.filter(book => book.id !== action.payload)
        }
    }
})

export const {editPropertyBook, removeBook} = toolkitSlice.actions
export default toolkitSlice.reducer