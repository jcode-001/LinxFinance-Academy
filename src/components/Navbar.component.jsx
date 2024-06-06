import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.style.css";
import CtaButtonsComponent from "./Cta-buttons.component";

const NavbarComponent = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/logo.jpg" alt="Logo" style={{width: '100px', height: '100px'}} />
      </div>
      <ul>
        <li>
          <Link to="/courses">Mentorship Plan</Link>
        </li>
        <li>
          <Link to="/plan">Mentorship Courses</Link>
        </li>
        <li>
          <Link to="/faq">About Us</Link>
        </li>
        <li>
          <Link to="/faq">FAQ</Link>
        </li>
      </ul>
      <div className="df">
        <CtaButtonsComponent name={"Signup"} className="cta-nav-btn" />
        <CtaButtonsComponent name={"Login"} className="cta-nav-btn" />
      </div>
    </nav>
  );
};

export default NavbarComponent;
