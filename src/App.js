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
import {AuthorList} from "./Components/AuthorList";
import {AuthorAdd} from "./Components/AuthorList/AuthorAdd";
import {AuthorEdit} from "./Components/AuthorList/AuthorEdit";
import {AuthorView} from "./Components/AuthorList/AuthorView";

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path="/home" element={<MainPage/>}/>
                <Route path="/books" element={<BookList/>}/>
                <Route path="/books/add" element={<BookAdd/>}/>
                <Route path="/books/edit=:id" element={<BookEdit/>}/>
                <Route path="/books/view=:id" element={<BookView/>}/>
                <Route path="/authors" element={<AuthorList/>}/>
                <Route path="/authors/add" element={<AuthorAdd/>}/>
                <Route path="/authors/edit=:id" element={<AuthorEdit/>}/>
                <Route path="/authors/view=:id" element={<AuthorView/>}/>
                <Route path="*" element={<Navigate to="/home"/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;