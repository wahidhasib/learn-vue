<script setup>
// Composables in Vue.js are reusable functions that encapsulate reactive state and logic.
// We use composables to extract and share logic between components, promoting code reusability,
// better organization, and separation of concerns. Instead of duplicating state management code
// across multiple components, we can define it once in a composable and import it wherever needed.
// Composables work by leveraging Vue's Composition API, using reactive refs and computed properties
// to manage state. They return an object with the reactive data and functions that components can destructure and use.
// This pattern makes components cleaner and logic more testable.

// If I don't import decrement function here, I can't use it in the template. & I can't getting any error in console.

import About from './About.vue';
import { useCounter } from './composibles/useCounter';

const { count, increment, decrement } = useCounter();

</script>

<template>
  <div>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>

    <p>Clicked {{ count }}</p>

    <!-- Using keep-alive to preserve the state of About component when it's toggled -->
    <keep-alive>
      <About v-if="count > 0"></About>
    </keep-alive>
  </div>
</template>
