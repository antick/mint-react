import axios from 'axios';
import config from '../config';

const token = localStorage.getItem('token');

axios.defaults.baseURL = config.apiUrl;
axios.defaults.headers.common = { Authorization: `Bearer ${token}` };

export default axios;
