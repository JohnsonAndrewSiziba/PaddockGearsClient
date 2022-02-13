import axios from 'axios';

let key = localStorage.getItem('paddock_gears_key');

export const MY_HTTP = axios.create({
    baseURL: 'http://127.0.0.1:8000/',
    headers: {
        Authorization: `Bearer ${key}`
    }
})