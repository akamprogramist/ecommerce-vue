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
