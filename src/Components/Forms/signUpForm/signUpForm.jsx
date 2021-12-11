import React, { useState } from "react";
import { Form } from "./style";
import { Input } from "../../../styles/inputs";
import { StyledButton } from "./style";

const SignUpForm = () => {
  const [mobile, setMobile] = useState();
  const [password, setPassword] = useState();
  const [role, setRole] = useState();

  return (
    <Form>
      <Input
        type="text"
        placeholder="Mobile"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
      />
      <Input
        type="email"
        placeholder="Email"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />
      <Input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="form-actions">
        <StyledButton type="button">Sign up</StyledButton>
      </div>
    </Form>
  );
};
export default SignUpForm;
