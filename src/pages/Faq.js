import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import './Faq.css'

const FAQ = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4" style={{ color: "black" }}>Frequently Asked Questions</h1>
      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            <Accordion.Toggle
              as={Button}
              variant="link"
              eventKey="0"
              style={{ color: "black", textDecoration: "none", outline: "none" }}
              className="faq-toggle" // Add a custom class
            >
              What is Coffee Cafe?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body style={{ color: "black" }}>Coffee Cafe is a place for coders or programmers who love coffee.</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle
              as={Button}
              variant="link"
              eventKey="1"
              style={{ color: "black", textDecoration: "none", outline: "none" }}
              className="faq-toggle" // Add a custom class
            >
              What are your opening hours?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body style={{ color: "black" }}>Our cafe is open from 8:00 AM to 6:00 PM every day of the week.</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle
              as={Button}
              variant="link"
              eventKey="2"
              style={{ color: "black", textDecoration: "none", outline: "none" }}
              className="faq-toggle" // Add a custom class
            >
              Do you offer free Wi-Fi?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="2">
            <Card.Body style={{ color: "black" }}>Yes, we provide free Wi-Fi to all our customers.</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle
              as={Button}
              variant="link"
              eventKey="3"
              style={{ color: "black", textDecoration: "none", outline: "none" }}
              className="faq-toggle" // Add a custom class
            >
              Can I bring my own cup for coffee?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="3">
            <Card.Body style={{ color: "black" }}>Of course! We encourage customers to bring their own cups for coffee to help reduce waste.</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle
              as={Button}
              variant="link"
              eventKey="4"
              style={{ color: "black", textDecoration: "none", outline: "none" }}
              className="faq-toggle" // Add a custom class
            >
              Do you have gluten-free options?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="4">
            <Card.Body style={{ color: "black" }}>Yes, we offer a variety of gluten-free pastries and snacks.</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
};

export default FAQ;
