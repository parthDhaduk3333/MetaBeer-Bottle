import axios from 'axios';

const api = axios.create({
    baseURL:"https://api.metabeerbottle.com",
    headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
})

export const whitelist = (data) => api.post('/whitelist',data);