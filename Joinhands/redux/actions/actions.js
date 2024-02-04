export const setCredentials = (email, password) => ({
    type: 'SET_CREDENTIALS',
    payload: { email, password },
  });
  
  export const clearCredentials = () => ({
    type: 'CLEAR_CREDENTIALS',
  });