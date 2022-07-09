<template>
  <div class="table">
    <div class="table__header">
      <p class="row">Product name</p>
      <p class="row">Price</p>
      <p class="row">Qty</p>
      <p class="row">Summ</p>
    </div>
    <div class="table__body">
      <table-row v-for="row in item_data" :key="row.name" :row_data="row">
      </table-row>
    </div>
    <div class="footer">
      <button class="table__delete_button" @click="deleteCheckedItem">
        Delete
      </button>
      <div class="total">Total: $ {{ sumValues }}</div>
    </div>
  </div>
</template>

<script>
import TableRow from "./TableRow.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  created() {
    console.log(this.cart);
  },
  components: {
    TableRow,
  },
  computed: {
    ...mapGetters(["cart"]),
    sumValues() {
      return this.cart.reduce(
        (Sum, product) => product.price * product.quantity + Sum,
        0
      );
    },
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
    ...mapActions(["deleteItemFromCart"]),
    deleteCheckedItem() {
      return this.deleteItemFromCart();
    },
  },
};
</script>
