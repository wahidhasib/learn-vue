<template>
    <div>
        <div class="card mb-3">
            <div class="card-header">
                <h5 class="card-title">Add Product</h5>
            </div>
            <div class="card-body">
                <form @submit.prevent="handleSubmit(newProduct)">
                    <div class="row">
                        <div class="col-4 p-0">
                            <input type="text" v-model="newProduct.name" class="form-control" placeholder="Name...">
                        </div>
                        <div class="col-4 p-0">
                            <input type="text" class="form-control" v-model="newProduct.category"
                                placeholder="Category...">
                        </div>
                        <div class="col-4 p-0">
                            <input type="number" v-model.number="newProduct.quantity" class="form-control"
                                placeholder="Quantity...">
                        </div>
                        <div class="form-group p-0 mt-2">
                            <button type="submit" class="btn btn-primary">Add Product</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue';

const emit = defineEmits(['new-product']);

function handleSubmit() {
    // ✅ send a COPY (important)
    emit('new-product', { ...newProduct });

    // ✅ reset automatically
    Object.assign(newProduct, defaultProduct());
}

const defaultProduct = () => ({
    name: "",
    category: "",
    quantity: null, // ✅ number
});

const newProduct = reactive(defaultProduct());

</script>