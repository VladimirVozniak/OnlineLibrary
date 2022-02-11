import {addAuthor, editPropertyAuthor, removeAuthor} from "../Redux/authors";
import {removeBooksAuthor} from "../Redux/books";

export const appendAuthor = (first_name, last_name) => {
    return dispatch => {
        if (first_name !== "" && last_name !== "")
            dispatch(addAuthor({first_name, last_name}))
    }
}

export const updateAuthor = (authorId, first_name, last_name) => {
    return dispatch => {
        if (first_name !== "" && last_name !== "")
            dispatch(editPropertyAuthor({authorId, first_name, last_name}))
    }
}

export const deleteAuthor = (authorId) => {
    return dispatch => {
        dispatch(removeAuthor(authorId));
        dispatch(removeBooksAuthor(authorId))
    }
}
