import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am{" "}
            <span className="purple">Somendra Pal Gupta </span>
            from <span className="purple"> Delhi</span>
            <br />I am a graduate from Jaypee University of Engineering and
            Technology
            <br />
            <br />
            I am a software developer, specializing in web application
            development. For the last 1.5 years, I have been developing software
            using Java, React, and Spring Boot.<br />
             I’m currently working as a
            Software Development Engineer at Mphasis Limited<br />. I’m hands-on in
            all stages of the software development cycle, from planning to
            testing and deployment. Extensive experience in developing web pages
            using HTML, CSS, JavaScript, React JS [Functional -Hooks], Redux
            SAGA, Selectors, HOC, THUNK, JSON, Node.js. Current Project (SE at
            Mphasis): <br />• Healthcare Platform on top of FHIR Servers (Worked on
            integration of the application with FHIR servers<br /> • Generic Chatbot
            Development Platform for Enterprises (Developed 50 + Chatbot use
            cases)<br /> • Developing new user-facing features using React.js <br />•
            Building reusable function components and front-end libraries for
            future use <br />• Worked in using React.Js
            Components,Form,eventKey,Routes,Redux • Translating designs and
            wireframes into high quality code <br />• Optimizing components for
            maximum performance across a vast array of web-capable devices and
            browsers Experience with popular React.js workflows (such as Flux or
            Redux) With experience in UI development along with strong
            programming skills in developing highly interactive web applications
            utilizing JavaScript, React, Java, HTML5, CSS3, JSON, Git, Jenkins
            and Bootstrap and integrating Restful API's
            <br /><br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Somendra Pal Gupta</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
