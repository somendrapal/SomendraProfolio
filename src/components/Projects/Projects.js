import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import video1 from "./Chatbot.jpeg";
import Chat from "./Chatbotpage.jpeg";
import MHP from "./WhatsApp Image 2023-02-24 at 11.10.38 PM.jpeg";
import MTH from "./patient.jpeg";
import FHIRAA from "./fhiraa.png";



function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={video1}
              isBlog={false}
              title="CG"
              description="CognitiveGuru™ (CG) is an AI based chatbot development platform, built using Microsoft AI and popular opensource technologies to enable enterprises design, build, establish and deploy chatbots in an easy manner."
              demoLink="https://www.mphasis.com/home/services/cognitive/cognitive-guru-solution/videos/healthcare-provider-registration-on-cg.html"
            
            />
           
          </Col>
          <Col md={4} className="project-card">
          <ProjectCard
              imgPath={Chat}
              isBlog={false}
              title="CG"
              description="This webApp is use to give information about CG what are the functionality of the cg what are technlogy used IN that what it the purpose of cg Which AI tool we use to create the project this web App is create by Html,Css and Javascript"
             
            />
</Col>
          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MHP}
              isBlog={false}
              title="MHP"
              description="MHP is Medical Health Platform this website use for the marketing to show understand the platform and understand the technolgy used in that and what are the tach stack we used to create the website who involved in that for making the webapp. Int this we used React,Tailwind,JSX,React-Icon,FHIR,HTML it total front-end Project" 
             
            />
          </Col> 
 
           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MTH}
              isBlog={false}
              title="MTH"
              description="This Webapp is used to dispaly the deatil of Practitioner,Patient,Front Office,Admin that help to Book Appointment,Cancel Appointment,Reshedual Appointment,Patient Health Record,Add Patient,Add Practitioner with validation. The tech stack we used are React,JSX,Taildwind,CSS,HTML,JavaScript,Java,SpringBoot,FHIR,PostgerSQL"
                   
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FHIRAA}
              isBlog={false}
              title="Google Hackathon"
              description="fhirra is a concept demonstration. It demonstrates the power of conversational virtual assistants, enabled to work over any FHIR system, using a suite of Google technologies. fhiraa accentuates transformation in healthcare services offered by healthcare providers and payers"
              ghLink="https://sites.google.com/view/fhiraa"
              demoLink="https://sites.google.com/view/fhiraa"
            />
            <button></button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
