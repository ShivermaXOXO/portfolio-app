import React, { useEffect } from "react";
import { Container,Row,Col,} from "react-bootstrap";
// import { ProjectCard } from "./ProjectCard";
import todoImg from "../asset/img/Note-img3.jpeg";
import portfolioImg from "../asset/img/portfolio-img.png";
import loginImg from "../asset/img/Login-img.png";
import keeperImg from "../asset/img/keeper-img2.jpeg";
import BookstoreImg from "../asset/img/Bookstore-img.png";
// import colorSharp2 from "../asset/img/color-sharp2.png";
import ProjectCard from "./ProjectCard";
import Aos from "aos";
import 'aos/dist/aos.css';
// import 'animate.css';




function Projects() {
  useEffect(() => {
    Aos.init({ duration: 2000});
  }, []);
  return (
    <section className="project" id="project">
    <h2>Projects</h2>
    <Container>
      <Row>
      <Col xs={12} sm={12} md={12} lg={6} data-aos="fade-up">
      <ProjectCard
        border="primary"
        imgSrc={todoImg}
        header="Todo List"
        // title="Primary Card Title"
        text="To-do list is a simple and effective tool used to organize tasks that need to be completed.It is commonly used for personal, educational, and professional purposes to enhance productivity and ensure that important tasks are not forgotten."

      />
      
      </Col>
      <br />

      <Col xs={12} sm={12} md={12} lg={6} data-aos="fade-up">
      <ProjectCard
        border="secondary"
        imgSrc={loginImg}
        header="Login Page"
        // title="Secondary Card Title"
        text="A login page is an essential part of many web applications, providing a secure way for users to authenticate themselves before accessing protected resources.Verifies the identity of users by requiring credentials (e.g., username and password).
"
      />
      </Col>
      <br />

      <Col xs={12} sm={12} md={12} lg={6} data-aos="fade-up">
      <ProjectCard
        border="success"
        imgSrc={portfolioImg}
        header="Portfolio"
        // title="Success Card Title"
        text="A portfolio is a compilation of materials that demonstrates your skills, accomplishments, and experiences in a particular field.In this i showcase their skills and accomplishments, academic achievements, projects, and research."
      />
      </Col>
      <br />

      <Col xs={12} sm={12} md={12} lg={6} data-aos="fade-up">
      <ProjectCard
        border="light"
        imgSrc={BookstoreImg}
        header="BookStore"
        // title="Light Card Title"
        text="An online bookstore is a digital platform where users can browse, purchase, and sometimes read books via the internet.A comprehensive collection of books, categorized by genre, author, popularity, and other criteria.Various payment methods including credit/debit cards, PayPal, and other online payment systems."
      />
      </Col>
     
      <Col xs={12} sm={12} md={12} lg={6} data-aos="fade-up">
      <ProjectCard
        border="light"
        imgSrc={keeperImg}
        header="Keeper"
        // title="Light Card Title"
        text="keeper app is a digital tool that allows users to create, organize, and manage notes efficiently. This app are designed to help users capture ideas, reminders and important information quickly and easily. They can be used on various devices, including smartphones, tablets, and computers, making it easy to access notes from anywhere."
      />
      </Col>
      </Row>
    </Container>
    </section>
  );
}




export default Projects;