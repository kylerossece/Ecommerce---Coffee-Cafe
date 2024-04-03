import { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import UserContext from "../UserContext";
import "./AddProducts.css";

export default function AddProducts() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  function createProduct(e) {
    e.preventDefault();

    const token = localStorage.getItem("token");

    fetch(`${process.env.REACT_APP_API_BASE_URL}/products/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: name,
        description: description,
        price: price,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.error === "Product already exists") {
          Swal.fire({
            icon: "error",
            title: "Product already exists.",
            text: data.message,
          });
        } else if (data.error === "Failed to save the product") {
          Swal.fire({
            icon: "error",
            title: "Unsuccessful Product Creation",
            text: data.message,
          });
        } else {
          Swal.fire({
            icon: "success",
            title: "Product Added",
          });
          navigate("/products");
        }
      });

    setName("");
    setDescription("");
    setPrice(0);
  }

  return user.isAdmin === true ? (
    <>
      <h1 className="my-5 text-center">Add Product</h1>
      <Form onSubmit={(e) => createProduct(e)}>
        <Form.Group>
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Description:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Description"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-1">
          {" "}
          {/* Add margin bottom */}
          <Form.Label>Price:</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Price"
            required
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </Form.Group>
        <button type="submit" className="btn btn-custom">
          Submit
        </button>
      </Form>
    </>
  ) : (
    <Navigate to="/products" />
  );
}
