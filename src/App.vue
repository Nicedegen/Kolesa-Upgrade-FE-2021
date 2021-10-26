<template>
  <div class="body-inner">
    <div class="body-inner__page">
      <!-------------- SECTION HEADER START  -------------->
      <header class="header">
        <ul class="header-items header-indent">
          <li class="header-items__emblem">
            <a href="#" width="100" height="100">
              <img
                src="./assets/icons/Kolesa.svg"
                alt="Ссылка с Эмблемой компании"
                width="222"
                height="36"
            /></a>
          </li>
          <li class="header-items__search">
            <form class="search-form">
              <button type="submit" class="search-form__btn"></button>
              <input
                type="search"
                placeholder="Поиск"
                title="Введите наименование товара"
                class="search-form__input"
              />
            </form>
          </li>
          <li class="header-items-profile">
            <button type="button" class="header-items-profile__btn">
              <img
                src="./assets/icons/profile-icon.png"
                alt="Иконка профиля"
                class="header-items-profile__icon"
                width="44"
                height="44"
              />
              <span class="header-items-profile__text">
                <span class="header-items-profile__text--name">Мортиджан</span>
                <br />
                <span class="header-items-profile__text--balls">300 Балов</span>
              </span>
            </button>
          </li>
        </ul>
      </header>
      <!-------------- SECTION HEADER END  -------------->
      <!-------------- SECTION NAV START  -------------->
      <section class="content">
        <div class="content__inner content-indent">
          <div class="content__inner-nav nav-indent">
            <nav>
              <ul class="content-nav-menu">
                <li class="content-nav-menu__item">
                  <a href="#" class="content-nav-menu__link">Оргсхема</a>
                </li>
                <li class="content-nav-menu__item">
                  <a href="#" class="content-nav-menu__link"
                    >Kolesa <span class="content-nav-menu__span">Team</span></a
                  >
                </li>
                <li class="content-nav-menu__item content-nav-menu__item--active">
                  <a href="#" class="content-nav-menu__link">Kolesa shop</a>
                </li>
                <li class="content-nav-menu__item">
                  <a href="#" class="content-nav-menu__link">Картина компании</a>
                </li>
                <li class="content-nav-menu__item">
                  <a href="#" class="content-nav-menu__link">Новости</a>
                </li>
                <li class="content-nav-menu__item">
                  <a href="#" class="content-nav-menu__link">Education</a>
                </li>
                <li class="content-nav-menu__item">
                  <a href="#" class="content-nav-menu__link">Guidelines</a>
                </li>
                <li class="content-nav-menu__item">
                  <a href="#" class="content-nav-menu__link">Библиотека</a>
                </li>
                <li class="content-nav-menu__item">
                  <a href="#" class="content-nav-menu__link">FAQ</a>
                </li>
              </ul>
            </nav>
          </div>
          <!-------------- SECTION NAV END  -------------->
          <!-------------- SECTION MAIN START  -------------->
          <section class="main">
            <div class="main-inner">
              <div class="main-content">
                <div class="main-banner">
                  <img
                    src="./assets/img/banner.png"
                    alt="Главный банер акций"
                    width="100%"
                    height="340"
                  />
                </div>
                <div class="main-balls modal-solution__main">
                  <button type="button" class="main-balls__content main-balls__content--green">
                    <span class="main-balls__plus"></span>
                    <span class="main-balls__text">Получить балы</span>
                  </button>
                  <button type="button" class="main-balls__content main-balls__content--yellow">
                    <span class="main-balls__question"></span>
                    <span class="main-balls__text">Как получить балы</span>
                  </button>
                  <button type="button" class="main-balls__content main-balls__content--blue">
                    <span class="main-balls__gift"></span>
                    <span class="main-balls__text">Подарить балы</span>
                  </button>
                </div>
                <div class="main-content-choise">
                  <button id="0" checked
                    type="button"
                    class="main-content-choise__all
                    js__choise-btn" @click="choise = 'all'; sortArray(choise)"
                    :class="{choise_active:choise == 'all'}"
                  >
                    Все товары
                  </button>
                  <button id="1"
                    type="button"
                    class="main-content-choise__all js__choise-btn"
                    @click="choise = 'clothes'; sortArray(choise)"
                    :class="{choise_active:choise == 'clothes'}"
                  >
                    Одежда
                  </button>
                  <button
                    id="2"
                    type="button"
                    class="main-content-choise__all js__choise-btn"
                    @click="choise = 'accessories'; sortArray(choise)"
                    :class="{choise_active:choise == 'accessories'}"
                  >
                    Аксессуары
                  </button>
                </div>
              </div>
            </div>

            <!-----------------  SECTION MAIN CARD --------------- -->

            <main class="main-content-items main-indent">
              <div class="main-content__items js__catalog">
                <div class="main-block" v-for="item in category"
                  :key="item.id"
                >
                  <section class="main-block__item">
                    <div class="main-card">
                      <img :src="item.img"
                      alt="Картинка футболки" class="main-card__img"
                        width="330" height="330">
                        <span class="main-card__badge" v-if="item.isNew">new</span>
                        <span class="main-card__badge" v-else></span>
                    </div>
                    <div class="main-card__description">
                      <span class="main-card__description-price">
                      {{item.price}} баллов
                      </span>
                      <h3 class="main-card__description-title">
                      {{item.title}}
                      </h3>
                      <span class="main-card__description-hint" v-if="item.isClothes">
                      {{item.label}} {{item.volume}}
                      </span>
                      <span class="main-card__description-hint" v-else>
                      {{item.label}} {{item.volume}}
                      </span>
                    </div>
                    <div class="main-card__description-hidden"
                      >
                      <button class="main-card__description-btn" type="button"
                      @click="changeDisplay()">
                      Заказать
                      </button>
                    </div>
                  </section>
                  </div>
              </div>
            </main>
          </section>
        </div>
      </section>
    </div>
    <!-------------- SECTION MAIN END  -------------->
    <!-------------- SECTION FOOTER START  -------------->
    <footer class="footer">
      <div class="footer__content">
        <div class="footer-contacts">
          <div class="footer-contacts__copyright">© Kolesa Group</div>
          <ul class="footer-contacts__icons">
            <li class="footer-contacts__instagram">
              <a
                href="https://www.instagram.com/kolesagroup/"
                target="_blank"
                title="Участвуй в наших конкурсах в Instagram!"
              >
                <img
                  src="./assets/icons/instagram.svg"
                  alt="иконка Инстаграма"
                  width="24"
                  height="24"
                />
              </a>
            </li>
            <li class="footer-contacts__youtube">
              <a
                href="https://www.youtube.com/user/kolesakzvideo"
                target="_blank"
                title="Смотри наши видео на YouTube!"
              >
                <img src="./assets/icons/youtube.svg" alt="икона Ютуба" width="24" height="24" />
              </a>
            </li>
            <li class="footer-contacts__vk">
              <a href="https://vk.com/kolesakz" target="_blank" title="Присоеденяйся к нам в VK!">
                <img src="./assets/icons/vk.svg" alt="иконка Вконтакте" width="24" height="24" />
              </a>
            </li>
          </ul>
        </div>
        <div class="footer-ideas">
          <p class="footer-ideas__text">
            Есть идеи что улучшить? <br />
            Не знаешь, с кем решить проблему?
          </p>
          <button type="button" class="footer-ideas__btn">Написать</button>
        </div>
      </div>
    </footer>
    <!-------------- SECTION FOOTER END  -------------->
    <!-------------- SECTION MOD START  -------------->

    <div class="modal modal-indent mod v-bind:style=" { display: computedDisplay } ">
      <div class="modal-content modal-content-position">
        <button class="modal-content__close"></button>
        <div class="modal-solution js__modal">
          <div class="main-block">
            <section class="main-block__item">
              <div class="main-card">
                <img src="${img}" alt="Картинка футболки" class="main-card__img"
                  width="330" height="330">
                  ${isNew ? '<span class="main-card__badge">new</span>' : ''}
              </div>
              <div class="main-card__description">
                <span class="main-card__description-price">
                  ${price} баллов
                </span>
                <h3 class="main-card__description-title">
                  ${title}
                </h3>
                <span class="main-card__description-hint">
                  ${label} ${isClothes ? `${volume}/M/L` : `${volume}`}
                </span>
              </div>
              <div class="main-card__description-hidden open-modal" id="${id}">
                <button class="main-card__description-btn" type="button">
                  Заказать
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>

    <!-------------- SECTION MOD END  -------------->
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      isShowModal: false,
      choise: undefined,
      modal: false,
      display: 'none',
      cards: {
        clothes: [
          {
            price: 800,
            img: './assets/img/shirt-main.png',
            imgSml: './assets/icons/t-shirt-sml.png',
            imgSml2: './assets/icons/image-girl.png',
            imgSml3: './assets/icons/image-man.png',
            id: 7,
            title: 'Футболка "Эволюционируй или сдохни"',
            isNew: true,
            description: 'Брендированная толстовка от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
            isDescr: true,
            label: 'Размеры:',
            volume: 'S/M/L',
            isClothes: true,
          },
          {
            price: 1000,
            img: './assets/img/shirt-main.png',
            imgSml: './assets/icons/t-shirt-sml.png',
            imgSml2: './assets/icons/image-girl.png',
            imgSml3: './assets/icons/image-man.png',
            id: 8,
            title: 'Футболка "Сдохни или умри"',
            isNew: true,
            description: 'Брендированная толстовка от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
            isDescr: true,
            label: 'Размеры',
            volume: 'S/M/L',
            isClothes: true,
          },
          {
            price: 2000,
            img: './assets/img/shirt-main.png',
            imgSml: './assets/icons/t-shirt-sml.png',
            imgSml2: './assets/icons/image-girl.png',
            imgSml3: './assets/icons/image-man.png',
            id: 9,
            title: 'Футболка "Сделай дз за день или сдохни"',
            isNew: false,
            description: 'Брендированная толстовка от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
            isDescr: true,
            label: 'Размеры:',
            volume: 'S/M/L',
            isClothes: true,
          },
          {
            price: 3000,
            img: './assets/img/shirt-main.png',
            imgSml: './assets/icons/t-shirt-sml.png',
            imgSml2: './assets/icons/image-girl.png',
            imgSml3: './assets/icons/image-man.png',
            id: 10,
            title: 'Футболка "Эволюция, труд, май"',
            isNew: false,
            description: 'Брендированная толстовка от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
            isDescr: true,
            label: 'Размеры:',
            volume: 'S/M/L',
            isClothes: true,
          },
          {
            price: 4000,
            img: './assets/img/shirt-main.png',
            imgSml: './assets/icons/t-shirt-sml.png',
            imgSml2: './assets/icons/image-girl.png',
            imgSml3: './assets/icons/image-man.png',
            id: 11,
            title: 'Футболка "Здесь могла быть ваша реклама"',
            isNew: false,
            description: 'Брендированная толстовка от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
            isDescr: true,
            label: 'Размеры:',
            volume: 'S/M/L',
            isClothes: true,
          },
          {
            price: 5000,
            img: './assets/img/shirt-main.png',
            imgSml: './assets/icons/t-shirt-sml.png',
            imgSml2: './assets/icons/image-girl.png',
            imgSml3: './assets/icons/image-man.png',
            id: 12,
            title: 'Футболка "Любовь, код и котики"',
            isNew: false,
            description: 'Брендированная толстовка от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
            isDescr: true,
            label: 'Размеры:',
            volume: 'S/M/L',
            isClothes: true,
          },
          {
            price: 6000,
            img: './assets/img/shirt-main.png',
            imgSml: './assets/icons/t-shirt-sml.png',
            imgSml2: './assets/icons/image-girl.png',
            imgSml3: './assets/icons/image-man.png',
            id: 13,
            title: 'Футболка "Эволюционируй или сдохни"',
            isNew: false,
            description: 'Брендированная толстовка от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
            isDescr: true,
            label: 'Размеры:',
            volume: 'S/M/L',
            isClothes: true,
          },
          {
            price: 7000,
            img: './assets/img/shirt-main.png',
            imgSml: './assets/icons/t-shirt-sml.png',
            imgSml2: './assets/icons/image-girl.png',
            imgSml3: './assets/icons/image-man.png',
            id: 14,
            title: 'Футболка "Моя бабушка верстает лучше чем я"',
            isNew: false,
            description: 'Брендированная толстовка от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
            isDescr: true,
            label: 'Размеры:',
            volume: 'S/M/L',
            isClothes: true,
          },
          {
            price: 8000,
            img: './assets/img/shirt-main.png',
            imgSml: './assets/icons/t-shirt-sml.png',
            imgSml2: './assets/icons/image-girl.png',
            imgSml3: './assets/icons/image-man.png',
            id: 15,
            title: 'Футболка "я сделан из NaNNaN"',
            isNew: false,
            description: 'Брендированная толстовка от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
            isDescr: true,
            label: 'Размеры:',
            volume: 'S/M/L',
            isClothes: true,
          },
          {
            price: 9000,
            img: './assets/img/shirt-main.png',
            imgSml: './assets/icons/t-shirt-sml.png',
            imgSml2: './assets/icons/image-girl.png',
            imgSml3: './assets/icons/image-man.png',
            id: 16,
            title: 'Футболка "What is love?"',
            isNew: false,
            description: 'Брендированная толстовка от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
            isDescr: true,
            label: 'Размеры:',
            volume: 'S/M/L',
            isClothes: true,
          },
          {
            price: 10000,
            img: './assets/img/shirt-main.png',
            imgSml: './assets/icons/t-shirt-sml.png',
            imgSml2: './assets/icons/image-girl.png',
            imgSml3: './assets/icons/image-man.png',
            id: 17,
            title: 'Футболка "А у меня есть ТриКошки"',
            isNew: false,
            description: 'Брендированная толстовка от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
            isDescr: true,
            label: 'Размеры:',
            volume: 'S/M/L',
            isClothes: true,
          },
        ],
        accessories: [
          {
            img: './assets/img/bottle-modal.png',
            imgSml: './assets/img/bottle-modal.png',
            price: 50,
            title: 'Бутылка для воды',
            id: 0,
            isNew: true,
            description: 'Бутылка для воды с трубочкой',
            isDescr: false,
            label: 'Объем:',
            volume: '0.7л',
            isClothes: false,
          },
          {
            price: 100,
            img: './assets/img/bottle-modal.png',
            imgSml: './assets/img/bottle-modal.png',
            id: 1,
            title: 'Бутылка без воды',
            isNew: true,
            description: 'Бутылка для воды с трубочкой',
            label: 'Объем:',
            volume: '0.7л',
            isDescr: false,
            isClothes: false,
          },
          {
            price: 200,
            img: './assets/img/bottle-modal.png',
            imgSml: './assets/img/bottle-modal.png',
            id: 2,
            title: 'Вода без бутылки',
            isNew: false,
            description: 'Бутылка для воды с трубочкой',
            label: 'Объем:',
            volume: '0.7л',
            isDescr: false,
            isClothes: false,
          },
          {
            price: 300,
            img: './assets/img/bottle.jpg',
            imgSml: './assets/img/bottle.jpg',
            id: 3,
            title: 'Бутылка обыкновеникус',
            isNew: false,
            description: 'Бутылка для воды с трубочкой',
            label: 'Объем:',
            volume: '0.7л',
            isDescr: false,
            isClothes: false,
          },
          {
            price: 400,
            img: './assets/img/bottle.jpg',
            imgSml: './assets/img/bottle.jpg',
            id: 4,
            title: 'Бутылка "Creative: none"',
            isNew: false,
            description: 'Бутылка для воды с трубочкой',
            label: 'Объем:',
            volume: '0.7л',
            isDescr: false,
            isClothes: false,
          },
          {
            price: 500,
            img: './assets/img/bottle.jpg',
            imgSml: './assets/img/bottle.jpg',
            id: 5,
            title: 'Бутылка с автографом Жванецкого',
            isNew: false,
            description: 'Бутылка для воды с трубочкой',
            label: 'Объем:',
            volume: '0.7л',
            isDescr: false,
            isClothes: false,
          },
          {
            price: 600,
            img: './assets/img/bottle.jpg',
            imgSml: './assets/img/bottle.jpg',
            id: 6,
            title: 'Бутылка с сычуаньским соусом',
            isNew: false,
            description: 'Бутылка для воды с трубочкой',
            label: 'Объем:',
            volume: '0.7л',
            isDescr: false,
            isClothes: false,
          },
        ],
        all: this.clothes + this.accessories,
      },
      category: this.all,
    };
  },
  components: {
  },
  computed: {
    computedDisplay() {
      return this.display;
    },
  },
  methods: {
    concat() {
      this.category = this.cards.accessories.concat(this.cards.clothes);
      return this.category;
    },
    sortArray(string) {
      if (string === 'all') {
        this.category = this.cards.accessories.concat(this.cards.clothes);
      } else if (string === 'clothes') {
        this.category = this.cards.clothes;
      } else {
        this.category = this.cards.accessories;
      }
      return this.category;
    },
    openModal() {
      this.modal = true;
    },
    changeDisplay() {
      this.display = 'block';
    },
  },
};
</script>

<style lang="scss">
@import './css/style.scss';
</style>
