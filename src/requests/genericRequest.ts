import axios from "axios";
import APIConstants from "../constants/apiConstants";

export default class UserService {
  static login(email:string, password:string) {
    return axios({
      url: APIConstants.baseURL + "user/login",
      method: "POST",
      data: {
        email,
        password,
      },
    });
  }
}
