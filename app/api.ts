import { setCookie } from 'cookies-next';

export const API = {
  authentication: {
    login: async (content: { phone: number, password: string }) => {
      return fetch(`${process.env.API_URL_SERVERLESS}/auth/login`, {
        method: "POST",
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          phone: Number(content.phone),
          password: content.password
        })
      })
      .then(response => response.json())
      .then(result => {
        setCookie('isAuthenticated', result)
      })
    },
    register: async (content: { name: string, phone: number, password: string }) => {
      return fetch(`${process.env.API_URL_SERVERLESS}/auth/register`, {
        method: "POST",
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: content.name,
          phone: Number(content.phone),
          password: content.password
        })
      })
      .then(response => response.json())
      .then(result => result)
    }
  }
}