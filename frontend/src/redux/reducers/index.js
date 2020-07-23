import { LOGIN_REQUEST } from "../actionTypes";

const initialState = {
  test: '',
  loginData: {} = {},
  auth_token: {} = {},
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST: {
      console.log(`LOGIN_REQUEST`);
      return {
        ...state
      };
    }
    default:
      return state;
  }
}