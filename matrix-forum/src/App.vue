<script>
import CharacterList from './components/CharacterList.vue';
import FavoriteList from './components/FavoriteList.vue';
import MafiaAlert from './components/MafiaAlert.vue';
import MainLayout from './components/MainLayout.vue';
import Pokemons from './components/pokemons.vue';

export default {
  components: {
    CharacterList,
    FavoriteList,
    MafiaAlert,
    MainLayout,
    Pokemons
  },
  data: () => ({
    characterList: [
      { name: 'Neo', age: 30, isOnline: true, },
      { name: 'Trinity', age: 28, isOnline: false, },
      { name: 'Morpheus', age: 55, isOnline: false, },
      { name: 'Architect', age: 184, isOnline: true, },
      { name: 'Smith', age: 1004, isOnline: true, },
    ]
  }),
  methods: {
    onNewCharacter(newCharacter) {
      this.characterList.push(newCharacter);
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
      <CharacterList :characters="characterList" @new-character="onNewCharacter" @changeOnline="onChangeOnline" />
      <FavoriteList />
    </template>
    <template v-slot:footer>
      <MafiaAlert :characters="characterList" />
      <Suspense>
        <Pokemons />

        <template v-slot:fallback>Loading pokemons...</template>
      </Suspense>
    </template>
  </MainLayout>
</template>
