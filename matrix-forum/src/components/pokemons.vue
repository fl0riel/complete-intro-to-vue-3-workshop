<script>
export default {
    async setup() {
        const pokemons = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151").then((response) => response.json());

        return {
            pokemons
        }
    },
}</script>

<template>
    <p>Pokemons:</p>
    <div> {{ pokemons }}</div>
</template>