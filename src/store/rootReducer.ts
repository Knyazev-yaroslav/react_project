import { combineReducers } from 'redux';
import { UsersReducer } from './pages/UsersPage/reducer';

const reducers = {
  users: UsersReducer,
};

export const rootReducer = combineReducers(reducers);
