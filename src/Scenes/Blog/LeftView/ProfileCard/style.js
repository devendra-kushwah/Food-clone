import styled from "styled-components";
import { ProfileImage } from "../../../../styles/global";
import colors from "../../../../styles/colors";

const CardWrapper = styled.div`
  background: url(${(props) => props.coverImage || {}}) center center / cover;
  min-height: 120px;
  z-index: 1;
  &:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right:0;
    background: rgba(0,0,0,0.2);
    z-index: -1;
  }
  ${ProfileImage} {
    border: 2px solid #fff;
    flex: 0 0 80px;
    margin-top: -35px;
    z-index: 5;
    
  }
  .info {
    strong {
      font-size: 14px;
      color: ${colors.white};
    }
    .followers {
      font-size: 12px;
      color: ${colors.white};

  }
`;

export default CardWrapper;
