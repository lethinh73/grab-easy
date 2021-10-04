<template>
  <div class="container">
    <h1 class="offers">Offers</h1>
    <div class="row">
      <div class="notibox col text-center ">
        <div class="card w-90">
          <div class="row"><div class="col-3">  <img class="logo" src="../images/bank@2x.png" alt="logo" /> </div>
      <div class="col-8">
         
      Get 10% cashback * on 1st
          order. no code required.
          <p class="smaller">* up to ₹ 100 on minimum order of ₹ 249.</p>
          </div>
        </div>
      </div>
    </div>
    </div>
    <div class="nav">
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

.notibox {
  width: 100%;
  height: 100%;
  position: relative;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
}

.card {
  position: relative;
  border-radius: 16px;
  box-shadow: 0px 3px 6px #00000029;
  height: fit-content;
  padding: 10px;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  margin-bottom: 30px;
  font-size: 16px;
}

.nav {
  position: absolute;
  width: 100%;
  overflow: hidden;
  bottom: 0;
  left: 0;
}
.logo {
  width: 100%;
  
}
.smaller{text-align: left;
font: normal normal medium 10px/13px Roboto;
font-size: 10px;
letter-spacing: -0.1px;
color: #1A1824;
opacity: 1;
margin-top: 4%;}
</style>
