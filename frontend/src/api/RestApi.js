import axios from "axios";

const baseURL = 'http://localhost:3001/api';

const usersEndpoint = `${baseURL}/users`;
const questsEndpoint = `${baseURL}/quests`;


export const getUsers = () => {
    return axios.get(usersEndpoint).then(response => response.data);
};

export const getQuests = () => {
    return axios.get(questsEndpoint).then(response => response.data);
}

export const signUpUser = (email, password, username) => {
    const data = {email: email, password: password, username: username};

    return fetch(`${usersEndpoint}/signup`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            return response.json().then(json => json);
        }
        return null;
    });
}

export const logInUser = (email, password) => {
    const data = {email: email, password: password};

    return fetch(`${usersEndpoint}/login`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            return response.json().then(json => json);
        }
        return null;
    });
}