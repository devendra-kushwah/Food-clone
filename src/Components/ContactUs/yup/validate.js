import { workEmailSchema, firstNameSchema, lastNameSchema, numberSchema, fullNameSchema, companyNameSchema, questionSchema } from "./schema";

const validateValue = async (schema, value) => schema.validate(value);

const handlePromiseError = async promise => {
  let errorMessage = "";
  await promise.catch(err => {
    errorMessage = err.message;
  });
  return errorMessage;
};

const validate = async (field, value) => {
  let promise = "";
  switch (field) {
    case "workEmail":
      promise = validateValue(workEmailSchema, { workEmail: value });
      break;
    case "fullName":
      promise = validateValue(fullNameSchema, { fullName: value });
      break;
    case "companyName":
      promise = validateValue(companyNameSchema, { companyName: value });
      break;
    case "question":
      promise = validateValue(questionSchema, { question: value });
      break;
    case "number":
      promise = validateValue(numberSchema, { number: value });
      break;
    case "firstName":
      promise = validateValue(firstNameSchema, { firstName: value });
      break;
    case "lastName":
      promise = validateValue(lastNameSchema, { lastName: value });
      break;
    default:
      return "";
  }
  return handlePromiseError(promise);
};

export default validate;