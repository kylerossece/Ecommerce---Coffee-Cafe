import "./App.css";
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { UserProvider } from "./UserContext";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Logout from "./pages/Logout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Error from "./pages/Error";
import AddProduct from "./pages/AddProduct";
import ProductView from "./pages/ProductView";
import Order from "./pages/Order";
import ShoppingCart from "./pages/ShoppingCart";
import SetUserAsAdmin from "./pages/SetUserAsAdmin";
import Profile from "./pages/Profile";
import AboutUs from "./pages/AboutUs";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import AppNavbar from "./components/AppNavBar";
import UpdateProduct from "./components/UpdateProduct";

export default function App() {
  const [user, setUser] = useState({
    id: null,
    isAdmin: null,
  });

  const unsetUser = () => {
    localStorage.clear();
  };

  useEffect(() => {
    console.log(user);
    console.log(localStorage);
    fetch(`${process.env.REACT_APP_API_BASE_URL}/users/details`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (typeof data.user !== "undefined") {
          setUser({
            id: data.user._id,
            isAdmin: data.user.isAdmin,
          });
        } else {
          setUser({
            id: null,
            isAdmin: null,
          });
        }
      });
  }, []);

  return (
    <UserProvider value={{ user, setUser, unsetUser }}>
      <Router>
        <AppNavbar />
        <Container fluid>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/faqs" element={<Faq />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/cart" element={<ShoppingCart />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/update" element={<UpdateProduct />} />
            <Route path="/products" element={<Products />} />
            <Route path="/orders" element={<Order />} />
            <Route path="/products/:productId" element={<ProductView />} />
            <Route path="/createProduct" element={<AddProduct />} />
            <Route path="/setAsAdmin" element={<SetUserAsAdmin />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Container>
      </Router>
    </UserProvider>
  );
}
