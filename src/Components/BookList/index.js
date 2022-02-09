import "./style.css"
import {useState} from "react";

export const BookList = () => {
    const [bookList, setBookList] = useState([
            {
                id: 1,
                title: "qqq",
                author_id: 1567,
                created_at: 1644395473176,
                year: 1634392473176
            }, {
                id: 2,
                title: "www",
                author_id: 1568,
                created_at: 1444395483176,
                year: 1424385483176
            }, {
                id: 3,
                title: "eee",
                author_id: 1567,
                created_at: 1544395373176,
                year: 1534395173176
            }
        ]
    );

    return (
        <div className='book-list'>
            {bookList.map((elem, id) =>
                <div className='book' key={id}>
                    <img className='cover'/>
                    <div>
                        <h3 className='book-title'>{elem.title}</h3>
                        <p>Автор: {elem.author_id}</p>
                        <p>Первая публикация: {new Date(elem.year).toLocaleDateString("ru-RU")}</p>
                        {/*<p>Дата добавления книги: {new Date(elem.created_at).toLocaleDateString("ru-RU")}</p>*/}
                        <button className="button-read">Посмотреть</button>
                        <button className="button-edit">Редактировать</button>
                        <button className="button-delete">Удалить</button>
                    </div>
                </div>
            )}
        </div>
    )
}