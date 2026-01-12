<script setup>
import ContactUs from './components/ContactUs.vue';


  const person = {
    name: "Hasib",
    age: 25,
  }

</script>

<template>
  <div>
    <h1>Hello {{ person.name }},</h1>
    <h2>He is {{ person.age }} years old</h2>

    <h3>Hi</h3>
    <button-counter/>

    <ContactUs :person="person" email="test@gmail.com"/>
  </div>
</template>