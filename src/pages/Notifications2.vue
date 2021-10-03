<template>
  <div class="container">
    <h1 class="offers">
      <button class="btn left-arrow" style="padding-left: 0" v-on:click="goBack()">
        <i class="fas fa-arrow-left" style="font-size: 25px"></i>
      </button>
    </h1>
    <h1 class="offers">Notifications</h1>
    <div class="row">
      <div class="notibox col text-center">
        <div class="card w-90">
          Dinesmart is now available at xxxxxxx
        </div>

        <div class="card w-90">
          Offer/Coupon details
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
  height: 80px;
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
</style>
