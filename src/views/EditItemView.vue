<template>
  
</template>
<script setup>
import { useRoute, useRouter } from "vue-router";
import { ref } from "vue";
import { ItemsStore } from "@/stores/ItemStore";
const ItemStore = ItemsStore();
const route = useRoute();
const router = useRouter();
const itemsInput = ref({
  name: "",
  picked: null,
  content: "",
  price: "",
});

itemsInput.value = ItemStore.viewItem(route.params.id);
const CreateItem = () => {
  ItemStore.update(route.params.id, itemsInput.value);
  router.push("/");
};
</script>
