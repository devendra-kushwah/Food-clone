import styled from "styled-components";
import { ProfileImage } from "../../../../styles/global";

export const OurTeamBlock = styled.div`
  ${ProfileImage} {
    background: #49bcc7;
    border: none;
    width: 60px;
    height: 60px;
  }
  h2 {
    font-size: 14px;
    font-weight: 600;
    border-radius: 30px;
  }
  li {
    /* margin-right: 2.8%;
    &:nth-child(4n + 0) {
      margin-right: 0;
    } */
    border-bottom: 1px solid #ccc;
    &.active {
      &:before {
        content: "";
        position: absolute;
        bottom: -5px;
        width: 13px;
        height: 13px;
        background: green;
        border-radius: 50%;
        left: 0;
        right: 0;
        margin: 0 auto;
        border: 2px solid #fff;
      }
    }
  }
`;
