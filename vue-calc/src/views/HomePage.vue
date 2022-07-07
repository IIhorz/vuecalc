<template>
  <div>
    <div class="wrapper">
      <h1>Vue Invoice Calc</h1>
      <input-form></input-form>
      <main-table :item_data="cart"></main-table>
    </div>
  </div>
</template>

<script>
import InputForm from "../components/InputForm.vue";
import MainTable from "../components/MainTable.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    InputForm,
    MainTable,
  },
  computed: {
    ...mapGetters(["cart"]),
  },
};
</script>
