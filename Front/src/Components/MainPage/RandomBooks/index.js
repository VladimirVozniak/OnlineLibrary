import "./style.css"
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import {Swiper, SwiperSlide} from "swiper/react";
import {EffectCards, Mousewheel, Pagination} from "swiper";
import {useState} from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {fullNameAuthor} from "../../../Logic/fullNameAuthor";

export const RandomBooks = ({randomBooks, refresh}) => {
  const allBooks = useSelector(state => state.books.bookList)
  const authors = useSelector(state => state.authors.authorList)
  const [currentCard, setCurrentCard] = useState(0);
  const author = authors.find(elem => elem._id === randomBooks[currentCard].author_id)
  const currentBook = randomBooks[currentCard]

  return (
    <div className="random-books_container">
      <div className='shift-right'>
        <img className='refresh-books' src="https://cdn-icons-png.flaticon.com/16/117/117122.png" onClick={() => refresh()}/>
        <Link className="all-books" to="/books">Всего книг: {allBooks.length} >></Link>
      </div>
      <div className="random-books_info">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[Mousewheel, EffectCards, Pagination]}
          pagination={{type: "fraction"}}
          mousewheel={{invert: true}}
          onSlideChange={(swiperCore) => {
            setCurrentCard(swiperCore.activeIndex);
          }}
          className="mySwiper"
        >
          {randomBooks.map((elem, index) => {
            return <SwiperSlide key={index}>{elem.cover ?
              <img className="cover-loaded" src={elem.cover}/> :
              <div className="cover-unload">{elem.title}</div>}</SwiperSlide>
          })}
        </Swiper>
        <div className="info-container">
          <div className="description-book">
            <h3 className="title">{currentBook.title}</h3>
            <p className="author-book">
              Автор: <Link className="link-author"
                           to={`/authors/view=${author._id}`}>{fullNameAuthor(author)}</Link>
            </p>
            <p>
              {`Первая публикация: ${new Date(currentBook.year).toLocaleDateString("ru-RU")}`}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}