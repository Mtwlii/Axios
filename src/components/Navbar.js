import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom'
const Navbar = (props) => {

    // setTimeout(() => {
    //     props.history.push('/about')
    // }, 3000);
    return (
        <nav className="navbar navbar-expand-lg navbar-dark ">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/no">Navbar</NavLink>
                <div className="collapse navbar-collapse" id="navbar">
                    <ul className="navbar-nav">
                        <li className="nav-item"><NavLink className="nav-link " aria-current="page" to="/">Home</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/about">Abuot</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/contact">Contact</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default withRouter(Navbar)