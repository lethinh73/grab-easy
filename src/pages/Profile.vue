<template>
  <div class="profile-container" style="background-color: green">
    <div class="greeting">
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
body {
  position: relative;
  width: 100%;
  height: 100vh;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0;
  padding: 0;
}

.profile-container {
  position: absolute;
  width: 100%;
  height: 100%;
}

.nav {
  position: fixed;
  width: 100%;
  bottom: 0;
}
</style>
