import React, { useState, useEffect, useContext } from "react";
import { Container, Card, Button, Row, Col, Form } from "react-bootstrap";
import { useParams, useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";
import UserContext from "../UserContext";

export default function AddToCart() {
  const { user } = useContext(UserContext);
  const { productId } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [subtotal, setSubtotal] = useState(0);
  const navigate = useNavigate();

  const addToCart = () => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/cart/add-to-cart`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        productId: productId,
        quantity: quantity,
        subtotal: subtotal,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.error === "Admin is forbidden") {
          Swal.fire({
            title: "Admin login error",
            icon: "error",
            text: "You are an administrator you may not enroll to a course.",
          });
        } else if (
          data.error ===
          "Invalid request. Please provide productId, quantity, and subtotal"
        ) {
          Swal.fire({
            title: "Invalid Request",
            icon: "error",
            text: "Please enter valid quantity and subtotal",
          });
        } else if (data.message === "Item added to cart successfully") {
          Swal.fire({
            title: "Successfully Added",
            icon: "success",
            text: "Item successfully added to cart",
          });

          navigate("/products");
        } else {
          Swal.fire({
            title: "Something went wrong",
            icon: "error",
            text: "Please try again.",
          });
        }
      });
  };

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/products/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        const updateSubtotal = data.products.price * quantity;
        setSubtotal(updateSubtotal);
        setName(data.products.name);
      });
  }, [productId, quantity]);

  return (
    <Container className="mt-5">
      <Row>
        <Col lg={{ span: 6, offset: 3 }}>
          <Card>
            <Card.Body>
              <Card.Title>Name:</Card.Title>
              <Card.Title>{name}</Card.Title>
              <Card.Subtitle></Card.Subtitle>

              <Form>
                <Form.Group controlId="quantityUpdate">
                  <Form.Label>Quantity</Form.Label>
                  <Form.Control
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                    min="1"
                    required
                  />
                </Form.Group>
              </Form>
              <Card.Subtitle>Subtotal:</Card.Subtitle>
              <Card.Text>{subtotal}</Card.Text>

              {user.id !== null ? (
                <Button
                  variant=" custom-btn text-white"
                  onClick={() => addToCart()}
                >
                  Add to Cart
                </Button>
              ) : (
                <Link className="btn btn-danger btn-block" to="/login">
                  Log in to Add
                </Link>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
