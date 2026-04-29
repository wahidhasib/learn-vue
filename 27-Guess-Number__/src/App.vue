<script setup>
import { reactive, ref } from 'vue';
import Card from './components/Card.vue';

const maxNumber = ref();

const cards = reactive([
  {
    maxNumber: 100,
  }
  
]);
</script>

<template>
  <div class="container mt-5">
    <div class="row mx-3">
      <div class="col-12">
        <!-- <AddCard></AddCard> -->
         <form @submit.prevent="submitFunction">
          <div class="row">
            <div class="col-8">
              <input type="number" v-model.number="maxNumber" class="form-control" placeholder="Max number">
            </div>
            <div class="col-4">
              <button class="btn btn-primary">Generate</button>
            </div>
          </div>
        </form>
      </div>

      <div class="col-12 mt-2" v-for="(card, index) in cards" :key="index">
        <Card :maxNumber="card.maxNumber">
          <h1>Learn about slot</h1>
          <template v-slot:testSlot>
            <h6>learn about child slot</h6>
          </template>
        </Card>

      </div>
    </div>
  </div>
</template>