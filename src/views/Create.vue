<template>
  <Title label="Create a Product"></Title>
  <form @submit.prevent="CreateItem">
    <div class="card">
      <div class="card-content mt-5">
        <FormName v-model="itemsInput.name" ref="name"></FormName>
        <h1 class="label">Category</h1>
        <FormCategory cats="Cars" value="cars" v-model="itemsInput.picked" />
        <FormCategory
          cats="Clothes"
          value="clothes"
          v-model="itemsInput.picked"
        />
        <FormCategory
          cats="Electronics"
          value="electronics"
          v-model="itemsInput.picked"
        />
        <FormContent v-model="itemsInput.content" ref="content"></FormContent>

        <FormPrice v-model="itemsInput.price" ref="price"></FormPrice>
        <div class="field is-grouped is-grouped-left">
          <div class="control">
            <button
              type="submit"
              class="button is-link mt-3 has-background-link"
            >
              Add Product
            </button>
          </div>
        </div>
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
