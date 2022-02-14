import "./style.css"
import {useState} from "react";
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {updateAuthor} from "../../../API/authorActions";

export const AuthorEdit = () => {
  const authors = useSelector(state => state.authors.authorList)
  const params = useParams()
  const prodId = params.id
  const dispatch = useDispatch()

  const editingAuthor = authors.find(author => author._id === prodId)
  const [firstName, setFirstName] = useState(editingAuthor.first_name);
  const [lastName, setLastName] = useState(editingAuthor.last_name);

  return (
    <div className="book">
      <div className="book-edit">
        <div className="img-edit">
          <img className="cover"/>
          <input className="img-replace" type="file" accept=".png, .jpg, .jpeg"/>
        </div>
        <div className="qwe">
          <input type="text" placeholder="Введите имя" value={firstName}
                 onChange={(e) => setFirstName(e.target.value)}/>
          <input type="text" placeholder="Введите фамилию" value={lastName}
                 onChange={(e) => setLastName(e.target.value)}/>
        </div>
      </div>
      <div className="edit-button">
        <Link to="/authors">
          <button className="apply-button"
                  onClick={() => dispatch(updateAuthor(editingAuthor._id, firstName, lastName))}>Сохранить
          </button>
        </Link>
        <Link to="/authors">
          <button className="cancel-button">Отмена</button>
        </Link>
      </div>
    </div>
  )
}