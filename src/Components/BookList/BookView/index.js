export const BookView = (props) => {
    const {title, author_id, year, created_at} = props

    return (
        <div className="book">
            <img className="cover"/>
            <div>
                <h3 className="book-title">{title}</h3>
                <p>Автор: {author_id}</p>
                <p>Первая публикация: {new Date(year).toLocaleDateString("ru-RU")}</p>
            </div>
        </div>
    )
}