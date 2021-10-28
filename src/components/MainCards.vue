<template>
  <div class="main-block">
    <section class="main-block__item">
      <div class="main-card">
        <img :src="data.mainImage"
          alt="Картинка футболки" class="main-card__img"
          width="330" height="330">
        <span class="main-card__badge" v-if="data.isNew">new</span>
        <span class="main-card__badge" v-else></span>
      </div>
      <div class="main-card__description">
        <span class="main-card__description-price">
          {{data.price}} баллов
        </span>
        <h3 class="main-card__description-title">
          {{data.title}}
        </h3>
        <span class="main-card__description-hint" v-if="data.isClothes">
          {{data.sizes}} {{data.volume}}
        </span>
        <span class="main-card__description-hint" v-else>
          {{data.sizes}} {{data.volume}}
        </span>
      </div>
      <div class="main-card__description-hidden">
        <button class="main-card__description-btn" type="button"
        @click="openModal">
            Заказать
        </button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'MainCards',
  props: {
    data: Object,
  },
  data() {
    return {
    };
  },
  computed: {
  },
  methods: {
    openModal() {
      this.$emit('open');
    },
  },
};
</script>
