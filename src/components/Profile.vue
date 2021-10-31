<template>
  <button type="button" class="header-items-profile__btn">
      <img :src="profile.avatarUrl"
        alt="Иконка профиля"
        class="header-items-profile__icon"
        width="44" height="44">
      <span class="header-items-profile__text">
          <span class="header-items-profile__text--name">{{profile.name}}</span>
          <br>
          <span class="header-items-profile__text--balls">{{profile.score}}</span>
      </span>
  </button>
</template>

<script>
export default {
  name: 'Profile',
  props: {
    profile: Object,
  },
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>
