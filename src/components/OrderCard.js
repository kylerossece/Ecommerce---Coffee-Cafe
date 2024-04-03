import { Card } from "react-bootstrap";
import { useEffect, useState } from "react";
import "./OrderCard.css";
import Americano from "./Assets/Americano.png";
import Espresso from "./Assets/Espresso.png";
import Cappuccino from "./Assets/Cappuccino.png";
import DoubleEspresso from "./Assets/Double Espresso.png";
import Macchiato from "./Assets/Macchiato.png";

export default function OrderCard({ order }) {
  const { productId, quantity, subtotal } = order;
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    if (productId) {
      fetch(`${process.env.REACT_APP_API_BASE_URL}/products/${productId}/`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const productName = data.products.name;
          setName(productName);
          setImageBasedOnName(productName);
        });
    }
  }, [productId]);

  const setImageBasedOnName = (productName) => {
    switch (productName) {
      case "Americano":
        setImageUrl(Americano);
        break;
      case "Espresso":
        setImageUrl(Espresso);
        break;
      case "Cappuccino":
        setImageUrl(Cappuccino);
        break;
      case "Double Espresso":
        setImageUrl(DoubleEspresso);
        break;
      case "Macchiato":
        setImageUrl(Macchiato);
        break;
      default:
        setImageUrl(null);
        break;
    }
  };

  return (
    <div className="my-5">
      <Card className="m-auto product-wrapper">
        <Card.Body>
          {imageUrl && (
            <img src={imageUrl} alt={name} className="product-image" />
          )}

          <Card.Subtitle>Name:</Card.Subtitle>
          <Card.Text>{name}</Card.Text>
          <Card.Subtitle>Quantity:</Card.Subtitle>
          <Card.Text>{quantity}</Card.Text>
          <Card.Subtitle>Subtotal:</Card.Subtitle>
          <Card.Text>PhP {subtotal}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}