import {editPropertyBook, removeBook} from "../Redux/books";

export const deleteBook = (bookID) => {
    return dispatch => {
        dispatch(removeBook(bookID));
    }
}

export const updateBook = (bookId, title, author_id, year) => {
    return dispatch => {
        dispatch(editPropertyBook({bookId, title, author_id, year}))
    }
}