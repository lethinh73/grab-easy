<template>
  <div class="rowheight">
    <h1 class="Offers">Offers</h1>
    <div class=" rowheight row">
      <div class="logobox col text-center">
        <img class="logo" src="../images/Giftt@2x.png" alt="logo" />
        <p class="wait">Please wait, good things take time</p>
      </div>
    </div>
  </div>
  <div class="navbar">
    <Navbar style="width: 100%" />
  </div>
</template>
<script scoped>
import Navbar from "../components/Navbar.vue";
export default {
  components: { Navbar },
};
</script>
<style scoped>
.logo {
  width: 100px;
  height: auto;
}
.logobox {
  top: calc(50% - 125px);
  width: 100%;
  position: absolute;
}
.wait {
  font-family: "roboto";
  font-size: 16px;
}

.Offers {
  position: absolute;
  margin-top: 30px;
  width: 83px;
  height: 39px;
  text-align: left;
  font: normal normal bold 2rem Roboto;
  letter-spacing: -0.3px;
  color: #1a1824;
  z-index: 1;
}

.rowheight {
  height: 100%;
  width: 100%;
  position: absolute;
  margin: 0;
  background-color: green;
}

.navbar {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0;
}
</style>
