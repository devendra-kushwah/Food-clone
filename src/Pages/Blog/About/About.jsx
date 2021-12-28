import React from "react";
import { Img, FollowButton } from "../../../styles/global";

import { Figure, Cover, CoverProfileImage, AboutSummery } from "./style";

const About = () => {
  return (
    <>
      <Cover>
        <Figure>
          <Img fluid src="teacher-cover.jpg" alt="cover" />
        </Figure>
        <div className="profile">
          <div className="about-info">
            <CoverProfileImage to="/teacher">
              <img src="/teacher.png" alt="profile" />
            </CoverProfileImage>

            <FollowButton type="button"> groupie </FollowButton>
          </div>
          <div className="personal-info">
            <span className="name"> Name (che12421)</span>
            <span className="teacher-id"> id {Math.random()}</span>
            <span className="experience"> Experience: 10 years</span>
            <span className="subjects">specialist: Chemistry, english</span>
            <a className="followers" href="/">
              groupie: 500
            </a>
            <span className="total-student">students: 10000</span>
          </div>
        </div>
      </Cover>
      <AboutSummery>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary of over 200 Latin words, combined with
          a handful of model sentence structures, to generate Lorem Ipsum which
          looks reasonable. The generated Lorem Ipsum is therefore always free
          from repetition, injected humour, or non-characteristic words etc.
        </p>
      </AboutSummery>
    </>
  );
};
export default About;
