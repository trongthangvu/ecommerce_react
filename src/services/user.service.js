import { https } from "./urlConfig";

export const userServ = {
  postRegister: (dataRegister) => {
    let uri = "/users/";
    return https.post(uri, dataRegister);
  },
};
