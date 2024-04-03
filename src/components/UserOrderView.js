import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import OrderCard from "./OrderCard";
import "./OrderView.css";

export default function UserOrderView() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [orders, setOrders] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/orders/my-orders`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        // Group orders by productId
        const groupedOrders = {};
        data.orders.forEach((order) => {
          order.productsOrdered.forEach((product) => {
            if (!groupedOrders[product.productId]) {
              groupedOrders[product.productId] = {
                quantity: 0,
                subtotal: 0,
                products: [],
              };
            }
            groupedOrders[product.productId].quantity += product.quantity;
            groupedOrders[product.productId].subtotal += product.subtotal;
            groupedOrders[product.productId].products.push(product);
          });
        });

        // Convert grouped orders to array
        const allProducts = Object.values(groupedOrders).map((group) => ({
          productId: group.products[0].productId,
          quantity: group.quantity,
          subtotal: group.subtotal,
          products: group.products,
        }));

        // Calculate total price
        const total = allProducts.reduce((acc, curr) => acc + curr.subtotal, 0);
        setTotalPrice(total);
        setOrders(allProducts);
      })
      .catch((error) => {
        console.error("Error fetching orders:", error);
      });
  }, [token]);

  return (
    <Container>
      <div className="banner">
        <h1 className="my-5 text-white">My Orders</h1>
      </div>
      {orders.length > 0 ? (
        orders.map((order, index) => <OrderCard key={index} order={order} />)
      ) : (
        <div className="text-center">
          <h2 className="my-3">No order placed yet</h2>
          <p className="my-3 paragraph-font">
            You have not placed an order yet. Please add items to your cart and
            checkout when you are ready.
          </p>
        </div>
      )}
      {orders.length > 0 ? (
        <h2 className="my-5 text-center">Total Price: Php {totalPrice}</h2>
      ) : (
        ""
      )}
    </Container>
  );
}


