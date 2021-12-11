const { REACT_APP_REACT_ENV } = process.env;

const userApiURL = {
  development: "http://localhost:7000",
  staging: "my staging url",
  production: "my production url",
}[REACT_APP_REACT_ENV];

const common = {
  userApiURL,
};

const config = {
  development: {
    ...common,
  },
  staging: {
    ...common,
  },
  production: {
    ...common,
  },
}[REACT_APP_REACT_ENV];

export default config;
