<script setup>
import Footer from './Layout/Footer.vue';
import Header from './Layout/Header.vue';

</script>

<template>
  <div>
    <Header></Header>
    <!-- Added forward backward functionality -->
    <button @click="$router.go(-1)">Go Back</button>
    <button @click="$router.go(+1)">Go Forward</button>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<style scoped></style>
