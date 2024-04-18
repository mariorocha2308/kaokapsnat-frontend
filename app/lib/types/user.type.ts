export interface User {
  nickname: string,
  telephone: string,
  keypass: string
}

export interface ServerResponse {
  message: string,
  status_code: Number,
  data: any
}