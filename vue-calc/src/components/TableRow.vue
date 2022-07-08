<template>
  <div class="table-row">
    <input type="checkbox" name="checkbox" v-model="row_data.checked">
    <div class="row row_name">{{ row_data.name }}</div>
    <div class="row row_price">$ {{ row_data.price }}</div>
    <div class="row row_quantity">{{ row_data.quantity }}</div>
    <div class="row row_sum">$ {{ row_data.price * row_data.quantity }}</div>
  </div>
</template>

<script>
export default {
  props: {
    row_data: {
      default: () => {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  computed: {},
};
</script>
