<script setup>
import { reactive, ref } from 'vue';
import Contact from './components/Contact.vue';

const ownerName = ref("hello@gmail.com");
const contacts = reactive([
  {
    name: "Hasib",
    phone: 5684586,
    ownerName: ownerName.value,
    isFavourite: true,
  },
  {
    name: "Wahid",
    phone: 5684586,
    ownerName: ownerName.value,
    isFavourite: false,
  },
  {
    name: "Naim",
    phone: 525564585,
    ownerName: ownerName.value,
    isFavourite: true,
  },
])

</script>

<template>
  <div class="container mt-5">
    <!-- to pass any varibale's data we need to bind it -->
    <!-- <Contact :email="email" :counter="counter" :number="number"></Contact> -->


    <div class="row">
      <div class="col-12">
        <input type="text" v-model="ownerName" class="form-control">
      </div>
    </div>

    <div class="row mt-3">
      <div class="col-12 mt-2" v-for="contact in contacts" :key="contact.id">
        <Contact 
        :name="contact.name"
        :phone="contact.phone"
        :isFavourite="contact.isFavourite"
        :ownerName="ownerName"
        @favourite="contact.isFavourite = !contact.isFavourite"
        ></Contact>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
