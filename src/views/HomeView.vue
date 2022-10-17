<template>
  <div>
    <div class="field">
      <label class="label is-medium">Search For A Product</label>
      <div class="control">
        <input class="input" type="text" placeholder="Search" />
      </div>
    </div>

    <Item v-for="item in ItemStore.items" :key="item.id" :item="item" />
  </div>
</template>
<script setup>
import Item from "@/components/items/Item.vue";
import { ItemsStore } from "@/stores/ItemStore";
const ItemStore = ItemsStore();
</script>
