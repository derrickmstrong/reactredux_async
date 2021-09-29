import * as ActionTypes from '../actionTypes';
const initState = {
  items: [],
  loading: false,
  error: null,
};
const postReducer = (state = initState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ActionTypes.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        items: action.payload,
        loading: false,
      };
    case ActionTypes.FETCH_POSTS_FAILURE:
      return {
        ...state,
        items: [],
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
export default postReducer;
