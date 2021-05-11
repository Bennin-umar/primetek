import React from "react";
import banner from "../images/banner.jpg";
import products from "../data/products";
import {
  Card,
  CardBody,
  CardImg,
  Col,
  Container,
  Input,
  Row,
} from "reactstrap";
import Product from "../components/Product";

const HomePage = () => {
  return (
    <section className="home">
      <div
        className="w-100 d-flex flex-column justify-content-center align-items-center text-white"
        style={{ backgroundImage: `url(${banner})`, height: "50vh" }}
      >
        <h1>Welcome to Primetek local market</h1>
        <Input placeholder="search phone" className="w-25 mt-3" />
      </div>
      <Container>
        <h3 className="m-4 text-center">latest phones in town</h3>
        <Row>
          {products.map((p, i) => (
            <Product name={p.name} price={p.price} img={p.img} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default HomePage;
