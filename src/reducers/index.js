import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';
// this imports reducer from redux-form and save it as variable formReducer
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer
});

export default rootReducer;
