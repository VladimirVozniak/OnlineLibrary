import "./App.css";
import {Header} from "./Components/Header";
import {MainPage} from "./Components/MainPage";
import {BookList} from "./Components/BookList";
import {Footer} from "./Components/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <MainPage/>
            <BookList/>
            <Footer/>
        </div>
    );
}

export default App;