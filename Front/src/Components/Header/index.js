import './style.css'
import {Link} from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div className="header">
        <Link to="/" className="web-logo">
          <img className="logo"/>
          <p className="logo-name">Виртуальная библиотека</p>
        </Link>
        <Link className='header-link' to="/books">Все книги</Link>
        <Link className='header-link' to="/authors">Все Авторы</Link>
      </div>
    </header>
  )
}