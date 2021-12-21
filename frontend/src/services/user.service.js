import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api/content/';

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }

  getUserContent() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }

  getAdminContent() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }
}

export default new UserService();