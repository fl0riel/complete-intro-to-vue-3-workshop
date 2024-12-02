<script setup>
import { useCounter } from '@/composables/countStore';
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
const counterStore = useCounter();
</script>

<template>
    <h3>Counter</h3>
    <p>Global counter: {{ counterStore.globalCounter }}</p>
    <p>Local counter: {{ counterStore.localCounter }}</p>
    <button type="button" @click="counterStore.incrementGlobalCounter">Global</button>
    <button type="button" @click="counterStore.incrementLocalCounter">Local</button>
    <p>{{ title }}</p>
    <button @click="handleChangeTitle">Click</button>
    <p>{{ pokemonsCount }}</p>
    <p>Pokemons:</p>
    <div> {{ state.pokedeks }}</div>
</template>