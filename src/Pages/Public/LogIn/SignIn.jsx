import React, { useState, useEffect, useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { Input } from "../../styles/inputs";
import { LogoLink } from "../../styles/global";
import { MdfContainer } from "../../styles/overRide";
import { Toast } from "lib/Components";
import { Form, MainWrapper, StyledButton } from "./style";
import { User } from "lib/Helpers";
import { FormatListBulleted } from "@styled-icons/material-outlined";
import Context from "lib/Context";

const SignIn = () => {
  const [state, setState] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [showToast, setShowTest] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);
  const [dataError, setDataError] = useState(false);
  const { data, setData } = useContext(Context);
  const history = useHistory();

  const spinner = <Spinner animation="border" size="sm" variant="info" />;

  const errorMessage = toastMessage && toastMessage.error;
  const successMessage = toastMessage && toastMessage.message;

  const disabled = password.length >= 8;

  const dataStates = {
    mobile: state,
    password,
  };
  useEffect(() => {
    setData({ ...data, name: "don" });
  }, []);

  const submitAction = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setShowTest(true);
      const response = await User.read(dataStates);
      const { status, error } = response.data || {};
      console.log("response", response.data);
      if (status === "error") {
        setToastMessage({ error: error });
        setShowTest(true);
        setLoading(false);
        return;
      }
      const { data } = response.data;
      const message = data && data.message;
      const token = data && data.token;
      localStorage.setItem("token", token);
      setToastMessage({ message: message });
      setState("");
      setPassword("");
      setLoading(false);
      setDataError(false);
      return response;
    } catch (error) {
      console.log("Invalid data");
      setLoading(false);
      setDataError(true);
    }
  };

  return (
    <Context.Provider value={dataStates}>
      <MainWrapper>
        <MdfContainer maxwidth="500" className="transformY ">
          <LogoLink to="/" className="d-block text-center brand mx-auto mb-5">
            {/* <img src="/eagles.png" alt="the eagles" />
          <span className="d-block">The Eagles</span> */}
            Logo
          </LogoLink>
          <Form onSubmit={submitAction} className="mb-5 position-relative">
            <h2 className="h6 mb-1 text-center">Sign in</h2>
            <Input
              type="text"
              placeholder="Mobile *"
              name="userId"
              value={state}
              className={(errorMessage && "error") || (dataError && "error")}
              onChange={(e) => setState(e.target.value)}
            />
            <Input
              type="password"
              placeholder="password *"
              name="password"
              value={password}
              className={`mb-4 ${
                (errorMessage && "error") || (dataError && "error")
              }`}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="form-actions justify-content-between d-flex align-items-center">
              <Toast
                autohide
                delay={5000}
                onClose={() => setShowTest(false)}
                show={showToast}
                variant={
                  (errorMessage && "danger") ||
                  (dataError && "danger") ||
                  (toastMessage && "success")
                }
                message={
                  errorMessage ||
                  successMessage ||
                  (dataError && "Invalid data")
                }
              />

              <NavLink
                className="text-underline text-muted"
                to="/forgot-password"
              >
                Forgot password
              </NavLink>
              <StyledButton type="submit" className="p-0" disabled={!disabled}>
                {isLoading ? spinner : "Log in"}
              </StyledButton>
            </div>
          </Form>
          <div className="action text-center text-muted">
            Don't have an account{" "}
            <NavLink className="text-underline" to="/signup">
              Sign up
            </NavLink>
          </div>
        </MdfContainer>
      </MainWrapper>
    </Context.Provider>
  );
};

export default SignIn;
