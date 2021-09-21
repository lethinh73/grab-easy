import { createRouter, createWebHistory } from "vue-router";
import Login from "../pages/Login.vue";
import Venue from "../pages/Venue.vue";
import GoogleMap from '../pages/GoogleMap.vue'

const routes = [
  { path: "/", name: "Login", component: Login },
  { path: "/venue", name: "Venue", component: Venue },
  { path: "/GoogleMap", name: "Map", component: GoogleMap }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});


export default router;
