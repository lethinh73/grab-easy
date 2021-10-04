<template>
  <div class="container">
    <h1 class="offers">
      <button class="btn left-arrow" style="padding-left: 0" v-on:click="goBack()">
        <i class="fas fa-arrow-left" style="font-size: 30px"></i>
      </button>
    </h1>
    <h1 class="offers">Notifications</h1>
    <div class="row">
      <div class="logobox col text-center">
        <img class="logo" src="../images/notif@2x.png" alt="logo" v-on:click="gotoPage('/notifications2')" />
        <p class="nothing">You don't have any notifications yet.</p>
      </div>
    </div>
    <div class="navbar">
      <Navbar />
    </div>
  </div>
</template>
<script scoped>
import Navbar from "../components/Navbar.vue";
export default {
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
.container {
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 420px;
  height: 100%;
}

.row {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.logo {
  width: 100px;
  height: auto;
}
.logobox {
  margin-top: calc(50vh - 200px);
  width: 100%;
  position: absolute;
}
.nothing {
  font-family: "roboto";
  font-size: 16px;
}

.offers {
  position: relative;
  margin-top: 20px;
  margin-left: 20px;
  width: fit-content;
  height: 40px;
  text-align: left;
  font: normal normal bold 2rem Roboto;
  letter-spacing: -0.3px;
  color: #1a1824;
}

.navbar {
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;
  overflow: hidden;
  padding: 0;
}
</style>
