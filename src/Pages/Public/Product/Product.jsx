import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "Layouts/Header";
import Footer from "Layouts/Footer";
import { CarouselSlider } from "lib/Components";

const Product = () => {
  return (
    <>
      <Header />
      <figure className="mb-5">
        <img className="w-100" src="images/bnner1.png" alt="products" />
      </figure>
      <Container>
        <Row>
          <Col md="6" className="p-4">
            <img className="w-100" src="images/col-img1.png" alt="products" />
          </Col>
          <Col md="6" className="p-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </Col>
        </Row>
      </Container>
      <CarouselSlider />
      <Footer />
    </>
  );
};

export default Product;
