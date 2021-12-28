import styled from "styled-components";
import device from "../../../styles/breakpoints";

export const LeftColumnWrapper = styled.div`
  @media ${device.laptop} {
    position: fixed;
    max-width: 280px;
    width: 100%;
  }
`;
