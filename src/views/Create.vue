<template>
  <Title label="Create a Product"></Title>
  <Crud @CreateItem="CreateItem">
    <template v-slot:buttons>
      <button class="button is-link has-background-link">submit</button>
    </template>
  </Crud>
</template>

<script setup>
import { ItemsStore } from "@/stores/ItemStore";
import Title from "../components/Title.vue";
import { ref } from "vue";
import Crud from "../components/Crud.vue";
const ItemStore = ItemsStore();
let currentDate = new Date().getTime(),
  id = currentDate.toString();
const itemsInput = ref({
  name: "",
  picked: null,
  content: "",
  price: "",
  id,
});
const CreateItem = () => {
  ItemStore.addTodo(itemsInput.value);
  itemsInput.value = { name: "", picked: null, content: "", price: "", id };
};
</script>
