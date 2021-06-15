<template>
  <div id='root'>
    <div id='nav'>
      <router-link to='/'> Items</router-link>
      <router-link to='/ShoppingList'>Shopping List </router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'App',
  computed: {
    items: function () {
      return this.$store.state.catalog;
    }
  },
  mounted() {
    this.$store.dispatch('fillCatalog');
  }
}
</script>

<style scoped>
#root {
  text-align: center;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
img {
  width: 200px;
}
#nav {
  font-size: 1.5em;
  margin-bottom: 30px;
}
a {
  text-decoration: none;
  margin: 30px 25px;
  color: #333;
}
a:hover {
  text-decoration: underline;
  color: 
}
</style>
