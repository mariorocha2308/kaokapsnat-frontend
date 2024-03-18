import { setCookie } from 'cookies-next';

export const API = {
  authentication: {
    login: async (content: { username: string }) => {
      return fetch(`${process.env.API_URL_SERVERLESS}/auth/login`, {
        method: "POST",
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(content)
      })
      .then(response => response.json())
      .then(result => {
        setCookie('isAuthenticated', result)
      })
    },
    register: async (content: { username: string }) => {
      return fetch(`${process.env.API_URL_SERVERLESS}/auth/register`, {
        method: "POST",
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(content)
      })
      .then(response => response.json())
      .then(result => result)
    }
  }
}