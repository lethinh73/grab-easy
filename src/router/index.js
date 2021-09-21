import { createRouter, createWebHistory } from "vue-router";
import Login from "../pages/Login.vue";
import Venue from "../pages/Venue.vue";
import Items from "../pages/Items.vue";

const routes = [
  { path: "/", name: "Login", component: Login },
  { path: "/venue", name: "Venue", component: Venue },
  { path: "/items", name: "Items", component: Items },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;
