import styled, { css } from "styled-components";
import colors from "./colors";
import device from "./breakpoints";

// Global :- input text field
export const Input = styled.input`
  border: 0;
  font-size: 16px;
  width: 100%;
  padding: 15px 12px;
  color: ${(props) => props.inputColor || "#000"};
  font-weight: 300;
  background: ${(props) => props.inputBg || "rgba(255, 255, 255, 0.5)"};
  border-radius: ${(props) => props.radius || ""};
  border-bottom: 1px solid transparent;
  &.error {
    border-color: red;
    color: red;
  }
  :focus {
    outline: 0;
  }
  &::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    color: ${(props) => props.placeholderColor || "#000"};
    font-size: 14px;
  }
  &::-moz-placeholder {
    /* Firefox 19+ */
    color: ${(props) => props.placeholderColor || "#000"};
    font-size: 14px;
  }
  &:-ms-input-placeholder {
    color: ${(props) => props.placeholderColor || "#000"};
    font-size: 14px;
  }
  &:-moz-placeholder {
    /* Firefox 18- */
    color: ${(props) => props.placeholderColor || "#000"};
    font-size: 14px;
  }
`;

// Input type file

export const FileInput = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  input {
    display: none;
    + label {
      border-radius: 50%;
      padding: 15px;
      width: 90px;
      height: 90px;
      justify-content: center;
      align-items: center;
      display: flex;
      background: ${colors.themeColor1};
      cursor: pointer;
      @media ${device.tabletL} {
        width: 130px;
        height: 130px;
      }
    }
  }
`;

export const RadioInput = styled.input`
  width: 0;
  height: 0;
  visibility: hidden;
  & + label {
    background: transparent;
    width: 50px;
    height: 30px;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.1);
  }
`;

//  Button

export const Button = styled.button`
  padding: 18px 30px;
  color: #000;
  font-weight: 300;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 30px;
  border: 0;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
