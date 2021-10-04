<template>
  <div class="container">
    <h1 class="greeting">My order</h1>
    <hr />
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
  width: 100%;
  max-width: 420px;
  height: 100%;
}

.greeting {
  position: relative;
  top: 20px;
  left: 20px;
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
  left: 0;
  bottom: 0;
  overflow: hidden;
  padding: 0;
}
</style>
