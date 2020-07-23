import { LOGIN_REQUEST } from '../../redux/actionTypes';
import axios from 'axios';

const loginRequest = (data) => {
  return dispatch =>{
    return axios.post(`${window.API_DOMAIN}/api/auth/token/`, data).then(
      (response) => {
        console.log(response);
        return dispatch({
          type: LOGIN_REQUEST,
          payload: {
            response: response.data
          }
        })
      }
    )
  }
}

export default loginRequest;