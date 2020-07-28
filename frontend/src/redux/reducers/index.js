import { ACTIONS } from "../actionTypes";
import Cookies from "js-cookie";

const initialState = {
  test: '',
  loginData: {} = {},
  loginRequestFail: '',
  auth_access: Cookies.get('auth_access'),
  auth_refresh: Cookies.get('auth_refresh'),
  passwordResetRequestMessage: '',
  passwordResetMessage: '',
  passwordResetMessageErrors: {} = {},
  passwordResetCheckMessage: {} = {},

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
    case ACTIONS.LOGIN_REQUEST_FAIL: {
      return {
        ...state,
        loginRequestFail: action.payload.detail,
      };
    }
    case ACTIONS.LOGOUT: {
      return {
        ...state,
        auth_access: '',
        auth_refresh: '',
      }
    }
    case ACTIONS.PASSWORD_RESET_REQUEST: {
      return {
        ...state,
        passwordResetRequestMessage: action.payload.detail
      }
    }
    case ACTIONS.PASSWORD_RESET: {
      return {
        ...state,
        passwordResetMessage: action.payload.detail
      }
    }
    case ACTIONS.PASSWORD_RESET_FAIL: {
      return {
        ...state,
        passwordResetMessageErrors: action.payload.errors
      }
    }
    case ACTIONS.PASSWORD_RESET_CHECK: {
      return {
        ...state,
        passwordResetCheckMessage: {
          status: action.payload.status,
          message: action.payload.passwordResetCheck
        }
      }
    }
    default:
      return state;
  }
}