import axios from 'axios';

const verifyToken = (token) => {
    return axios.post(`${window.API_DOMAIN}/api/auth/token/verify/`, {token: token})
}

export default verifyToken;