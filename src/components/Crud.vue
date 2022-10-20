<template>
  <form>
    <div class="card">
      <div class="card-content mt-5">
        <div class="field">
          <label class="label">Content</label>
          <div class="control">
            <textarea
              class="textarea"
              v-model="itemsInput.content"
              @input="$emit('update:content', itemsInput.content)"
              ref="content"
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
              @input="$emit('update:price', itemsInput.price)"
              ref="price"
              placeholder="Text input"
            />
          </div>
        </div>
        <div class="field is-grouped is-grouped-left">
          <div class="control">
            <slot name="buttons" />
          </div>
        </div>
      </div>
      <!-- <button class="button is-link mr-3 has-background-link">
          Save Item
        </button>
        <button @click="$router.back()" class="button is-light has-light mr-2">
          Cancel
        </button> -->
    </div>
  </form>
</template>
<!-- add emits from addeditnote -->

<script setup>
import { ref } from "vue";
import { ItemsStore } from "@/stores/ItemStore";
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
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
});
const emit = defineEmits(["update:name", "update:content", "update:price"]);
</script>
