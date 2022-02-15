import "./style.css"
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {fullNameAuthor} from "../../Logic/fullNameAuthor";
import {deleteAuthor} from "../../API/authorActions";

export const AuthorList = () => {
  const authors = useSelector(state => state.authors.authorList)
  const dispatch = useDispatch()

  return (
    <>
      <h1 className='title-page'>Список авторов</h1>
      <Link to="/authors/add">
        <button className="button-add">Добавить</button>
      </Link>
      <div className="author-list">
        {authors.map((elem, id) =>
          <div className="author-list-item" key={id}>
            <div className="cover"/>
            <div className="container2">
              <p className="book-author">Автор: <Link to={`/authors/view=${elem._id}`}>
                {fullNameAuthor(elem)} </Link>
              </p>
              <Link to={`/authors/view=${elem._id}`}>
                <button className="button-read">Посмотреть</button>
              </Link>
              <Link to={`/authors/edit=${elem._id}`}>
                <button className="button-edit">Редактировать</button>
              </Link>
              <button className="button-delete" onClick={() => dispatch(deleteAuthor(elem._id))}>Удалить
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  )
}