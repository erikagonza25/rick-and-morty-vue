<template>
  <div class="d-flex justify-content-center mt-3 align-items-center">
    <div class="search">
      <input 
        type="text" 
        class="form-control" 
        id="nameCharacter" 
        placeholder="Search by Name..." 
        v-model="name"
        @keyup="filter()"
      >
      <div class="absolute-refresh">
        <button type="button" class="btn btn-dark remove-background" @click="clean()">
          <img src="../assets/refresh.png" alt="Icono para refrescar" class="img-refresh">
        </button>
      </div>
   </div>
  </div> 
</template>

<script>
import {ref} from 'vue'
import {useStore} from 'vuex'
export default {
  setup(){
    const store = useStore();
    const name = ref('')

    const filter = () => {
      store.dispatch('filterByName', { name: name.value, page: 1 });
    }
    const clean = () => {
      name.value = ''
      store.dispatch('cleanFilters');
    }
    return{
      name, filter, clean
    }
  }
}
</script>

<style lang="scss">
.search {
  width: 40%;
  position: relative;
}
.absolute-refresh{
  position: absolute;
  top: -8px;
  right: -70px;
}
.img-refresh {
  width: 45px;
}
.remove-background {
  background: none !important;
  border: none !important;
  transition: transform 200ms ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
}
@media (min-width:320px) and (max-width:768px) {
.search {
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.absolute-refresh {
  position: initial;
}
}
</style>