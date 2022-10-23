<template>
  <div class="field">
    <label class="label">Content</label>
    <div class="control">
      <input
        class="input"
        v-model="modelValue"
        @input="$emit('update:modelValue', modelValue)"
        ref="content"
        type="text"
        placeholder="Description"
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
const content = ref(null);
</script>
