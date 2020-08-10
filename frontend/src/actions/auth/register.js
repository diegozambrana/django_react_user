import React from 'react';
import { ACTIONS } from '../../redux/actionTypes';
import axios from 'axios';
import Cookies from "js-cookie";

let isLoading = false;

const RegisterRequest = (data) => {
  if(!isLoading){
    isLoading = true;
    return dispatch =>{
      return axios.post(`${window.API_DOMAIN}/api/auth/register/`, data).then(
        (response) => {

          if(response.data['success']){
            Cookies.set('auth_access', response.data.access, { path: '/' });
            Cookies.set('auth_refresh', response.data.refresh, { path: '/' });
          }

          isLoading = false;
          return dispatch({
            type: ACTIONS.REGISTER_ACCOUNT_REQUEST,
            payload: {
              data: response.data
            }
          });
        },
        (error) => {
          isLoading = false;
          return dispatch({
            type: ACTIONS.REGISTER_ACCOUNT_REQUEST_FAIL,
            payload: {
              data: error.response.data
            }
          })
        }
      )
    }
  }else{
    return dispatch => dispatch({type: ''});
  }
}

export default RegisterRequest;