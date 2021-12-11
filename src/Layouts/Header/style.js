import styled from "styled-components";
import colors from "../../styles/colors";
import device from "../../styles/breakpoints";
import { Form } from "react-bootstrap";

export const MainHeader = styled.header`
  background: rgba(0, 0, 0, 0.3);
  .container {
    @media ${device.mobile} {
      padding: 0 15px;
    }
  }
  .cart {
    color: #fff;
  }
  .total-qty {
    top: -13px;
    left: 13px;
  }
  .menu button {
    color: #fff;
  }
  .navbar-brand {
    color: #fff;
    img {
      max-width: 130px;
      max-height: 50px;
    }
  }
`;

export const SearchForm = styled(Form)`
  flex: 0 1 380px;
  input {
    border-radius: 20px;
    font-size: 10px;
    padding: 15px 45px 15px 18px;
    background: rgba(255, 255, 255, 0.9);
  }
  button {
    top: 1px;
    right: 1px;
    width: 39px;
    height: 39px;
    background: ${colors.themeColor2};
    color: ${colors.white};
  }
`;
