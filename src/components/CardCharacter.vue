<template>
  <router-link :to="`/character/${character.id}`" class="none-decoration">
    <div class="card text-bg-dark character" style="width: 20rem; height: 30rem;">
      <div class="card-body d-flex flex-column justify-content-center">
        <h5 class="card-title">{{character.name}}</h5>
        <p class="card-text">
          <span 
            class="badge rounded" 
            :class="
              character.status == 'Alive' ? 'text-bg-success' :
              character.status == 'Dead' ? 'text-bg-danger' :
              'text-bg-secondary'"
              >{{character.status}}
          </span>
        </p>
        <p class="card-text"><strong>Gender:</strong> {{character.gender}}</p>
      </div>
      <img :src="character.image" class="card-img-bottom" :alt="character.name">
    </div>
  </router-link>
</template>

<script>
export default {
  props: ['character']

}
</script>

<style lang="scss">
.character {
  background-color: var(--background-card);
  box-shadow: 0 0 10px 1px var(--background-body);
  overflow: hidden;
  cursor: pointer;
  transition: transform 200ms ease-in-out;
  --bs-card-border-color: none !important;
  height: 100%;
  &:hover {
    transform: scale(1.05);
  }
}
.none-decoration {
  text-decoration: none !important;
}
</style>