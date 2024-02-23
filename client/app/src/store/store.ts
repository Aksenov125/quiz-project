import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import  rootReducer  from './rootReducer';

// контейнер состояний — store
export const store = createStore(rootReducer, composeWithDevTools());

// тип для контейнера состояний — store,
// формируется с помощью утилиты ReturnType, которая получает тип возвращаемого значения
export type RootState = ReturnType<typeof store.getState>;