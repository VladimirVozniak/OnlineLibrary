export const Header = () => {
    return (
        <header>
            <div className="header">
                <a href="/" className="web-logo">
                    <img className="logo"/>
                    <p className="logo-name">Виртуальная библиотека</p>
                </a>
                <a className="add" href="#">Добавить автора/книгу</a>
            </div>
        </header>
    )
}