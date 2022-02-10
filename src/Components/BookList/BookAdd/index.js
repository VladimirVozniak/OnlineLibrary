import {Link, useParams} from "react-router-dom";
import {updateBook} from "../../../API/bookActions";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";

export const BookAdd = () => {
    const books = useSelector(state => state.books.bookList)
    const authors = useSelector(state => state.authors.authorList)
    const params = useParams()
    const prodId = Number(params.id)
    const dispatch = useDispatch()

    const editingBook = books.find(book => book.id === prodId)
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState(null);
    const [date, setDate] = useState(Date.now());

    return (
        <div className="book">
            <div className="book-edit">
                <div className="img-edit">
                    <img className="cover"/>
                    <input className="img-replace" type="file" accept=".png, .jpg, .jpeg"/>
                </div>
                <div className="qwe">
                    <input type="text" value={title} placeholder="Название книги"
                           onChange={e => setTitle(e.target.value)}/>
                    <select onChange={(e) => setAuthor(Number(e.target.value))}>
                        {authors.map((author, index) =>
                            <option key={index} selected={author.id === editingBook.author_id}
                                    value={author.id}>{`${author.first_name} ${author.last_name}`}</option>)}
                    </select>
                    <input type="date" value={date ? new Date(date).toISOString().split("T")[0] : "1970-01-01"}
                           onChange={e => setDate(Date.parse(e.target.value))}/>
                </div>
            </div>
            <div className="edit-button">
                <Link to="/books">
                    <button className="apply-button"
                            onClick={() => dispatch(updateBook(editingBook.id, title, author, date))}>Сохранить
                    </button>
                </Link>
                <Link to="/books">
                    <button className="cancel-button">Отмена</button>
                </Link>
            </div>
        </div>
    )
}