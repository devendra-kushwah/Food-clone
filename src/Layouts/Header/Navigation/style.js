import styled from "styled-components";
import { Navbar } from "react-bootstrap";
import colors from "../../../styles/colors";

const StyledNav = styled(Navbar)`
  max-width: 400px;
  width: 100%;
  height: 100%;
  left: auto;
  background: rgba(255, 255, 255, 0.6);
  margin-right: -400px;
  transition: all 0.4s ease-in-out;
  opacity: 0;
  padding: 75px 30px 40px;
  .nav-bar {
    padding-top: 80px;
    transition: all 0.4s ease-in 0.8s;
    opacity: 0;
    a {
      font-size: 20px;
    }
  }
  .close-menu {
    left: auto;
    padding: 7px 10px 16px 21px;
    border-radius: 0 0 0px 100%;
    opacity: 0;
    transform: scale(0.5);
    transition: all 0.3s ease-in 0.5s;
  }
  &.open {
    margin-right: 0;
    opacity: 1;
    .nav-bar {
      padding-top: 0;
      opacity: 1;
    }
    .close-menu {
      opacity: 1;
      transform: scale(1);
      color: #000;
    }
  }
`;

export default StyledNav;
