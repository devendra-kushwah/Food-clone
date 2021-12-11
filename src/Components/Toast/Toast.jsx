import React from "react";
import StyledToast from "./style";

const Toast = (props) => {
  const {
    // delay = 3000,
    // autohide,
    title,
    children,
    // show,
    // onClose,
    variant = null,
    message,
  } = props;
  // console.log("🚀 ~ file: Toast.jsx ~ line 15 ~ Toast ~ props", props);

  return (
    <StyledToast {...props}>
      {message && (
        <StyledToast.Header className="border-0">
          <span className="mr-auto">{message}</span>
        </StyledToast.Header>
      )}
      {children && (
        <StyledToast.Body
          className={`${variant === "success" ? "text-success" : ""}`}
        >
          {children}
        </StyledToast.Body>
      )}
    </StyledToast>
  );
};

export default Toast;
