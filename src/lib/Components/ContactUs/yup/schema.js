import * as yup from "yup";

const workEmailSchema = yup.object().shape({
  workEmail: yup.string().email().required("Email address is required"),
});

const fullNameSchema = yup.object().shape({
  fullName: yup.string().required("Value is required"),
});

const firstNameSchema = yup.object().shape({
  firstName: yup.string().required("Name is required"),
});

const lastNameSchema = yup.object().shape({
  lastName: yup.string().required("Number is required"),
});

const companyNameSchema = yup.object().shape({
  companyName: yup.string().required("Company name is required"),
});

const questionSchema = yup.object().shape({
  question: yup.string().required("Address is required"),
});

const numberSchema = yup.object().shape({
  number: yup.string().required("Value is required"),
});

export {
  workEmailSchema,
  firstNameSchema,
  lastNameSchema,
  numberSchema,
  fullNameSchema,
  companyNameSchema,
  questionSchema,
};
