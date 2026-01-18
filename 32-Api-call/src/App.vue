<script setup>
import { onMounted, reactive } from 'vue';

  const users = reactive([
  ]);

  // there are 2 ways to call an API
  // 1. using fetch

  // onMounted(() => {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(Response => Response.json())
  //     .then(data => {
  //       data.forEach(user => {
  //         users.push(user);
  //       });
  //     })
  //     .catch(error => {
  //       console.error('Error fetching users:', error);
  //     });
  // });


  // 2. using axios
  import axios from 'axios';
  onMounted(async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      response.data.forEach(user => {
        users.push(user);
      });
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  });
</script>

<template>
  <div class="container">
    <h1>API Call Example</h1>
    <div class="row g-2">
      <div class="col-6 col-md-4 col-lg-3" v-for="(user, index) in users" :key="index">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{ user.name }}</h5>
            <p class="card-text">
              {{ user.email }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
