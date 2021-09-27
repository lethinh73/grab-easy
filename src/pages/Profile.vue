<template>
  <div class="profile-container">
    <div class="top">
      <button class="btn left-arrow" v-on:click="goBack()">
        <i class="fas fa-arrow-left"></i>
      </button>
      <div class="greeting">Hello, User!</div>
    </div>

    <div class="middle">
      <button class="btn menu">Notifications</button>
      <button class="btn menu">Log out</button>
      <span class="social-btn-group">
        <a href="http://www.facebook.com" v-on:click="gotoPage()"
          ><img src="../images/profile/facebook.svg" alt="facebook"
        /></a>
        <a href="http://www.instagram.com"
          ><img src="../images/profile/instagram.svg" alt="instagram"
        /></a>
        <a href="#"><img src="../images/profile/globe.svg" alt="globe"/></a>
      </span>
    </div>

    <div class="bottom fixed-bottom">
      <p>Terms and Conditions</p>
      <p>Privacy policy</p>
      <p>Version 1.43</p>
      <div style="width: 100%">
        <Navbar />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";

export default {
  name: "Profile",
  components: { Navbar },
  methods: {
    goBack: function() {
      window.history.back();
    },
  },
};
</script>

<style scoped>
/* * {
  border: 1px solid black;
} */

body {
  display: flex;
  flex-flow: column;
  flex-wrap: nowrap;
  position: fixed;
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
  width: 100%;
  height: 100%;
}

.top {
  margin: 2% auto auto 30px;
  width: fit-content;
}

.left-arrow {
  padding-left: 0;
  margin-bottom: 20px;
}

.fa-arrow-left {
  font-size: 30px;
}

.greeting {
  font-size: 30px;
}

.middle {
  position: fixed;
  bottom: calc(50% - 30px);
  margin: auto auto auto 30px;
  display: flex;
  flex-direction: column;
  justify-content: left;
  width: fit-content;
}

.menu {
  font-size: 20px;
  text-align: left;
  padding-left: 0;
  width: fit-content;
  margin: 0 auto 10px 0;
}

.social-btn-group {
  margin: 20px auto 10px 0;
}

a img {
  width: 30px;
  height: 30px;
  margin-right: 30px;
}

.bottom {
  position: absolute;
  margin: auto auto 10px 0 !important;
  width: 100%;
}

.bottom p {
  margin-left: 30px;
}
</style>
