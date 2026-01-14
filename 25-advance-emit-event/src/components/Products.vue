<template>
    <div class="card">
        <div class="card-header d-flex align-items-center justify-content-between">
            <h5 class="card-title">{{ name }}</h5>
            <div class="form-group">
                <label class=" form-check-label me-1">Active</label>
                <input type="checkbox" @change="activeToggler" :checked="isPublished" class="form-check-input">
            </div>
        </div>
        <div class="card-body mb-0 alert" :class="{'alert-success': isPublished, 'alert-danger': !isPublished}">
            <h4>Category: <span class="fw-bold">{{ category }}</span></h4>
            <p class="mb-1">Quantity: <span class="fw-bold">{{ quantity }}</span></p>
            <p class="mb-1">Status: <span class="fw-bold">{{ isPublished }}</span></p>
        </div>

        <div class="card-footer">
            <p class="mb-1">Authorized by author {{ authorName }}.</p>
        </div>
    </div>
</template>

<script setup>
    const emit = defineEmits(["active-update"]);

    function activeToggler() {
        emit('active-update', {'status': props.isPublished, 'name': props.name});
    }
    
    const props = defineProps(
        {
            name: String,
            category: String,
            isPublished: Boolean,
            quantity: Number,
            authorName: String,
        }
    )
</script>