<template>
  <Title label="Edit The Product"></Title>
  <form @submit.prevent="CreateItem">
    <div class="card">
      <div class="card-content mt-5">
        <FormName v-model="itemsInput.name" ref="name"></FormName>
        <FormCategory v-model="itemsInput.picked" ref="picked"></FormCategory>
        <FormContent v-model="itemsInput.content" ref="content"></FormContent>
        <FormPrice v-model="itemsInput.price" ref="price"></FormPrice>
        <div class="field is-grouped is-grouped-left">
          <div class="control">
            <button
              type="submit"
              class="button is-link mt-3 has-background-link"
            >
              Update Product
            </button>
            <button
              @click="$router.back()"
              class="button is-light mt-3 has-light ml-2"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
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
import FormCategory from "../components/form/formCategory.vue";
const ItemStore = ItemsStore();
const route = useRoute();
const router = useRouter();
const itemsInput = ref({
  name: "",
  picked: "",
  content: "",
  price: "",
});

itemsInput.value = ItemStore.viewItem(route.params.id);
const CreateItem = () => {
  ItemStore.update(route.params.id, itemsInput.value);
  router.push("/");
};
</script>
