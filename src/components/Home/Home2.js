import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myimg from "../../Assets/myimg.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a self-motivated DevOps Engineer 🚀 and a passionate self-learner, continuously building and improving real-world infrastructure and automation projects.
              <br />
              <br />I have a strong foundation 🧑‍💻 in tools and technologies
              <i>
                <b className="purple"> Linux, AWS, Docker, Kubernetes, Jenkins, Terraform, Ansible, and Git. </b>
              </i>
              <br />
              <br />
            
              <i>
                <b className="purple">I am deeply interested in the fields of Cloud Computing ☁️, DevOps practices, CI/CD pipelines, and Infrastructure as Code. </b> 
                <b className="purple">
                  I actively apply my skills to design, automate, and deploy scalable applications using AWS services and modern DevOps tools, ensuring reliability, efficiency, and continuous delivery
                </b>
              </i>
             
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myimg} className="img-fluid rounded-circle" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>YOU CAN FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">PING </span> me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Dineshvirat123/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/imdinesh2002"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/annavaram-dinesh-kumar-reddy-866b02370/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
