import React,{useEffect} from "react";

import Bar1 from "../asset/img/Bar1.png";

import Bar2 from "../asset/img/Bar2.png";
import Bar3 from "../asset/img/Bar3.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import skillImg from "../asset/img/2animation.gif";
import { Col, Row } from "react-bootstrap";
import Aos from "aos";
import 'aos/dist/aos.css';


const Skills = () => {
  useEffect(() => {
    Aos.init({ duration: 2000});
  }, []);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 460, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn" data-aos="fade-left">
                        <h2>Proficiency</h2>
                        <p>My expertise lies in HTML, CSS, Bootstrap, JavaScript, React and Wordpress. I thrive on creating dynamic and visually stunning web experiences.<br></br></p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={Bar1} alt="" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={Bar2} alt="" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={Bar1} alt="" />
                                <h5>BOOTSTRAP</h5>
                            </div>
                            <div className="item">
                                <img src={Bar1} alt="" />
                                <h5>JAVASCRIPT</h5>
                            </div>
                            <div className="item">
                                <img src={Bar3} alt="" />
                                <h5>REACT.JS</h5>
                            </div>
                            <div className="item">
                                <img src={Bar1} alt="" />
                                <h5>WORDPRESS</h5>
                            </div>
                            
                        </Carousel>
                        <Row>
                          <Col xs={12} md={8} lg={5} xl={4}>
                            <img src={skillImg} alt="skillImg" className="mt-5"/>
                          </Col>
                       </Row>
              
                    </div>
                </div>
            </div>
        </div>
        {/* <img className="background-image-left" src={colorSharp} alt="" /> */}
    </section>
  )
}

export default Skills;