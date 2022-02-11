import "./style.css"
import {useDispatch, useSelector} from "react-redux";
import {deleteBook} from "../../API/bookActions";
import {Link} from "react-router-dom";
import {fullNameAuthor} from "../../Logic/fullNameAuthor";

export const BookList = () => {
    const bookList = useSelector(state => state.books.bookList)
    const authors = useSelector(state => state.authors.authorList)
    const dispatch = useDispatch()

    return (
        <>
            <Link to="/books/add">
                <button className='button-add'>Добавить</button>
            </Link>
            <div className="book-list">
                {bookList.map((elem, id) =>
                    <div className="book-list-item" key={id}>
                        <img className="cover"/>
                        <div className="container1">
                            <Link to={`/books/view=${elem.id}`}>
                                <h3 className="book-title">{elem.title}</h3>
                            </Link>
                            <p className="book-author">Автор: <Link to={`/authors/view=${elem.author_id}`}>
                                {fullNameAuthor(authors.find(author => author.id === elem.author_id))} </Link>
                            </p>
                            <p>Первая публикация: {new Date(elem.year).toLocaleDateString("ru-RU")}</p>
                            <Link to={`/books/view=${elem.id}`}>
                                <button className="button-read">Посмотреть</button>
                            </Link>
                            <Link to={`/books/edit=${elem.id}`}>
                                <button className="button-edit">Редактировать</button>
                            </Link>
                            <button className="button-delete" onClick={() => dispatch(deleteBook(elem.id))}>Удалить
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}