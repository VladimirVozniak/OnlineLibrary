import {Link} from "react-router-dom";
import {useEffect} from "react";
import {getAuthors} from "../../API/authorActions";
import {useDispatch} from "react-redux";
import {getBooks} from "../../API/bookActions";

export const Header = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAuthors())
        dispatch(getBooks())
    }, [])

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