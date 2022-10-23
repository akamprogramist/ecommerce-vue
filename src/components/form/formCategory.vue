<template>
  <label class="radio mb-3 ml-5">
    {{ cats }}
    <input
      name="answer"
      type="radio"
      v-model="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :value="value"
    />
  </label>
</template>

<script setup>
const emit = defineEmits(["update:modelValue"]);
const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    default: undefined,
  },
  cats: { type: String, default: "", required: true },
});
</script>

<!-- <template>
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
</script> -->

<style scoped>
.wrapper {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 6px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-size: 16px;
}
</style>
