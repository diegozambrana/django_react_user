import { LOGIN_REQUEST } from "../actionTypes";
import Cookies from "js-cookie";

const initialState = {
  test: '',
  loginData: {} = {},
  auth_access: Cookies.get('auth_access'),
  auth_refresh: Cookies.get('auth_refresh'),
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
}