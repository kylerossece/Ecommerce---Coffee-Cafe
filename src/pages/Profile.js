import { useEffect, useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import ResetPassword from "../components/ResetPassword";
import { FaUser, FaEnvelope, FaMobileAlt } from "react-icons/fa";
import "./Profile.css"; // Import CSS file for additional styling

export default function Profile() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [email, setEmail] = useState("");
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/users/details`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFirstName(data.user.firstName);
        setLastName(data.user.lastName);
        setMobileNo(data.user.mobileNo);
        setEmail(data.user.email);
      });
  }, [token]);

  return (
    <div className="profile-container">
      <Row className="mb-5">
        <Col>
          <Card className="profile-card">
            <Card.Body>
              <div className="profile-header">
                <FaUser className="profile-icon" />
                <h2 className="profile-title">Welcome, {firstName}!</h2>
              </div>
              <hr />
              <div className="profile-details">
                <div className="profile-info">
                  <FaUser className="profile-icon" />
                  <span className="profile-text">{`${firstName} ${lastName}`}</span>
                </div>
                <div className="profile-info">
                  <FaEnvelope className="profile-icon" />
                  <span className="profile-text">{`${email}`}</span>
                </div>
                <div className="profile-info">
                  <FaMobileAlt className="profile-icon" />
                  <span className="profile-text">{`${mobileNo}`}</span>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <ResetPassword />
        </Col>
      </Row>
    </div>
  );
}
