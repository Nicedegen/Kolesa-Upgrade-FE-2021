<template>
  <div class="content__inner-nav nav-indent">
    <nav>
      <ul class="content-nav-menu">
          <li class="content-nav-menu__item"
          v-for='item in items' :key="item.id">
              <a href="#" :class="[classMain, item.classActive]">
              {{ item.text }}</a>
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
      classMain: 'content-nav-menu__link',
      items: [
        {
          text: 'Оргсхема',
        },
        {
          text: 'Kolesa Team',
        },
        {
          text: 'Kolesa shop',
          classActive: 'content-nav-menu__item--active',
        },
        {
          text: 'Картина компании',
        },
        {
          text: 'Новости',
        },
        {
          text: 'Education',
        },
        {
          text: 'Guidelines',
        },
        {
          text: 'Библиотека',
        },
        {
          text: 'FAQ',
        },
      ],
    };
  },
  methods: {
  },
};
</script>
