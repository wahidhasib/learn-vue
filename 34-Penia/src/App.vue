<script setup>
import Header from './Layout/Header.vue';

</script>

<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-12">
        <Header></Header>

        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
