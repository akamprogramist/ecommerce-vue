<template>
  <Title label="Create a Product"></Title>
  <div>
    <form @submit.prevent="CreateItem">
      <div class="card">
        <div class="card-content mt-5">
          <div class="field">
            <label class="label">Name</label>
            <div class="control">
              <input
                class="input"
                v-model="itemsInput.name"
                type="text"
                placeholder="Text input"
              />
            </div>
          </div>
          <label class="label">Category</label>
          <div class="control mb-3">
            <label class="radio">
              <input
                type="radio"
                v-model="itemsInput.picked"
                value="cars"
                id="cars"
                name="answer"
              />
              Cars
            </label>
            <label class="radio">
              <input
                type="radio"
                v-model="itemsInput.picked"
                value="clothes"
                id="clothes"
                name="answer"
              />
              Clothes
            </label>
            <label class="radio">
              <input
                type="radio"
                v-model="itemsInput.picked"
                value="electronics"
                id="electronics"
                name="answer"
              />
              Electronics
            </label>
          </div>

          <div class="field">
            <label class="label">Content</label>
            <div class="control">
              <textarea
                class="textarea"
                v-model="itemsInput.content"
                placeholder="Textarea"
              ></textarea>
            </div>
          </div>
          <div class="field">
            <label class="label">Price</label>
            <div class="control">
              <input
                class="input"
                type="text"
                v-model="itemsInput.price"
                placeholder="Text input"
              />
            </div>
          </div>
          <button class="button is-link has-background-link">submit</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ItemsStore } from "@/stores/ItemStore";
import Title from "../components/Title.vue";
import { ref } from "vue";
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
