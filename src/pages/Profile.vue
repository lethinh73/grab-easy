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
        <a href="http://www.instagram.com"><img src="../images/profile/instagram.svg" alt="instagram"/></a>
        <a href="#"><img src="../images/profile/globe.svg" alt="globe"/></a>
      </span>
    </div>

    <div class="bottom">
      <p>Terms and Conditions</p>
      <p>Privacy policy</p>
      <p>Version 1.43</p>
      <Navbar class="nav" />
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
.profile-container {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  border: 1px black solid;
}

.top {
  position: relative;
  margin: 0 auto 30% 30px;
  width: fit-content;
  border: 1px solid black;
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
  position: relative;
  margin: 0 auto auto 30px;
  height: fit-content;
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: left;
  border: 1px solid black;
}

.menu {
  font-size: 20px;
  text-align: left;
  padding-left: 0;
  width: fit-content;
  margin: 0 auto 0 0;
}

.social-btn-group {
  margin: 10px auto 10px 0;
}

a img {
  width: 30px;
  height: 30px;
  margin-right: 30px;
}

.bottom {
  position: relative;
  border: 1px solid black;
  margin: auto 0 0 0;
  width: 100%;
}

.bottom p {
  margin-left: 30px;
}

.nav {
  position: relative;
  width: 100%;
}
</style>
