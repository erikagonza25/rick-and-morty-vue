import { createStore } from 'vuex';

export default createStore({
  state: {
    characters: [],
    charactersFilter: [],
    character: null,
    pageInfo: null,
    name: '',
    status: '',
    page: 1,
    loading: false,
  },
  mutations: {
    setCharacters(state, payload) {
      state.characters = payload.results;
      state.pageInfo = {
        count: payload.info?.count,
        pages: payload.info?.pages,
        next: payload.info?.next,
        prev: payload.info?.prev
      };
    },
    setCharactersFilter(state, payload) {
      state.charactersFilter = payload;
    },
    setCharacter(state, payload) {
      state.character = payload;
    },
  },
  actions: {
      async getCharacters({ commit, state }) {
        const { name, status, page } = state
        state.loading = true
        try {
          let url = `https://rickandmortyapi.com/api/character?page=${page}`;
          if (name) {
            url += `&name=${name}`;
          }
          if (status) {
            url += `&status=${status}`;
          }
          
          const response = await fetch(url);
          const data = await response.json();
          state.loading = false
          commit('setCharacters', data);
          commit('setCharactersFilter', data.results);
        } catch (error) {
          console.error(error);
          state.loading = false
        }
      },
      filterByStatus({ dispatch, state }, info) {
        state.status = info.status
        state.page = info.page
        dispatch('getCharacters');
      },
      filterByName({ dispatch, state }, info) {
        state.name = info.name
        state.page = info.page
        dispatch('getCharacters');
      },
      paginationCharacters ({ dispatch, state }, page) {
        state.page = page
        dispatch('getCharacters');
      },
      cleanFilters ({dispatch, state}) {
        state.name= ""
        state.status=""
        state.page = 1
        dispatch('getCharacters');
      },
      async getCharacter({ commit, state }, id) {
        state.loading = true
        try {
          let url = `https://rickandmortyapi.com/api/character/${id}`;
          const response = await fetch(url);
          const data = await response.json();
          commit('setCharacter', data);
          state.loading = false
        } catch (error) {
          state.loading = false
          commit('setCharacter', null);
          console.error(error);
        }
      }
  },
  modules: {},
});
