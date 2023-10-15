import React, { useState } from "react";
import "./Navigation.css";
import { Link } from "react-scroll";
import logo from "../assets/logo1.svg";
// import chat from "../assets/chat.png";
import { RxHamburgerMenu } from 'react-icons/rx';

function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className={`navbar position-sticky container ${isMobileMenuOpen ? "mobile-open" : ""}`}>
        <div className="logoContainer">
          <img src={logo} alt="logo" className="logoImg" />
        </div>

        <div className="desktopMenu">
          <ul>
            <li className="desktopMenuItem">
              <Link to="intro" smooth={true} duration={50}>
                Home
              </Link>
            </li>
            <li className="desktopMenuItem">
              <Link to="skills" smooth={true} duration={50}>
                Skills
              </Link>
            </li>
            <li className="desktopMenuItem">
              <Link to="projects" smooth={true} duration={50}>
                Projects
              </Link>
            </li>
            <li className="desktopMenuItem">
              <Link to="contacts" smooth={true} duration={50}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        
        <div className="mobileMenuIcon" onClick={toggleMobileMenu}>
          {/* <img src={chat} alt="icon" className="buttonImg" /> */}
          <RxHamburgerMenu className="hamburgerIcon"/>
        </div>
        
        {isMobileMenuOpen && (
          <div className="mobileMenu">
            <ul>
              <li>
                <Link to="intro" smooth={true} duration={50} onClick={toggleMobileMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="skills" smooth={true} duration={50} onClick={toggleMobileMenu}>
                  Skills
                </Link>
              </li>
              <li>
                <Link to="projects" smooth={true} duration={50} onClick={toggleMobileMenu}>
                  Projects
                </Link>
              </li>
              <li>
                <Link to="contacts" smooth={true} duration={50} onClick={toggleMobileMenu}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navigation;
