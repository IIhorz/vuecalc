import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
  },
  mutations: {
    setCart: (state, item) => {
      localStorage.setItem("item", JSON.stringify(item));
      state.cart.push(JSON.parse(localStorage.getItem("item")));
      console.log(state.cart);
    },
  },
  plugins: [createPersistedState()],
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