import styled from "styled-components";
import { Carousel } from "react-bootstrap";

export const CarouselSection = styled(Carousel)`
  .carousel-item img {
    max-height: 600px;
    object-fit: cover;
  }
`;
