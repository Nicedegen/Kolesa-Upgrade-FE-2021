<template>
  <button type="button" class="header-items-profile__btn">
      <img
        :src="userInfo.avatarUrl"
        alt="Иконка профиля"
        class="header-items-profile__icon"
        width="44" height="44">
      <span class="header-items-profile__text">
          <span class="header-items-profile__text--name">
          {{ userInfo.name }}
          </span>
          <br>
          <span class="header-items-profile__text--balls">
          {{ userInfo.score }}
          </span>
      </span>
  </button>
</template>

<script>

import { mapState } from 'vuex';

export default {
  name: 'Profile',
  methods: {
    fetchUser() {
      this.$store.dispatch('fetchUserInfo');
    },
  },
  mounted() {
    this.fetchUser();
  },
  computed: {
    ...mapState({
      userInfo: 'userInfo',
    }),
  },
};
</script>
