import React from "react";
import { StyledFooter } from "./style";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <StyledFooter className="text-center p-3 alert-light">
      <Container>© 2021 Copyright Panipurijunction</Container>
    </StyledFooter>
  );
};

export default Footer;
