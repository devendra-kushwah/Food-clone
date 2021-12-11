import styled from "styled-components";
import colors from "./colors";
import device from "./breakpoints";

export const Button = styled.button`
  background: rgba(255, 255, 255, 0.5);
  padding: 11px 10px;
  border-radius: 40px;
  box-shadow: 0 0 12px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  text-align: center;
  min-width: 100px;
  display: inline-block;
  font-weight: 500;
  font-size: 12px;
  transition: all 0.3s ease-in-out;
  @media ${device.laptop} {
    font-size: 14px;
    padding: 11px 20px;
  }
  &:hover:not([disabled]),
  &.active {
    background: ${colors.themeColor1};
  }
`;
