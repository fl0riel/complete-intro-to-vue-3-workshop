<script>
import CharacterList from './components/CharacterList.vue';
import FavoriteList from './components/FavoriteList.vue';
import MafiaAlert from './components/MafiaAlert.vue';
import MainLayout from './components/MainLayout.vue';

export default {
  components: {
    CharacterList,
    FavoriteList,
    MafiaAlert,
    MainLayout
  },
  data: () => ({
    characterList: [
      { name: 'Neo', age: 30, isOnline: true, },
      { name: 'Trinity', age: 28, isOnline: false, },
      { name: 'Morpheus', age: 55, isOnline: false, },
      { name: 'Architect', age: 184, isOnline: true, },
      { name: 'Smith', age: 1004, isOnline: true, },
    ],
    favoriteList: [],
  }),
  methods: {
    onNewCharacter(newCharacter) {
      this.characterList.push(newCharacter);
    },
    onAddLike(character) {
      if (character) {
        const found = character.name;
        if (!this.favoriteList.find((el) => el === found)) {
          this.favoriteList.push(found);
        }
      }
      return false;
    },
    onDeleteLike(character) {
      if (character) {
        const found = character.name;
        const foundFavEl = this.favoriteList.find((el) => el === found)
        if (foundFavEl) {
          const index = this.favoriteList.findIndex(el => el === foundFavEl);
          this.favoriteList.splice(index, 1);
        }
      }
    },
    onChangeOnline(payload) {
      const { character, onlineStatus } = payload;
      const found = this.characterList.find((el) => el.name === character.name);
      if (found) {
        found.isOnline = onlineStatus;
      }
    },
  }
};
</script>

<template>
  <MainLayout>
    <template v-slot:header>
      <h1>Matrix revolution</h1>
    </template>
    <template v-slot:main>
      <CharacterList :characters="characterList" :favoriteCharacters="favoriteList" @new-character="onNewCharacter"
        @add-like="onAddLike" @delete-like="onDeleteLike" @changeOnline="onChangeOnline" />
      <FavoriteList :favoriteCharacters="favoriteList" />
    </template>
    <template v-slot:footer>
      <MafiaAlert :characters="characterList" />
    </template>
  </MainLayout>
</template>
