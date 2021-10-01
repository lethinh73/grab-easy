<template>
  <div class="Offers2">
    <h1 class="Offers">Offers</h1>
  </div>
  <div class=" container">
    <div class=" rowheight row ">
      <div class="logobox col-2">
        <img class="logo" src="../images/bank@2x.png" alt="logo" />
      </div>
      <div class="paragraph col-8">
        <p class="wait">Get 10% cashback * on 1st order. no code required.</p>
        <p class="wait2">* up to ₹ 100 on minimum order of ₹ 249.</p>
      </div>
    </div>
  </div>
  <Navbar />
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
/*.logobox {
  margin-right: ;

}*/
.wait {
  font-family: "roboto";
  font-size: 14px;
  top: 83px;
  left: 123px;
  width: 100%;
  height: 38px;
  text-align: left;
  letter-spacing: -0.14px;
  opacity: 1;
}
.wait2 {
  font-family: "roboto";
  top: 132px;
  left: 126px;
  width: 179px;
  height: 13px;
  text-align: left;
  font: normal normal medium 10px/13px Roboto;
  letter-spacing: -0.1px;
  color: #1a1824;
  opacity: 1;
}
.Offers {
  margin-top: 10vh;
  top: 16px;
  left: 30px;
  width: 83px;
  height: 39px;
  text-align: left;
  font: normal normal bold 2rem Roboto;
  letter-spacing: -0.3px;
  color: #1a1824;
  opacity: 1;
  margin-left: 5%;
}

.rowheight {
  height: 100%;
  top: 70px;
  left: 12px;
  width: 105%;
  height: 150px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 16px;
  opacity: 1;
  margin-left: 0;
  display: flex;
  flex-wrap: nowrap;
}
.paragraph {
  margin-top: 25px;
  width: 100%;
}
@media (min-width: 300px) {
  .Offers {
    margin-top: 5%;
  }
}
@media (min-width: 300px) {
  .logobox {
    width: 130px;
    height: fit-content;
    margin-top: 5px;
  }
}
@media (min-width: 702px) {
  .logobox {
    width: 160px;
    height: fit-content;
  }
}
@media (min-width: 992px) {
  .logobox {
    width: 160px;
    height: fit-content;
  }
}

@media (min-width: 1200px) {
  .logobox {
    width: 160px;
    height: fit-content;
  }
}
</style>
