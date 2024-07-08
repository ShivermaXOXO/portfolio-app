import React ,{ useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

import {Email, LinkedIn, Instagram, GitHub } from '@mui/icons-material';
import Aos from "aos";
import 'aos/dist/aos.css';




export const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000});
  }, []);
  return (
    <footer className="footer">
      <Container>
        <Row>
          
          <Col xs={12} sm="auto" className="text-left" data-aos="fade-left">
            <div className="social-icon-1">
            <h2>How you can reach me?</h2>
            <h5>I welcome the opportunity for communication and collaboration.<br></br> Please feel free to contact me through the following channels.</h5>
            <a href="https://www.linkedin.com/in/shivamverma726926b/" style={{color:'blue'}}><LinkedIn /></a>
                <a href="https://github.com/ShivermaXOXO" style={{color:'black'}}><GitHub /></a>
                <a href="https://www.instagram.com/shivamver_/" style={{color:'red'}}><Instagram /></a>
                <a href="https://mail.google.com/mail/u/1/" style={{color:'black'}}><Email /></a>
            </div>
            
          </Col>
          
          
        </Row>
      </Container>
    </footer>
  )
}

export default Footer;