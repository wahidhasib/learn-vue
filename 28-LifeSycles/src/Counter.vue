<template>
    <div>
        <slot name="childSlot"></slot>
        <h1>Counter from Counter.vue</h1>
        <button @click="count++">Count: {{ count }}</button>

        <slot></slot>

    </div>
</template>

<script setup>
import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref } from 'vue';

onBeforeMount(() => {
    console.log('onBeforeMount called from Counter.vue');
});

onMounted(() => {
    console.log('onMounted called  from Counter.vue');
});

onBeforeUpdate(() => {
    console.log('onBeforeUpdate called  from Counter.vue');
});

onUpdated(() => {
    console.log('onUpdated called  from Counter.vue');
});

onBeforeUnmount(() => {
    console.log('onBeforeUnmount called  from Counter.vue');
});

onUnmounted(() => {
    console.log('onUnmounted called  from Counter.vue');
});

const count = ref(0);
</script>

<style scoped>
h1 {
    color: teal;
}
</style>