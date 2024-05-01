<script setup>
import { onMounted } from 'vue';
import axiosInstance from '../utils/axios-instance';
import { Request } from '../utils/request';

onMounted(async () => {
    // const res = await fetch('http://localhost:5173/api/hello');
    // const data = await res.json()
    // console.log('data', data);
    console.log('on ')
    await Request.get('/hello');
})

async function logout() {
    await fetch('http://localhost:5173/api/logout', {
        method: 'delete'
    });
}


</script>

<template>
    <div>Home</div>
    <button @click="logout">退出登录</button>
</template>

<style scoped>

</style>
