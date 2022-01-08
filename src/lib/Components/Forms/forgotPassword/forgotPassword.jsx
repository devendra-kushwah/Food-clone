import React, { useState } from "react";
import { Input, Button } from "../../../styles/inputs";
import { FormWrapper } from "../../../styles/forms";
import { Form } from "./style";

const ForgotPassword = () => {
  const [number, setNumber] = useState("");

  const submit = (e) => {
    e.preventDefault();
    console.log(number);
    // Reset input value
    setNumber("");
  };

  // const handleOnChange = (d) => {
  //   setNumber(d.target.value);
  // };

  return (
    <FormWrapper>
      <Form onSubmit={submit}>
        <Input
          type="text"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Mobile / email"
        />
        <Button type="submit"> OTP </Button>
      </Form>
    </FormWrapper>
  );
};
export default ForgotPassword;
