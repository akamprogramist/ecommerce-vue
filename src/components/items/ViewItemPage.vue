<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img
          src="https://bulma.io/images/placeholders/1280x960.png"
          alt="Placeholder image"
        />
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">{{ item.name }}</p>
          <p class="subtitle is-6">{{ item.picked }}</p>
        </div>
      </div>

      <div class="content">
        {{ item.content }}
      </div>
      <p class="title is-4">{{ item.price }}$</p>
    </div>
  </div>
  <EditDeleteButton :item="item" />

  <ModalDeleteItem
    v-if="modals.deleteItem"
    v-model="modals.deleteItem"
    :itemId="item.id"
  />
</template>

<script setup>
import { reactive } from "vue";
import EditDeleteButton from "./EditDeleteButton.vue";
import ModalDeleteItem from "./ModalDeleteItem.vue";
import { useRoute } from "vue-router";
import { ItemsStore } from "@/stores/ItemStore";
const ItemStore = ItemsStore();
const route = useRoute();
const item = ItemStore.viewItem(route.params.id);
const modals = reactive({
  deleteItem: false,
});
</script>
