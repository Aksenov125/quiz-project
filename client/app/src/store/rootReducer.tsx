import { combineReducers } from 'redux';
import authReducer from '../features/Auth/reducer/authReducer';

const rootReducer = combineReducers({
  authState: authReducer,
});

export default rootReducer;
