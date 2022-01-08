import styled from "styled-components";

import { Input, FileInput } from "../../styles/inputs";
import colors from "../../styles/colors";

export const TextArea = styled(Input)`
  border-radius: 15px;
  border: 1px solid #ddd;
  resize: none;
`;

export const UploadFile = styled(FileInput)`
  input {
    & + label {
      background: ${colors.buttonBg2};
      color: ${colors.themeColor2};
      border-radius: 5px;
      width: 90px;
      height: 40px;
    }
  }
`;

export const CreatePostDiv = styled.div`
  height: 70px;
  border: 1px solid #ddd;
  cursor: pointer;
  color: #999;
`;
