import React from 'react';
import {Link} from 'react-router-dom';


let Navbar = () => {

    return <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
           <Link to='#' className='navbar-brand'>User App </Link>
           <div className='ml-auto'>
            <ul className='navbar-nav'>
                <li><Link to='/home' className='nav-link'>Home</Link></li>
                <li><Link to='/user' className='nav-link'>User</Link></li>
            </ul>
         </div>
    </nav>
}

export default Navbar