const initialState = {
  email: '',
  password: '',
  userType: '', // 'donor' or 'ngo'
};

const credentialsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER_CREDENTIALS':
      return {
        ...state,
        email: action.payload.email,
        password: action.payload.password,
        userType: action.payload.userType,
      };
    default:
      return state;
  }
};

export default credentialsReducer;
