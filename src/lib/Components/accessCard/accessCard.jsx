import React, { useState } from "react";
import { ClassCard, ClassDes } from "./style";

function AccessCard(props) {
  const { Icon, logInTitle, children } = props;
  return (
    <ClassCard maxWidth="400px">
      <div className="gp-des">
        <div className="group-icon">
          <span>{Icon}</span>
        </div>
        <ClassDes>
          <span> {logInTitle}</span>
        </ClassDes>
      </div>
      <div className="actions">{children}</div>
    </ClassCard>
  );
}
export default AccessCard;
