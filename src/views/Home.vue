
<template>
    <div>
        Home component
    </div>
</template>
<script lang="ts" setup>
import { onBeforeMount } from 'vue';
    onBeforeMount(() => {
        console.log('On before mounts')
    })
</script>