<template>
  <div>
    <form class="form" action="submit">
      <input
        v-model="form.name"
        class="form__name"
        type="text"
        placeholder="Product name"
      />
      <input
        v-model="form.price"
        class="form__price"
        type="text"
        placeholder="Price"
      />
      <input
        v-model="form.quantity"
        class="form__quantity"
        type="text"
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
    quantity: "",
  },
  data() {
    return {
      form: {
        name: "",
        price: "",
        quantity: "",
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
    ...mapActions(["addItemToCart"]),
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
  },
};
</script>
