import "./style.css"
import {Author} from "./Author";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

export const RandomAuthors = () => {
  const allAuthors = useSelector(state => state.authors.authorList)

  return (
    <div className="random-authors">
      <Link className="all-authors" to="/authors">Всего авторов: {allAuthors.length} >></Link>
      <div className="authors-feed">
        <Author/>
        <Author/>
        <Author/>
        <Author/>
        <Author/>
        <Author/>
        <Author/>
        <Author/>
        <Author/>
        <Author/>
      </div>

    </div>
  )
}