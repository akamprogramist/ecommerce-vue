<template>
  <Title label="Create a Product"></Title>
  <form @submit.prevent="CreateItem">
    <div class="card">
      <div class="card-content mt-5">
        <FormName v-model="itemsInput.name" ref="name"></FormName>
        <FormCategory v-model="itemsInput.picked" ref="picked"></FormCategory>
        <FormContent v-model="itemsInput.content" ref="content"></FormContent>
        <FormPrice v-model="itemsInput.price" ref="price"></FormPrice>
        <button @submit.prevent="CreateItem">submit</button>
      </div>
    </div>
  </form>
</template>

<script setup>
import { ItemsStore } from "@/stores/ItemStore";
import Title from "../components/Title.vue";
import { ref } from "vue";
import FormName from "../components/form/formName.vue";
import FormContent from "../components/form/formContent.vue";
import FormPrice from "../components/form/formPrice.vue";
import FormCategory from "../components/form/formCategory.vue";
const ItemStore = ItemsStore();
let currentDate = new Date().getTime(),
  id = currentDate.toString();
const itemsInput = ref({
  name: "",
  picked: "",
  content: "",
  price: "",
  id,
});
const CreateItem = () => {
  ItemStore.addTodo(itemsInput.value);
  itemsInput.value = { name: "", picked: "", content: "", price: "", id };
};
</script>
