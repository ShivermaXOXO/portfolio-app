import React from "react";
import {Card } from "react-bootstrap";

const ProjectCard=({ border,imgSrc,header,title,text }) => {
  return (
    <Card border={border} className="projectCard">
    <Card.Img variant="top" src={imgSrc} />
    <Card.Header>{header}</Card.Header>
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>{text}</Card.Text>
    </Card.Body>
  </Card>
);
}

export default ProjectCard;
