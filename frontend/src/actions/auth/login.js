import React from 'react';
import { ACTIONS } from '../../redux/actionTypes';
import axios from 'axios';
import Cookies from "js-cookie";

let isLoading = false;

const loginRequest = (data) => {
  if(!isLoading){
    isLoading = true;
    return dispatch =>{
      return axios.post(`${window.API_DOMAIN}/api/auth/token/`, data).then(
        (response) => {
  
          Cookies.set('auth_access', response.data.access, { path: '/' });
          Cookies.set('auth_refresh', response.data.refresh, { path: '/' });

          isLoading = false;
          return dispatch({
            type: ACTIONS.LOGIN_REQUEST,
            payload: {
              data: response.data
            }
          });
        },
        (error) => {
          isLoading = false;
          return dispatch({
            type: ACTIONS.LOGIN_REQUEST_FAIL,
            payload: {
              detail: error.response.data.detail
            }
          })
        }
      )
    }
  }else{
    return dispatch => dispatch({type: ''});
  }
}

export default loginRequest;