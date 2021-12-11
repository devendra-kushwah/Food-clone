import styled from "styled-components";
import { Col, Row } from "react-bootstrap";
import { Button } from "../../../styles/buttons";

export const Card = styled(Col)`
  &.content {
    /* background: #4a6b4d; */
    background: #f7f7f7;
    * {
      color: #666;
    }
    .product-desc {
      @media (min-width: 992px) {
        max-width: calc(100% - 150px);
      }
      .input-group {
        max-width: 180px;
        input {
          color: #999;
        }
      }
    }
  }
`;
export const ProductRow = styled(Row)`
  &:nth-child(even) {
    flex-direction: row-reverse;
  }
  .thumbail {
    max-height: 350px;
    object-fit: cover;
  }
`;

export const QtyButton = styled(Button)`
  min-width: auto;
  padding: 0;
  width: 45px;
  font-size: 22px;
`;
