import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueGoogleMaps from "@fawmi/vue-google-maps";

// Vue.config.productionTip = false

createApp(App)
  .use(router)
  .use(VueGoogleMaps, {
    load: {
      key: "AIzaSyCP7y5u-_HG1xVBXskdkkHPjiljLN1sqBY",
      libraries: "places",
    },
  })
  .mount("#app");
