import React from "react";
import Session from "./Sessions";
import { RightColumnWrapper } from "./style";

const RightView = () => {
  return (
    <RightColumnWrapper className="right-layout">
      <h4 className="mb-4">Today sessions</h4>
      <Session />
    </RightColumnWrapper>
  );
};

export default RightView;
