<template>
  <div class="product">
    <!-- <div class="product-info">
      <span> {{ id }} </span> &nbsp;
      <span> {{ name }} </span> &nbsp;
      <span> {{ email }} </span> &nbsp;
    </div> -->


      <!-- <Button label="Remove" v-if="inCart" @click="removeItem" />
      <Button label="Add item" v-else @click="addItem" /> -->

    <Card style="width: 25rem; margin-bottom: 2em; margin:auto;">
        <template #title>
            {{name}}
        </template>
        <template #content>
            {{email}} RON
        </template>
        <template #footer>
      <Button label="Remove" v-if="inCart" @click="removeItem" class="p-button-danger" />
      <Button label="Add item" v-else @click="addItem" class="p-button-success" />
        </template>
    </Card>
    <br>

  </div>
</template>

<script>
import Button from 'primevue/button';
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
