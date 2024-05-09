<template>
  <div class="card text-bg-dark character">
    <div class="card-body">
      <h5 class="card-title">{{character.name}}</h5>
      <p class="card-text">
        <span 
          class="badge rounded" 
          :class="
            character.status == 'Alive' ? 'text-bg-success' :
            character.status == 'Dead' ? 'text-bg-danger' :
            'text-bg-secondary'"
            >{{character.status}} - {{character.species}}
        </span>
      </p>
      <p class="card-text"><strong>Origin:</strong> {{character.origin.name}}</p>
      <p class="card-text"><strong>Location:</strong> {{character.location.name}}</p>
    </div>
    <img :src="character.image" class="card-img-bottom" :alt="character.name">
  </div>
</template>

<script>
export default {
  props: ['character']

}
</script>

<style lang="scss">
.character {
  background-color: var(--background-card);
  border-radius: 20px;
  box-shadow: 0 0 10px 1px var(--background-body);
  overflow: hidden;
  cursor: pointer;
  transition: transform 200ms ease-in-out;
  height: 100%;
  &:hover {
    transform: scale(1.05);
    h3 {
      color: var(--text-orange);
    }
  }
  span {
    color: var(--text-gray);
  }
  h3 {
    margin-bottom: 0.5rem;
  }
}
@media (min-width:320px) and (max-width:768px) {
.character {
  margin: 1rem;
}
}
</style>