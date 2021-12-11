import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Input } from "../../styles/inputs";
import { MdfContainer } from "../../styles/overRide";
import { LogoLink } from "../../styles/global";
import { Toast } from "../../Components";
import { Spinner } from "react-bootstrap";
import { User } from "../../Helper";
import { Form, MainWrapper, StyledButton } from "./style";
import ErrorBoundary from "../../Components/ErrorBoundary";

const SignUp = () => {
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [showToast, setShowTest] = useState(false);

  const [toastMessage, setToastMessage] = useState(null);

  const [error, setError] = useState(false);

  const errorMessage = toastMessage && toastMessage.error;
  const successMessage = toastMessage && toastMessage.message;

  const disabled =
    mobile.length >= 10 && email.length > 3 && password.length >= 8;

  const onChangeMobile = (e) => {
    const { value } = e.target;
    const regex = /^[0-9\b]+$/;
    // If value is not blank, then test the regex
    if (value === "" || regex.test(value)) {
      setMobile(value);
    }
  };

  const spinner = <Spinner animation="border" size="sm" variant="info" />;

  const dataStates = {
    mobile,
    email,
    password,
  };

  const onSubmitAction = async (e) => {
    e.preventDefault();
    setLoading(true);
    const response = await User.create(dataStates);

    if (!response) {
      console.log("Somthing went wrong!");
      setToastMessage({ error: "Somthing went wrong!" });
      setShowTest(true);
      setLoading(false);
      return;
    }
    const { status, error } = (response && response.data) || {};

    if (status === "error") {
      setToastMessage({ ...toastMessage, error: error });
      setShowTest(true);
      setLoading(false);
      return;
    }
    const responseStatus = response && response.status;

    if (responseStatus === 200) {
      setToastMessage({ ...toastMessage, message: "registerd" });
      setShowTest(true);
    }
    setMobile("");
    setEmail("");
    setPassword("");
    setLoading(false);
  };

  // if (error) {
  //   return <h2>Back to home</h2>;
  // }

  return (
    <MainWrapper>
      <MdfContainer maxwidth="500">
        <LogoLink to="/" className="d-block text-center brand mx-auto mb-5">
          {/* <img src="/eagles.png" alt="the eagles" />
          <span className="d-block">The Eagles</span> */}
          Logo
        </LogoLink>
        <Form onSubmit={onSubmitAction} className="mb-5 position-relative">
          <h2 className="h6 mb-1 text-center">Sign up</h2>
          <Input
            type="text"
            placeholder="Mobile *"
            value={mobile}
            className={errorMessage && "error"}
            onChange={onChangeMobile}
            required
          />
          <Input
            type="email"
            placeholder="Email *"
            value={email}
            className={errorMessage && "error"}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="password *"
            value={password}
            className={`mb-4 ${errorMessage && "error"}`}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="form-actions justify-content-end d-flex align-items-center">
            <Toast
              autohide={false}
              delay={5000}
              onClose={() => setShowTest(false)}
              show={showToast}
              title={errorMessage || successMessage}
              variant={
                (errorMessage && "danger") || (toastMessage && "success")
              }
              // message={errorMessage || successMessage}
            />
            <StyledButton type="submit" className="p-0" disabled={!disabled}>
              {isLoading ? spinner : "Submit"}
            </StyledButton>
          </div>
        </Form>
        <div className="action text-center text-muted">
          Already have an account{" "}
          <NavLink className="text-underline" to="/login">
            login
          </NavLink>
        </div>
      </MdfContainer>
    </MainWrapper>
  );
};

export default ErrorBoundary(SignUp);
