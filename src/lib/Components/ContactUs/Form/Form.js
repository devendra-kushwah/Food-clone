import React, { useState, useEffect } from "react";
import { Button, Form, Col } from "react-bootstrap";
// import helper from "../../../helper";
import yupValidate from "../yup";
import SubmitMessage from "../../submitMessage";
import getFormCmsData from "../contactUsForm.json";
import { Input } from "../../../styles/inputs";

const OrderForm = (props) => {
  const { contactUsFromID } = props;
  const [errorMessage, setErrorMessage] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [workEmail, setWorkEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [question, setQuestion] = useState("");
  const [showForm, setShowForm] = useState(true);
  const [cmsData, setCmsData] = useState(getFormCmsData.contactUsForm);

  const { inputFields, button } = cmsData;

  const handleValidation = async (field, value) => {
    const validationError = await yupValidate(field, value);
    setErrorMessage((prevState) => ({
      ...prevState,
      [field]: validationError,
    }));
    return validationError;
  };
  const resetFormStates = (state) => {
    setFirstName("");
    setLastName("");
    setWorkEmail("");
    setPhone("");
    setJobTitle("");
    setCompanyName("");
    setQuestion("");
    setErrorMessage(false);
    setShowForm(state);
  };

  const onSubmit = async () => {
    const errorArr = [];
    errorArr.push(await handleValidation("firstName", firstName));
    errorArr.push(await handleValidation("lastName", lastName));
    errorArr.push(await handleValidation("workEmail", workEmail));
    errorArr.push(await handleValidation("companyName", companyName));
    errorArr.push(await handleValidation("question", question));

    const hasError = !errorArr.some((value) => value !== "");
    if (hasError) {
      const hs_context = {
        pageUrl: window.location.href,
        pageName: "Contact us",
      };
      const data = {
        firstName: firstName,
        lastName: lastName,
        workEmail: workEmail,
        phone: phone,
        jobTitle: jobTitle,
        companyName: companyName,
        question: question,
      };
      // const cookie = helper.getCookie("hubspotutk");
      // if (cookie) hs_context.hutk = cookie;
      // data.hs_context = JSON.stringify(hs_context);
      // helper.sendResponse(data, contactUsFromID);
      resetFormStates(false);
    }
  };

  return (
    <React.Fragment>
      <div className="form-wrapper">
        <Form>
          {showForm && (
            <>
              <Form.Row className="justify-content-between">
                <Form.Group as={Col} md="6" controlId="firstName">
                  <Input
                    inputBg="#f9f9f9"
                    type="text"
                    name="name"
                    className="border-0"
                    placeholder={inputFields.firstName.placeholder}
                    onChange={(event) => setFirstName(event.target.value)}
                    onBlur={() => handleValidation("firstName", firstName)}
                    value={firstName}
                  />
                  {errorMessage && errorMessage.firstName ? (
                    <div className="error-message">
                      {errorMessage.firstName}
                    </div>
                  ) : null}
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="lastName">
                  <Input
                    inputBg="#f9f9f9"
                    type="text"
                    name="phone *"
                    onChange={(event) => setPhone(event.target.value)}
                    placeholder={inputFields.phoneNumber.placeholder}
                    required
                    value={phone}
                  />
                  {errorMessage && errorMessage.lastName ? (
                    <div className="error-message">{errorMessage.lastName}</div>
                  ) : null}
                </Form.Group>
              </Form.Row>
              <Form.Group controlId="formBlog" className="w-100">
                <Input
                  inputBg="#f9f9f9"
                  as="textarea"
                  rows="3"
                  type="text"
                  name="message"
                  placeholder={inputFields.textArea.placeholder}
                  onChange={(event) => setQuestion(event.target.value)}
                  value={question}
                  onBlur={() => handleValidation("question", question)}
                  className={
                    errorMessage && errorMessage.question ? "error" : null
                  }
                />
                {errorMessage && errorMessage.question ? (
                  <div className="error-message">{errorMessage.question}</div>
                ) : null}
              </Form.Group>
              <Button
                className="g-button d-block ml-auto"
                variant="outline-secondary"
                onClick={onSubmit}
              >
                {button.title}
              </Button>
            </>
          )}
          {!showForm && <SubmitMessage resetFormStates={resetFormStates} />}
        </Form>
      </div>
    </React.Fragment>
  );
};

export default OrderForm;
