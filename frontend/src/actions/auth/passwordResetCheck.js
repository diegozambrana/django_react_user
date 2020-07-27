import { ACTIONS } from '../../redux/actionTypes';
import axios from 'axios';

const passwordResetCheck = (uid, token) => {
  return dispatch =>{
    return axios.get(`${window.API_DOMAIN}/api/auth/reset/${uid}/${token}/`).then(

      (response) => {
        return dispatch({
          type: ACTIONS.PASSWORD_RESET_CHECK,
          payload: {
            passwordResetCheck: response.data.detail,
            status: 'ok'
          }
        });
      },

      (error) => {
        return dispatch({
          type: ACTIONS.PASSWORD_RESET_CHECK,
          payload: {
            passwordResetCheck: error.response.data.detail,
            status: 'fail'
          }
        });
      }
    )
  }
}

export default passwordResetCheck;