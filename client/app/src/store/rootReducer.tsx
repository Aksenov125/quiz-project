import { combineReducers } from 'redux';
import authReducer from '../features/Auth/reducer/authReducer';
import themesReducer from '../features/Quiz/redux/quizReducer';
import scoreReducer from '../features/ScoreTable/reducer/scoreReducer';

const rootReducer = combineReducers({
  authState: authReducer,
  initialThemeState: themesReducer,
  scoreState: scoreReducer,
});

export default rootReducer;
