import React, { useState } from "react";
import { Form } from "./style";
import { Input } from "../../../styles/inputs";
import { StyledButton } from "./style";
import ForgotPassword from "../forgotPassword";

const LogInForm = () => {
  const [mobile, setMobile] = useState();
  const [password, setPassword] = useState();
  const [forgotPassword, setForgotPassword] = useState();
  return (
    <>
      {!forgotPassword && (
        <Form>
          <Input
            type="text"
            placeholder="Mobile / email"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
          <Input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="form-actions">
            <span
              className="no-password"
              onClick={() => setForgotPassword(true)}
            >
              Forget password
            </span>
            <StyledButton type="button">Sign in</StyledButton>
          </div>
        </Form>
      )}
      {forgotPassword && <ForgotPassword />}
    </>
  );
};
export default LogInForm;
