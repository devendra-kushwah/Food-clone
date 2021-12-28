import React, { useState } from "react";
import { Input } from "../../styles/inputs";
import { MdfContainer } from "../../styles/overRide";
import { LogoLink } from "../../styles/global";
import { Form, MainWrapper, StyledButton } from "./style";
import { useHistory } from "react-router-dom";

const ForgotPassword = () => {
  const [reset, setReset] = useState("");
  const history = useHistory();

  const submit = (e) => {
    e.preventDefault();
    setReset("");
  };

  return (
    <MainWrapper>
      <MdfContainer maxwidth="500">
        <LogoLink to="/" className="d-block text-center brand mx-auto mb-5">
          {/* <img src="/eagles.png" alt="the eagles" />
          <span className="d-block">The Eagles</span> */}
          Logo
        </LogoLink>
        <Form className="mb-5" onSubmit={submit}>
          <h2 className="h6 mb-1 text-center">
            Enter the email or mobile associated with your account
          </h2>
          <Input
            className="mb-4"
            type="text"
            value={reset}
            onChange={(e) => setReset(e.target.value)}
            placeholder="Mobile / email *"
          />

          <div className="form-actions justify-content-end d-flex align-items-center">
            <StyledButton
              type="submit"
              onClick={() => history.push("/verify-code")}
              className="p-0"
            >
              Submit
            </StyledButton>
          </div>
        </Form>
      </MdfContainer>
    </MainWrapper>
  );
};
export default ForgotPassword;
