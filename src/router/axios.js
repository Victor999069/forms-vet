import axios from 'axios';

export const buscaCepAPI = axios.create({
    baseURL: `https://viacep.com.br/ws/`,
    headers: {
        'Access-Control-Allow-Origin': 'https://viacep.com.br/',
        'Content-Type': 'json'
    }
});
