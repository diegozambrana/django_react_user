import { ACTIONS } from '../../redux/actionTypes';
import axios from 'axios';

let isLoading = false;

const passwordResetRequest = (data) => {
  if(!isLoading){
    isLoading = true;
    return dispatch =>{
      return axios.post(`${window.API_DOMAIN}/api/auth/password_reset`, data).then(
        (response) => {
          isLoading = false;
          return dispatch({
            type: ACTIONS.PASSWORD_RESET_REQUEST,
            payload: {
              detail: response.data.detail
            }
          });
        }
      )
    }
  }else{
    return dispatch => dispatch({type: ''});
  }
}

export default passwordResetRequest;