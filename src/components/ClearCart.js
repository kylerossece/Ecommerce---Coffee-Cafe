import { useContext } from "react";
import UserContext from "../UserContext";
import Swal from "sweetalert2";
import { Button } from "react-bootstrap";

export default function ClearCart({ fetchData }) {
  const { user } = useContext(UserContext);
  let token = localStorage.getItem("token");
  const clear = () => {
    Swal.fire({
      title: "Clear all items from cart?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
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
              fetchData();
            }
          });
      }
    });
  };
  return (
    <>
      <Button
        variant="outline-primary"
        onClick={clear}
       className="mb-3 d-block mx-auto" // Add mx-auto class to center horizontally
        style={{ backgroundColor: "#8c4d44", borderColor: "brown", color: "white", padding: "1rem 5rem", fontSize: "0.875rem", maxWidth: "300px" }} // Adjust padding, font size, and maxWidth
      >
        Clear Cart
      </Button>
    </>
  );
}
