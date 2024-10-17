import { IUser } from './User.inteface';

export interface IAuthState {
  isAuthenticated: boolean;
  user: IUser | null;
  token: string;
  refreshToken: string;
}
