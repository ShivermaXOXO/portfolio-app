import React from "react";
import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../asset/img/header-img.gif";
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import { TypeAnimation } from "react-type-animation";
import AOS from "aos";
import 'aos/dist/aos.css';


export const Banner = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  },[]);
 

  

    

 
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline"  data-aos="zoom-out-right">Welcome to my Portfolio </span>
            <h1>{`Hi! I'm Shivam`} <span className="txt-rotate">Web Developer
              </span></h1>
            
            <TypeAnimation
              sequence={['Hi, my name is Shivam Verma. I have completed my BCA studies while specializing in front-end development. Proficiency courses through my veins in HTML, CSS, JavaScript, React, and Wordpress, allowing me to craft captivating digital experiences with finesse.',
                2000,
              ]}
              wrapper="div"
              speed={50}
              style={{ fontSize: '1.5em', whiteSpace: 'pre-line', display: 'inline-block',color:"black" }}
              repeat={Infinity}
            />
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Img" />
          </Col>
          <Col xs={12} md={6} xl={5}>
            <a href="/Shivam Resume(1).pdf" target="_blank" rel="noopener noreferrer"> <button type="button" class="btn btn-primary" >
              <InsertDriveFileIcon />SEE MY RESUME</button></a>
          </Col>

        </Row>
      </Container>
    </section>
  )
}


export default Banner;