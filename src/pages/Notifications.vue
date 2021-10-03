<template>
  <div class="container">
    <h1 class="offers">Notifications</h1>
    <div class="row">
      <div class="logobox col text-center">
        <img class="logo" src="../images/notif@2x.png" alt="logo" />
        <p class="nothing">You don't have any notifications yet.</p>
      </div>
      <div class="navbar">
        <Navbar />
      </div>
    </div>
  </div>
</template>
<script scoped>
import Navbar from "../components/Navbar.vue";
export default {
  components: { Navbar },
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

.logo {
  width: 100px;
  height: auto;
}
.logobox {
  width: 100%;
  position: relative;
}
.nothing {
  font-family: "roboto";
  font-size: 16px;
}

.offers {
  position: absolute;
  top: 30px;
  left: 30px;
  width: 100%;
  height: 40px;
  text-align: left;
  font: normal normal bold 2rem Roboto;
  letter-spacing: -0.3px;
  color: #1a1824;
}

.navbar {
  position: absolute;
  width: 100%;
  bottom: 0;
  overflow: hidden;
  padding: 0;
}
</style>
