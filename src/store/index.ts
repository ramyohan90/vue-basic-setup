import Vuex, { StoreOptions } from 'vuex';
import { AuthStateInit, RootState } from './types';

const store: StoreOptions<RootState> = {
    state: {
        authState: AuthStateInit
    },
    getters: {
        getLoggedInState(state) {
            return state.authState.isLoggedIn;
        }
    }
}

export default new Vuex.Store(store);