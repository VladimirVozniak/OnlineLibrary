import {addBook, editPropertyBook, removeBook, setBook} from "../Redux/books";
import {message} from "antd";
import axios from "axios";
import warning from "react-redux/lib/utils/warning";

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
      if (title === "" || author_id === null)
        throw new Error("warning")

      await axios.post("http://localhost:3001/createBook", {title, author_id, year})
      dispatch(addBook({title, author_id, year}))
      document.location.href = "/books"
    } catch (e) {
      if (e.message === "warning")
        message.warning("Не выбран автор или пустое название книги");
      else {
        message.error("Ошибка сервера");
        console.log(e)
      }
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
