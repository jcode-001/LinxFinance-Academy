import React from "react"
import { Link } from "react-router-dom"
import "./Navbar.style.css"

const NavbarComponent = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src="" alt="Logo" />
            </div>
            <ul>
                <li><Link to="/courses">Mentorship Plan</Link></li>
                <li><Link to="/plan">Mentorship Courses</Link></li>
                <li><Link to="/faq">faq</Link></li>
            </ul>
            <div className="cta-btn">
                <button>Signup</button>
                <button>Login</button>
            </div>
        </nav>
    )
}

export default NavbarComponent;