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
                                <input type="button" value="Попросить 50 балов"
                                  class="modal-main-info__title--yellow-btn">
                            </div>
                            <div class="modal-main-info__balance">
                                <div class="modal-main-info__text">
                                    <h2 class="modal-main-info__text--title">
                                        Твой баланс:
                                    </h2>
                                    <h3 class="modal-main-info__text--subtitle">
                                        {{ profileData.cost }} Балов
                                    </h3>
                                </div>
                            </div>
                        </section>
                        <section class="modal-main-info__colors">
                          <p class="modal-main-info__colors-text">Цвета:</p>
                          <form action="" class="modal-main-info__choise-color">
                              <div class="modal-main-info__radio"
                              v-for="color in data.colors"
                              :key="color.id">
                                  <label class="modal-main-info__label label-1">
                                      <input type="radio"
                                        :value="color.label"
                                        class="modal-main-info__input" checked>
                                        {{color.label}}
                                      </label>
                              </div>
                          </form>
                        </section>
                        <section class="modal-main-info__size">
                            <p class="modal-main-info__size-text">Размер</p>
                            <form action="#" class="modal-main-info__form-size">
                                <div class="modal-main-info__radio-size"
                                v-for="size in data.sizes"
                                :key="size.id">
                                    <input type="radio" name="size"
                                    :id="size"
                                    :value="size"
                                    class="modal-main-info__input-size active-size"
                                    checked>
                                    <label :for="size" class="modal-main-info__label-size">
                                    {{size}}
                                    </label>
                                </div>
                            </form>
                        </section>
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
    profileData: Object,
  },
  data() {
    return {
    };
  },
  methods: {
    closeModal() {
      console.log(this.profileData);
      this.$emit('close');
    },
    order() {
      this.$emit('order', this.profileData.cost);
    },
  },
};
</script>
