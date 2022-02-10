import "./App.css";
import "antd/dist/antd.css";
import {Navigate, Route, Routes} from "react-router";
import {Header} from "./Components/Header";
import {MainPage} from "./Components/MainPage";
import {BookList} from "./Components/BookList";
import {Footer} from "./Components/Footer";
import {BookEdit} from "./Components/BookList/BookEdit";
import {BookView} from "./Components/BookList/BookView";
import {BookAdd} from "./Components/BookList/BookAdd";

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path="/home" element={<MainPage/>}/>
                <Route path="/books" element={<BookList/>}/>
                <Route path="/books/edit=:id" element={<BookEdit/>}/>
                <Route path="/books/view=:id" element={<BookView/>}/>
                <Route path="/books/add" element={<BookAdd/>}/>
                <Route path="*" element={<Navigate to="/home"/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;