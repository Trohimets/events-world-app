export const REACT_APP_ENVIRONMENT = import.meta.env.MODE;

let ENV, BASE_URL, BASE_API_PATH;

switch (REACT_APP_ENVIRONMENT) {
  case "development":
    ENV = "develop";
    BASE_URL = "http://localhost:3000";
    BASE_API_PATH = "/";
    break;
  default:
    ENV = "production";
    BASE_URL = "http://";
    BASE_API_PATH = "/";
    break;
}

export { ENV, BASE_URL, BASE_API_PATH };

export const REACT_APP_BASE_URL = BASE_URL;
export const REACT_APP_BASE_API_PATH = BASE_API_PATH;

export const NODE_ENV = ENV;
