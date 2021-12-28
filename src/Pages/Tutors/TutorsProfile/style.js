import styled from "styled-components";
import colors from "../../../styles/colors";

export const Profile = styled.li`
  padding: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${colors.themeColor2};
  border-radius: 10px;
  margin-bottom: 15px;
  .about-info {
    display: flex;
    align-items: center;
  }
`;

export const Summery = styled.div`
  padding-left: 15px;
  span {
    display: block;
  }
`;

export const ProfessionalInfo = styled.div`
  a,
  span {
    display: block;
    text-transform: capitalize;
  }
  a {
    color: #f1c40f;
    margin-bottom: 6px;
  }
`;
