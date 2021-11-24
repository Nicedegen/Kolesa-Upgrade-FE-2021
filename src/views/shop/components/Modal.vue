<template>
    <div class="modal modal-indent mod"  v-if="isOpen">
        <div class="modal-content modal-content-position">
            <button class="modal-content__close" @click="closeModal"></button>
            <div class="modal-solution js__modal">
                <div class="modal-solution__main">
                    <div class="modal-solution__card">
                        <div class="modal-solution__card--big">
                            <img :src="data.mainImage"
                              alt="${title}" width="330" height="330">
                        </div>
                        <div>
                          <ul class="cards-little">
                            <li class="modal-solution__card--little js__img"
                            data-key="imgSml-1"
                            v-for="image in data.images"
                            :key="image.id"
                            >
                              <img :src="image"
                                  alt="иконка товара" width="50" height="50">
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="modal-main-info info-indent">
                        <section class="modal-main-info info-title">
                            <div>
                                <h2 class="modal-main-info__title">{{ data.title }}</h2>
                                <div class="modal-main-info__title--how-balls">
                                    {{data.price}} балов
                                </div>
                                <div>
                                  <input v-if="isScore"
                                  type="button"
                                  value="Заказать"
                                    class="modal-main-info__title--blue-btn"
                                    @click="order">
                                  <input v-else
                                  type="button"
                                  :value="showResult()"
                                    class="modal-main-info__title--yellow-btn"
                                    @click="order">
                                </div>
                            </div>
                            <div class="modal-main-info__balance">
                                <div class="modal-main-info__text">
                                    <h2 class="modal-main-info__text--title">
                                        Твой баланс:
                                    </h2>
                                    <h3 class="modal-main-info__text--subtitle">
                                      {{ $store.state.userInfo.score }}   Балов
                                    </h3>
                                </div>
                            </div>
                        </section>
                        <section class="modal-main-info__colors" v-if="isColor">
                          <p class="modal-main-info__colors-text">Цвета:</p>
                          <form action="" class="modal-main-info__choise-color">
                              <div class="modal-main-info__radio"
                              v-for="color in data.colors"
                              :key="color.id">
                                  <label class='modal-main-info__label label-1'>
                                      <input type="radio"
                                        :value="color.label"
                                        class="modal-main-info__input">
                                        {{color.label}}
                                      </label>
                              </div>
                          </form>
                        </section>
                        <section v-else></section>
                        <section class="modal-main-info__size" v-if="isSize">
                            <p class="modal-main-info__size-text">Размер</p>
                            <form action="#" class="modal-main-info__form-size">
                                <div class="modal-main-info__radio-size"
                                v-for="size in data.sizes"
                                :key="size.id">
                                    <input type="radio" name="size"
                                    :id="size"
                                    :value="size"
                                    class="modal-main-info__input-size active-size"
                                    >
                                    <label :for="size" class="modal-main-info__label-size">
                                    {{size}}
                                    </label>
                                </div>
                            </form>
                        </section>
                        <section v-else></section>
                        <section class="modal-main-info__descr">
                            <p class="modal-main-info__descr-bold">
                                Детали:
                            </p>
                            <p class="modal-main-info__descr-regular">
                                {{ data.description }}
                            </p>
                            <p class="modal-main-info__descr-bold">
                                Как выбрать размер:
                            </p>
                            <p class="modal-main-info__descr-regular">
                                Написать дяде Рику для уточнения.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    isOpen: Boolean,
    data: Object,
  },
  data() {
    return {
      title: '',
      colors: Array,
      isScore: true,
      result: Number,
      isColor: Boolean,
      isSize: Boolean,
    };
  },
  computed: {
    colorCheck() {
      if (this.data.colors && this.data.colors.length) {
        return this.colorTrue();
      }
      return this.colorFalse();
    },
    sizeCheck() {
      if (this.data.sizes && this.data.sizes.length) {
        return this.sizeTrue();
      }
      return this.sizeFalse();
    },
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
    order() {
      const { score } = this.$store.state.userInfo;
      if (score - this.data.price <= 0) {
        this.isScore = false;
        this.result = score - this.data.price;
        return;
      }
      this.$store.commit('setNewScore', this.data.price);
    },
    showResult() {
      return `Попросить ${-this.result} балла`;
    },
    colorClick() {
      console.log(this.data.colors);
    },
    colorTrue() {
      this.isColor = true;
      return this.isColor;
    },
    colorFalse() {
      this.isColor = false;
      return this.isColor;
    },
    sizeTrue() {
      this.isSize = true;
      return this.isSize;
    },
    sizeFalse() {
      this.isSize = false;
      return this.isSize;
    },
  },
};
</script>
