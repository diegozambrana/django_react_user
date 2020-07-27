import { ACTIONS } from '../../redux/actionTypes';
import axios from 'axios';

const passwordReset = (data, uid, token) => {
  return dispatch =>{
    return axios.post(`${window.API_DOMAIN}/api/auth/reset/${uid}/${token}/`, data).then(

      (response) => {
        return dispatch({
          type: ACTIONS.PASSWORD_RESET,
          payload: {
            detail: response.data.detail
          }
        });
      },

      (error) => {
        return dispatch({
          type: ACTIONS.PASSWORD_RESET_FAIL,
          payload: {
            errors: error.response.data.errors
          }
        })
      }
    )
  }
}

export default passwordReset;