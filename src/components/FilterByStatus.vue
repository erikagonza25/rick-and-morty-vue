<template>
  <ul class="nav nav-underline justify-content-center filter">
    <li class="nav-item item">
      <a :class="{ 'active': selectedFilter === '' }" class="nav-link" @click="filter('')" href="#">All</a>
    </li>
    <li class="nav-item item">
      <a :class="{ 'active': selectedFilter === 'Alive' }" class="nav-link" @click="filter('Alive')" href="#">Alive</a>
    </li>
    <li class="nav-item item">
      <a :class="{ 'active': selectedFilter === 'Dead' }" class="nav-link" @click="filter('Dead')" href="#">Dead</a>
    </li>
    <li class="nav-item item">
      <a :class="{ 'active': selectedFilter === 'unknown' }"  class="nav-link" @click="filter('unknown')" href="#">Unknown</a>
    </li>
  </ul>
</template>

<script>
import {useStore} from 'vuex'
import { ref, computed, watch } from 'vue'
export default {
  setup(){
    const store = useStore();
    const selectedFilter = ref('');

    const storeStatus = computed(() => {
      return store.state.status;
    });

    watch(storeStatus, () => {
      selectedFilter.value = storeStatus.value
    });

    const filter = ((status) => {
      store.dispatch('filterByStatus', { status, page: 1 })
      selectedFilter.value = status
    })

    return {
      filter,
      selectedFilter
    }
  }
}
</script>

<style lang="scss">
.filter {
  width: 400px;
  padding: 0;
  margin: 0 auto;
  border-radius: 5px;
  background-color: RGBA(var(--bs-dark-rgb), var(--bs-bg-opacity, 1));
  .item {
    padding: 0.5rem;
    text-align: center;
    font-size: 18px;
  }
}
.nav-link {
  color: #fff !important;
}
.nav-link:hover, .nav-link:focus, .active {
  color: rgb(168, 80, 168) !important;
}

@media (min-width:320px) and (max-width:768px) {
.filter {
  width: initial;
}
}
</style>