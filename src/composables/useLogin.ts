import { onMounted } from "vue";


export function useLogin() {
    function getLoginText() {
        return 'Please sign in to continue';
    }

    async function validateLogin(inputs: any) {
        // Call API.
        if (inputs.username === inputs.password) {
            return true;
        }
        return false;
    }
    onMounted(() => {
        console.log('Mounting useLogin composable.')
    })
    return {
        getLoginText,
        validateLogin
    }
}