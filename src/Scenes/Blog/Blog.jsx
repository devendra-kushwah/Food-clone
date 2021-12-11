import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import { Container } from "../../styles/global";
import { InfoWrapper } from "./style";
// import About from "./About";
import LeftView from "./LeftView";
import MainView from "./MainView";
import RightView from "./RightView";
import Header from "../../Layouts/Header";

const Blog = () => {
  return (
    <>
      <Header />
      <InfoWrapper className="pt-5">
        <Container>
          {/* <About /> */}
          <Row>
            <Col lg="3">
              <LeftView />
            </Col>
            <Col lg="7">
              <MainView />
            </Col>
            <Col lg="2">
              <RightView />
            </Col>
          </Row>
        </Container>
      </InfoWrapper>
    </>
  );
};
export default Blog;
