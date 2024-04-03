import { useState, useEffect, useContext } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./Login.css";

import UserContext from "../UserContext";

export default function Login(props) {
  const { user, setUser } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isActive, setIsActive] = useState(true);

  function authenticate(e) {
    e.preventDefault();
    fetch(`${process.env.REACT_APP_API_BASE_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (typeof data.access !== "undefined") {
          localStorage.setItem("token", data.access);

          retrieveUserDetails(data.access);

          Swal.fire({
            title: "Login Successful!",
            icon: "success",
            text: "Welcome to Coffee Cafe",
          });

          setEmail("");
          setPassword("");
        } else if (data.error === "No Email Found") {
          Swal.fire({
            title: `Login Error`,
            icon: "error",
            text: "Email does not exist",
          });
        } else if (data.error === "Email and password do not match") {
          Swal.fire({
            title: "Login Error",
            icon: "error",
            text: data.error,
          });
        } else {
          Swal.fire({
            title: `${email} does not exist`,
            icon: "error",
            text: "Check your login credentials and try again.",
          });
        }
      });
  }

  const retrieveUserDetails = (token) => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/users/details`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUser({
          id: data.user._id,
          isAdmin: data.user.isAdmin,
        });
      });
  };

  useEffect(() => {
    if (email !== "" && password !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [email, password]);

  console.log(user);

  return user.id !== null ? (
    <Navigate to="/products" />
  ) : (
    <Container>
      <Form onSubmit={(e) => authenticate(e)}>
        <h1 className="my-5 text-center" style={{ color: "#8c4d44" }}>
          Login
        </h1>

        <Form.Group controlId="userEmail">
          <Form.Label style={{ color: "#8c4d44" }}>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label style={{ color: "#8c4d44" }}>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>

        {isActive ? (
          <button type="submit" className="btn btn-custom">
            Submit
          </button>
        ) : (
          <Button variant="danger" type="submit" id="submitBtn" disabled>
            Submit
          </Button>
        )}
      </Form>
    </Container>
  );
}
