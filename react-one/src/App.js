import React, { Fragment } from 'react'
import {Link} from 'react-router-dom'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Products from './Products/Products'
import CreateProduct from './Products/CreateProduct'
import Admin from './Products/Admin'

let App = () => {


    return <Fragment>
    <Router>
     <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
        <Link to='/' className='navbar-brand'>Product Cart</Link>
        <div className='ml-auto'>
            <ul className='navbar-nav'>
             <li><Link className='nav-link' to='/product'>Products</Link></li>
             <li><Link className='nav-link' to='/create'>Create-Product</Link></li>
             <li><Link className='nav-link' to='/admin'>Admin</Link></li>
            </ul>
         </div>
         </nav>
         <Routes>
             <Route path='/product' element={<Products/>}/>
             <Route path='/create' element={<CreateProduct/>}/>
             <Route path='/admin' element={<Admin/>}/>
         </Routes>
    </Router>
    </Fragment>
}
export default App