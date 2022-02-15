import "./style.css"
import {Author} from "./Author";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

export const RandomAuthors = ({randomAuthors, refresh}) => {
  const allAuthors = useSelector(state => state.authors.authorList)

  return (
    <div className="random-authors">
      <div className="shift-right">
        {allAuthors.length > 10 &&
        <img className="refresh-books" src="https://cdn-icons-png.flaticon.com/16/117/117122.png"
             onClick={() => refresh()}/>}
        <Link className="all-authors" to="/authors">Всего авторов: {allAuthors.length} >></Link>
      </div>
      <div className="authors-feed">
        {randomAuthors.length ?
          <>
            {randomAuthors.map((elem, index) => {
              return <Author key={index} author={elem}/>
            })}
          </> :
          <>Нет авторов</>
        }
      </div>
    </div>
  )
}