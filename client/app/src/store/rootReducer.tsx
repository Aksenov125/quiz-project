import { combineReducers } from 'redux';
import authReducer from '../features/Auth/reducer/authReducer';
import themesReducer from '../features/Quiz/redux/quizReducer';

const rootReducer = combineReducers({
  authState: authReducer,
  initialThemeState: themesReducer,
});

export default rootReducer;
