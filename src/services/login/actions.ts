export const SET_EMAIL = 'SET_EMAIL';
export const setEmail = (value:string) => {
  return {
    type: SET_EMAIL,
    payload: value
  }
}

export const SET_PASSWORD = 'SET_PASSWORD';
export const setPassword = (value:string) => {
  return {
    type: SET_PASSWORD,
    payload: value
  }
}