<template>
    <div>
        <div v-if="route.params.id">
            <h1>Product Details Component</h1>
            <p>Product ID: {{ route.params.id }}</p>
        </div>
        <div v-else>
            <h1>No Product ID Provided</h1>
        </div>

        <div v-if="route.params.category">
            <p>Category: {{ route.params.category }}</p>
        </div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
</script>