<template>
  <button type="button" class="header-items-profile__btn">
      <img src="@/assets/icons/profile-icon.png"
        alt="Иконка профиля"
        class="header-items-profile__icon"
        width="44" height="44">
      <span class="header-items-profile__text">
          <span class="header-items-profile__text--name">Мортиджан</span>
          <br>
          <span class="header-items-profile__text--balls">300 Балов</span>
      </span>
  </button>
</template>

<script>
export default {
  name: 'Profile',
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>
