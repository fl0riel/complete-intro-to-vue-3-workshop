<script>
import CharacterList from './components/CharacterList.vue';
import FavoriteList from './components/FavoriteList.vue';
import MafiaAlert from './components/MafiaAlert.vue';

export default {
  components: {
    CharacterList,
    FavoriteList,
    MafiaAlert
  },
  data: () => ({
    characterList: [
      { name: 'Neo', age: 30, isOnline: true, },
      { name: 'Trinity', age: 28, isOnline: false, },
      { name: 'Morpheus', age: 55, isOnline: false, },
      { name: 'Architect', age: 184, isOnline: true, },
      { name: 'Smith', age: 1004, isOnline: true, },
    ],
  }),
};
</script>

<template>
  <CharacterList :characters="characterList"/>
  <FavoriteList :characters="characterList"/>
  <MafiaAlert :characters="characterList"/>
</template>
