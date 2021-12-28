import styled from "styled-components";
import { Button } from "../../styles/inputs";
import colors from "../../styles/colors";

export const MainWrapper = styled.div`
  background: ${colors.themeColor2};
  height: 300px;
  padding-top: 55px;
  .brand {
    /* border-radius: 50% 50% 0 0; */
    max-width: 100px;
    span {
      margin-top: -21px;
    }
    img {
      max-width: 90px;
    }
  }
`;
export const Form = styled.form`
  margin-top: -1px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0 2px 5px 0px rgba(0, 0, 0, 0.1);
  padding: 35px;
  .form-actions {
    .no-password {
      margin-right: 10px;
      cursor: pointer;
    }
  }
`;

export const StyledButton = styled(Button)``;
