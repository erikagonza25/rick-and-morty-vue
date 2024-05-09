<template>
    <div class="container-info">
        <div class="d-flex justify-content-center">
            <router-link to="/" class="return-list">
                <img src="../assets/volver.png" alt="Icono para volver" class="img-refresh">
            </router-link>
        </div>
        <div v-if="!loading && !!existCharacter" class="d-flex justify-content-center">
            <div class="card m-4 text-bg-dark width-card">
                <div class="card-body">
                    <div class="d-flex justify-content-center align-items-center flex-column">
                        <img :src="character.image" alt="" width="250" class="rounded">
                        <h1>{{ character.name }}</h1>
                    </div>
                    <ul class="d-flex flex-wrap container-info-character justify-content-center align-items-center">
                        <li class="d-flex flex-column justify-content-center align-items-center">
                            <img src="../assets/vida.png" alt="Icono de vida" width="50">
                            <strong>Status:</strong> {{ character.status || 'Unknown'}}
                        </li>
                        <li class="d-flex flex-column justify-content-center align-items-center">
                            <img src="../assets/especie.png" alt="Icono de vida" width="50">
                            <strong>Species:</strong> {{ character.species || 'Unknown'}}
                        </li>
                        <li class="d-flex flex-column justify-content-center align-items-center">
                            <img src="../assets/tipo.png" alt="Icono de vida" width="50">
                            <strong>Type:</strong> {{ character.type || 'Unknown' }}
                        </li>
                        <li class="d-flex flex-column justify-content-center align-items-center">
                            <img src="../assets/genero.png" alt="Icono de vida" width="50">
                            <strong>Gender:</strong> {{ character.gender || 'Unknown'}}
                        </li>
                        <li class="d-flex flex-column justify-content-center align-items-center">
                            <img src="../assets/lugar.png" alt="Icono de vida" width="50">
                            <strong>Origin:</strong> {{ character.origin.name || 'Unknown'}}
                        </li>
                        <li class="d-flex flex-column justify-content-center align-items-center">
                            <img src="../assets/mundo.png" alt="Icono de vida" width="50">
                            <strong>Location:</strong> {{ character.location.name || 'Unknown'}}
                        </li>
                        <li class="d-flex flex-column justify-content-center align-items-center">
                            <img src="../assets/episodio.png" alt="Icono de vida" width="50">
                            <strong>Total episodes:</strong> {{ character.episode.length || 'Unknown'}}
                        </li>
                    </ul>
                </div>
            </div>    
        </div>
        <div v-if="loading">
            <Spinner/>
        </div>
        <div v-if="!existCharacter && !loading">
            <NotFoundPage/>
        </div>
    </div>
</template>

<script>
import { useStore } from 'vuex';
import { onMounted, computed, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import Spinner from '@/components/Spinner.vue'
import NotFoundPage from '@/components/NotFoundPage.vue'

export default {
    name: 'info',
    components: {
        Spinner,
        NotFoundPage
    },
    setup() {
    const store = useStore();
    const route = useRoute();
    const existCharacter = ref(false);

    const character = computed(() => {
      return store.state.character;
    });

    const loading = computed(() => {
      return store.state.loading;
    });


    const loadCharacter = async (id) => {
      await store.dispatch('getCharacter', id);
    };

    onMounted(() => {
      loadCharacter(route.params.id);
    });

    watch(character, () => {
      if (character.value) {
        existCharacter.value = !!character.value.error ? false : true
      }
    });

    return {
      character,
      loading,
      existCharacter
    };
  },

}
</script>

<style lang="scss">
.container-info {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.img-refresh {
  width: 45px;
}
.return-list {
    transition: transform 200ms ease-in-out;
    margin-top: 2rem;
    &:hover {
        transform: scale(1.05);
    }
}
.width-card {
    width: 700px;
}
.container-info-character {
    margin: 0;
    padding: 0;
}
.container-info-character li {
    list-style: none;
    margin: 2rem 1.5rem;
}
@media (max-width:768px) {
    .width-card {
        width: 100% !important;
    }
    .container-info {
        height: initial !important;
        display: block !important;
    }
    .container-info-character li {
        margin: 1rem
    }
}
</style>