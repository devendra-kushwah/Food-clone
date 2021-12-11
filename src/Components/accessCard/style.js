import styled, { css } from "styled-components";
import * as colors from "../../styles/colors";

export const ClassCard = styled.div`
  border-radius: 55px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 15px 6px 6px;
  background: rgba(255, 255, 255, 0.5);
  margin-bottom: 15px;
  width: 100%;
  max-width: ${(props) => props.maxWidth || {}};
  .group-icon {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    text-align: center;
    line-height: 50px;
    font-size: 30px;
    box-shadow: 0 0 0px 1px rgba(255, 255, 255, 0.7);
    background: rgba(255, 255, 255, 0.6);
    margin-right: 10px;
  }
  .gp-des {
    display: flex;
    align-items: center;
  }
  .actions {
    span {
      background: rgba(255, 255, 255, 0.6);
      padding: 7px 13px;
      border-radius: 28px;
      font-size: 12px;
      margin-left: 1px;
    }
  }
`;

export const ClassDes = styled.div`
  span {
    display: block;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 13px;
  }
`;
