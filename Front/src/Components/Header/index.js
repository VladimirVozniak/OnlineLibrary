import {Link} from "react-router-dom";

export const Header = () => {

  return (
    <header>
      <div className="header">
        <Link to="/" className="web-logo">
          <img className="logo"/>
          <p className="logo-name">Виртуальная библиотека</p>
        </Link>
        {/*<a className="add" href="#">Добавить автора/книгу</a>*/}
      </div>
    </header>
  )
}