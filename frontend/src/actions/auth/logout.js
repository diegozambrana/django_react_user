import Cookies from "js-cookie";
import { ACTIONS } from '../../redux/actionTypes';

const logout = () => {
  return dispatch =>{
    Cookies.remove('auth_access', { path: '/' });
    Cookies.remove('auth_refresh', { path: '/' });
    return dispatch({
      type: ACTIONS.LOGOUT
    })
  }
}

export default logout;