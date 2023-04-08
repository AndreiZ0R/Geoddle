import axios from "axios";

const baseURL = 'http://localhost:3001';

const endp = `${baseURL}/endpoint`;


export const getAllPersons = () => {
    return axios.get(`${endp}/all`).then(response => response.data);
};