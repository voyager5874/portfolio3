import './App.scss';
import {Navigate, Route, Routes} from "react-router-dom";
import {Portfolio} from "./components/pages/Portfolio";
import {PopupNavigationMenu} from "./components/PopupNavigationMenu";
import {Skills} from "./components/pages/Skills";
import {ContactMe} from "./components/pages/ContactMe";
import {Home} from "./components/pages/Home";
import {Sidebar} from "./components/Sidebar";
import {About} from "./components/pages/About";
// import {Layout} from "./components/Layout";


function App() {
    return (
        <div className="app">
            <Sidebar/>
            <Routes>
                <Route path="/home" element={<Home/>}/>
                <Route path="/portfolio" element={<Portfolio/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/skills" element={<Skills/>}/>
                <Route path="/contact" element={<ContactMe/>}/>
                <Route path="/" element={<Navigate to="/home"/>}/>
            </Routes>
            <PopupNavigationMenu/>
        </div>

    )
}

export default App;
