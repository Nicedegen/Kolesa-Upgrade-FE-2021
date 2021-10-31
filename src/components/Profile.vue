<template>
  <button type="button" class="header-items-profile__btn">
      <img :src="user.avatarUrl"
        alt="Иконка профиля"
        class="header-items-profile__icon"
        width="44" height="44">
      <span class="header-items-profile__text">
          <span class="header-items-profile__text--name">{{user.name}}</span>
          <br>
          <span class="header-items-profile__text--balls">{{user.score}}</span>
      </span>
  </button>
</template>

<script>
import axios from '@/axios';

export default {
  name: 'Profile',
  props: {
  },
  data() {
    return {
      user: {
      },
    };
  },
  methods: {
    updateProfile() {
      this.$emit('update', this.user);
    },
  },
  mounted() {
    axios.get('templates/7ZW3y5GAuIge/data')
      .then((response) => {
        this.user = response.data;
      });
  },
};
</script>
