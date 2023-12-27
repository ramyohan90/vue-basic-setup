
export interface AuthState {
    isLoggedIn: boolean;
    token: string | null;
    msg: string;
}

export const AuthStateInit: AuthState = {
    isLoggedIn: false,
    token: null,
    msg: 'No Auth.'
}

export interface RootState {
    authState: AuthState
}