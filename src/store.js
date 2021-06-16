import { createStore } from 'vuex';
import axios from 'axios';

export const store = createStore({
  state: {
    catalog: [],
    cart: [],
    cartIndex: 0
  },

  mutations: {
    setCatalog(state, items) {
      state.catalog = items;
    },
    addToCart(state, item) {
      item['cartIndex'] = state.cartIndex;
      state.cart.push(item);
      
      state.cartIndex ++;
    },
    removeFromCart(state, id) {
      state.cart = state.cart.filter(item => {
        return item.cartIndex != id;
      })
    }
  },

  actions: {
    fillCatalog({commit}) {
      axios.get('http://localhost:3000/api/latest/phone')
        .then(response => {
          console.log(response.data.entry);
          commit('setCatalog', response.data.entry);
        })
    }
  }
});
