import {addBook, editPropertyBook, removeBook, setBook} from "../Redux/books";
import axios from "axios";

export const getBooks = () => {
    return async dispatch => {
        try {
            const allBooks = await axios.post("http://localhost:3001/getBooks")
            dispatch(setBook(allBooks.data.data))
        } catch (e) {
            console.log(e)
        }
    }
}

export const appendBook = (title, author_id, year) => {
    return async dispatch => {
        try {
            const book = await axios.post("http://localhost:3001/createBook", {title, author_id, year})
            dispatch(addBook({title, author_id, year}))
        } catch (e) {
            console.log(e)
        }
    }
}

export const updateBook = (bookId, title, author_id, year) => {
    return async dispatch => {
        try {
            await axios.post("http://localhost:3001/updateBook", {bookId, title, author_id, year})
            dispatch(editPropertyBook({bookId, title, author_id, year}))
        } catch (e) {
            console.log(e)
        }
    }
}

export const deleteBook = (bookID) => {
    return async dispatch => {
        try {
            await axios.post("http://localhost:3001/deleteBook", {bookID})
            dispatch(removeBook(bookID));
        } catch (e) {
            console.log(e)
        }
    }
}
