<template>
  <template v-for="item in items" :key="item.cartIndex">
    <Product :id="item.cartIndex" :name="item.name" :email="item.email" 
      :inCart="true"/>
  </template>
</template>

<script>
import Product from './Product';

export default {
  name: 'ShoppingList',
  computed: {
    items: function () {
      return this.$store.state.cart;
    }
  },
  components: {
    Product,
  }
}
</script>
