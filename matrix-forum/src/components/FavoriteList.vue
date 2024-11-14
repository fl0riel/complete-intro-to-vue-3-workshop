<script>
export default {
    props: {
        characters: {
            type: Array,
            required: true
        }
    },
    data: () => ({
        favoriteList: [],
    }),
    methods: {
        addLike(index) {
            const characterName = this.characters[index];
            if (characterName) {
                const found = characterName.name;
                if (!this.favoriteList.find((el) => el === found)) {
                    this.favoriteList.push(found);
                }
            }
            return false;
        },
        deleteLike(index) {
            const characterName = this.characters[index];
            if (characterName) {
                const found = characterName.name;
                const foundFavEl = this.favoriteList.find((el) => el === found)
                if (foundFavEl) {
                    const index = this.favoriteList.findIndex(el => el === foundFavEl);
                    this.favoriteList.splice(index, 1);
                }
            }
        },
        hasLike(name) {
            const found = this.favoriteList.find(el => el === name);
            return found ? true : false;
        },
    },
};</script>

<template>
    <p>
        <span v-for="(name, index) in favoriteList" :key="`favorite-${index}`">{{ name }}<span
                v-if="favoriteList.length - 1 !== index">, </span>
        </span>
    </p>
</template>