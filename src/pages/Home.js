import React from 'react';
import { Container, Row, Col, Button, Carousel, Card } from 'react-bootstrap';
import Coffee from '../components/Assets/Coffee.png'; // Import your coffee image
import background from '../components/Assets/background.png';
import './Home.css'; // Import your custom CSS file for styling
import CoffeeSection from './CoffeeSection.js';
import AboutUs from './AboutUs.js';
import Testimonial from './Testimonial.js';
import Footer from './Footer.js'


const Home = () => {
  return (
    <div>
      <div className="home">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} sm={6} md={6} className="text-center text-md-left"> 
              <img src={Coffee} alt="coffee" className="coffee-image" />
            </Col>
            <Col xs={12} sm={6} md={6} className="text-center text-md-left">
              <div className="home-content">
                <h1>We serve the richest <span className="coffee-text">coffee</span> in the city</h1>
                <Button variant="brown" href="" className="btn-rise">Coffee and Code</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/*  CoffeeSection  */}
      <CoffeeSection />
         <AboutUs /> 
         <Testimonial />
         <Footer />
       
      

     

    </div>
  );
}

export default Home;



