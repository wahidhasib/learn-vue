<template>
  <div class="container mt-5">
    <h1 class="">Welcome to Your Vue.js App</h1>
    <div class="row">
      <div class="col-12">
        <div class="card p-0">
          <div class="card-header">
            <h2 class="card-title">Posts CRUD</h2>
          </div>
          <div class="card-body p-0">
            <table class="table table-striped table-hover table-info table-bordered mb-0">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Title</th>
                  <th scope="col">Content</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                <!-- Loading row -->
                <tr v-if="posts.loading">
                  <td colspan="4" class="text-center py-5">
                    <Loader></Loader>
                    <p class="mt-3 text-muted">Loading posts...</p>
                  </td>
                </tr>

                <!-- Data rows -->
                <tr v-for="post in posts.list" :key="post.id">
                  <th scope="row">{{ post.id }}</th>
                  <td>{{ post.title }}</td>
                  <td>{{ post.content }}</td>
                  <td>
                    <button class="btn btn-sm btn-primary me-2">
                      <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button class="btn btn-sm btn-danger">
                      <i class="fa-solid fa-trash"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import { onMounted, reactive } from 'vue';

// Define the posts data
const posts = reactive({
  list: [],
  loading: false,
});

// Fetch posts from the API
onMounted(() => {
  // Call the fetchPosts function here
  fetchPosts();
});

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function fetchPosts() {
  try {
    posts.loading = true;

    // ⏳ simulate delay
    await delay(2000);

    const response = await axios.get('http://localhost:3000/posts');
    posts.list = response.data;

  } catch (error) {
    console.error('Error fetching posts:', error)
  } finally {
    // ✅ runs at the correct time
    posts.loading = false
  }
}
</script>