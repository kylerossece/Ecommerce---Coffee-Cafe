import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import CartCard from "../components/CartCard";
import RemoveFromCart from "../components/RemoveFromCart";
import Checkout from "../components/Checkout";
import ClearCart from "../components/ClearCart";
import Empty from "../components/Assets/Empty.png";
import "./ShoppingCart.css";

export default function ShoppingCart({ fetchData }) {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetchCartItems();
  }, [cartItems]);

  let token = localStorage.getItem("token");

  const fetchCartItems = () => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/cart/get-cart`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch cart items");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if (data.cart.cartItems) {
          setCartItems(data.cart.cartItems);
          console.log(data.cart.cartItems);
        }
      })
      .catch((error) => console.error("Error fetching cart items:", error));
  };

  return (
    <Container>
      <div className="banner my-3">
        <h1>My Shopping Cart</h1>
      </div>
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <>
            <CartCard key={item.productId} item={item} fetchData={fetchData} />
            <div className="d-flex justify-content-center">
              <RemoveFromCart
                productId={item.productId}
                fetchData={fetchData}
              />
            </div>
          </>
        ))
      ) : (
        <div className="text-center">
          <img src={Empty} alt="Empty Orders" style={{ maxWidth: "300px" }} />
          <h2 className="my-3">Your Cart is Empty</h2>
          <p className="my-3 paragraph-font">
            Looks like you haven't made your choice yet...
          </p>
        </div>
      )}
      {cartItems.length > 0 ? (
        <div className="d-flex justify-content-center flex-column mt-5">
          <Checkout fetchData={fetchData} />
          <ClearCart fetchData={fetchData} />
        </div>
      ) : (
        ""
      )}
    </Container>
  );
}