<script setup>
import { ref } from 'vue';

const username = ref();
const password = ref();

async function login() {
    await fetch('http://localhost:5173/api/login', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username.value,
            password: password.value
        })
    });
} 

</script>

<template>
    <div>Login</div>

    <form>
        <input type="text" v-model="username"> <br />
        <input type="text" v-model="password"> <br />
        <button @click="login">登录</button>
    </form>
</template>

<style scoped>

</style>
