<template>
  <div>
    <button :id="button.id" v-for="button in buttons" :key="button.id"
      type="button"
      class="main-content-choise__all
      js__choise-btn" @click="choise = button.id; categoryValue(choise)"
      :class="{choise_active:choise === button.id}"
      >
        {{button.name}}
      </button>
      </div>
</template>

<script>
export default {
  name: 'Buttons',
  props: {
    valueId: Number,
  },
  data() {
    return {
      choise: 0,
      buttons: [
        {
          name: 'Все товары',
          id: 0,
        },
        {
          name: 'Одежда',
          id: 1,
        },
        {
          name: 'Аксессуары',
          id: 2,
        },
      ],
    };
  },
  methods: {
    categoryValue(id) {
      this.valueId = id;
      this.$emit('categoryValue', this.valueId);
    },
  },
};
</script>
