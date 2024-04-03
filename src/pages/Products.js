import { useEffect, useState, useContext } from "react";
import UserView from "../components/UserView";
import AdminView from "../components/AdminView";
import UserContext from "../UserContext";

export default function Products() {
  const { user } = useContext(UserContext);
  const [products, setProducts] = useState([]);
  const [activeProducts, setActiveProducts] = useState([]);

  let token = localStorage.getItem("token");
  console.log(token);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/products/all`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const productdata = data.Products;
        console.log(productdata);
        setProducts(productdata);
      });
  }, []);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/products/`)
      .then((res) => res.json())
      .then((data) => {
        const activeProductData = data.Products;
        setActiveProducts(activeProductData);
      });
  }, []);

  const fetchData = () => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/products/all`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.Products);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(products);

  return (
    <>
      {user.isAdmin === true ? (
        <AdminView productData={products} fetchData={fetchData} />
      ) : (
        <UserView productData={activeProducts} />
      )}
    </>
  );
}
