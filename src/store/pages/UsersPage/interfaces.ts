import { IUsers } from '../../../interfaces/IUsers';

export interface IUsersState {
  usersData: IUsers[];
  loading: boolean;
  error: string | null;
}

interface IBaseAction {
  type: string;
}

export interface ISetUsersDataAction extends IBaseAction {
  payload: IUsers[];
}

export interface ICreateUserAction extends IBaseAction {
  payload: IUsers;
}

export type UsersReducerAction = ISetUsersDataAction | ICreateUserAction;
