import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import ModalWrapper from "./style";

const ModalPopup = (props) => {
  const {
    show,
    hideModal,
    // cancelButtonText,
    // actionButton,
    headerTitle,
    className,
    children,
    size,
  } = props;

  return (
    <>
      <ModalWrapper
        show={show}
        onHide={hideModal}
        size={size}
        className={`dialog-box  ${className}`}
        top="98"
      >
        <Modal.Header closeButton>
          <Modal.Title className="h5"> {headerTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {children}
          {/* <Button variant="primary">{actionButton}</Button> */}
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={hideModal}>
            {cancelButtonText}
          </Button>
          <Button variant="primary">{actionButton}</Button>
        </Modal.Footer> */}
      </ModalWrapper>
    </>
  );
};

export default ModalPopup;
