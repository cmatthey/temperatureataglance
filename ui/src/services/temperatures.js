import axios from 'axios';

const getTemeperatures = () => {
    axios.defaults.baseURL = 'http://localhost:5000';
    return axios.get('/v1/temperatures');
}

export default getTemeperatures;