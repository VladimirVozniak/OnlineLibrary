import "./style.css"
import {useSelector} from "react-redux";
import {Link, useParams} from "react-router-dom";
import {fullNameAuthor} from "../../../Logic/fullNameAuthor";

export const AuthorView = () => {
    const authors = useSelector(state => state.authors.authorList)
    const params = useParams()
    const prodId = Number(params.id)

    const viewAuthor = authors.find(book => book.id === prodId)

    return (
        <div className="view-book">
            <img className="cover"/>
            <div>
                <p className="book-author">Автор: <Link to={`/authors/view=${viewAuthor.id}`}>
                    {fullNameAuthor(viewAuthor)} </Link>
                </p>
            </div>
            <Link to="/authors">
                <button className="back-button">Назад</button>
            </Link>
        </div>
    )
}