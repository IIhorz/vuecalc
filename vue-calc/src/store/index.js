import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
  },
  mutations: {
    setCart: (state, item) => {
      localStorage.setItem('item', JSON.stringify(item));
      state.cart.push(JSON.parse(localStorage.getItem("item")));
      console.log(state.cart)
    },
  },
  actions: {
    addItemToCart({
      commit
    }, item) {
      commit("setCart", item);
    },
  },
  modules: {},
  getters: {
    cart(state) {
      return state.cart;
    },
  },
});