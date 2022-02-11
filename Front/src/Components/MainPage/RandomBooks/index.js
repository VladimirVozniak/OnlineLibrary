import "./style.css"
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import {Swiper, SwiperSlide} from "swiper/react";
import {EffectCards, Mousewheel, Pagination} from "swiper";
import {useState} from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

export const RandomBooks = () => {
    const allBooks = useSelector(state => state.books.bookList)
    const [currentCard, setCurrentCard] = useState(0);

    return (
        <div className="random-books_container">
            <Link className="all-books" to="/books">Всего книг: {allBooks.length} >></Link>
            {/*<div className="background"/>*/}
            {/*<img className="background" src='https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/9c102dfb-6bd5-469b-94e1-cb8b109c0aeb/300x450'/>*/}
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
                    <SwiperSlide/>
                    <SwiperSlide/>
                    <SwiperSlide/>
                    <SwiperSlide/>
                    <SwiperSlide/>
                    <SwiperSlide/>
                    <SwiperSlide/>
                    <SwiperSlide/>
                    <SwiperSlide/>
                    <SwiperSlide/>
                </Swiper>
                <div className="info-container">
                    <div className="description-book">
                        <h3 className="title">Ведьмак</h3>
                        <p className="author-book">
                            Автор: <a className="link-author" href="#">789</a>
                        </p>
                        <p>Ведьмак Геральт, мутант и убийца чудовищ, на своей верной лошади по кличке Плотва
                            путешествует
                            по
                            Континенту. За тугой мешочек чеканных монет этот мужчина избавит вас от всякой настырной
                            нечисти
                            —
                            хоть
                            от чудищ болотных, оборотней и даже заколдованных принцесс. В сельской глуши местную девушку
                            Йеннифэр,
                            которой сильно не повезло с внешностью, зато посчастливилось иметь способности к магии, отец
                            продаёт
                            колдунье в ученицы. А малолетняя наследница королевства Цинтра по имени Цири вынуждена
                            пуститься
                            в
                            бега,
                            когда их страну захватывает империя Нильфгаард. Судьбы этих троих окажутся тесно связаны, но
                            скоро
                            сказка сказывается, да не скоро дело делается.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}