<template>
    <div>
        <h1>Contact Us</h1>
        <p>Email: {{ email }}</p>
        <p>phone: {{ number }}</p>

        <button @click="count++">Clicked {{ count }} Times</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';

    const props = defineProps(
        {
            counter: Number,
            email: String,
            number: Number,
        }
    );

    const count = ref(props.counter ?? 0);
</script>