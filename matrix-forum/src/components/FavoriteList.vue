<script setup>
import { useFavoriteList } from '@/composables/useFavoriteList';

const { favoriteList } = useFavoriteList();
</script>

<template>
    <p>
        <span v-for="(name, index) in favoriteList" :key="`favorite-${index}`">{{ name }}<span
                v-if="favoriteList.length - 1 !== index">, </span>
        </span>
    </p>
</template>