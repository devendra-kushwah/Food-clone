import React from "react";
import { Image, Figure } from "react-bootstrap";

const NotFound = () => {
  return (
    <Figure className="d-flex justify-content-center">
      <Figure.Image
        width={500}
        src="/vector-images/page_not_found.svg"
        alt="The eagles "
      />
    </Figure>
  );
};

export default NotFound;
