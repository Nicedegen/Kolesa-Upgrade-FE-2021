<template>
  <div class="main-balls modal-solution__main">
    <button type="button"
    v-for='button in buttons'
    :key="button.id"
    :class="[button.class, button.classMod]">
      <span :class="button.iconClass"></span>
      <span class="main-balls__text">{{ button.text }}</span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'Balls',
  data() {
    return {
      buttons: [
        {
          class: 'main-balls__content',
          classMod: 'main-balls__content--green',
          iconClass: 'main-balls__plus',
          text: 'Получить балы',
          id: 1,
        },
        {
          class: 'main-balls__content',
          classMod: 'main-balls__content--yellow',
          iconClass: 'main-balls__question',
          text: 'Как получить балы',
          id: 2,
        },
        {
          class: 'main-balls__content',
          classMod: 'main-balls__content--blue',
          iconClass: 'main-balls__gift',
          text: 'Подарить балы',
          id: 3,
        },
      ],
    };
  },
  methods: {
  },
};
</script>
