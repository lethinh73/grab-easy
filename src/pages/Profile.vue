<template>
  <div class="profile-container">
    <div class="top">
      <button class="btn">
        <i class="fas fa-arrow-left"></i>
      </button>
      <div class="greeting">Hello, Grab Easy!</div>
    </div>

    <div class="middle">
      <button class="btn menu">Notifications</button>
      <button class="btn menu">Address</button>
      <button class="btn menu">Log out</button>
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
  background-color: orange;
}

.top {
  margin: 50px auto auto 30px;
  border: 1px black solid;
}

.fa-arrow-left {
  font-size: 25px;
}

.greeting {
  font-size: 30px;
}

.middle {
  border: 1px solid black;
  margin: 50px auto auto 30px;
  display: flex;
  flex-direction: column;
  justify-content: left;
}

.menu {
  border: 1px solid black;
}

.nav {
  position: fixed;
  width: 100%;
  bottom: 0;
}
</style>
