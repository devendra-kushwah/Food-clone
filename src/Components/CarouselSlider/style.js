import styled from "styled-components";
import { Container } from "react-bootstrap";

const Carousel = styled(Container)`
  overflow: hidden;
  .slick-slide {
    padding: 0 5px;
    position: relative;
  }
`;

export default Carousel;
