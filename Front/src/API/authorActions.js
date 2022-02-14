import {addAuthor, editPropertyAuthor, removeAuthor, setAuthor} from "../Redux/authors";
import {removeBooksAuthor} from "../Redux/books";
import axios from "axios";

export const getAuthors = () => {
  return async dispatch => {
    try {
      const allAuthors = await axios.post("http://localhost:3001/getAuthors")
      dispatch(setAuthor(allAuthors.data.data))
    } catch (e) {
      console.log(e)
    }
  }
}

export const appendAuthor = (first_name, last_name) => {
  return async dispatch => {
    try {
      if (first_name !== "" && last_name !== "") {
        const newAuthor = await axios.post("http://localhost:3001/createAuthors", {first_name, last_name})
        dispatch(addAuthor(newAuthor.data.data))
      }
    } catch (e) {
      console.log(e)
    }
  }
}

export const updateAuthor = (authorId, first_name, last_name) => {
  return async dispatch => {
    try {
      if (first_name !== "" && last_name !== "") {
        await axios.post("http://localhost:3001/updateAuthor", {authorId, first_name, last_name})
        dispatch(editPropertyAuthor({authorId, first_name, last_name}))
      }
    } catch (e) {
      console.log(e)
    }

  }
}

export const deleteAuthor = (authorId) => {
  return async dispatch => {
    try {
      await axios.post("http://localhost:3001/deleteAuthor", {_id: authorId})

      dispatch(removeAuthor(authorId));
      dispatch(removeBooksAuthor(authorId))
    } catch (e) {
      console.log(e)
    }

  }
}
