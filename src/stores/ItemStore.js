import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";
export const ItemsStore = defineStore("Items", {
  state: () => ({
    items: useStorage("items", []),
    searchValue: "",
  }),
  actions: {
    addTodo(item) {
      this.items.push({
        ...item,
      });
    },
    deleteItem(itemId) {
      this.items = this.items.filter((item) => {
        return item.id !== itemId;
      });
    },
    update(item) {
      this.item = () => {
        useStorage("items", item);
      };
    },
  },
  getters: {
    totalItemsCount: (state) => {
      return state.items.length;
    },
    viewItem: (state) => {
      return (id) => {
        return state.items.filter((item) => {
          return item.id === id;
        })[0];
      };
    },
    itemCatCars() {
      return this.items.filter((item) => item.picked === "cars");
    },
    itemCatClothes() {
      return this.items.filter((item) => item.picked === "clothes");
    },
    itemCatElectronics() {
      return this.items.filter((item) => item.picked === "electronics");
    },
    searchItems() {
      if (this.searchValue.trim().length > 0) {
        return this.items.filter((item) =>
          item.name
            .toLowerCase()
            .includes(this.searchValue.trim().toLowerCase())
        );
      }
      return this.items;
    },
  },

  // getters: {
  // },
});
