import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.openbrewerydb.org/breweries'
});

export default api;