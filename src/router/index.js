import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import CarsView from "../views/CarsView.vue";
import ClothesView from "../views/ClothesView.vue";
import ElectronicsView from "../views/ElectronicsView.vue";
import ViewItemPage from "../components/items/ViewItemPage.vue";
import Create from "../views/Create.vue";
import EditItem from "../components/items/EditItem.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/create",
      name: "create",
      component: Create,
    },
    {
      path: "/cars",
      name: "cars",
      component: CarsView,
    },
    {
      path: "/electronics",
      name: "electronics",
      component: ElectronicsView,
    },
    {
      path: "/clothes",
      name: "clothes",
      component: ClothesView,
    },
    {
      path: "/edititem/:id",
      name: "edititem",
      component: EditItem,
    },
    {
      path: "/viewitempage/:id",
      name: "viewitempage",
      component: ViewItemPage,
    },
  ],
});
export default router;
