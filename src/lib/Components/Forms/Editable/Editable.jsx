import React from "react";
import EditableWrapper from "./style";

const Editable = ({ label, type, children, ...props }) => {
  return (
    <EditableWrapper>
      {props.isEditing ? (
        <>{children}</>
      ) : (
        <label className="mb-0"> {label} </label>
      )}
    </EditableWrapper>
  );
};

export default Editable;
