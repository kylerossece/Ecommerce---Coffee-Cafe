import { useState, useEffect, useContext } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";
import UserContext from "../UserContext";
import logo from "../components/Assets/logo.png";
import "./Register.css";
import Swal from "sweetalert2";

export default function Register() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  console.log(user);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isActive, setIsActive] = useState(false);

  function registerUser(e) {
    console.log(process.env.REACT_APP_API_BASE_URL);
    e.preventDefault();

    fetch(`${process.env.REACT_APP_API_BASE_URL}/users/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email: email,
        mobileNo: mobileNo,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.message === "Registered Successfully") {
          setFirstName("");
          setLastName("");
          setEmail("");
          setMobileNo("");
          setPassword("");
          setConfirmPassword("");

          Swal.fire({
            icon: "success",
            title: "User Registered",
            text: data.message,
          });
          navigate("/login");
        } else if (data.error === "Email already exists") {
          Swal.fire({
            icon: "error",
            title: "User Registered",
            text: data.error,
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Something Went Wrong",
          });
        }
      });
  }

  useEffect(() => {
    if (
      firstName !== "" &&
      lastName !== "" &&
      email !== "" &&
      mobileNo !== "" &&
      password !== "" &&
      confirmPassword !== "" &&
      password === confirmPassword &&
      mobileNo.length === 11
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [firstName, lastName, email, mobileNo, password, confirmPassword]);

  return user.id !== null ? (
    <Navigate to="/products" />
  ) : (
    <Container>
      <Form onSubmit={(e) => registerUser(e)}>
        <h1 className="my-5 text-center brown-text">Register</h1>
        <Form.Group>
          <Form.Label className="brown-text">First Name:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter First Name"
            required
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label className="brown-text">Last Name:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Last Name"
            required
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label className="brown-text">Email:</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label className="brown-text">Mobile No:</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter 11 Digit No."
            required
            value={mobileNo}
            onChange={(e) => {
              setMobileNo(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label className="brown-text">Password:</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label className="brown-text">Confirm Password:</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            required
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
        </Form.Group>
        {isActive ? (
          <Button type="submit" className="btn btn-custom brown-text">
            Submit
          </Button>
        ) : (
          <Button variant="danger" type="submit" id="submitBtn" disabled>
            Submit
          </Button>
        )}
      </Form>
    </Container>
  );
}
