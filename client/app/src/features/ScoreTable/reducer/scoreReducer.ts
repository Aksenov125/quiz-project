import { Action } from './actionType';
import { ScoreState } from '../type';

const init = { users: [] };

function scoreReducer(state: ScoreState = init, action: Action): ScoreState {
  switch (action.type) {
    case 'score/init':
      return { ...state, users: action.payload };

    default:
      return state;
  }
}

export default scoreReducer;
