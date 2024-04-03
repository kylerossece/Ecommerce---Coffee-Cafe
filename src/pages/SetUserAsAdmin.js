import React, { useState } from "react";
import Swal from "sweetalert2";
import { Button, Container } from "react-bootstrap";

export default function SetUserAsAdmin() {
  const [userId, setUserId] = useState("");

  const updateUserAsAdmin = () => {
    let token = localStorage.getItem("token");
    fetch(
      `${process.env.REACT_APP_API_BASE_URL}/users/${userId}/set-as-admin`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        if (data.message === "User updated as admin successfully") {
          Swal.fire({
            title: "Successfully Updated",
            icon: "success",
            text: "User set as Admin",
          });
        } else {
          Swal.fire({
            title: "Something Went Wrong",
            icon: "error",
            text: "Please try again later",
          });
        }
      })
      .catch((error) => {
        console.error("Error updating user as admin:", error);
        if (error.message === "Network response was not ok") {
          Swal.fire({
            title: "Failed Update",
            icon: "error",
            text: "Failed updating user as Admin",
          });
        }
      });
  };

  return (
    <Container className="mt-5">
      <input
        type="text"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        placeholder="Enter User ID"
      />
      <Button onClick={updateUserAsAdmin} className="ml-3">
        Set as Admin
      </Button>
    </Container>
  );
}
