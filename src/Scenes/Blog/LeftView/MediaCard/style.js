import styled from "styled-components";
import { NavLink } from "react-router-dom";
import colors from "../../../../styles/colors";

const CardWithLink = styled(NavLink)`
  background: rgba(255, 255, 255, 0.5);
  /* z-index: 1; */
  border-radius: 60px;
  color: ${colors.black};
  &:before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: -1;
    border-radius: 60px;
    background: ${colors.themeColor2};
  }
  &:hover {
    color: ${colors.black} !important;
  }
  .avatar {
    width: 40px;
    height: 40px;
    flex: 0 0 40px;
    padding: 2px;
    box-shadow: 0 0 0px 1px rgba(255, 255, 255, 0.7);
    background: rgba(255, 255, 255, 0.6);
    /* img {
      transform: translate(-50%, 50%);
      top: 50%;
      left: 50%;
    } */
  }
  strong,
  span {
    font-size: 13px;
  }
`;

export default CardWithLink;
