
<template>
    <div style="margin-top: 10px;">
        <div class="login-class">
            <div v-if="isError">
                <span>Invalid userid or password</span>
            </div>
            <div>
                <label for="userid">Username: </label>
                <input type="text" autocomplete="off" id="userid" v-model="inputs.username"/>
            </div>
            <div>
                <label for="pass">Password: </label>
                <input type="password" id="pass" v-model="inputs.password"/>
            </div>
            <div>
                <button type="submit" @click.prevent="onSubmit()">Submit</button>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
    import { reactive, ref } from 'vue';
    import { useLogin } from '../composables/useLogin';
import '../styles/login.scss';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { RootState } from '../store/types';
const { validateLogin } = useLogin();
const router = useRouter();
const store = useStore<RootState>();
let isError = ref(false);
    const inputs = reactive({
        username: null,
        password: null
    });
    async function onSubmit() {
        isError.value = false;
        const response = await validateLogin(inputs);
        if (!response) {
            isError.value = true;
            return;
        }
        store.commit('setAuthState', { isLoggedIn: true, token: 'abc', msg: 'OK' })
        router.push('/')
        return;
    }
</script>