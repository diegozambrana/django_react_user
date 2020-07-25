import { ACTIONS } from "../actionTypes";
import Cookies from "js-cookie";

const initialState = {
  test: '',
  loginData: {} = {},
  auth_access: Cookies.get('auth_access'),
  auth_refresh: Cookies.get('auth_refresh'),
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.LOGIN_REQUEST: {
      return {
        ...state,
        auth_access: action.payload.data.access,
        auth_refresh: action.payload.data.refresh,
      };
    }
    case ACTIONS.LOGOUT: {
      return {
        ...state,
        auth_access: '',
        auth_refresh: '',
      }
    }
    default:
      return state;
  }
}