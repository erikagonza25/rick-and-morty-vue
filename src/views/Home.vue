<template>
  <div class="mb-4 container-title">
    <h1 class="text-light">Exploring the Multiverse</h1>
    <small class="text-light mt-1">Rick and Morty Characters</small>
  </div>
  <div class="container mt-4">  
    <FilterByStatus/>
    <FilterByName/>
    <ListCharacters/>
  </div>
</template>

<script>
import ListCharacters from '../components/ListCharacters.vue'
import FilterByStatus from '../components/FilterByStatus.vue'
import FilterByName from '../components/FilterByName.vue'
export default {
    name: 'Home',
    components: {
        ListCharacters,
        FilterByStatus,
        FilterByName
    },

}
</script>

<style>
.container-title {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: RGBA(var(--bs-dark-rgb), var(--bs-bg-opacity, 0.7));
  padding: 0.4rem;
  margin: 0 auto;
}
h1 {
  text-align: center;
  font-size: 30px !important;
  margin: 0;
}

@media (min-width:320px) and (max-width:768px) {
.container-title {
  width: initial;
}
}
</style>