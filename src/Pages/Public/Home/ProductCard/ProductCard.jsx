import React from "react";
import { Container, Row, InputGroup, FormControl } from "react-bootstrap";
import { Card as Col, ProductRow, QtyButton } from "./style";

const ProductCard = (props) => {
  const { items, quantityIncrease, quantityDecrease } = props;

  return (
    <Container className="bottom-space">
      {items.map((data, index) => (
        <ProductRow key={data.id} className="product-row">
          <Col md={6} className="p-0">
            <img
              className="d-block thumbail w-100"
              src={data.image}
              alt={data.title}
            />
          </Col>
          <Col
            md={6}
            className="content py-4 px-3 d-flex align-items-center justify-content-center"
          >
            <div className="product-desc text-center">
              <h2 className="mb-2">{data.title}</h2>
              {/* <p>{data.content}</p> */}
              <div className="price mb-2">
                <strong>Rs.{data.price}/plate</strong>
                <span className="d-block">{data.peace} peace</span>
              </div>
              {/* <InputGroup className="mx-auto mb-3">
                <InputGroup.Append>
                  <QtyButton
                    className="rounded-0"
                    variant="outline-secondary"
                    onClick={() => quantityDecrease(index)}
                    disabled={data.qty === 0 || !data.qty}
                  >
                    -
                  </QtyButton>
                </InputGroup.Append>
                <FormControl
                  className="text-center"
                  placeholder="0"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  value={data.qty}
                />
                <InputGroup.Append>
                  <QtyButton
                    className="rounded-0"
                    variant="outline-secondary"
                    onClick={() => quantityIncrease(index)}
                  >
                    +
                  </QtyButton>
                </InputGroup.Append>
              </InputGroup> */}
              <div className="order">Call for order: 0000000000</div>
            </div>
          </Col>
        </ProductRow>
      ))}
    </Container>
  );
};

export default ProductCard;
