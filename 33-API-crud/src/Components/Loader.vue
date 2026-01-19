<template>
    <div class="table-loader"></div>
</template>

<style scoped>
    .table-loader {
  width: 48px;
  height: 48px;
  border: 5px solid #dee2e6;
  border-top-color: #0d6efd;
  /* Bootstrap primary */
  border-radius: 50%;
  animation: spin 0.9s linear infinite;
  margin: 0 auto;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>