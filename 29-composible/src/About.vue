<template>
    <div>
        <h1>Counter from About</h1>
        <p>Clicked {{ count }}</p>

        <button @click="increment">Increment</button>
        <button @click="decrement">Decrement</button>
    </div>
</template>

<script setup>
  import { useCounter } from './composibles/useCounter';

    const { count, increment, decrement } = useCounter(20, 5);

    // If I use it here, I can be able to use it in the template. And also they manage their own state.
</script>