<template>
  <div class="container">
    <h1>Rick and Morty</h1>
    <FilterByStatus/>
    <FilterByName/>
    <ListCharacters/>

  </div>
</template>

<script>

import ListCharacters from './components/ListCharacters.vue'
import FilterByStatus from './components/FilterByStatus.vue'
import FilterByName from './components/FilterByName.vue'
export default {
  name: 'App',
  components: {
    ListCharacters,
    FilterByStatus,
    FilterByName
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
  background-image: url('./assets/rick-y-morty.png');
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-color: #000;
  color: var(--text-white);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

h1 {
  text-align: center;
  background: #3c3e44;
    width: 400px;
    margin: 1rem auto;
    border-radius: 5px;
    padding: 1rem;
}
.container {
  width: 980px;
  max-width: 90%;
  margin: 5rem auto;
}
img {
  width: 100%;
}
@media (min-width:320px) and (max-width:768px) {
h1 {  
    width: initial;
}
}
</style>