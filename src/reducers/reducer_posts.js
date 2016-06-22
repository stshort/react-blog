import { FETCH_POSTS, FETCH_SINGLE_POST } from '../actions/index';

const INITIAL_STATE = { all: [], post: null };

export default function(state = INITIAL_STATE, action) {
	switch(action.type) {
		case FETCH_SINGLE_POST:
			// update post to be the new post that we're gonna display
			return { ...state, post: action.payload.data };
		case FETCH_POSTS:
			// return a new state object with all = the action's payload
			return { ...state, all: action.payload.data };
		default:
			return state;
	}
}