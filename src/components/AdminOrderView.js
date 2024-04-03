import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";

export default function AdminOrderView({ orderData }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const orderArr = orderData.map((order) => (
      <tr key={order._id}>
        <td>{order._id}</td>
        <td>{order.totalPrice}</td>
        <td>{order.status}</td>
        <td>{order.orderedOn}</td>
      </tr>
    ));
    setOrders(orderArr);
  }, [orderData]);
  return (
    <>
      <h1 className="text-center my-4">Orders</h1>
      <Table striped bordered hover responsive>
        <thead>
          <tr className="text-center">
            <th>ID</th>
            <th>Total Price</th>
            <th>Status</th>
            <th>Date Ordered</th>
          </tr>
        </thead>

        <tbody className="text-center">{orders}</tbody>
      </Table>
    </>
  );
}
