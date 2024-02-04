const initialState = {
    email: '',
    password: '',
  };
  
  const credentialsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_CREDENTIALS':
        return {
          ...state,
          email: action.payload.email,
          password: action.payload.password,
        };
      case 'CLEAR_CREDENTIALS':
        return initialState;
      default:
        return state;
    }
  };
  
export default credentialsReducer;
  