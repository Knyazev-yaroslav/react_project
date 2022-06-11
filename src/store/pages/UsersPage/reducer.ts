import { IUsers } from '../../../interfaces/IUsers';
import { CREATE_USER, SET_USERS_DATA } from './actions';
import { IUsersState, UsersReducerAction } from './interfaces';

const initialState: IUsersState = {
  usersData: [],
  loading: false,
  error: null,
};

export const UsersReducer = (
  state: IUsersState = initialState,
  action: UsersReducerAction
): IUsersState => {
  switch (action.type) {
    case CREATE_USER:
      return { ...state, usersData: [...state.usersData, action.payload as IUsers] };
    case SET_USERS_DATA:
      return { ...state, usersData: action.payload as IUsers[] }; // кастинг типов
    default:
      return state;
  }
};
