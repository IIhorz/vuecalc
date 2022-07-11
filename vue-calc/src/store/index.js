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
      if (item.name && item.price && item.quantity) {
        state.cart.push(item)
      } else {
        alert('please enter valid values')
      }
    },
    deleteItem: (state) => {
      for (let i = 0; i < state.cart.length; i++) {
        if (state.cart[i].checked === true) {
          state.cart.splice(i, 1);
        }
      }
    },
    setCheckboxes: (state) => {
      state.cart.map(el => {
        el.checked = true
      })
    }
  },
  plugins: [createPersistedState()],
  actions: {
    addItemToCart({
      commit
    }, item) {
      commit("setCart", item);
    },
    deleteItemFromCart({
      commit
    }, item) {
      commit('deleteItem', item)
    },
    checkItems({
      commit
    }, item) {
      commit('setCheckboxes', item)
    }
  },
  modules: {},
  getters: {
    cart(state) {
      return state.cart;
    },
  },
});