const initialState = {
    posts: [],
    error: null,
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_POSTS_SUCCESS':
        return { ...state, posts: action.payload, error: null };
      case 'FETCH_POSTS_FAILURE':
        return { ...state, error: action.payload };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  