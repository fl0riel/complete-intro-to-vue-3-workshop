<script setup>
import { ref, computed } from 'vue';
const email = ref('');
const mainBgColor = computed(() => {
  if(email.value.length > 10) {
    return 'red';
  } else if (email.value.length > 6) {
    return 'blue';
  } else {
    return 'white';
  }
});

email.value = email.value.length + 1;


const deg = computed(() => {
  const result = email.value.length
  return `${result * 10}deg`;
});


</script>

<template>
  <main :class="$style.main">
    <h1>Login</h1>
    <label for="email">Email</label>
    <input :class="$style.toto" type="email" id="email" v-model="email"/>

    <button>Continue with email</button>
  </main>
</template>

<style module>
.main {
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 320px;
  margin: 0 auto;
  background-color: v-bind(mainBgColor);
}

main h1 {
  margin-top: 10vh;
  margin-bottom: 20px;
}

label {
  margin-bottom: 5px;
}

input[type="email"] {
  padding: 0.5rem;
  margin-bottom: 30px;
}

.toto {
  transform: rotate(v-bind(deg));
}

button {
  border: 1px solid green;
  padding: 10px;
  color: green;
  background-color: rgb(213, 255, 213);
  cursor: pointer;
}
</style>
