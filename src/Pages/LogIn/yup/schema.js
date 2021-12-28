import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string.required("Required field"),
  password: yup.string.min(8).required("Requrired field"),
});

export default schema;
