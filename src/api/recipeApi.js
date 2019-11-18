import axios from 'axios';
const KEY = '1365b80b608c4984bc8d481e58faccc0';

export default axios.create({
    baseURL: 'https://api.spoonacular.com',
    timeout: 5000,
    params: {
        apiKey: KEY
    }
});