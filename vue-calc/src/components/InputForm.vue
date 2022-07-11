<template>
  <div>
    <form class="form" action="submit">
      <input type="checkbox" v-model="form.checked" v-on:click="toggle" />
      <input
        v-model="form.name"
        class="form__name"
        type="text"
        placeholder="Product name"
      />
      <input
        v-model="form.price"
        class="form__price"
        type="number"
        oninput="validity.valid||(value='');"
        placeholder="Price"
      />
      <input
        v-model="form.quantity"
        class="form__quantity"
        type="number"
        min="1"
        oninput="validity.valid||(value='');"
        placeholder="Qty"
      />
      <button @click.prevent="submitItem(form)" type="submit">Add</button>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  initForm: {
    name: "",
    price: "",
    quantity: 1,
    checked: false,
  },
  data() {
    return {
      form: {
        name: "",
        price: "",
        quantity: 1,
        checked: false,
      },
    };
  },
  watch: {
    form: {
      handler() {
        this.updateStorage();
      },
      deep: true,
    },
  },
  created() {
    let storedForm = this.getStorage();
    this.form = { ...this.$options.initForm, ...storedForm };
  },
  computed: {
    ...mapGetters(["cart"]),
  },
  methods: {
    ...mapActions(["addItemToCart", "checkItems"]),
    submitItem(form) {
      this.form = { ...this.$options.initForm };
      return this.addItemToCart(form);
    },
    getStorage() {
      return JSON.parse(localStorage.getItem("myform"));
    },
    setStorage(val) {
      localStorage.setItem("myform", JSON.stringify(val));
    },
    updateStorage() {
      let storedForm = this.getStorage();
      if (!storedForm) storedForm = {};

      storedForm = JSON.parse(JSON.stringify(this.form));
      this.setStorage(storedForm);
    },
    toggle() { 
      return this.checkItems();
    },
  },
};
</script>
