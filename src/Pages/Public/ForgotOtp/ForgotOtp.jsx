import React, { useState } from "react";
import { Input } from "../../styles/inputs";
import { MdfContainer } from "../../styles/overRide";
import { LogoLink } from "../../styles/global";
import { Form, MainWrapper, StyledButton } from "./style";
import { useHistory } from "react-router-dom";

const ForgotOtp = () => {
  const [resetOtp, setResetOtp] = useState("");
  // const [resendOtp, setResendOtp] = useState("");
  const history = useHistory();

  const submit = (e) => {
    e.preventDefault();
    setResetOtp("");
  };
  // const resendSubmit = (e) => {
  //   e.preventDefault();
  // };

  return (
    <MainWrapper>
      <MdfContainer maxwidth="500">
        <LogoLink
          to="/"
          className="d-block logo text-decoration-none text-center brand mx-auto mb-5"
        >
          <img src="/eagles.png" alt="the eagles" />
          <span className="d-block">The Eagles</span>
        </LogoLink>
        <Form className="mb-5">
          <h2 className="h6 mb-1 text-center">Enter the verification code</h2>
          <Input
            className="mb-4"
            type="text"
            value={resetOtp}
            onChange={(e) => setResetOtp(e.target.value)}
            placeholder="Enter Otp"
          />
          <div className="form-actions justify-content-between d-flex align-items-center">
            <StyledButton
              type="submit"
              // onSubmit={resendSubmit}
              className="p-0 text-underline"
            >
              Resend
            </StyledButton>
            <StyledButton
              onClick={() => history.push("/reset-password")}
              onSubmit={submit}
              type="submit"
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
export default ForgotOtp;
