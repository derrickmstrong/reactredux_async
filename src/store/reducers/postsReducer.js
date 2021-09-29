import * as ActionTypes from '../actionTypes'
const initState = []
const postReducer = (state = initState, action) => {
    switch(action.type) {
        case ActionTypes.FETCH_POSTS_REQUEST:
            return action.payload;
        default:
            return state;
    }
}
export default postReducer;