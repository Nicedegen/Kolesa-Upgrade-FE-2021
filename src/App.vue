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
            <Search></Search>
          </li>
          <li class="header-items-profile">
            <Profile :profile="this.cards.user"></Profile>
          </li>
        </ul>
      </header>
      <!-------------- SECTION HEADER END  -------------->
      <!-------------- SECTION NAV START  -------------->
      <section class="content">
        <div class="content__inner content-indent">
        <Nav></Nav>
          <!-------------- SECTION NAV END  -------------->
          <!-------------- SECTION MAIN START  -------------->
          <section class="main">
            <div class="main-inner">
              <div class="main-content">
                <div class="main-banner">
                  <img
                    src="../public/assets/img/banner.png"
                    alt="Главный банер акций"
                    width="100%"
                    height="340"
                  />
                </div>
                <Balls></Balls>
                <div class="main-content-choise">
                <Buttons :valueId="category" @categoryValue="changeCategory"></Buttons>
                </div>
              </div>
            </div>
            <!-----------------  SECTION MAIN CARD --------------- -->
            <main class="main-content-items main-indent">
              <div class="main-content__items js__catalog">
                <MainCards :data="item" :id="item.id"
                v-for="item in products" :key="item.id"
                @open="openCard(item)"></MainCards>
              </div>
            </main>
          </section>
        </div>
      </section>
    </div>
    <!-------------- SECTION MAIN END  -------------->
    <!-------------- SECTION FOOTER START  -------------->
    <Footer></Footer>
    <!-------------- SECTION FOOTER END  -------------->
    <!-------------- SECTION MOD START  -------------->
    <modal :isOpen="isShowModal" @close="closeModal" :data="modalData"></modal>
    <!-------------- SECTION MOD END  -------------->
    </div>
</template>

<script>
import Modal from '@/components/Modal.vue';
import Nav from '@/components/Nav.vue';
import Footer from '@/components/Footer.vue';
import Search from '@/components/Search.vue';
import Profile from '@/components/Profile.vue';
import Balls from '@/components/Balls.vue';
import MainCards from '@/components/MainCards.vue';
import Buttons from '@/components/Buttons.vue';
import axios from '@/axios';

export default {
  name: 'App',
  data() {
    return {
      isShowModal: false,
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
        user: [
        ],
      },
      cardsData: {},
      modalData: {},
      category: Number,
    };
  },
  components: {
    Modal,
    Nav,
    Footer,
    Search,
    Profile,
    Balls,
    MainCards,
    Buttons,
  },
  mounted() {
    axios.get('templates/-_RLsEGjof6i/data')
      .then((response) => {
        this.cards.clothes = response.data;
        console.log(this.cards.clothes);
      });
    axios.get('templates/q3OPxRyEcPvP/data')
      .then((response) => {
        this.cards.accessories = response.data;
        console.log(this.cards.accessories);
      });
    axios.get('templates/7ZW3y5GAuIge/data')
      .then((response) => {
        this.cards.user = response.data;
      });
  },
  computed: {
    products() {
      if (this.category === 1) {
        return this.cards.clothes;
      } if (this.category === 2) {
        return this.cards.accessories;
      }
      return this.allProducts();
    },
  },
  methods: {
    cardsProps() {
      this.cardsData = this.products;
    },
    allProducts() {
      const productsAll = this.cards.accessories.concat(this.cards.clothes);
      productsAll.sort(this.sortByNew);
      return productsAll;
    },
    changeCategory(data) {
      this.category = data;
    },
    showModal() {
      this.isShowModal = true;
    },
    openCard(data) {
      this.showModal();
      this.modalData = data;
    },
    closeModal() {
      this.isShowModal = false;
    },
    sortByNew(a, b) {
      if (a.isNew > b.isNew) {
        return -1;
      }
      if (a.isNew < b.isNew) {
        return 1;
      }
      return 0;
    },
  },
};
</script>

<style lang="scss">
@import './css/style.scss';
</style>
