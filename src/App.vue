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
            <Profile @update="profileUpdate()" :profile="cards.user"></Profile>
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
                <Buttons
                @categoryValue="changeCategory"
                ></Buttons>
                </div>
              </div>
            </div>
            <!-----------------  SECTION MAIN CARD --------------- -->
            <main class="main-content-items main-indent">
              <div class="main-content__items js__catalog">
                <MainCard
                :data="item"
                v-for="item in products"
                :key="item.id"
                @open="openCard(item)"
                ></MainCard>
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
        <modal
        :isOpen="isShowModal"
        @close="closeModal"
        :data="modalData"
        :profileData="cards.user"
        ></modal>
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
import MainCard from '@/components/MainCard.vue';
import Buttons from '@/components/Buttons.vue';
import axios from '@/axios';

export default {
  name: 'App',
  data() {
    return {
      isShowModal: false,
      cards: {
        clothes: [],
        accessories: [],
        user: Object,
      },
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
    MainCard,
    Buttons,
  },
  mounted() {
    axios.get('templates/-_RLsEGjof6i/data')
      .then((response) => {
        this.cards.clothes = response.data;
      });
    axios.get('templates/q3OPxRyEcPvP/data')
      .then((response) => {
        this.cards.accessories = response.data;
      });
  },
  computed: {
    products() {
      if (this.category === 1) {
        return this.cards.clothes;
      } if (this.category === 2) {
        return this.cards.accessories;
      }
      console.log(this.cards.user);
      return this.allProducts();
    },
  },
  methods: {
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
      this.modalData = data;
      this.showModal();
    },
    closeModal() {
      this.isShowModal = false;
    },
    profileUpdate(data) {
      this.cards.user = data;
      console.log(this.cards.user);
      this.closeModal();
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
