<template>
  <div class="rowheight container">
    <div class="Offers">
      <h1 class="Offers">Notifications</h1>
    </div>
    <div
      class=" rowheight row justify-content-center d-flex align-items-center"
    >
      <div class="logobox col-4 col-lg-2 text-center">
        <img class="logo" src="../images/notif@2x.png" alt="logo" />
        <p class="wait">You don't have any notifications yet.</p>
      </div>
    </div>
  </div>
  <Navbar class="fixed-bottom" />
</template>
<script scoped>
import Navbar from "../components/Navbar.vue";
export default {
  components: { Navbar },
};
</script>
<style scoped>
.logo {
  width: 100%;
  height: auto;
  
}
.logobox {
  margin-top: calc(50vh + 125px);
  width: auto;
  position: fixed;
}
.wait {
  font-family: "roboto";
  font-size: 16px;
  margin-top: 5%;
}

.Offers {
  margin-top: 10vh;
  top: 16px;
  left: 30px;
  width: 83px;
  height: 39px;
  text-align: left;
  font: normal normal bold 1.8rem Roboto;
  letter-spacing: -0.3px;
  color: #1a1824;
  opacity: 1;
  
}

.rowheight {
  height: 100%;
}
@media (min-width: 300px) {
  .Offers {
    margin-top: 5%;
  }
}
@media (min-width: 300px) {
  .logo {
    width: 130px;
    height: auto;
  }
}
@media (min-width: 702px) {
  .logo {
    width: 160px;
    height: auto;
  }
}
@media (min-width: 992px) {
  .logo {
    width: 160px;
    height: auto;
  }
}

@media (min-width: 1200px) {
  .logo {
    width: 160px;
    height: auto;
  }
}
</style>
