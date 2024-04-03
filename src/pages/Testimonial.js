import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Testimonial1 from '../components/Assets/Testimonial1.jpg'; // Import testimonial images
import Testimonial2 from '../components/Assets/Testimonial2.jpg';
import Testimonial3 from '../components/Assets/Testimonial3.jpg';

const Testimonial = () => {
  return (
    <div className="testimonial-section">
      <Container>
        <Row>
          <Col className="text-center mt-3 mb-3">
            <h2>Testimonials</h2>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src={Testimonial1} />
              <Card.Body>
                <Card.Title>John Bae</Card.Title>
                <Card.Text>
                  "As a developer, I rely on Coffee Cafe to keep me fueled during long coding sessions. I highly recommend Coffee Cafe to all my fellow coders!"
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src={Testimonial2} />
              <Card.Body>
                <Card.Title>Jane Swift</Card.Title>
                <Card.Text>
                  "Coffee Cafe is my go-to spot for coding fuel! Their coffee is amazing and always keeps me sharp and focused. Love it!"
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src={Testimonial3} />
              <Card.Body>
                <Card.Title>Bob Johnson</Card.Title>
                <Card.Text>
                  "Coffee Cafe is the best place to catch up with friends over a cup of coffee. The atmosphere is great, and the coffee is top-notch. Highly recommended!"
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Testimonial;
