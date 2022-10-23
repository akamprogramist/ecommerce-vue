<template>
  <label class="label">Category</label>
  <div class="control mb-3">
    <label class="radio">
      <input
        type="radio"
        v-model="modelValue"
        @input="$emit('update:modelValue', modelValue)"
        ref="picked"
        value="cars"
        id="cars"
        name="answer"
      />
      Cars
    </label>
    <label class="radio">
      <input
        type="radio"
        v-model="modelValue"
        @input="$emit('update:modelValue', modelValue)"
        ref="picked"
        value="clothes"
        id="clothes"
        name="answer"
      />
      Clothes
    </label>
    <label class="radio">
      <input
        type="radio"
        v-model="modelValue"
        @input="$emit('update:modelValue', modelValue)"
        ref="picked"
        value="electronics"
        id="electronics"
        name="answer"
      />
      Electronics
    </label>
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
const picked = ref(null);
</script>
