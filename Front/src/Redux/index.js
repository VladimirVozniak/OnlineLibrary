import {combineReducers, configureStore} from "@reduxjs/toolkit";
import books from "./books";
import authors from "./authors";

const rootReducer = combineReducers({
    books,
    authors
})

export const store = configureStore({
    reducer: rootReducer
})