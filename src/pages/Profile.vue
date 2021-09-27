<template>
  <div class="profile-container">
    <div class="greeting" style="margin-top: 30px;">
      Hello, Thinh
    </div>
    <Navbar class="nav" />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";

export default {
  name: "Profile",
  components: { Navbar },
};
</script>

<style scoped>
.profile-container {
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
