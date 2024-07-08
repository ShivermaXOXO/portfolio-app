import React from "react";
import {Navbar,Container,Nav} from "react-bootstrap";

// import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState,useEffect } from "react";
import { LinkedIn, Instagram, GitHub } from '@mui/icons-material';

export const NavBar=()=>{
const [activeLink,setActiveLink] = useState('home');
const [scroll,setScroll] = useState(false);

useEffect(() =>{
    const onScroll =() =>{
        if(window.scrollY >50){
            setScroll(true);
        }else{
            setScroll(false);
        }
    }
    window.addEventListener("scroll",onScroll);
    return () =>window.removeEventListener("scroll",onScroll);
}, [])

const onUpdateActiveLink=(value) =>{
  setActiveLink(value);
}

  return (
    <Navbar expand="lg" className={scroll ? "scroll": ""}>
      <Container>
      <Navbar.Brand href="#home">
        ςҺɿ౮คɱ 
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#project" className={activeLink === 'project' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('project')}>Projects</Nav.Link>
            
          </Nav>
          <span className="nabvar-text">
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/shivamverma726926b/"><LinkedIn /></a>
                <a href="https://github.com/ShivermaXOXO"><GitHub /></a>
                <a href="https://www.instagram.com/shivamver_/"><Instagram /></a>
            </div>
          </span>
          <button className="vvd" onClick={() => console.log('connect')}><span>Let's connect</span></button>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
  );
}

export default NavBar;