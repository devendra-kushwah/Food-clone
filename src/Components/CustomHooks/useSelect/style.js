import styled from "styled-components";
import colors from "../../../styles/colors";

const Select = styled.select`
  height: ${(props) => props.height || "40"}px;
  width: ${(props) => props.width || "100%"};
  color: ${colors.black};
  font-size: 14px;
  border-radius: 50px;
  background: rgba(255, 255, 255, 0.5);
`;

export default Select;
