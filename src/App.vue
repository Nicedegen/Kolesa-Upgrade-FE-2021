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
            <Profile
            @update="updateUser"
            ></Profile>
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
          <router-view
            :search="search"
            :user-data="userData"
            @setSearch="setSearch"
            @updateUser="updateUser"
          ></router-view>
        </div>
      </section>
    </div>
    <!-------------- SECTION MAIN END  -------------->
    <!-------------- SECTION FOOTER START  -------------->
        <Footer></Footer>
    <!-------------- SECTION FOOTER END  -------------->
    </div>
</template>

<script>
import Nav from '@/layouts/components/Nav.vue';
import Footer from '@/layouts/components/Footer.vue';
import Search from '@/layouts/components/Search.vue';
import Profile from '@/layouts/components/Profile.vue';

export default {
  name: 'App',
  data() {
    return {
      search: '',
      userData: {
        score: 0,
        name: '',
        avatarUrl: '',
      },
      modalData: {},
    };
  },
  components: {
    Nav,
    Footer,
    Search,
    Profile,
  },
  mounted() {
  },
  computed: {
  },
  methods: {
    updateUser(data) {
      this.userData = data;
      console.log(this.userData);
    },
    setSearch(e) {
      this.search = e.target.value;
    },
  },
};
</script>

<style lang="scss">
@import './css/style.scss';
</style>
