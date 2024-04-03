// Cart Card
import { Card, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import "./CartCard.css";


import Americano from "./Assets/Americano.png";
import Espresso from "./Assets/Espresso.png";
import Cappuccino from "./Assets/Cappuccino.png";
import DoubleEspresso from "./Assets/Double Espresso.png";
import Macchiato from "./Assets/Macchiato.png";

export default function CartCard({ item, fetchData, updateQuantityInCart }) {
  const { productId, quantity } = item;
  const [productDetails, setProductDetails] = useState(null);
  const [newQuantity, setNewQuantity] = useState(quantity);

  useEffect(() => {
    if (productId) {
      fetch(`${process.env.REACT_APP_API_BASE_URL}/products/${productId}/`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setProductDetails(data.products);
        });
    }
  }, [productId, fetchData]);

  const updateQuantityHandler = () => {
    if (productDetails) {
      const newSubtotal = productDetails.price * newQuantity;
      return newSubtotal;
    }
    return 0;
  };

  const handleQuantityChange = (e) => {
    setNewQuantity(parseInt(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateQuantityInCart(productId, newQuantity); 
  };


  let imageUrl;
  if (productDetails) {
    switch (productDetails.name) {
      case "Americano":
        imageUrl = Americano;
        break;
      case "Espresso":
        imageUrl = Espresso;
        break;
      case "Cappuccino":
        imageUrl = Cappuccino;
        break;
      case "Double Espresso":
        imageUrl = DoubleEspresso;
        break;
      case "Macchiato":
        imageUrl = Macchiato;
        break;
      default:
        imageUrl = null;
    }
  }

  return (
    <div className="my-4">
      <Card className="m-auto" style={{ width: "20rem" }}>
        <Card.Body>
          <div className="product-details">
            <div className="product-image">
              <img
                src={imageUrl}
                alt={productDetails?.name}
                style={{ width: "100%", height: "240px" }}
              />
            </div>
            <div className="product-info">
              <h4 className="product-name">{productDetails?.name}</h4>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="quantityUpdate">
                  <Form.Label>Quantity</Form.Label>
                  <Form.Control
                    type="number"
                    value={newQuantity}
                    onChange={handleQuantityChange}
                    min="1"
                    required
                  />
                </Form.Group>
              </Form>
              <p className="product-price">
                Subtotal: PhP {updateQuantityHandler()}
              </p>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

