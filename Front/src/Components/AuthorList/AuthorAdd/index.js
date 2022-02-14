import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useState} from "react";
import {appendAuthor} from "../../../API/authorActions";

export const AuthorAdd = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const dispatch = useDispatch()

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
                  onClick={() => dispatch(appendAuthor(firstName, lastName))}>Добавить
          </button>
        </Link>
        <Link to="/authors">
          <button className="cancel-button">Отмена</button>
        </Link>
      </div>
    </div>
  )
}