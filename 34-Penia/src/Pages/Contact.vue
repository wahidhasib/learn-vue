<template>
    <div>
        <h1>Contact Page</h1>
        <p>Max health is: {{ gameStore.maxHealth }}</p>

    <input v-model="gameStore.maxHealth" type="text" />
    </div>
</template>

<script setup>
import { useGameStore } from '@/stores/gameStore';

    const gameStore = useGameStore();
</script>