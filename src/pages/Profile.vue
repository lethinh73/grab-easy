<template>
  <div class="profile-container">
    <div class="top">
      <button class="btn left-arrow" v-on:click="goBack()">
        <i class="fas fa-arrow-left"></i>
      </button>
      <div class="greeting">Hello, User!</div>
    </div>

    <div class="middle">
      <button
        class="btn menu"
        v-on:click="gotoPage('/notifications')"
        style="display: flex; flex-direction: row; align-items: center"
      >
        Notifications
        <div class="num-notification">5</div>
      </button>
      <button class="btn menu" v-on:click="gotoPage('/')">Log out</button>
      <span class="social-btn-group">
        <a href="http://www.facebook.com"><img src="../images/profile/facebook.svg" alt="facebook"/></a>
        <a href="http://www.instagram.com"><img src="../images/profile/instagram.svg" alt="instagram"/></a>
        <a href="#"><img src="../images/profile/globe.svg" alt="globe"/></a>
      </span>
    </div>

    <div class="bottom">
      <p>Terms and Conditions</p>
      <p>Privacy policy</p>
      <p>Version 1.43</p>
      <div class="nav">
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
    gotoPage: function(destination) {
      this.$router.push(destination);
    },
  },
};
</script>

<style scoped>
.profile-container {
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 420px;
  height: 100%;
  min-height: 200px;
}

.top {
  position: relative;
  margin: 20px auto 30% 30px;
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
  font-size: 2rem;
  font-weight: bold;
}

.middle {
  position: relative;
  margin: 0 auto auto 30px;
  height: fit-content;
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: left;
}

.menu {
  font-size: 20px;
  text-align: left;
  padding-left: 0;
  width: fit-content;
  margin: 0 auto 0 0;
}

.btn:hover {
  color: gray;
}

.num-notification {
  position: relative;
  margin-left: 10px;
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  color: white;
  background-color: red;
  border-radius: 100%;
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
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
}

.bottom p {
  position: relative;
  margin-left: 30px;
}

.nav {
  position: relative;
  width: 100%;
}
</style>
