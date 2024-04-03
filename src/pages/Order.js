import { useEffect, useState, useContext } from "react";
import UserContext from "../UserContext";
import AdminOrderView from "../components/AdminOrderView";
import UserOrderView from "../components/UserOrderView";

export default function Order() {
  const { user } = useContext(UserContext);

  const [userOrders, setUserOrders] = useState([]);
  const [orders, setOrders] = useState([]);

  let token = localStorage.getItem("token");

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/orders/all-orders`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const orderdata = data.orders;
        console.log(orderdata);
        setOrders(orderdata);
      });
  });

  return (
    <>
      {user.isAdmin === true ? (
        <AdminOrderView orderData={orders} />
      ) : (
        <UserOrderView />
      )}
    </>
  );
}
