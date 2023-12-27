import { onMounted } from "vue";


export function useLogin() {
    function getLoginText() {
        return 'Please sign in to continue';
    }

    async function validateLogin(inputs: any) {
        console.log('Validate login');
        console.log(inputs);
        return inputs;
    }
    onMounted(() => {
        console.log('Mounting useLogin composable.')
    })
    return {
        getLoginText,
        validateLogin
    }
}