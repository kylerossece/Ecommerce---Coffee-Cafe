import React from "react";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import './Footer.css'; // Assuming you have additional styles in this file

const Footer = () => {
  return (
    <footer className="footer" style={{ color: "white" }}> {/* Inline style to set font color */}
      <Container>
        <div className="row">
          <div className="col-md-4 col-sm-6 col-xs-12"> {/* Adjust column widths for different screen sizes */}
            <h3 className="Coffee" style={{ color: "white" }}>Coffee Cafe</h3> {/* Override color for this element */}
            <p className="Coffee-text" style={{ color: "white" }}> {/* Override color for this element */}
              Crafted Coffee, Cozy Vibes, Unforgettable Moments – Your Perfect
              Espresso Escape
            </p>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12"> {/* Adjust column widths for different screen sizes */}
            <h3 className="Footer-link" style={{ color: "white" }}>Footer Links</h3> {/* Override color for this element */}
            <ul className="myfooter-link">
              <li>
                <NavLink to="/" style={{ color: "white" }}>Home</NavLink> {/* Override color for this element */}
              </li>
              <li>
                <NavLink to="/about" style={{ color: "white" }}>About</NavLink> {/* Override color for this element */}
              </li>
          
              <li>
                <NavLink to="/contact" style={{ color: "white" }}>Contact</NavLink> {/* Override color for this element */}
              </li>
              <li>
                <NavLink to="/blog" style={{ color: "white" }}>Blog</NavLink> {/* Override color for this element */}
              </li>
            </ul>
          </div>
          <div className="col-md-4 col-sm-12 col-xs-12"> {/* Adjust column widths for different screen sizes */}
            <h3 className="Address" style={{ color: "white" }}>Address</h3> {/* Override color for this element */}
            <p className="myaddress" style={{ color: "white" }}> {/* Override color for this element */}
              123 Swift Street Barangay Faketon City of Manila Metro Manila, Philippines
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
