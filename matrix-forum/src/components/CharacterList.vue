<script>
export default {
    props: {
        characters: {
            type: Array,
            required: true
        }
    },
    data: () => ({
        newCharacter: { name: '', age: 33 },
        characterError: false,
    }),
    computed: {
        isAgentOnline() {
            return this.characters.find(el => el.isOnline === true && el.name === 'Smith') ? true : false;
        }
    },
    methods: {
        changeAge(index, event) {
            const character = this.characters.find((element, idx) => idx === index);

            character.age = event.target.value;
        },
        addNewCharacter() {
            if (this.newCharacter.name.length === 0) {
                return;
            }
            const found = this.characters.find((el) => el.name === this.newCharacter.name);
            if (!found) {
                //this.characters.push(this.newCharacter);
                this.newCharacter = { name: '', age: 33, isSuperUser: false };
                this.characterError = false;
            } else {
                this.characterError = true;
            }
        },
    },
};</script>

<template>
    <p v-if="characters.length === 0">There is no characters</p>
    <ul v-else>
        <li v-for="(character, index) in characters" :key="`character-${index}`">
            <p>{{ character.name }} {{ character.age }}</p> <input type="number" :value="character.age"
                @input="changeAge(index, $event)"> <input type="checkbox" v-model="character.isOnline">
            <br>
            <!--<button type="button" v-if="!hasLike(character.name)" @click="addLike(index)">Like</button>
            <button type="button" v-else @click="deleteLike(index)">Dislike</button>-->
            <br>
            <span>Cats age: {{ (character.age - 2) * 4 + 24 }}</span>
        </li>
    </ul>
    <input type="text" v-model="newCharacter.name" @keyup.enter="addNewCharacter"><button type="button"
        @click="addNewCharacter">Add</button>
    <p v-if="characterError">This character already exist</p>
    <p v-if="isAgentOnline">Agent is online</p>
</template>