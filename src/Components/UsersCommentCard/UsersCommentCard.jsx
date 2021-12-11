import React, { useState } from "react";
import { Ul } from "./style";
import { Media } from "react-bootstrap";
import { ProfileImage } from "../../styles/global";

function UsersCommentCard({ data }) {
  // console.log("data", data);
  return (
    <Ul className="list-unstyled pt-4">
      {data.map((comments) => {
        const { id, name, image, comment, time } = comments;
        const noImage = name.split("")[0];
        return (
          <li key={id}>
            <Media>
              <ProfileImage
                size="60"
                fontSize="25"
                className="profile-thumbnail mr-3"
                to={name}
              >
                {image ? <img src={image} alt={name} /> : noImage}
              </ProfileImage>
              <Media.Body>
                <div className="mb-1">
                  <strong className="text-capitalize d-block">{name}</strong>
                  <span className="d-block">{time}</span>
                </div>
                <p>{comment}</p>
              </Media.Body>
            </Media>
          </li>
        );
      })}
    </Ul>
  );
}

export default UsersCommentCard;
