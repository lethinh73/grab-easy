<template>
  <div class="profile-container">
    <div class="top">
      <button class="btn left-arrow">
        <i class="fas fa-arrow-left"></i>
      </button>
      <div class="greeting">Hello, Grab Easy!</div>
    </div>

    <div class="middle">
      <button class="btn menu">Notifications</button>
      <button class="btn menu">Log out</button>
      <span class="social-btn-group">
        <a href="http://www.facebook.com"
          ><img src="../images/profile/facebook.svg" alt="facebook"
        /></a>
        <a href="http://www.facebook.com"
          ><img src="../images/profile/instagram.svg" alt="facebook"
        /></a>
        <a href="http://www.facebook.com"
          ><img src="../images/profile/globe.svg" alt="facebook"
        /></a>
      </span>
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
/* * {
  border: 1px solid black;
} */

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

.top {
  margin: 50px auto auto 30px;
  width: fit-content;
}

.left-arrow {
  padding-left: 0;
}

.fa-arrow-left {
  font-size: 25px;
}

.greeting {
  font-size: 30px;
}

.middle {
  margin: 50px auto auto 30px;
  display: flex;
  flex-direction: column;
  justify-content: left;
  width: fit-content;
}

.menu {
  font-size: 25px;
  text-align: left;
  padding-left: 0;
  width: fit-content;
  margin: 10px auto 10px 0;
}

.social-btn-group {
  margin: 10px auto 10px 0;
}

a img {
  width: 50px;
  height: 50px;
  margin-right: 5px;
}

.nav {
  position: fixed;
  width: 100%;
  bottom: 0;
}
</style>
