import Vue from 'vue';
import Vuex from 'vuex';
import axios from '@/axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: {
      name: '',
      score: 0,
      avatarUrl: '',
    },
    cards: {
      clothes: [],
      accessories: [],
    },
  },
  mutations: {
    updateUserInfo(state, responce) {
      state.userInfo = responce.data;
    },
    setNewScore(state, newScore) {
      state.userInfo.score -= newScore;
    },
    updateCardsClothes(state, responce) {
      state.cards.clothes = responce.data;
    },
    updateCardsAccessories(state, responce) {
      state.cards.accessories = responce.data;
    },
  },
  actions: {
    fetchUserInfo({ commit }) {
      axios.get('templates/7ZW3y5GAuIge/data')
        .then((data) => {
          if (data && Object.keys(data).length) {
            commit('updateUserInfo', data);
          }
        });
      axios.get('templates/-_RLsEGjof6i/data')
        .then((data) => {
          if (data && Object.keys(data).length) {
            commit('updateCardsClothes', data);
          }
        });
      axios.get('templates/q3OPxRyEcPvP/data')
        .then((data) => {
          if (data && Object.keys(data).length) {
            commit('updateCardsAccessories', data);
          }
        });
    },
  },
});
