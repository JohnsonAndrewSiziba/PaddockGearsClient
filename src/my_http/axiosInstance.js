import axios from 'axios';

let key = localStorage.getItem('paddock_gears_key');

export const MY_HTTP = axios.create({
    baseURL: 'http://127.0.0.1:8000/',
    // baseURL: 'https://paddock-backend.herokuapp.com/',
    headers: {
        Authorization: `Bearer ${key}`
    }
})