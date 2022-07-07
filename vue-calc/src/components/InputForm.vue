<template>
  <div>
    <form class="form" action="submit">
      <input
        v-model="item.name"
        class="form__name"
        type="text"
        placeholder="Product name"
      />
      <input
        v-model="item.price"
        class="form__price"
        type="text"
        placeholder="Price"
      />
      <input
        v-model="item.quantity"
        class="form__quantity"
        type="text"
        placeholder="Qty"
      />
      <button @click.prevent="submitItem(item)" type="submit">Add</button>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      item: [],
    };
  },
  computed: {
    ...mapGetters(['cart'])
  },
  methods: {
    ...mapActions(["addItemToCart"]),
    submitItem(item) {
      return this.addItemToCart(item)
    },
  },
};
</script>
