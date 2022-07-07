import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
  },
  mutations: {
    setCart: (state, item) => {
      console.log(item);
      state.cart.push(item);
    },
  },
  actions: {
    addItemToCart({ commit }, item) {
      commit("setCart", item);
    },
  },
  modules: {},
  getters: {
    CART(state) {
      return state.cart;
    },
  },
});
