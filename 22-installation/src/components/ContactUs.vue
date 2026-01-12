<template>
    <div>
        <h1>Contact Us</h1>
        <p>{{ email }}</p>
    </div>
</template>

<script setup>
    import { ref } from 'vue';

    const email = ref("hello@examplec.com");
</script>