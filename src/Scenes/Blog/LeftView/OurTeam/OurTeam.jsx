import React, { useState } from "react";
import { OurTeamBlock } from "./style";
import data from "./data";
import { ProfileImage } from "../../../../styles/global";
import { Image, Tooltip } from "react-bootstrap";
// import { Accordions } from "../../../../Components";

const OurTeam = () => {
  const [getData, setData] = useState(data);

  return (
    <OurTeamBlock>
      <h2 className="mb-4">Our Team</h2>
      <ul className="list-unstyled">
        {getData.map(({ id, name, image, status, body }, index) => (
          <li
            className={`mb-3 position-relative  ${status ? "active" : ""}`}
            key={id}
          >
            <ProfileImage to="/#" title={name}>
              <Image src={image} alt={name} />
              <strong>{name}</strong>
            </ProfileImage>
          </li>
          // <Accordions
          //   key={id}
          //   eventKeyValue={index + 1}
          //   accordionTitle={name}
          //   accordionBody={body}
          // />
        ))}
      </ul>
    </OurTeamBlock>
  );
};

export default OurTeam;
