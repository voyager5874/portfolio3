import './App.scss';
import {Navigate, Route, Routes} from "react-router-dom";
// import {Layout} from "./components/Layout";
import {Home} from "./components/pages/Home";
import {About} from "./components/pages/About";
import {Sidebar} from "./components/Sidebar";
import {ContactMe} from "./components/pages/ContactMe";
import {Skills} from "./components/pages/Skills";

function App() {
    return (
        <div className="app">
            <Sidebar/>
            <Routes>
                <Route path="/home" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/skills" element={<Skills/>}/>
                <Route path="/contact" element={<ContactMe />} />
                <Route path="/" element={<Navigate to="/home" />} />

            </Routes>
        </div>

    )
}

export default App;
