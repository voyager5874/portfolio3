import './App.scss';
import {Navigate, Route, Routes} from "react-router-dom";
// import {Layout} from "./components/Layout";
import {Home} from "./components/Home";
import {About} from "./components/About";
import {Sidebar} from "./components/Sidebar";

function App() {
    return (
        <div className="app">
            <Sidebar/>
            <Routes>
                <Route path="/home" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                {/*<Route path="/contact" element={<Contact />} />*/}
                <Route path="/" element={<Navigate to="/home" />} />

            </Routes>
        </div>

    )
}

export default App;
