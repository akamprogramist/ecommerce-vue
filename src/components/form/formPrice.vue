<template>
  <div class="field">
    <label class="label">Price</label>
    <div class="control">
      <input
        class="input"
        v-model="modelValue"
        @input="$emit('update:modelValue', modelValue)"
        ref="price"
        type="text"
        placeholder="Text input"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["update:modelValue"]);
const price = ref(null);
</script>
