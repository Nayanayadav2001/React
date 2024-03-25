import React from "react";
import {Link} from "react-router-dom";

let Navbar = () => {


    return <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to='#' className='navbar-brand'>Contact App</Link>
        <div className='ml-auto'>
            <ul className='navbar-nav'>
                <li><Link to='/home' className='nav-link'>Home</Link></li>
                <li><Link to='/contact' className='nav-link'>Contact</Link></li>
            </ul>
        </div>

    </nav>
}
export default Navbar