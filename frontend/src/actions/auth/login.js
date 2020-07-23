import React from 'react';
import { LOGIN_REQUEST } from '../../redux/actionTypes';
import axios from 'axios';
import Cookies from "js-cookie";

const loginRequest = (data) => {
  return dispatch =>{
    return axios.post(`${window.API_DOMAIN}/api/auth/token/`, data).then(
      (response) => {
        Cookies.set('auth_access', response.data.access, { path: '/' });
        Cookies.set('auth_refresh', response.data.refresh, { path: '/' });
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