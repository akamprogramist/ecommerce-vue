<template>
  <div class="field">
    <label class="label is-medium">Search For A Product</label>
    <div class="control">
      <input
        class="input"
        id="search"
        name="search"
        v-model="ItemStore.searchValue"
        type="search"
        placeholder="Search"
      />
    </div>
  </div>
</template>

<script setup>
import { ItemsStore } from "@/stores/ItemStore";
const ItemStore = ItemsStore();
</script>
