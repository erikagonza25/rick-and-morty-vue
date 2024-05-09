<template>
  <section>
    <div v-if="!loading">
      <div class="characters">
      <div class="characters__item" v-for="character in characters" :key="character.id">
        <CardCharacter :character="character" />
      </div>
      </div>
      <div v-if="characters" class="pagination">
        <Pagination :currentPage="currentPage" :totalPages="totalPages" @nextPage="nextPage" @prevPage="prevPage"/>
      </div>
      <div v-else>
        <NotFoundPage/>
      </div>
    </div>
    <div v-else>
      <Spinner/>
    </div>
  </section>
</template>


<script>
import { ref, onMounted, computed, watch } from 'vue';
import { useStore } from 'vuex';
import CardCharacter from './CardCharacter.vue';
import Pagination from './Pagination.vue';
import Spinner from './Spinner.vue';
import NotFoundPage from './NotFoundPage.vue';

export default {
  components: {
    CardCharacter,
    Pagination,
    Spinner,
    NotFoundPage
  },
  setup() {
    const store = useStore();
    const currentPage = ref(1);

    const characters = computed(() => {
      return store.state.charactersFilter;
    });

    const loading = computed(() => {
      return store.state.loading;
    });

    const page = computed(() => {
      const prevPage = store.state.pageInfo?.prev ? parseInt(store.state.pageInfo.prev.match(/page=(\d+)/)[1]) : null
      return prevPage ? prevPage + 1 : 1
    })

    const totalPages = computed(() => {
      return store.state.pageInfo ? store.state.pageInfo.pages : 1;
    });

    const loadCharacters = async (page) => {
      await store.dispatch('paginationCharacters', page);
    };

    const nextPage = async () => {
      if (currentPage.value < totalPages.value) {
        currentPage.value++;
        await loadCharacters(currentPage.value);
      }
    };

    const prevPage = async () => {
      if (currentPage.value > 1) {
        currentPage.value--;
        await loadCharacters(currentPage.value);
      }
    };

    onMounted(() => {
      loadCharacters(currentPage.value);
    });

    watch(characters, () => {
      if (currentPage.value > totalPages.value) {
        currentPage.value = totalPages.value;
      }
    });
    watch(page, () => {
      currentPage.value = page.value
    })

    return {
      characters,
      currentPage,
      totalPages,
      nextPage,
      prevPage,
      loading,
    };
  },
};
</script>

<style lang="scss">
.characters {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  grid-gap: 3rem;
  margin: 3rem 0;
}
</style>