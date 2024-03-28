import React from "react";
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from './User App/Home'
import UserApp from './User App/UserApp'


let App = () => {

    return <div>
        <Router>
        <Navbar/>
        <Routes>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/user' element={<UserApp/>}></Route>
        </Routes>
        </Router>
    </div>
}
export default App