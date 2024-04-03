import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { Container, Form, Row, Col } from "react-bootstrap";

export default function UserView({ productData }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (!productData) return;

    const filtered = productData.filter(
      (product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (!minPrice || product.price >= parseFloat(minPrice)) &&
        (!maxPrice || product.price <= parseFloat(maxPrice))
    );
    setFilteredProducts(filtered);
  }, [productData, searchQuery, minPrice, maxPrice]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleMinPriceChange = (e) => {
    setMinPrice(e.target.value);
  };

  const handleMaxPriceChange = (e) => {
    setMaxPrice(e.target.value);
  };

  return (
    <Container>
      <div className="banner text-center">
        <h1 className="my-5 text-white">Coffee Menu</h1>
        <Form.Control
          type="text"
          placeholder="Search by product name"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <Row className="mt-3">
          <Col>
            <Form.Control
              type="number"
              placeholder="Minimum Price"
              value={minPrice}
              onChange={handleMinPriceChange}
            />
          </Col>
          <Col>
            <Form.Control
              type="number"
              placeholder="Maximum Price"
              value={maxPrice}
              onChange={handleMaxPriceChange}
            />
          </Col>
        </Row>
      </div>

      {filteredProducts.map((product) => (
        <ProductCard key={product._id} productProp={product} />
      ))}
    </Container>
  );
}
