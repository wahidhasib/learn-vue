<script setup>
import { reactive, ref } from 'vue';
import AddComponent from './components/AddComponent.vue';
import Products from './components/Products.vue';

  const authorName = ref("Bd Stall");
  const products = reactive([
    {
      name:"Headphone",
      category: "Electronics",
      quantity: 500,
      isPublished: true,
    },
    {
      name:"Phone Case",
      category: "Phone Accessories",
      quantity: 100,
      isPublished: true,
    },
    {
      name:"T-shirt",
      category: "Fashion",
      quantity: 250,
      isPublished: false,
    },
    {
      name:"Poem Books",
      category: "Books",
      quantity: 200,
      isPublished: false,
    },
  ]);

  function onUpdateActive(dataFromChild) {
    console.log(`${dataFromChild.status} is updated to ${!dataFromChild.status} in ${dataFromChild.name}`);
    return !dataFromChild.status;
  }

  function addProduct(newProduct) {
    newProduct.isPublished = false;
    products.push(newProduct);
    console.log("product added!");
  }
</script>

<template>
  <div class="container mt-5">
    <div class="row mx-3">
      <!-- Add component -->
      <div class="col-12">
        <AddComponent @new-product="addProduct"></AddComponent>
      </div>

      <div class="col-12">
        <div class="input-group">
          <span class=" input-group-text">Test</span>
          <input type="text" v-model="authorName" placeholder="Enter text to check" class="form-control">
        </div>
      </div>

      <div class="col-12 mt-2" v-for="product in products" :key="product.id">
        <Products 
        :name="product.name"
        :category="product.category"
        :isPublished="product.isPublished"
        :quantity="product.quantity"
        :authorName="authorName"
        @active-update="product.isPublished = onUpdateActive($event)"
        ></Products>
      </div>
    </div>
  </div>
</template>