<template>
  <div class="rowheight container">
    <div class="Offers">
      <h1 class="Offers">Offers</h1>
    </div>
    <div class=" rowheight row justify-content-center d-flex align-items-center">
      <div class="logobox col-4 col-lg-2 text-center">
        <img class="logo" src="../images/Giftt@2x.png" alt="logo" />
        <p class="wait">Please wait, good things take time</p></div>
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
  height: 100%;
}
.logobox {
  margin-top: 10%;
  width: fit-content;
}
.wait {
  font-family: "roboto";
  font-size: 16px ;
  
}

.Offers {
  margin-top: 10vh;
  top: 16px;
left: 30px;
width: 83px;
height: 39px;
text-align: left;
font: normal normal bold 30px/36px Roboto;
letter-spacing: -0.3px;
color: #1A1824;
opacity: 1;
}

.rowheight{height:100%;}
@media (min-width: 300px) {
  .Offers {
    margin-top: 5%;
  }
}
@media (min-width: 300px) {
  .logo {
    width: 130px;
    height: fit-content;
  }
}
@media (min-width: 702px) {
  .logo {
    width: 160px;
    height: fit-content;
  }
}
@media (min-width: 992px) {
  .logo {
    width: 160px;
    height: fit-content;
  }
}

@media (min-width: 1200px) {
  .logo {
    width: 160px;
    height: fit-content;
  }
}
</style>
