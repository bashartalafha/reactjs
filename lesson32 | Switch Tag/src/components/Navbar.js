import React from 'react';
import {Link, NavLink, withRouter} from 'react-router-dom'

//Navbar is not reached by Route, so what we can do is to add WithRouter to the export statment,
//and it will have a props (with all Route properties) from Route  
const Navbar = (props) => {
    
    // setTimeout(()=>{
    //     //history.push -> redirect
    //     props.history.push('/About')
    // }, 2000)

    return(
        <nav className="nav wrapper red darken-3">
            <div className="container">
                <a className="brand-logo">Poke'Times</a>
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}
// This module called using <Navbar/> not <Route. So we need to add WithRouter in order 
// to activate the Route props
export default withRouter(Navbar);