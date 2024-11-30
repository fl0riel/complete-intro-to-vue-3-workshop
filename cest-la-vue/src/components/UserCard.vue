<script setup>
defineProps({
    user: {
        type: Object,
        required: true
    }
})
</script>

<template>
    <li>{{ user.name }}: {{ user.email }}</li>
</template>