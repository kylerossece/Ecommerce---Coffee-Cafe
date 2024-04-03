import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Coder from '../components/Assets/coder.png'; // Import the coder image
import './AboutUs.css'

const AboutUs = () => {
  return (
    <div className="coder-image">
      <Container>
        <Row>
          <Col md={6} order-md={1}>
            <img src={Coder} alt="coder" className="coder-img" />
          </Col>
          <Col md={6} className="text-center">
            <h2 className="about-us">About Us</h2>
            <p className="about-us-description">At Coffee Cafe, we understand the unique bond between coffee and coding. Our website is dedicated to all the programmers and coders out there who have a passion for both technology and a good cup of coffee. Whether you're burning the midnight oil on a coding project or simply seeking inspiration for your next big idea, we're here to fuel your creativity with our premium coffee blends. Join us in celebrating the perfect harmony of coffee and code.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutUs;
