<template>
  <div class="profile-con">
    <div class="greeting" style="margin-top: 30px;">
      Hello, Thinh <fontawesome icon={["fal", "coffee"]} />
    </div>
    <Navbar class="nav" />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import * as fontawesome from "@fortawesome/fontawesome-free";

export default {
  name: "Profile",
  components: { Navbar, fontawesome },
};
</script>

<style scoped>
.profile-con {
  width: 100%;
  height: 100vh;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0;
}

.nav {
  position: fixed;
  width: 100%;
  bottom: 0;
}
</style>
