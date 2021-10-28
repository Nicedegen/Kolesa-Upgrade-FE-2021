<template>
    <div class="modal modal-indent mod"  v-if="isOpen">
    <div class="modal-content modal-content-position">
          <button class="modal-content__close" @click="closeModal"></button>
          <div class="modal-solution js__modal">
            <div class="modal-solution__main">
    <div class="modal-solution__card">
      <div class="modal-solution__card--big">
        <img :src="data.img"
          alt="${title}" width="330" height="330"></div>
      <div>
      <ul class="cards-little">
        <li class="modal-solution__card--little js__img" data-key="imgSml-1">
      <img :src="data.imgSml"
              alt="иконка товара" width="50" height="50">
          </li>
          <li class="modal-solution__card--little card-active js__img"
          data-key="imgSml-2"><img :src="data.imgSml2"
              alt="иконка товара" width="50" height="50">
          </li>
        <li class="modal-solution__card--little js__img" data-key="imgSml-3">
        <img :src="data.imgSml3"
            alt="иконка товара" width="50" height="50">
          </li>
          </ul>
          </div>
      </div>
      <div class="modal-main-info info-indent">
          <section class="modal-main-info info-title">
          <div>
              <h2 class="modal-main-info__title"> {{ data.title }} </h2>
              <div class="modal-main-info__title--how-balls"> {{data.price}} балов</div>
              <input type="button" value="Попросить 50 балов"
              class="modal-main-info__title--yellow-btn">
        </div>
        <div class="modal-main-info__balance">
            <div class="modal-main-info__text">
            <h2 class="modal-main-info__text--title">Твой баланс:</h2>
            <h3 class="modal-main-info__text--subtitle">150 Балов</h3>
            </div>
        </div>
        </section>
      <section class="modal-main-info__colors">
        <p class="modal-main-info__colors-text">Цвета:</p>
        <form action="" class="modal-main-info__choise-color">
            <div class="modal-main-info__radio">
            <input type="radio" name="colors" id="blue"
              value="blue" class="modal-main-info__input" checked>
            <label for="blue" class="modal-main-info__label label-1">Синий</label>
            </div>
            <div class="modal-main-info__radio">
            <input type="radio" name="colors" id="biege"
              value="biege" class="modal-main-info__input">
            <label for="biege" class="modal-main-info__label label-2">Бежевый</label>
            </div>
            <div class="modal-main-info__radio">
            <input type="radio" name="colors" id="gray" value="gray" class="modal-main-info__input">
            <label for="gray" class="modal-main-info__label label-3">Серый</label>
            </div>
          </form>
          </section>
          <section class="modal-main-info__size">
            <p class="modal-main-info__size-text">Размер</p>
            <form action="#" class="modal-main-info__form-size">
              <div class="modal-main-info__radio-size">
              <input type="radio" name="size" id="S" value="S"
                class="modal-main-info__input-size active-size"
                  checked>
              <label for="S" class="modal-main-info__label-size">S</label>
              </div>
            <div class="modal-main-info__radio-size">
              <input type="radio" name="size" id="M" value="M" class="modal-main-info__input-size">
              <label for="M" class="modal-main-info__label-size">M</label>
              </div>
              <div class="modal-main-info__radio-size">
              <input type="radio" name="size" id="L" value="L" class="modal-main-info__input-size">
              <label for="L" class="modal-main-info__label-size">L</label>
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
              <p class="modal-main-info__descr-bold"> Как выбрать размер:</p>
              <p class="modal-main-info__descr-regular">Написать дяде Рику для уточнения.</p>
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
    };
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
  },
};
</script>
