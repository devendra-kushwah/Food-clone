import styled, { css } from "styled-components";
import { Toast } from "react-bootstrap";

const StyledToast = styled(Toast)`
  border: none;
  box-shadow: none;
  position: absolute;
  margin: 0;
  top: 10px;
  right: 10px;
  ${(props) =>
    props.variant === "success" &&
    css`
      background: #4caf50;
    `}

  ${(props) =>
    props.variant === "danger" &&
    css`
      background: #ff0000;
    `}
`;

export default StyledToast;
