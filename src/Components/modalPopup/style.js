import styled from "styled-components";
import { Modal } from "react-bootstrap";

const ModalWrapper = styled(Modal)`
  top: ${({ top }) => top || ""}px;
  .modal-header .close {
    font-size: 27px;
  }
`;
export default ModalWrapper;
