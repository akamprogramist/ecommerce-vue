<template>
  <div class="field">
    <label class="label is-medium">Search For A Product</label>
    <div class="control">
      <input
        class="input"
        id="search"
        name="search"
        ref="search"
        v-model="modelValue"
        @input="$emit('update:modelValue', modelValue)"
        type="search"
        placeholder="Search"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { ItemsStore } from "@/stores/ItemStore";
const ItemStore = ItemsStore();
const emit = defineEmits(["update:modelValue"]);
const search = ref(null);
const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
});
</script>
