import { ACTIONS } from '../../redux/actionTypes';
import axios from 'axios';

const passwordResetRequest = (data) => {
  return dispatch =>{
    return axios.post(`${window.API_DOMAIN}/api/auth/password_reset`, data).then(

      (response) => {
        return dispatch({
          type: ACTIONS.PASSWORD_RESET_REQUEST,
          payload: {
            detail: response.data.detail
          }
        });
      }
    )
  }
}

export default passwordResetRequest;