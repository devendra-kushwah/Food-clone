import styled from "styled-components";
import device from "../../../styles/breakpoints";

export const RightColumnWrapper = styled.div`
  @media ${device.laptop} {
    position: fixed;
    max-width: 177px;
    width: 100%;
  }
`;
