import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

export const ItemsStore = defineStore("Items", {
  state: () => ({
    items: useStorage("items", []),
    searchValue: "",
    // selectedCategory: "All",
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
    viewItem: (state) => {
      return (id) => {
        return state.items.filter((item) => {
          return item.id === id;
        })[0];
      };
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
  //   filteredItems() {
  //     if (this.selectedCategory !== "All") {
  //       return this.items.filter((item) => {
  //         return item.picked === this.selectedCategory;
  //       });
  //     }
  //     return this.items;
  //   },
  // },
});
