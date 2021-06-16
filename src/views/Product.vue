<template>
  <div class="product">
    <div class="product-info">
      <span> {{ id }} </span> &nbsp;
      <span> {{ name }} </span> &nbsp;
      <span> {{ email }} </span> &nbsp;
    </div>
    <button v-if="inCart" @click="removeItem">
      Remove
    </button>
    <button v-else @click="addItem">
      Add to cart
    </button>
  </div>
</template>

<script>
export default {
  name: 'Product',
  props: {
    id: {
      type: Number,
      default: 0
    },
    name: {
      type: String,
      default: ''
    },
    email: {
      type: String,
      default: ''
    },
    inCart: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    addItem() {
      const {id, name, email} = this;
      const item = {id, name, email}

      this.$store.commit('addToCart', item);
    },
    removeItem() {
      const { id } = this;
  
      this.$store.commit('removeFromCart', id);
    }
  }
}
</script>
