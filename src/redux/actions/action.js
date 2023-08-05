import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';


export const fetchPosts = () => async (dispatch) => {
  try {
    const response = await axios.get(API_URL);
    dispatch({ type: 'FETCH_POSTS_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'FETCH_POSTS_FAILURE', payload: error.message });
  }
};
