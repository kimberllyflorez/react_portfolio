import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import HeaderImage from "../assets/img/header-img.svg";

function AppNavBar() {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, asScrolled] = useState(false);
  const handleEmailButtonClick = () => {
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=kimberlly.florez@gmail.com&su=Want to talk with you&body=Hi Kimberlly&",
      "_blank"
    );
  };
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        asScrolled(true);
      } else {

        asScrolled(false);
      }
    }
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll)
  }, [])


  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={HeaderImage} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-togger-action"></span>
        </Navbar.Toggle>
        <Navbar id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('home')}
            >Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('skills')}
            >Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('projects')}
            >Projects</Nav.Link>
            <Nav.Link  to="/about-me" className="navbar-link">
              About Me
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href= "https://www.linkedin.com/in/kimberlly-cathalina-florez-sanchez-3ab8041b8/" ><img src={navIcon1} alt="" /> </a>
              <a href="https://github.com/kimberllyflorez/Kimberlly-Florez"><img src={navIcon2} alt="" /> </a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=kimberlly.florez@gmail.com&su=Want to talk with you&body=Hi Kimberlly&"><img src={navIcon3} alt="email" /> </a>
            </div>
            <button className="vvd" onClick={handleEmailButtonClick}>
              <span>Let's connect</span>
            </button>
          </span>
        </Navbar>
      </Container>
    </Navbar>
  );
}
export default AppNavBar;