<template>
  <div>
      <section class="main">
            <div class="main-inner">
              <div class="main-content">
                <div class="main-banner">
                  <img
                    src="@/assets/img/banner.png"
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
import MainCard from './components/MainCard.vue';
import Modal from './components/Modal.vue';
import Balls from './components/Balls.vue';
import Buttons from './components/Buttons.vue';
import axios from '@/axios';

export default {
  name: 'Shop',
  props: {
    userData: Object,
    search: String,
  },
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
    Balls,
    Buttons,
    MainCard,
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
