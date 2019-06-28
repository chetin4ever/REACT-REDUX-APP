import React from 'react'
import {Link} from 'react-router-dom'
import SignInLinks from './SignedInLinks';
import SignOutLinks from './SignedOutLinks';
import { connect } from 'react-redux'

const Navbar=(props)=>{
    const { auth,profile } = props;
    //console.log(profile);
    const links = auth.uid ? <SignInLinks profile={profile}/> : <SignOutLinks/>;
    return(
        <nav className="nav-wrapper green darken-5">
            <div className="container">
                <Link to='/' className="brand-logo">MarioPlan</Link>
                {links}
            </div>
        </nav>
    )
}
const mapStateToProps=(state)=>{
    //console.log(state);
    return{
        auth: state.firebase.auth,
        profile:state.firebase.profile
    }
}
export default connect(mapStateToProps)(Navbar);