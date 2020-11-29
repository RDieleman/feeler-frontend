import axios from 'axios';

export const BackendAPI = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        'Access-Control-Allow-Origin': 'http://localhost:3000'
    }
});