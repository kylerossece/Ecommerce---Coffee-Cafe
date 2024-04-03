import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Americano from "./Assets/Americano.png";
import Espresso from "./Assets/Espresso.png";
import Cappuccino from "./Assets/Cappuccino.png";
import DoubleEspresso from "./Assets/Double Espresso.png";
import Macchiato from "./Assets/Macchiato.png";
import "./ProductCard.css";

export default function ProductCard({ productProp }) {
  const { _id, name, description, price } = productProp;

  let imageUrl;

  if (name === "Americano") {
    imageUrl = Americano;
  } else if (name === "Espresso") {
    imageUrl = Espresso;
  } else if (name === "Cappuccino") {
    imageUrl = Cappuccino;
  } else if (name === "Double Espresso") {
    imageUrl = DoubleEspresso;
  } else if (name === "Macchiato") {
    imageUrl = Macchiato;
  }

  return (
    <Container className="product-container">
      <Row>
        <Col sm={12}>
          <div className="product-wrapper">
            <Card className="mt-3">
              <Card.Img
                variant="top"
                src={imageUrl}
                alt={name}
                className="product-image"
              />
              <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Card.Text>PhP {price}</Card.Text>
                <Link
                  className="btn btn-primary custom-btn"
                  to={`/products/${_id}`}
                >
                  Details
                </Link>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
