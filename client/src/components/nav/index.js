import react from "react";
import { Link } from 'react-router-dom';
import css from './nav.css'
import { NavLink } from "react-router-dom";

function Nav() {
    return (
        <>
            <nav id="main-nav">

                <h1 id="title">
                    <NavLink className="navBtnLink" to="/">Codespect</NavLink>
                </h1>

                <ul id="nav-list">

                    <li className="navBtn">
                        <NavLink className="navBtnLink" to="/landing-page">/Root</NavLink>
                    </li>
                    <li className="navBtn">
                        <NavLink className="navBtnLink" to="/login">Login</NavLink>
                    </li>
                    <li className="navBtn">
                        <NavLink className="navBtnLink" to="/login">Sign Up</NavLink>
                    </li>
                    <li className="navBtn">
                        <NavLink className="navBtnLink" to="/main">Checkout some Code</NavLink>
                    </li>
                    <li className="navBtn">
                        <NavLink className="navBtnLink" to="/user-page">User Dashboard</NavLink>
                    </li>

                   
                </ul>
            </nav>
        </>

    );
}


export default Nav;