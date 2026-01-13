<template>
    <div class="card">
        <div class="card-header d-flex align-items-center justify-content-between" :class="{'bg-info': isFavourite}">
            <h4 class="card-title">Contact Us</h4>
            <input type="checkbox" :checked="isFavourite" @change="toggleFavourite">
             <!-- MyComponent -->
            <!-- <button class="btn" :class="{'btn-success': !isFavourite, 'btn-danger': isFavourite}" @click="toggleFavourite">
                {{ isFavourite ? 'Remove' : 'Add to' }}
            </button> -->
        </div>
        <div class="card-body">
            <h4>Name: <span>{{ name }}</span></h4>
            <h4>Phone: <span>{{ phone }}</span></h4>
            <h4>Favourite: <span>{{ isFavourite }}</span></h4>
        </div>
        <div class="card-footer">
            <p>Full description of {{ ownerName }}</p>
        </div>
    </div>
</template>

<script setup>
    const emit = defineEmits(['favourite']);

    function toggleFavourite() {
        emit("favourite");
    }

    const props = defineProps({
        name: String,
        phone: Number,
        isFavourite: Boolean,
        ownerName: String,
    }); 
</script>