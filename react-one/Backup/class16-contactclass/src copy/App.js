import React from 'react'
import { BrowserRouter as Router , Routes ,Route } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Home from './Contact App/Home'
import ContactApp from './Contact App/ContactApp'

const App = () => {

    return <div>
          <Router>
        <Navbar/>
        <Routes>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/contact' element={<ContactApp/>}></Route>
        </Routes>
        </Router>
    </div>
}
export default App