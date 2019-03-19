import React from 'react'
import {Link,NavLink} from 'react-router-dom'
import SignInLinks from './SignedInLinks';
import SignOutLinks from './SignedOutLinks';

const Navbar=()=>{
    return(
        <nav className="nav-wrapper green darken-5">
            <div className="container">
                <Link to='/' className="brand-logo">MarioPlan</Link>
                <SignInLinks/>
                <SignOutLinks/>
            </div>
        </nav>
    )
}
export default Navbar;