<template>
    <div class="text-center mt-5">
        <h1 class="text-danger">404 Not Found</h1>
        <p>The page you are looking for does not exist.</p>
    </div>
</template>

<script setup> 
    // debug route information about page url. it should show the unmatched path as an array in params.pathMatch
    import { useRoute } from 'vue-router';
    const route = useRoute();
    console.log(route.params.pathMatch);
</script>