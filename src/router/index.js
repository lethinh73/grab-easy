import { createRouter, createWebHistory } from "vue-router";
import Login from "../pages/Login.vue";
import Venue from "../pages/Venue.vue";
import GoogleMap from "../pages/GoogleMap.vue";
import Items from "../pages/Items.vue";
import Offers from "../pages/Offers.vue";
import Category from "../pages/Category.vue";
import orderSuccess from "../pages/orderSuccess.vue"
import Profile from "../pages/Profile.vue";
import Offers2 from "../pages/Offers2.vue";

const routes = [
  { path: "/", name: "Login", component: Login },
  { path: "/venue", name: "Venue", component: Venue },
  { path: "/GoogleMap", name: "Map", component: GoogleMap },
  { path: "/items", name: "Items", component: Items },
  { path: "/offers", name: "Offers", component: Offers },

  { path: "/category", name: "Category", component: Category },

  { path: "/orderSuccess", name: "orderSuccess", component: orderSuccess },
  { path: "/profile", name: "Profile", component: Profile },
  { path: "/offers2", name: "Offers2", component: Offers2 },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
