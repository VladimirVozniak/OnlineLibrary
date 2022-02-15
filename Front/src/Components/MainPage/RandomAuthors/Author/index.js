import "./style.css"
import {fullNameAuthor} from "../../../../Logic/fullNameAuthor";

export const Author = ({author}) => {
  return (
    <label className="author-icon">
      <div className="author-img"/>
      <input type="radio" name="author" value={1} hidden/>
      <p>{fullNameAuthor(author)}</p>
    </label>
  )
}