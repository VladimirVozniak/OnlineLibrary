import "./style.css"
import {useSelector} from "react-redux";
import {Link, useParams} from "react-router-dom";
import {fullNameAuthor} from "../../../Logic/fullNameAuthor";

export const BookView = () => {
    const books = useSelector(state => state.books.bookList)
    const authors = useSelector(state => state.authors.authorList)
    const params = useParams()
    const prodId = Number(params.id)

    const viewBook = books.find(book => book.id === prodId)

    return (
        <div className="view-book">
            <img className="cover"/>
            <div>
                <h3 className="book-title">{viewBook.title}</h3>
                <p className="book-author">Автор: <Link to={`/authors/view=${viewBook.author_id}`}>
                    {fullNameAuthor(authors.find(author => author.id === viewBook.author_id))} </Link>
                </p>
                <p>Первая публикация: {new Date(viewBook.year).toLocaleDateString("ru-RU")}</p>
            </div>
            <Link to="/books">
                <button className="back-button">Назад</button>
            </Link>
        </div>
    )
}