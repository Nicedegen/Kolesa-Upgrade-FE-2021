<template>
  <div class="content__inner-nav nav-indent">
    <nav>
      <ul class="content-nav-menu">
          <li class="content-nav-menu__item"
          v-for='item in items'
          :key="item.id">
              <router-link
              class="content-nav-menu__link"
              :to="item.link"
              :exact="item.isExact"
              active-class="content-nav-menu__item--active"
              v-html="item.text">
              </router-link>
          </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  data() {
    return {
      items: [
        {
          link: '/',
          text: 'Оргсхема',
          isExact: true,
        },
        {
          link: '/about',
          text: 'Kolesa <b>Team</b>',
          isExact: true,
        },
        {
          link: '/shop',
          text: 'Kolesa shop',
          isExact: false,
        },
        // {
        //   text: 'Картина компании',
        // },
        // {
        //   text: 'Новости',
        // },
        // {
        //   text: 'Education',
        // },
        // {
        //   text: 'Guidelines',
        // },
        // {
        //   text: 'Библиотека',
        // },
        // {
        //   text: 'FAQ',
        // },
      ],
    };
  },
  methods: {
  },
};
</script>
