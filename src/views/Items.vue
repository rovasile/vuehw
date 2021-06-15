<template>
  <template v-for="item in items" :key="item.id">
    <Product :id="item.id" :name="item.name" :email="item.email"/>
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
