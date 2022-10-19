<template>
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
        <button class="button is-link mr-3 has-background-link">
          Save Note
        </button>
        <button @click="$router.back()" class="button is-light has-light mr-2">
          Cancel
        </button>
      </div>
    </div>
  </form>
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
