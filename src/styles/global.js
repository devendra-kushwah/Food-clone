import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";
import device from "./breakpoints";
import colors from "./colors";

// Logo Style

export const LogoLink = styled(NavLink)`
  img {
    max-width: 150px;
  }
  span {
    color: #000;
  }
`;

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 0 15px;
  ${(props) =>
    props.fluid
      ? css`
          max-width: 100%;
        `
      : ""}
  ${(props) =>
    props.noPadding
      ? css`
          padding: 0;
        `
      : ""}
        ${(props) =>
    props.vh
      ? css`
          height: 100vh;
        `
      : ""}
`;

export const Img = styled.img`
  vertical-align: top;
  ${(props) =>
    props.fluid
      ? css`
          width: 100%;
        `
      : ""}
`;

export const ProfileImage = styled(NavLink)`
  width: ${(props) => props.size || "80"}px;
  height: ${(props) => props.size || "80"}px;
  flex: 0 0 ${(props) => props.size || "80"}px;
  border-radius: 50%;
  overflow: hidden;
  font-size: ${(props) => props.fontSize || "50"}px;
  color: ${colors.white};
  border: 1px solid #f1c40f;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  background: #f1c40f;
  &:hover {
    color: ${colors.white} !important;
  }
`;

export const FollowButton = styled.button`
  border-radius: 30px;
  padding: 13px 40px;
  border: 1px solid #4593ab;
  background: transparent;
  cursor: pointer;
  color: #4593ab;
  line-height: 1;
  font-size: 18px;
`;

export const LeftColumn = styled.div`
  background: #4593ab;
  padding: 20px;
  .header {
    margin-bottom: 20px;
    a {
      color: #fff;
    }
  }
  @media ${device.tablet} {
    width: 25%;
  }
`;
export const RightColumn = styled.div`
  padding: 20px;
  @media ${device.tablet} {
    width: 75%;
  }
`;

export const Col25 = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 0 15px;
  ${(props) =>
    props.centerX
      ? css`
          justify-content: center;
        `
      : {}};
  ${(props) =>
    props.centerY
      ? css`
          align-items: center;
        `
      : {}};
  @media ${device.tablet} {
    flex: 0 0 25%;
    width: 25%;
  }
`;
export const ColLg50 = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 0 15px;
  ${(props) =>
    props.centerX
      ? css`
          justify-content: center;
        `
      : {}};
  ${(props) =>
    props.centerY
      ? css`
          align-items: center;
        `
      : {}};
  @media ${device.tabletL} {
    flex: 0 0 50%;
    width: 50%;
  }
`;
export const Col75 = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 0 15px;
  ${(props) =>
    props.centerX
      ? css`
          justify-content: center;
        `
      : {}};
  ${(props) =>
    props.centerY
      ? css`
          align-items: center;
        `
      : {}};
  @media ${device.tablet} {
    flex: 0 0 75%;
    width: 75%;
  }
`;

// ProfileCard
export const ProfileCard = styled.div`
  background: rgba(255, 225, 255, 0.3);
  border-radius: 4px;
  text-align: center;
  width: calc(98% / 3);
  margin-left: 1%;
  margin-bottom: 1%;
  &:nth-child(3n + 1) {
    margin-left: 0%;
  }
  @media ${device.mobile} {
    width: calc(97% / 4);
    &:nth-child(4n + 0) {
      margin-left: 1%;
    }
    &:nth-child(5n + 0) {
      margin-left: 0%;
    }
  }

  .view-info {
    padding: 4px;
    display: block;
    margin-bottom: 5px;
    font-size: 13px;
  }
  .avatar {
    width: 70px;
    height: 70px;
    display: inline-block;
    line-height: 70px;
    text-align: center;
    border-radius: 50%;
    overflow: hidden;
    position: relative;
    background: ${colors.themeColor1};
  }
  img {
    max-height: 100%;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
  }
  .pd {
    padding: 5px;
    * {
      display: block;
      font-size: 13px;
    }
  }
`;

// Wrapper

export const Wrapper = styled.div`
  width: ${(props) => props.width || "100"}%;
`;
