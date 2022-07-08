<template>
  <div class="table">
    <div class="table__header">
      <p class="row">Product name</p>
      <p class="row">Price</p>
      <p class="row">Qty</p>
      <p class="row">Summ</p>
    </div>
    <div class="table__body" v-if="!item_data.name">
      <table-row v-for="row in item_data" :key="row.name" :row_data="row">
      </table-row>
    </div>
    <div>
      <button>Delete</button>
    </div>
  </div>
</template>

<script>
import TableRow from "./TableRow.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    TableRow,
  },
  computed: {
    ...mapGetters(["cart"]),
  },
  name: "v-table",
  props: {
    item_data: {
      default: () => {
        return [];
      },
    },
  },
  methods: {
    checked() {
      console.log(this.cart);
    },
  },
};
</script>
