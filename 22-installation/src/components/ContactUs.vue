<template>
    <div>
        <h1>Contact Us</h1>
        <p>{{ person.name }}</p>
        <h5>{{ email }}</h5>
    </div>
</template>

<script setup>
    // import { defineProps } from 'vue';
    
    const props = defineProps({
        email: {
            type: String,
            required: true,
        },
        person: {
            type: Object,
            required: true
        }
    });
</script>