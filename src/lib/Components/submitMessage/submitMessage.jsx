import React from "react";
import { Button } from "react-bootstrap";

export const SubmitMessage = props => {
  return (
    <div>
      <div className="form-success-message text-italic mb-3">
        <strong> Thank you for contacting us.</strong>
        <br /> We have received your enquiry and will respond to you within 24 hours.
      </div>
      <Button className="g-button d--inline-block" variant="primary" onClick={() => props.resetFormStates(true)}>
        Submit Another Response
      </Button>
    </div>
  );
};

export default SubmitMessage;
