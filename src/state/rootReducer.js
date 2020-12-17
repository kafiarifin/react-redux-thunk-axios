import contentReducer from './contentReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    contents: contentReducer
});

export default rootReducer;