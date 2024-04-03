import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './CoffeeSection.css';
import Americano from '../components/Assets/Americano.png';
import Espresso from '../components/Assets/Espresso.png';
import Cappuccino from '../components/Assets/Cappuccino.png';

const CoffeeSection = () => {
  return (
    <div className="another-section">
      <Container>
        <Row>
          <Col className="text-center mt-3 mb-3">
            <h2>Best Coffee for you! </h2>
          </Col>
        </Row>
        {/* Add content for the new section here */}
        <div className="card-deck">
          <div className="card">
            {/* Anchor tag wrapping the image */}
              <img className="card-img-top" src={Americano} alt="Card image cap" />
            
            <div className="card-body">
              <h5 className="card-title">Americano</h5>
              <p className="card-text">Fuel your code with our Americano: a bold, smooth blend of espresso and hot water, perfect for coding marathons.</p>
            </div>
          </div>
          <div className="card">
            <img className="card-img-top" src={Espresso} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Espresso</h5>
              <p className="card-text">Get a coding boost with our Espresso: a potent shot of rich, intense flavor to elevate your coding game.</p>
            </div>
          </div>
          <div className="card">
            <img className="card-img-top" src={Cappuccino} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Cappuccino</h5>
              <p className="card-text">Boost your code with our Cappuccino: a creamy blend of espresso, steamed milk, and foam for coding bliss.</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default CoffeeSection;
