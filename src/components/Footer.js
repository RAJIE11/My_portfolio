import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {AiFillGithub,} from "react-icons/ai";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Rajie</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} Rajarajeswari</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
           
            <li className="social-icons">
              <a
                href="https://twitter.com/__Rajie__?t=FiuMt05Eq0GdAMi15rwQNw&s=08"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaXTwitter/>
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/rajarajeswari-j11/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://github.com/RAJIE11"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>

          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
