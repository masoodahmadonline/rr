import {config} from "../../config/config";
export const system = {
  BK : {
    FORWARD_SLASH: "/",
    URL: {
      HTTP: "http://",
      HOST: `${config.BK.host}` + ":",
      PORT: `${config.BK.port}` + "/"
    },
    WISE_MESSAGE: {
      WARNING: "wiseMessageWarning",
      WARNING_HEADING: "Warning!",
      INFO: "wiseMessageInfo",
      INFO_HEADING: "Info!",
      SUCCESS: "wiseMessageSuccess",
      SUCCESS_HEADING: "Success!",
      ERROR: "wiseMessageError",
      ERROR_HEADING: "Error!",

    },
    LOADERCOG: {
      LOADER: "/img/refresh-button.svg",
    }
  }
};