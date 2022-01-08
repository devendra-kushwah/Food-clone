import styled from "styled-components";
import { Button } from "../../../styles/inputs";

export const Form = styled.form`
  .form-actions {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .no-password {
      margin-right: 10px;
      cursor: pointer;
    }
  }
`;

export const StyledButton = styled(Button)``;
