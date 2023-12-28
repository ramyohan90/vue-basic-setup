import Vuex, { StoreOptions } from 'vuex';
import { AuthState, AuthStateInit, RootState } from './types';

const store: StoreOptions<RootState> = {
    state: {
        authState: AuthStateInit
    },
    getters: {
        getLoggedInState(state) {
            return state.authState.isLoggedIn;
        }
    },
    mutations: {
        setAuthState(state, payload: AuthState) {
            console.log('setAuthState...')
            state.authState = payload;
        }
    }
}

export default new Vuex.Store(store);