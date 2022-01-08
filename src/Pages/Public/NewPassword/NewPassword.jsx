import React, { useState } from "react";
import { Form, MainWrapper } from "./style";
import { Input } from "../../styles/inputs";
import { StyledButton } from "./style";
import { MdfContainer } from "../../styles/overRide";
import { LogoLink } from "../../styles/global";

const NewPassword = () => {
  const [resetPassword, setResetPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    setResetPassword("");
    setConfirmPassword("");
  };
  return (
    <MainWrapper>
      <MdfContainer maxwidth="500" className="transformY ">
        <LogoLink to="/" className="d-block text-center brand mx-auto mb-5">
          <img src="/eagles.png" alt="the eagles" />
          <span className="d-block">The Eagles</span>
        </LogoLink>
        <Form className="mb-5" onSubmit={onSubmit}>
          <h2 className="h6 mb-1 text-center">Reset password</h2>
          <Input
            type="text"
            placeholder="New password"
            name="newPassword"
            value={resetPassword}
            onChange={(e) => setResetPassword(e.target.value)}
          />
          <Input
            className="mb-4"
            type="text"
            placeholder="Confirm password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <div className="form-actions justify-content-end d-flex align-items-center">
            <StyledButton type="submit" className="p-0">
              Reset password
            </StyledButton>
          </div>
        </Form>
      </MdfContainer>
    </MainWrapper>
  );
};

export default NewPassword;
