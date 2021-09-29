import axios from "axios"
import * as ActionTypes from "../actionTypes"

export const fetchPosts = () => async (dispatch, getState) => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts`
    );
    dispatch({
        type: ActionTypes.FETCH_POSTS_REQUEST,
        payload: response.data
    })
}
