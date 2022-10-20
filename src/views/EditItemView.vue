<template>
  <Title label="Edit The Product"></Title>
  <form @submit.prevent="CreateItem">
    <FormName v-model="itemsInput.name" ref="name"></FormName>
    <FormContent v-model="itemsInput.content" ref="content"></FormContent>
    <FormPrice v-model="itemsInput.price" ref="price"></FormPrice>
    <button>submit</button>
  </form>
</template>
<script setup>
import { useRoute, useRouter } from "vue-router";
import { ref } from "vue";
import { ItemsStore } from "@/stores/ItemStore";
import FormName from "../components/form/formName.vue";
import FormContent from "../components/form/formContent.vue";
import FormPrice from "../components/form/formPrice.vue";
import Title from "../components/Title.vue";
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
