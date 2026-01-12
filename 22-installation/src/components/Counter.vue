<template>
  <div>
    <button @click="count++">{{ count }} Clicked</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
    const count = ref(0);
</script>
