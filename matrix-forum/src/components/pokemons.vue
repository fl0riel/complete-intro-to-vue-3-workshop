<script setup>
import {ref, computed, reactive} from 'vue';

const state = reactive({
    pokedeks: []
})
const title = ref('tOto');
state.pokedeks = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151").then((response) => response.json());
const pokemonsCount = computed(() => {
    return state.pokedeks.length;
})
function handleChangeTitle() {
    title.value = `${title.value}1`;
}

</script>

<template>
    <p>{{ title }}</p>
    <button @click="handleChangeTitle">Click</button>
    <p>{{ pokemonsCount }}</p>
    <p>Pokemons:</p>
    <div> {{ state.pokedeks }}</div>
</template>