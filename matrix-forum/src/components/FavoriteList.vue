<script>
export default {
    props: {
        favoriteCharacters: {
            type: Array,
            required: true
        }
    }
};</script>

<template>
    <p>
        <span v-for="(name, index) in favoriteCharacters" :key="`favorite-${index}`">{{ name }}<span
                v-if="favoriteCharacters.length - 1 !== index">, </span>
        </span>
    </p>
</template>