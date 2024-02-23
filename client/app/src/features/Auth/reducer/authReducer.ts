import type { StateAuth } from '../type';
import type { Action } from './actionType';

const init = { user: null, message: '' };
const authReducer = (state: StateAuth = init, action: Action): StateAuth => {
  switch (action.type) {
    case 'auth/registration':
      if (action.payload.message === 'confirm') {
        return { ...state, user: action.payload.user };
      }
      return { ...state, message: action.payload.message };

      case "auth/login" :
    
      if (action.payload.message === 'confirm') {
        return { ...state, user: action.payload.user };
      }
      return { ...state, message: action.payload.message };
       
      case 'auth/user':

      return {
        ...state,
        user:action.payload
      }

      case 'score/user':

      return {
        ...state,
        user: {...state.user, score: action.payload }
      }

    default:
      return state;
  }
};
export default authReducer;
