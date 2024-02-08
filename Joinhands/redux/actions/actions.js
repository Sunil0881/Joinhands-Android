export const setUserCredentials = (credentials) => {
  return {
    type: 'SET_USER_CREDENTIALS',
    payload: credentials,
  };
};
