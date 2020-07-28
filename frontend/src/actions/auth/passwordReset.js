import { ACTIONS } from '../../redux/actionTypes';
import axios from 'axios';

let isLoading = false;

const passwordReset = (data, uid, token) => {
  if(!isLoading){
    isLoading = true;
    return dispatch =>{
      return axios.post(`${window.API_DOMAIN}/api/auth/reset/${uid}/${token}/`, data).then(
  
        (response) => {
          isLoading = false;
          return dispatch({
            type: ACTIONS.PASSWORD_RESET,
            payload: {
              detail: response.data.detail
            }
          });
        },
  
        (error) => {
          isLoading = false;
          return dispatch({
            type: ACTIONS.PASSWORD_RESET_FAIL,
            payload: {
              errors: error.response.data.errors
            }
          })
        }
      )
    }
  }else{
    return dispatch => dispatch({type: ''});
  }
}

export default passwordReset;