<script setup>
import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref } from 'vue';
import Counter from './Counter.vue';

onBeforeMount(() => {
  console.log('onBeforeMount called from App.vue');
});

onMounted(() => {
  console.log('onMounted called from App.vue');
});

onBeforeUpdate(() => {
  console.log('onBeforeUpdate called from App.vue');
});

onUpdated(() => {
  console.log('onUpdated called from App.vue');
});

onBeforeUnmount(() => {
  console.log('onBeforeUnmount called from App.vue');
});

onUnmounted(() => {
  console.log('onUnmounted called from App.vue');
});

const count = ref(0);
</script>

<template>
  <div>
    <h1>Counter count: {{ count }}</h1>
    <button @click="count++">Increase</button>
    <button @click="count--">Decrease</button>
    <Counter v-if="count > 0">
      <h4>Parent slot from App.vue</h4>
      <template v-slot:childSlot>
        <p>Count is positive!</p>
      </template>
    </Counter>
  </div>
</template>

<style scoped>

</style>
