import Vue from 'vue';
import Vuex from 'vuex';
import axios from '@/axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userName: 'Pasha',
    userInfo: {
      name: '',
      score: 0,
      avatarUrl: '',
    },
  },
  mutations: {
    updateUserInfo(state, responce) {
      state.userInfo = responce.data;
      console.log(this.state.userInfo);
    },
    setNewScore(state, newScore) {
      state.userInfo.score -= newScore;
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
    },
  },
});
