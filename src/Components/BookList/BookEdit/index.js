import {Upload} from "antd";
import {useState} from "react";


export const BookEdit = (props) => {
    // const {title, author_id, year, created_at} = props
    const [currentDate, setCurrentDate] = useState("1970-01-01");
    const [title, setTitle] = useState("qwe");

    const {Dragger} = Upload;

    return (
        <div className="book">
            <input type="file" accept=".png,.jpg,jpeg"/>
            <img className="cover"/>
            <div>
                <input type="text" value={title} placeholder="Название книги"
                       onChange={e => setTitle(e.target.value)}/>
                <select>
                    <option value="1">Автор 1</option>
                    <option value="2">Автор 2</option>
                    <option value="3">Автор 3</option>
                    <option selected value="4">Автор 4</option>
                    <option value="5">Автор 5</option>
                    <option value="6">Автор 6</option>
                </select>
                <input type="date" value={currentDate ? currentDate : "1970-01-01"}
                       onChange={e => setCurrentDate(e.target.value)}/>
            </div>
        </div>
    )
}