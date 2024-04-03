import { useContext } from "react";
import UserContext from "../UserContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Button } from "react-bootstrap";

export default function UserOrderView({ fetchData }) {
  const { user } = useContext(UserContext);
  let token = localStorage.getItem("token");
  const navigate = useNavigate();

  const clear = () => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/cart/clear-cart`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.error === "Cart not found for this user") {
          Swal.fire({
            title: "Cart is Empty",
            icon: "Error",
            text: "Please Add Items",
          });
        } else if (data.message === "Cart cleared successfully") {
          Swal.fire({
            title: "Successful Cleared Cart",
            icon: "success",
          });
          navigate("/orders");
        }
      });
  };

  const checkout = async () => {
    const result = await Swal.fire({
      title: "Proceed to Checkout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    });

    if (result.isConfirmed) {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/orders/checkout`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();

      console.log(data);
      if (data.error === "Cart is empty for this user") {
        Swal.fire({
          title: "Cart is Empty",
          icon: "Error",
          text: "Please Add Items",
        });
      } else if (data.message === "Ordered successfully") {
        // Clear the cart after successful checkout
        clear();

        Swal.fire({
          title: "Successful Checkout",
          text: "Thank you for shopping!",
          icon: "success",
        });

        fetchData();
      }
    }
  };
  const checkoutAndClear = async () => {
    await checkout();
  };
  return (
    <>
      <div className="d-flex justify-content-center">
        <Button
          variant="outline-primary"
          onClick={checkoutAndClear}
          className="mb-3 d-block mx-auto"
          style={{
            backgroundColor: "#8c4d44",
            borderColor: "brown",
            color: "white",
            padding: "1rem 5rem",
            fontSize: "0.875rem",
            maxWidth: "300px",
          }}
        >
          Checkout
        </Button>
      </div>
    </>
  );
}

