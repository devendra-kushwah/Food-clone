import React, { useState } from "react";
import { Profile, Summery, ProfessionalInfo } from "./style";
import { ProfileImage } from "../../../styles/global";
import userData from "./data";
import helper from "../../../Helper/base";

const TutorsProfile = () => {
  const [data, setData] = useState(userData.data);
  return (
    <ul>
      {data.map(
        ({ userId, image, name, years, followers, students, subjects }) => {
          return (
            <Profile key={userId}>
              <div className="about-info">
                <ProfileImage to="/classroom">
                  {image ? (
                    <img src={image} alt={name} />
                  ) : (
                    helper.shortName(name)
                  )}
                </ProfileImage>
                <Summery>
                  <span className="name">{name}</span>
                  <span className="teacher-id"> ID - {userId}</span>
                  <span className="experience"> Experience: {years}</span>
                  {subjects && (
                    <span className="subjects">
                      specialist: {subjects.one}, {subjects.two}
                    </span>
                  )}
                </Summery>
              </div>
              <ProfessionalInfo>
                <a className="followers" href="/blog">
                  groupie: {followers}
                </a>
                <span className="total-student">students: {students}</span>
              </ProfessionalInfo>
            </Profile>
          );
        }
      )}
    </ul>
  );
};
export default TutorsProfile;
