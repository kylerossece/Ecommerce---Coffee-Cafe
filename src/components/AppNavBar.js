import { useContext } from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import UserContext from "../UserContext";
import logo from "./Assets/logo.png";
import "./AppNavbar.css";
import { FaShoppingCart, FaUser } from "react-icons/fa"; // Import the profile and cart icons

export default function AppNavbar() {
  const { user } = useContext(UserContext);

  return (
    <Navbar className="custom-navbar" expand="sm">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            alt="Ecommerce Logo"
            style={{ height: "50px", width: "50px" }}
          />
          <span className="coffee-cafe-text">Coffee Cafe</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/products" exact>
              Menu
            </Nav.Link>
            {user.id !== null ? (
              user.isAdmin ? (
                <>
                  <Nav.Link as={Link} to="/createProduct">
                    Create
                  </Nav.Link>
                  <Nav.Link as={Link} to="/setAsAdmin">
                    Set Admin
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/orders" exact>
                    Order
                  </Nav.Link>
                  <NavDropdown title={<FaUser />} id="basic-nav-dropdown">
                    <NavDropdown.Item
                      as={Link}
                      to="/profile"
                      style={{ color: "brown" }}
                    >
                      Profile
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={Link}
                      to="/logout"
                      style={{ color: "brown" }}
                    >
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              ) : (
                <>
                  <Nav.Link as={NavLink} to="/orders" exact>
                    Order
                  </Nav.Link>
                  {/* Cart icon */}
                  <Nav.Link as={NavLink} to="/cart" exact>
                    <FaShoppingCart />
                  </Nav.Link>
                  {/* Profile dropdown with Profile and Logout options */}
                  <NavDropdown title={<FaUser />} id="basic-nav-dropdown">
                    <NavDropdown.Item
                      as={Link}
                      to="/profile"
                      style={{ color: "brown" }}
                    >
                      Profile
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={Link}
                      to="/logout"
                      style={{ color: "brown" }}
                    >
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              )
            ) : (
              <>
                <Nav.Link as={Link} to="/register">
                  Register
                </Nav.Link>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
