const initialState = {
    user: null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return {
          ...state,
          user: action.payload,
        };
      // Add other cases for different actions if needed
  
      default:
        return state;
    }
  };
  
  export default authReducer;
  