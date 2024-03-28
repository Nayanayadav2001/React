import React from "react"
import User from './User/User'
import {store} from './redux/store'
import { Provider } from "react-redux"
import {Link,BrowserRouter as Router,Routes,Route} from 'react-router-dom'

let App = () => {

    return <div>
        <Provider store={store}>
        <Router>
            <nav>
                <Link to="/user">User Component</Link>
                <div>
                    <ul>
                        <li><Link to='/user'>User</Link></li>
                    </ul>
                </div>
            </nav>
            <Routes>
                <Route path='/user' element={<User/>}></Route>
            </Routes>
         </Router>
        </Provider>
    </div>
}
export default App