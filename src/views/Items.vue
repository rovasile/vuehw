<template>
  <template v-for="item in items" :key="item.phoneId">
    <Product :id="item.phoneId" :name="item.model" :email="item.price"/>
  </template>
</template>

<script>
import Product from './Product';

export default {
  name: 'Items',
  computed: {
    items: function () {
      return this.$store.state.catalog;
    }
  },
  components: {
    Product,
  }
}
</script>
