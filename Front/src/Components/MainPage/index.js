import {RandomBooks} from "./RandomBooks";
import {RandomAuthors} from "./RandomAuthors";
import {useState} from "react";
import {randomElement} from "../../Logic/randomElement";
import {useSelector} from "react-redux";

export const MainPage = () => {
  const allBooks = useSelector(state => state.books.bookList)
  const allAuthors = useSelector(state => state.authors.authorList)
  const [randomAuthors, setRandomAuthors] = useState(randomElement(allAuthors))
  const [randomBooks, setRandomBooks] = useState(randomElement(allBooks))

  return (
    <>
      <RandomBooks randomBooks={randomBooks} refresh={()=>setRandomBooks(randomElement(allBooks))}/>
      <RandomAuthors randomAuthors={randomAuthors} refresh={()=>setRandomAuthors(randomElement(allAuthors))}/>
    </>
  )
}