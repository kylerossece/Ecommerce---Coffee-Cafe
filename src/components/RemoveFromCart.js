import { Button } from "react-bootstrap";
import Swal from "sweetalert2";

export default function RemoveFromCart({ productId, fetchData }) {
  const removeToggle = () => {
    fetch(
      `${process.env.REACT_APP_API_BASE_URL}/cart/${productId}/remove-from-cart`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    ).then((res) => {
      if (res.ok) {
        Swal.fire({
          title: "Successfully Removed",
          icon: "success",
          text: "Product successfully removed from cart",
        });
        fetchData();
      } else {
        return res.json().then((data) => {
          if (data.error === "Cart not found for this user") {
            Swal.fire({
              title: "Cart not found",
              icon: "error",
            });
            fetchData();
          } else {
            Swal.fire({
              title: "Something Went Wrong",
              icon: "error",
              text: "Please try again",
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
        className="ml-1 mb-2 mb-sm-0 mr-3"
        variant="outline-danger"
        size="sm"
        onClick={() => removeToggle()}
      >
        Remove From Cart
      </Button>
    </>
  );
}
