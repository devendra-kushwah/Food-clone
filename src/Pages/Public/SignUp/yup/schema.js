import * as yup from "yup";

const mobileSchema = yup.object().shape({
  mobile: yup.number().max(10).required("Mobile is required"),
});

const emailSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
});

const passwordSchema = yup.object().shape({
  password: yup.string().min(8).required("Password is required"),
});

export { mobileSchema, emailSchema, passwordSchema };
