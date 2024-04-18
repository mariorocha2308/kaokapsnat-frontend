import { ServerResponse, User } from './lib/types/user.type';

export const API = {
  authentication: {
    login: async (content: User) => {
      console.log(content)
      return fetch(`${process.env.API_URL_SERVERLESS}/auth/login`, {
        method: "POST",
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(content)
      })
      .then(response => response.json())
      .then((result: ServerResponse) => result)
    },
    register: async (content: User) => {
      return fetch(`${process.env.API_URL_SERVERLESS}/auth/register`, {
        method: "POST",
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(content)
      })
      .then(response => response.json())
      .then((result: ServerResponse) => result)
    }
  }
}