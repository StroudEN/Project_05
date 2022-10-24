import React from 'react';
import {Link} from 'react-router-dom';



const NavBar = () => {

    return(
        <nav id="navTag">
            <Link to ="settings" className="navItem">Account Settings</Link>
            <Link to ='postings'className="navItem">Product Postings</Link>
            <Link to ='login'className="navItem">Register/Login</Link>
        </nav>
    )
}

export default NavBar