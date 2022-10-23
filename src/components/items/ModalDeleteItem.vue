<template>
  <div class="modal is-active p-2">
    <div class="modal-background"></div>
    <div class="modal-card" ref="modalCardRef">
      <header class="modal-card-head">
        <p class="modal-card-title">Delete Item ?</p>
        <button class="delete" aria-label="close" @click="closeModal"></button>
      </header>
      <section class="modal-card-body">
        Are you sure you want to delete this Item ?
      </section>
      <footer class="modal-card-foot is-justify-content-flex-end">
        <button class="button" @click="closeModal">Cancel</button>
        <button class="button is-danger" @click="removeItem(itemId)">
          Delete
        </button>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import { onClickOutside } from "@vueuse/core";
import { ItemsStore } from "../../stores/ItemStore";
const router = useRouter();
const ItemStore = ItemsStore();
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  itemId: {
    type: String,
    required: true,
  },
});
const removeItem = (itemId) => {
  ItemStore.deleteItem(itemId);
  router.push("/");
};
const emit = defineEmits(["update:modelValue"]);
const closeModal = () => {
  emit("update:modelValue", false);
};

const modalCardRef = ref(null);
onClickOutside(modalCardRef, closeModal);

const handleKeyboard = (e) => {
  if (e.key === "Escape") closeModal();
};
onMounted(() => {
  document.addEventListener("keyup", handleKeyboard);
});
onUnmounted(() => {
  document.removeEventListener("keyup", handleKeyboard);
});
</script>
