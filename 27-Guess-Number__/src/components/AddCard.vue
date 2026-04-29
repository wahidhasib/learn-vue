<template>
    <form @submit.prevent="submitFunction">
        <div class="row">
            <div class="col-8">
                <input type="number" v-model="maxNumber" class="form-control" placeholder="Max number">
            </div>
            <div class="col-4">
                <button class="btn btn-primary">Generate</button>
            </div>
        </div>
    </form>
</template>

<script setup>
</script>