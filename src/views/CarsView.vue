<template>
  <Title label="Cars"></Title>
  <Item v-for="item in ItemStore.itemCatCars" :key="item.id" :item="item" />
</template>
<script setup>
import Item from "@/components/items/Item.vue";
import Title from "../components/Title.vue";
import { ItemsStore } from "@/stores/ItemStore";
const ItemStore = ItemsStore();
</script>
