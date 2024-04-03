import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import Swal from "sweetalert2";

export default function UpdateQuantity({ productId, fetchData }) {
  const [quantity, setQuantity] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  const editQuantity = (e) => {
    e.preventDefault();

    fetch(`${process.env.REACT_APP_API_BASE_URL}/cart/update-cart-quantity`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        productId: productId,
        quantity: quantity,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "Item quantity updated successfully") {
          Swal.fire({
            title: "Quantity Updated!",
            icon: "success",
          });
          fetchData();
        } else {
          Swal.fire({
            title: "Error!",
            icon: "error",
            text: "Please try again",
          });
          fetchData();
        }
      });
  };

  return (
    <>
      <Button
        className="ml-1 mb-2 mb-sm-0  custom-btn"
        size="sm"
        onClick={() => openModal()}
      >
        Update Quantity
      </Button>

      <Modal show={showModal} onHide={closeModal}>
        <Form onSubmit={(e) => editQuantity(e)}>
          <Modal.Header closeButton>
            <Modal.Title>Update Quantity</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group controlId="quantityUpdate">
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                min="1"
                required
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>
              Close
            </Button>
            <Button variant="success" type="submit">
              Submit
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}
