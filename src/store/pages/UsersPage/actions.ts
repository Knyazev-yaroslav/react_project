import { IUsers } from '../../../interfaces/IUsers';
import { ISetUsersDataAction, ICreateUserAction } from './interfaces';

export const SET_USERS_DATA = 'SET_USERS_DATA';

export const setUsersDataAction = (payload: IUsers[]): ISetUsersDataAction => {
  return { type: SET_USERS_DATA, payload };
};

export const CREATE_USER = 'CREATE_USER';

export const createUserAction = (payload: IUsers): ICreateUserAction => {
  return { type: CREATE_USER, payload };
};
