import React, { useState } from "react";
import CardWrapper from "./style";
import { Image } from "react-bootstrap";
import { ProfileImage } from "../../../../styles/global";
import data from "./data";
import { UserFriends } from "@styled-icons/fa-solid/UserFriends";

const ProfileCard = () => {
  const [getData, setData] = useState(data.profileName);

  return (
    <CardWrapper
      coverImage={getData.coverImage}
      className="rounded d-flex px-4 position-relative mb-4"
    >
      <ProfileImage to="/" className="position-relative">
        <Image src={getData.image} alt={getData.name} />
      </ProfileImage>
      <div className="info ml-4 pt-4">
        <strong className="d-block mb-3">{getData.name}</strong>
        <span className="followers d-block">
          <UserFriends size="20" className="mr-2" />
          1,999 followers
        </span>
      </div>
    </CardWrapper>
  );
};

export default ProfileCard;
