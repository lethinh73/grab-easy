import { createRouter, createWebHistory } from "vue-router";
import Login from "../pages/Login.vue";
import Venue from "../pages/Venue.vue";
import Venue2 from "../pages/Venue2.vue";
import GoogleMap from "../pages/GoogleMap.vue";
import Items from "../pages/Items.vue";
import Offers from "../pages/Offers.vue";
import orderSuccess from "../pages/orderSuccess.vue";
import Profile from "../pages/Profile.vue";
import Offers2 from "../pages/Offers2.vue";
import Notifications from "../pages/Notifications.vue";
import Notifications2 from "../pages/Notifications2.vue";
import categories from "../pages/Categories.vue";
import MyOrder from "../pages/MyOrder.vue";

const routes = [
  { path: "/", name: "Login", component: Login },
  { path: "/venue", name: "Venue", component: Venue },
  { path: "/venue2", name: "Venue2", component: Venue2 },
  { path: "/GoogleMap", name: "Map", component: GoogleMap },
  { path: "/items", name: "Items", component: Items },
  { path: "/offers", name: "Offers", component: Offers },
  { path: "/orderSuccess", name: "orderSuccess", component: orderSuccess },
  { path: "/profile", name: "Profile", component: Profile },
  { path: "/offers2", name: "Offers2", component: Offers2 },
  { path: "/notifications", name: "Notifications", component: Notifications },
  { path: "/categories", name: "Categories", component: categories },
  { path: "/notifications2", name: "Notifications2", component: Notifications2 },
  { path: "/myorders", name: "MyOrder", component: MyOrder },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
