import "./App.css";
import "antd/dist/antd.css";
import {Route, Routes} from "react-router";
import {Header} from "./Components/Header";
import {MainPage} from "./Components/MainPage";
import {BookList} from "./Components/BookList";
import {Footer} from "./Components/Footer";
import {BookEdit} from "./Components/BookList/BookEdit";
import {BookView} from "./Components/BookList/BookView";

function App() {
    return (
        <div className="App">
            <Header/>
            <BookEdit/>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/BookList" element={<BookList/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;