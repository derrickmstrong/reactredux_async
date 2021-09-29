import axios from 'axios';
import * as ActionTypes from '../actionTypes';

export const fetchPosts = () => async (dispatch, getState) => {
  dispatch({
    type: ActionTypes.FETCH_POSTS_REQUEST,
  });

  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts`
    );
    dispatch({
      type: ActionTypes.FETCH_POSTS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: ActionTypes.FETCH_POSTS_FAILURE,
      error: error,
    });
  }
};
