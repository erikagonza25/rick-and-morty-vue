<template>
    <router-view></router-view>
</template>

<script>

import Home from './views/Home.vue'
import InfoCharacter from './views/InfoCharacter.vue'
export default {
  name: 'App',
  components: {
    Home,
    InfoCharacter
  },
};
</script>

<style lang="scss">
:root {
  --background-card: #3C3E44;
  --text-white: #FFFFFF;
  --text-gray: #c0c0c0;
  --text-orange: #FF9800;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  background-image: url('./assets/rick-y-morty.jpg');
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-color: #000;
  color: var(--text-white);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
</style>