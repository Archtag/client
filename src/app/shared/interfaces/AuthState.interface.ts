export interface IAuthState {
    isAuthenticated: boolean;
    user: IAuthStateUser | null;
    token: string;
    refreshToken: string;
}

export interface IAuthStateUser {
    id: string;
    email: string;
    full_name: string;
}