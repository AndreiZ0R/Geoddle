import axios from "axios";
import {json} from "react-router-dom";

const baseURL = 'http://localhost:3001/api';

const usersEndpoint = `${baseURL}/users`;
const questsEndpoint = `${baseURL}/quests`;
const answersEndpoint = `${baseURL}/answers`;


export const getUsers = () => {
    return axios.get(usersEndpoint).then(response => response.data);
};

export const getUserById = (id) => {
    return axios.get(`${usersEndpoint}/${id}`).then(response => response.data);
}

export const getUserByUsername = (username) => {
    return axios.get(`${usersEndpoint}/username=${username}`).then(response => response.data);
}

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

export const addQuest = (author, title, description, tokensReward, city) => {
    const data = {
        author: author,
        title: title,
        description: description,
        tokensReward: tokensReward,
        date: Date.now(),
        city: city
    };

    return fetch(questsEndpoint, {
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

export const addAnswer = (questid, answer) => {
    const data = {questid: questid, answer: answer};

    return fetch(answersEndpoint, {
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
    })
}

export const getAnswerByQuestId = (questid) => {
    return axios.get(`${answersEndpoint}/${questid}`).then(response => response.data);
}

export const updateUserTokensByUsername = (username, value) => {
    return fetch(`${usersEndpoint}/username=${username}&value=${value}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            return response.json().then(json => json);
        }
        return null;
    })
}