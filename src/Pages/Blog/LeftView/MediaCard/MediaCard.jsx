import React from "react";
import CardWithLink from "./style";
import { Image } from "react-bootstrap";

const MediaCard = () => {
  const image = "/teacher.png";

  return (
    <CardWithLink
      to="/"
      className="d-flex p-1 align-items-center position-relative"
    >
      <span className="avatar rounded-circle d-flex align-items-center justify-content-center text-uppercase mr-3">
        {image ? <Image className="mh-100" src={image} alt="dd" /> : "D"}
      </span>
      <span className="text-capitalize">Lorem ipsum</span>
    </CardWithLink>
  );
};

export default MediaCard;
