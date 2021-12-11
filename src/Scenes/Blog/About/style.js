import styled from "styled-components";
import { ProfileImage } from "../../../styles/global";

export const Cover = styled.div`
  position: relative;
  .profile {
    padding: 0 20px;
    margin-top: -11%;
  }
  .about-info {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  .personal-info {
    span,
    a {
      display: block;
      font-size: 15px;
    }
  }
`;

export const CoverProfileImage = styled(ProfileImage)`
  width: 150px;
  height: 150px;
`;

export const Figure = styled.figure``;

export const AboutSummery = styled.div`
  padding: 0 20px;
`;
