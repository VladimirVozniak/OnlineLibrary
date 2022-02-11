import {addBook, editPropertyBook, removeBook} from "../Redux/books";

export const appendBook = (title, author_id, year) => {
    return dispatch => {
        dispatch(addBook({title, author_id, year}))
    }
}

export const updateBook = (bookId, title, author_id, year) => {
    return dispatch => {
        dispatch(editPropertyBook({bookId, title, author_id, year}))
    }
}

export const deleteBook = (bookID) => {
    return dispatch => {
        dispatch(removeBook(bookID));
    }
}
