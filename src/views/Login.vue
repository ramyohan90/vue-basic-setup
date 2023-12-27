
<template>
    <div style="margin-top: 10px;">
        <div class="login-class">
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
    import { reactive } from 'vue';
    import { useLogin } from '../composables/useLogin';
import '../styles/login.scss';
const { validateLogin } = useLogin();
    const inputs = reactive({
        username: null,
        password: null
    });
    async function onSubmit() {
        validateLogin(inputs);
    }
</script>