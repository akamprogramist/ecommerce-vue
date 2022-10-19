<template>
  <div class="content columns mt-3 is-large is-centered">
    <label v-if="label"
      ><h1>{{ label }}</h1></label
    >
  </div>
</template>
<script setup>
const props = defineProps({
  label: {
    type: String,
  },
});
</script>
