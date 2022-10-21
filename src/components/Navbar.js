import React from 'react';
import {Link} from 'react-router-dom';



const NavBar = () => {

    return(
        <nav>
            <Link to ="settings">Account Settings</Link>
            <Link to ='postings'>Product Postings</Link>
            <Link to ='login'>Register/Login</Link>
        </nav>
    )
}

export default NavBar