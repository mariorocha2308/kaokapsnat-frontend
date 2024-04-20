import { ServerResponse, User } from './lib/types/user.type';

export const API = {
  authentication: {
    login: async (content: User) => {
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
  },
  contacts: {
    getContacts: async () => {
      return fetch(`${process.env.API_URL_SERVERLESS}/user/collection`)
      .then(response => response.json())
      .then((result: ServerResponse) => {
        return result.data.users?.map((user: User) => {
          return {
            _id: user._id,
            nickname: user.nickname,
            telephone: user.telephone
          }
        })
      })
    }
  }
}